import { NavLink } from "react-router-dom";
import { Home, Heart, ShoppingCart, User } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="hidden mt-12 bg-gray-100 border-t md:block">
        <div className="grid grid-cols-1 gap-8 px-6 py-10 mx-auto max-w-7xl md:grid-cols-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">kapee.</h2>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Lorem Ipsum, 2046 Lorem Ipsum</li>
              <li>576-245-2478</li>
              <li>info@kapee.com</li>
              <li>Mon - Fri / 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">INFORMATION</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Store Location</li>
              <li>Contact Us</li>
              <li>Shipping & Delivery</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">OUR SERVICE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Sale</li>
              <li>Customer Service</li>
              <li>Delivery Information</li>
              <li>Payments</li>
              <li>Saved Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">MY ACCOUNT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>My Shop</li>
              <li>My Cart</li>
              <li>Checkout</li>
              <li>My Wishlist</li>
              <li>Tracking Order</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">NEWSLETTER</h3>
            <p className="mb-3 text-sm text-gray-600">
              Subscribe to our mailing list to get the new updates!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full W-[20rem] h-[2rem] text-sm border rounded outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-black h-[2rem] w-[13rem] text-yellow-500 rounded text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="py-4 text-sm text-center text-gray-500 border-t">
          Kapee © 2025 by PressLayouts All Rights Reserved.
        </div>
      </footer>
      <footer className="fixed bottom-0 flex justify-around w-full py-2 text-xs text-gray-600 bg-white border-t md:hidden">
        <NavLink to="/" className="flex flex-col items-center">
          <Home className="w-5 h-5" />
          <span>Shop</span>
        </NavLink>
        <NavLink to="/wishlist" className="flex flex-col items-center">
          <Heart className="w-5 h-5" />
          <span>Wishlist</span>
        </NavLink>
        <NavLink to="/cart" className="flex flex-col items-center">
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
        </NavLink>
        <NavLink to="/account" className="flex flex-col items-center">
          <User className="w-5 h-5" />
          <span>Account</span>
        </NavLink>
      </footer>
    </>
  );
}

export default Footer;