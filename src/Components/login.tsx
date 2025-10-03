import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import Notiflix from "notiflix";
import createAxiosClient, { setToken } from "../hooks/axiosClient";
import { useAuth } from "../context/Authcontext";

interface LoginFormInputs {
  email: string;
  password: string;
}

const apiClient = createAxiosClient();

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const { login } = useAuth();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      setLoading(true);
      const res = await apiClient.post("/users/login", {
        email: data.email,
        password: data.password,
      });
      const { token, userRole, fullName, _id, id } = res.data.user;

      setToken(token);
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("fullName", fullName);

      login(token, {
        _id: _id || id || res.data.user.userId,
        email: data.email,
        fullName,
        role: userRole,
        userRole,
        username: fullName,
      });

      if (userRole === "admin") {
        Notiflix.Notify.success("Login successful as Admin!");
        navigate("/dashboard");
      } else {
        Notiflix.Notify.success("Login successful as General User!");
        navigate("/");
      }
    } catch (err: any) {
      console.error("❌ Login error:", err);
      Notiflix.Notify.failure(
        err.response?.data?.message || "Login failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-40">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden bg-white rounded-lg shadow-lg md:grid-cols-2">
        {/* Left side */}
        <div className="flex flex-col justify-center p-6 text-center bg-yellow-400 md:text-left md:p-10">
          <h2 className="mb-3 text-3xl font-bold text-black md:text-4xl">
            Login
          </h2>
          <p className="text-sm text-black md:text-base">
            Access your orders, wishlist, and personalized recommendations.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center p-6 md:p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5"
          >
            {/* Email */}
            <input
              type="email"
              placeholder="Enter Username / Email address"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-600 right-3 top-2.5"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember + Forgot Password */}
            <div className="flex flex-col items-start justify-between gap-2 text-sm sm:flex-row sm:items-center">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="font-medium text-yellow-500">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-yellow-500 hover:underline"
              >
                Lost your password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-sm font-semibold text-yellow-400 transition bg-black rounded-md hover:bg-gray-900 disabled:opacity-50 md:text-base"
            >
              {loading ? "Logging in..." : "LOG IN"}
            </button>

            <p className="mt-4 text-xs text-center md:text-sm">
              Don't have an account?{" "}
              <Link
                to="/registration"
                className="font-semibold text-yellow-500 hover:underline"
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
