import React from 'react';
import { Phone, Mail, MapPin, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold">SJP</div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              SJP Variant Enterprises is your trusted partner for premium quality trays 
              designed for sweets, dry fruits, and various food packaging needs. We deliver 
              excellence in every product.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">+91 87662 70470</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">info@sjpvariant.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">India</span>
              </div>
            </div>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Specialties</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• Custom Designs</li>
              <li>• Bulk Production</li>
              <li>• Quality Assured</li>
              <li>• Premium Sweet Trays</li>
              <li>• Dry Fruit Packaging</li>
              <li>• Food Grade Materials</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 SJP Variant Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;