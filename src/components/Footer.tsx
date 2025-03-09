import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">ReWear</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Give your clothes a second life while helping the environment and your wallet. Join our community of conscious fashion lovers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">All Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Men's Clothing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Women's Clothing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Kids' Clothing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Sell</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Start Selling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Seller Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Seller Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ReWear. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;