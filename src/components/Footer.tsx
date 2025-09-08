import React from 'react';
import { Phone, Mail, MapPin, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  SJP
                </h3>
                <p className="text-sm text-gray-400 font-medium">VARIANT ENTERPRISES</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your trusted partner for premium quality trays designed for sweets, dry fruits, and various food packaging needs.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-white">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 87662 70470</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@sjpvariant.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-white">Our Specialties</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Premium Sweet Trays</li>
              <li>• Dry Fruit Packaging</li>
              <li>• Custom Food Containers</li>
              <li>• Bulk Orders Available</li>
              <li>• Quality Guaranteed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SJP Variant Enterprises. All rights reserved. | Crafted with care for quality packaging solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;