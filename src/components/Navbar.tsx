import React, { useState } from 'react';
import { ShoppingBag, Heart, User, Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">ReWear</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">Shop</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">Sell</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">About</a>
          </div>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
              <User size={18} />
              <span className="text-sm font-medium">Account</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <a href="#" className="py-2 text-gray-600 hover:text-indigo-600 transition font-medium">Home</a>
              <a href="#" className="py-2 text-gray-600 hover:text-indigo-600 transition font-medium">Shop</a>
              <a href="#" className="py-2 text-gray-600 hover:text-indigo-600 transition font-medium">Sell</a>
              <a href="#" className="py-2 text-gray-600 hover:text-indigo-600 transition font-medium">About</a>
            </div>
            <div className="flex space-x-4 mt-4 pt-4 border-t">
              <button className="flex items-center p-2 text-gray-600 hover:text-indigo-600 transition">
                <Heart size={20} />
                <span className="ml-2">Wishlist</span>
                <span className="ml-1 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
              </button>
              <button className="flex items-center p-2 text-gray-600 hover:text-indigo-600 transition">
                <ShoppingCart size={20} />
                <span className="ml-2">Cart</span>
                <span className="ml-1 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;