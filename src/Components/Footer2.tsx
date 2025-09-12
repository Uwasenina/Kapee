
import React from "react";
import image from "../assets/visa.png";
const Footer2: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white border-t md:flex-row">
      {/* Left side - copyright */}
      <p className="text-sm text-gray-600">
        © 2025 by <span className="font-medium">PressLayouts</span>. All Rights Reserved.
      </p>

      {/* Right side - payment icons */}
      <div className="flex mt-3 space-x-3 md:mt-0">
        <img src={image} alt="Visa" className="h-6" />
        
      </div>
    </footer>
  );
};

export default Footer2;
