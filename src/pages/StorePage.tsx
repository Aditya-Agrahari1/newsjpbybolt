import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const StorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default StorePage;