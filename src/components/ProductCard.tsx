import React, { useState } from 'react';
import { Plus, Minus, Package2, Ruler } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  categoryName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, categoryName }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="p-8">
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm px-4 py-2 rounded-full font-semibold">
            {categoryName}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-gray-600">
            <Package2 className="w-5 h-5 text-blue-600" />
            <span className="text-sm">
              <span className="font-semibold text-gray-800">SKU:</span> {product.sku}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Ruler className="w-5 h-5 text-blue-600" />
            <span className="text-sm">
              <span className="font-semibold text-gray-800">Size:</span> {product.size}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            
            <span className="font-bold text-xl min-w-[3rem] text-center text-gray-900">
              {quantity}
            </span>
            
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;