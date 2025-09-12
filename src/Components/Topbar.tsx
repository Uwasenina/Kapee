import React from "react";
import { FolderOpen, Copy } from "lucide-react";
import { Link } from "react-router-dom";


export const Topbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between px-6 py-2 text-sm text-black bg-yellow-400">
            <div className="flex-space-x-4">
                <select className="text-black bg-yellow-400 border-none">
                    <option>ENGLISH</option>
                    <option>Française</option>
                    <option>Deutsch</option>
                </select>
                <select className="text-black bg-yellow-400 border-none">
                    <option>$ DOLLAR</option>
                    <option>₹ RUPEE(INR)</option>
                    <option>£ Pound</option>
                    <option>€ Euro</option>
                </select>
            </div>
            <div className="flex space-x-4">
                <span>WELCOME TO OUR STORE!</span>
                <a href="#" className="hover:underline">
                    <FolderOpen size={15} className="inline mr-1" />
                    BLOG
                </a>
                <a href="#" className="hover:underline">
                    <Copy size={15} className="inline mr-1" />
                    FAQ
                </a>

                <Link to="/Contact" className="hover:underline">
                CONTACT US
                </Link>
                
                </div>

        </div>
    );
}
export default Topbar;