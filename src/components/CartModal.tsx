import React from 'react';
import { X, Minus, Plus, MessageCircle, ShoppingBag, Package2 } from 'lucide-react';
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

    return `Hey, I would like to place an order for the following items:\n\n${itemsList}\n\nThank you!`;
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
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-96">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex-1 pr-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.product.name}</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Package2 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">
                          <span className="font-semibold">SKU:</span> {item.product.sku}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 flex items-center justify-center">📏</span>
                        <span className="text-sm text-gray-600">
                          <span className="font-semibold">Size:</span> {item.product.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-white rounded-xl p-2 border border-gray-200">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    
                      <span className="font-bold text-lg min-w-[3rem] text-center text-gray-900">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-gradient-to-r from-green-50 to-white">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-bold text-lg flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Place Order via WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;