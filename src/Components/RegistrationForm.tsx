import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { X, Eye, EyeOff } from "lucide-react";
import createAxiosClient from "../hooks/axiosClient";

function RegisterModal() {
  const apiClient = createAxiosClient();
  const [isOpen, setIsOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  interface FormData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    userRole?: string;
  }

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onRegister = async (data: FormData) => {
    try {
      if (data.password !== data.confirmPassword) {
        Notify.failure("Passwords do not match!");
        return;
      }

      const response = await apiClient.post("/users/userRegistration", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      Notify.success(response.data.message || "Registration successful!");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      window.location.href = "/login";

      reset();
      handleClose();
    } catch (error: any) {
      Notify.failure(error.response?.data?.message || "Registration failed.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
      <div className="w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg md:flex">
        {/* Left side (Info) */}
        <div className="flex flex-col justify-center w-full p-6 text-black bg-gray-400 md:w-1/3">
          <h2 className="mb-4 text-2xl font-bold text-center md:text-left">REGISTER HERE</h2>
          <p className="text-sm leading-relaxed text-center md:text-left">
            Create an account and get access to your Orders, Wishlist, and Recommendations.
          </p>
        </div>

        {/* Right side (Form) */}
        <div className="relative flex-1 p-6 sm:p-8 md:p-10">
          <button
            onClick={handleClose}
            className="absolute text-gray-600 right-4 top-4 hover:text-black"
          >
            <X size={20} />
          </button>

          <h2 className="mb-4 text-xl font-semibold text-center md:text-2xl md:text-left">
            Create Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onRegister)}>
            {/* Full Name */}
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
              {...register("fullName", { required: true })}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
              {...register("email", { required: true })}
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-gray-800 rounded-r-md"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
                {...register("confirmPassword", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-gray-800 rounded-r-md"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-3 mt-6">
              <button
                type="submit"
                className="w-full py-2 text-sm font-semibold text-yellow-400 transition bg-gray-800 rounded-md hover:bg-black md:text-base"
              >
                REGISTER
              </button>

              <p className="text-sm text-center text-gray-600 md:text-base">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-yellow-500 hover:underline">
                  Back to login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
