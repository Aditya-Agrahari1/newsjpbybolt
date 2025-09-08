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
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">SJP</div>
              </div>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
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