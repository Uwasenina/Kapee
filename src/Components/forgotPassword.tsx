import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Notify } from "notiflix";
import createAxiosClient from "../hooks/axiosClient";

interface FormData {
  email: string;
  otp?: string;
  newPassword?: string;
}

const apiClient = createAxiosClient();

function ForgotPassword() {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [emailForOtp, setEmailForOtp] = useState("");
  const { register, handleSubmit, reset } = useForm<FormData>();
  const navigate = useNavigate();

  const requestOtp = async (data: FormData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/request-reset", {
        email: data.email,
      });
      Notify.success(res.data.message || "OTP sent to your email");
      setEmailForOtp(data.email);
      setStep("verify");
    } catch (error: any) {
      Notify.failure(error.response?.data?.message || "Failed to send OTP");
    }
  };

  const verifyOtp = async (data: FormData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/reset-password", {
        email: emailForOtp,
        otp: data.otp,
        newPassword: data.newPassword,
      });
      Notify.success(res.data.message || "Password reset successful!");
      reset();
      setStep("request");
      navigate("/login");
    } catch (error: any) {
      Notify.failure(error.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg sm:p-8 md:p-10">
        {step === "request" && (
          <>
            <h2 className="mb-4 text-2xl font-bold text-center md:text-3xl">
              Forgot Password
            </h2>
            <p className="mb-6 text-sm text-center text-gray-600 md:text-base">
              Enter your email address to receive an OTP and reset your password.
            </p>

            <form onSubmit={handleSubmit(requestOtp)} className="space-y-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
                {...register("email", { required: true })}
              />
              <button
                type="submit"
                className="w-full py-2 text-sm font-semibold text-white transition bg-yellow-400 rounded-md hover:bg-black md:text-base"
              >
                Send OTP
              </button>
            </form>
          </>
        )}

        {step === "verify" && (
          <>
            <h2 className="mb-4 text-2xl font-bold text-center md:text-3xl">
              Reset Password
            </h2>
            <p className="mb-6 text-sm text-center text-gray-600 md:text-base">
              Enter the OTP sent to{" "}
              <span className="font-semibold break-words">{emailForOtp}</span> and set your new password.
            </p>

            <form onSubmit={handleSubmit(verifyOtp)} className="space-y-5">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
                {...register("otp", { required: true })}
              />
              <input
                type="password"
                placeholder="Enter New Password"
                className="w-full px-4 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 md:text-base"
                {...register("newPassword", { required: true, minLength: 6 })}
              />
              <button
                type="submit"
                className="w-full py-2 text-sm font-semibold text-yellow-400 transition bg-gray-800 rounded-md hover:bg-black md:text-base"
              >
                Reset Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
