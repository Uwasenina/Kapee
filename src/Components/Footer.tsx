import React from "react";
import Footer2 from "./Footer2";

const Footer: React.FC = () => {
  return (
    <div className="px-6 py-8 bg-gray-400"> {/* ✅ Dark Blue Background */}
      <div className="container grid grid-cols-1 gap-6 mx-auto text-white md:grid-cols-4">
        
        {/* Information Section */}
        <div>
          <h3 className="mb-2 text-lg font-bold">INFORMATION</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400">Store Location</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-400">Latest News</a></li>
            <li><a href="#" className="hover:text-yellow-400">Our Sitemap</a></li>
          </ul>
        </div>

        {/* Our Service Section */}
        <div>
          <h3 className="mb-2 text-lg font-bold">OUR SERVICE</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms of Sale</a></li>
            <li><a href="#" className="hover:text-yellow-400">Customer Service</a></li>
            <li><a href="#" className="hover:text-yellow-400">Payments</a></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="mb-2 text-lg font-bold">MY ACCOUNT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400">My Account</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Shop</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Cart</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Wishlist</a></li>
            <li><a href="#" className="hover:text-yellow-400">Tracking Order</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="mb-2 text-lg font-bold">NEWSLETTER</h3>
          <p className="mb-4">Subscribe to our mailing list to get the new updates!</p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 mb-2 text-black border border-gray-300 rounded"
          />
          <button className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6 text-center text-brightgray-400">
        <p>Lorim ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>576-245-2478 | info@kapee.com</p>
        <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-4 space-x-4 text-white">
        <a href="#" className="hover:text-yellow-400">Facebook</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
        <a href="#" className="hover:text-yellow-400">Instagram</a>
        <a href="#" className="hover:text-yellow-400">LinkedIn</a>
      </div>
      <Footer2/>
    </div>
  );
};

export default Footer;
