import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">SJP Variant Enterprises</h3>
          <div className="space-y-2 text-gray-300">
            <p>High-Quality Trays for Sweets, Dry Fruits, and More</p>
            <p>Contact: +91 87662 70470</p>
            <p className="text-sm">© 2025 SJP Variant Enterprises. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;