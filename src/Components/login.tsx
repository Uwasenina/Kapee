import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, X} from "lucide-react";

function Login({ onClose }: {onClose: () => void}){
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0 ">
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
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Username/Email address"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="relative">
              <input
                type={showPassword? "text": "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={()=> setShowPassword(!showPassword)}
                className="absolute text-gray-600 right-3 top-2"
              >
              {showPassword? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

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

            <button
              type="submit"
              className="w-full py-2 font-semibold text-yellow-400 transition bg-black rounded hover:bg-gray-900"
            >
              LOG IN
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
};

export default Login;
