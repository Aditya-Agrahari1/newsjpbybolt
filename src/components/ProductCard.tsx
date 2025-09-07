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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {categoryName}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <p><span className="font-medium">SKU:</span> {product.sku}</p>
          <p><span className="font-medium">Size:</span> {product.size}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <span className="font-medium text-lg min-w-[2rem] text-center">
              {quantity}
            </span>
            
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;