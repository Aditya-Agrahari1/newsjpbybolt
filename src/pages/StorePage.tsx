import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Quality
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Food Trays
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our extensive collection of high-quality trays perfect for sweets, dry fruits, 
          and various food packaging needs. Trusted by businesses across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full">
            <span className="text-yellow-400">⭐</span>
            <span className="font-semibold">Premium Quality</span>
          </div>
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full">
            <span className="text-green-400">✓</span>
            <span className="font-semibold">Bulk Orders Available</span>
          </div>
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full">
            <span className="text-blue-400">🚚</span>
            <span className="font-semibold">Fast Delivery</span>
          </div>
        </div>
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-blue-300" />
        </div>
      </div>
    </div>
  );
};

const StorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default StorePage;