import React, { useState } from 'react';
import { User, Lock, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(username, password);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
        <p className="text-gray-600 mt-2">
          Please enter your credentials to access the admin area
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          fullWidth 
          size="lg"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Log In
        </Button>
      </form>
      
      {showHelp ? (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h4 className="font-medium text-blue-700 mb-2">Demo Credentials</h4>
          <p className="text-sm text-blue-800 mb-1">Username: <span className="font-mono">admin</span></p>
          <p className="text-sm text-blue-800">Password: <span className="font-mono">admin123</span></p>
          <p className="text-xs text-blue-600 mt-2">
            Note: These credentials are for demonstration purposes only.
          </p>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <button 
            type="button"
            onClick={() => setShowHelp(true)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Need demo credentials?
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;