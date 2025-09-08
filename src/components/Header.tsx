import React, { useState } from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartModal from './CartModal';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    SJP
                  </div>
                  <div className="text-xs text-gray-500 font-medium tracking-wide">
                    VARIANT ENTERPRISES
                  </div>
                </div>
              </div>
              <div className="hidden md:block ml-8 text-sm text-gray-600 font-medium">
                Premium Quality Trays for Sweets, Dry Fruits & More
              </div>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-xl group"
            >
              <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;