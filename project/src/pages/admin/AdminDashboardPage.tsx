import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container';
import InquiryList from '../../components/admin/InquiryList';
import Button from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';
import { getAllInquiries, getUnreadCount, Inquiry } from '../../data/inquiryData';

const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const refreshData = () => {
    setIsRefreshing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const allInquiries = getAllInquiries();
      setInquiries(allInquiries);
      setUnreadCount(getUnreadCount());
      setIsRefreshing(false);
    }, 500);
  };
  
  // Load data on component mount
  useEffect(() => {
    refreshData();
  }, []);

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/admin/login" />;
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 pt-24 pb-12 min-h-screen">
        <Container maxWidth="xl">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-600 mt-1">
                  Manage customer inquiries and website content
                </p>
              </div>
              <Button 
                variant="outline"
                onClick={refreshData}
                isLoading={isRefreshing}
                className="inline-flex items-center"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Inquiries"
              value={inquiries.length}
              color="blue"
            />
            <StatCard
              title="Unread Inquiries"
              value={unreadCount}
              color="green"
            />
            <StatCard
              title="This Month"
              value={inquiries.filter(inq => 
                inq.createdAt.getMonth() === new Date().getMonth() &&
                inq.createdAt.getFullYear() === new Date().getFullYear()
              ).length}
              color="purple"
            />
          </div>
          
          {/* Inquiries Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Customer Inquiries</h2>
            <InquiryList inquiries={inquiries} onRefresh={refreshData} />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'purple' | 'red';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    red: 'bg-red-50 text-red-700 border-red-200'
  };
  
  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default AdminDashboardPage;