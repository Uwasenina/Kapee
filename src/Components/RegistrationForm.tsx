import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { X, Eye, EyeOff } from "lucide-react";

function RegisterModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  interface FormData {
    fullName: string; 
    email: string;
    password: string;
    confirmPassword: string;
    useRole?: string;
  }

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onRegister = async (data: FormData) => {
    try {
      if (data.password !== data.confirmPassword) {
        Notify.failure("Passwords do not match!");
        return;
      }

      const response = await axios.post("http://localhost:3000/api/userRegistration", {
        fullName: data.fullName, 
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        userRole: data.useRole || "general_user",
      });

      Notify.success(response.data.message || "Registration successful!");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      reset();
      handleClose();
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      Notify.failure(error.response?.data?.message || "Registration failed.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[700px] rounded shadow-lg flex relative">
       
        <div className="flex flex-col justify-center w-1/3 p-6 text-black bg-gray-400">
          <h2 className="mb-4 text-2xl font-bold">REGISTER HERE</h2>
          <p className="text-sm leading-relaxed">
            Create an account and get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>
        <div className="relative flex-1 p-8">
          <button
            onClick={handleClose}
            className="absolute text-gray-600 right-4 top-4 hover:text-black"
          >
            <X size={20} />
          </button>

          <form className="space-y-4" onSubmit={handleSubmit(onRegister)}>
          
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("fullName", { required: true })}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("email", { required: true })}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-0 right-0 flex items-center justify-center h-full px-3 text-white bg-gray-800"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400"
                {...register("confirmPassword", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-0 right-0 flex items-center justify-center h-full px-3 text-white bg-gray-800"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <button
                type="submit"
                className="w-full py-2 font-semibold text-yellow-400 transition bg-gray-800 rounded hover:bg-black"
              >
                REGISTER
              </button>

              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-yellow-500">
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