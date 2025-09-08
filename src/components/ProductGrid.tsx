import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';
import toast from 'react-hot-toast';

interface ProductGridProps {
  selectedCategory: string | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*');

      if (categoriesError) throw categoriesError;
      setCategories(categoriesData || []);

      // Fetch products
      let query = supabase.from('products').select('*').order('name');
      
      if (selectedCategory) {
        query = query.eq('category_id', selectedCategory);
      }

      const { data: productsData, error: productsError } = await query;

      if (productsError) throw productsError;
      setProducts(productsData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'Unknown Category';
  };

  if (loading) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600">No products found in this category. Please try another category.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryName={getCategoryName(product.category_id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;