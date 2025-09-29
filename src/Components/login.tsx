import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import Notiflix from "notiflix";
import createAxiosClient, { setToken } from "../hooks/axiosClient";
import { useAuth } from "../context/Authcontext"; // Add this import

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
  const { login } = useAuth(); // Add this line

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      setLoading(true);
      // Clear any existing tokens before login attempt
      const res = await apiClient.post("/login", {
        email: data.email,
        password: data.password,
      });
      const { token, userRole, fullName, _id, id } = res.data.user;

      // Save token & role (keep your existing localStorage for backward compatibility)
      setToken(token);
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("fullName", fullName);

      // ✅ IMPORTANT: Update AuthContext with user data
      login(token, {
        _id: _id || id || res.data.user.userId, // Handle different ID field names
        email: data.email, // Use the email from form
        fullName: fullName,
        role: userRole,
        userRole: userRole,
        username: fullName
      });

      console.log("✅ AuthContext updated with user data");

      // Role check
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden bg-white rounded-lg shadow-lg md:grid-cols-2">
        {/* Left side */}
        <div className="flex flex-col justify-center p-8 bg-yellow-400">
          <h2 className="mb-4 text-3xl font-bold text-black">Login</h2>
          <p className="text-black">
            Get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Enter Username/Email address"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-600 right-3 top-2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 font-semibold text-yellow-400 transition bg-black rounded hover:bg-gray-900 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "LOG IN"}
            </button>

            <p className="mt-4 text-sm text-center">
              If you don't have an account?{" "}
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
}

export default Login;