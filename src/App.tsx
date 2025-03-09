import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, User, Menu, X, Plus, Filter } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { Product } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      price: 1299,
      category: 'Outerwear',
      size: 'M',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      seller: 'Emma S.',
    },
    {
      id: 2,
      title: 'Casual White T-Shirt',
      price: 399,
      category: 'Tops',
      size: 'L',
      condition: 'Like New',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      seller: 'Mike T.',
    },
    {
      id: 3,
      title: 'Black Formal Pants',
      price: 799,
      category: 'Bottoms',
      size: '32',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      seller: 'Sarah K.',
    },
    {
      id: 4,
      title: 'Summer Floral Dress',
      price: 899,
      category: 'Dresses',
      size: 'S',
      condition: 'Excellent',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      seller: 'Jessica M.',
    },
    {
      id: 5,
      title: 'Wool Winter Sweater',
      price: 1099,
      category: 'Tops',
      size: 'XL',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      seller: 'David R.',
    },
    {
      id: 6,
      title: 'Leather Boots',
      price: 1799,
      category: 'Footwear',
      size: '40',
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1520219306100-ec69c7b85d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      seller: 'Alex P.',
    },
  ];

  const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Footwear', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Revive Your Style, <span className="text-yellow-300">Save Your Wallet</span></h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Discover pre-loved fashion treasures at a fraction of the original price</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition transform hover:-translate-y-1 shadow-lg">
              Start Shopping
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition transform hover:-translate-y-1">
              Sell Your Items
            </button>
          </div>
        </div>
      </div>
      
      {/* Featured Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
            <a href="#" className="block p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Women's</h3>
              <p className="text-sm opacity-80">Find your style</p>
            </a>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
            <a href="#" className="block p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Men's</h3>
              <p className="text-sm opacity-80">Classic to trendy</p>
            </a>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
            <a href="#" className="block p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Kids'</h3>
              <p className="text-sm opacity-80">Grow in style</p>
            </a>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
            <a href="#" className="block p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Accessories</h3>
              <p className="text-sm opacity-80">Complete your look</p>
            </a>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-100 text-indigo-700 rounded-lg md:w-auto hover:bg-indigo-200 transition"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>
        
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-indigo-100">
            <h3 className="font-semibold mb-4 text-gray-800">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm transition ${
                    selectedCategory === category 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Products Grid */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Items</h2>
          <div className="text-sm text-gray-500">
            Showing {filteredProducts.length} items
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-4">
              <Search size={48} className="mx-auto opacity-50" />
            </div>
            <p className="text-gray-600 text-lg mb-4">No items found matching your criteria.</p>
            <button 
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-indigo-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold text-xl">R</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rahul M.</h4>
                  <p className="text-sm text-gray-500">Delhi</p>
                </div>
              </div>
              <p className="text-gray-600">"I've saved over ₹15,000 buying pre-loved clothes here. The quality is amazing and the process is so simple!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-xl">P</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Priya S.</h4>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600">"As a seller, I've found a new home for clothes I no longer wear and made extra money. The platform is user-friendly and secure."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold text-xl">A</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Arjun K.</h4>
                  <p className="text-sm text-gray-500">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600">"I love that I'm reducing waste while finding unique pieces. The variety is incredible and prices are unbeatable!"</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-110">
        <Plus size={24} />
      </button>
      
      <Footer />
    </div>
  );
}

export default App;