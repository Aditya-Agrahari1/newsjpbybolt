import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Category } from '../types';
import toast from 'react-hot-toast';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-8 border-b border-gray-200" id="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;