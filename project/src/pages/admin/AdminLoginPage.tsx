import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container';
import LoginForm from '../../components/admin/LoginForm';
import { useAuth } from '../../hooks/useAuth';

const AdminLoginPage: React.FC = () => {
  const { user } = useAuth();
  
  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/admin/dashboard" />;
  }
  
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <Container maxWidth="md">
          <LoginForm />
        </Container>
      </div>
    </Layout>
  );
};

export default AdminLoginPage;