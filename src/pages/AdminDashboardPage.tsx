import React, { useState } from 'react';
import AdminLayout from '../components/admin/AdminLayout';
import ProductManagement from '../components/admin/ProductManagement';
import CategoryManagement from '../components/admin/CategoryManagement';

const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');

  return (
    <AdminLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'products' ? <ProductManagement /> : <CategoryManagement />}
    </AdminLayout>
  );
};

export default AdminDashboardPage;