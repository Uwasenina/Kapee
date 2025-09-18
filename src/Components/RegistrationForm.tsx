import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  accessToken: string;
  userRole: "admin" | "general_user";
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Registration failed");

      const result = await response.json();
      console.log("User registered:", result);

      reset(); // clear form
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 space-y-5 bg-white shadow-lg rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create Account
        </h2>

        {/* Full Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Access Token
        <div>
          <label className="block mb-1 text-sm font-medium">Access Token</label>
          <input
            type="text"
            {...register("accessToken", { required: "Access token is required" })}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.accessToken && (
            <p className="mt-1 text-sm text-red-500">
              {errors.accessToken.message}
            </p>
          )}
        </div> */}

        {/* Role */}
        <div>
          <label className="block mb-1 text-sm font-medium">User Role</label>
          <select
            {...register("userRole", { required: "User role is required" })}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="general_user">General User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.userRole && (
            <p className="mt-1 text-sm text-red-500">{errors.userRole.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 font-semibold text-white transition bg-yellow-600 rounded-lg hover:bg-black-600"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
