import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-4xl font-bold text-white mb-2">SJP</div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Premium Quality<br />
              Food Trays
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Discover our extensive collection of high-quality trays, perfect for sweets, 
              dry fruits, and more. We offer customized designs and bulk production to 
              meet your business needs.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={scrollToProducts}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Browse Our Products
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;