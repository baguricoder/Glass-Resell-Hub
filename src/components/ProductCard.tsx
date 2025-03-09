import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition">
          <Heart size={18} className="text-gray-500 hover:text-red-500" />
        </button>
        <div className="absolute bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 text-sm font-medium rounded-tr-lg">
          {product.condition}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 truncate text-gray-800">{product.title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-indigo-600 font-bold text-xl">₹{product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Size: {product.size}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>Sold by {product.seller}</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;