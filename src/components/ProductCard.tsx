import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {categoryName}
          </span>
        </div>
        
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-4">{product.name}</h3>
        
        {/* Product Details */}
        <div className="space-y-2 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">SKU:</span> {product.sku}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">Size:</span> {product.size}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 hover:bg-gray-50 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            
            <span className="px-4 py-2 font-medium text-gray-900 min-w-[3rem] text-center">
              {quantity}
            </span>
            
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;