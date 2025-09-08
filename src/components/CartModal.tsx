import React from 'react';
import { X, Minus, Plus, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    const itemsList = items
      .map(item => `- ${item.product.name} - Quantity: ${item.quantity}`)
      .join('\n');

    return `Hello, I would like to place an order for the following items:\n\n${itemsList}\n\nThank you!`;
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918766270470?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.product.name}</h3>
                    <div className="text-sm text-gray-600">
                      <div>SKU: {item.product.sku}</div>
                      <div>Size: {item.product.size}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      
                      <span className="px-4 py-2 font-medium text-gray-900 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Place Order via WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;