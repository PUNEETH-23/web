import { User } from '../types';

// Mock user data for admin login
export const users: User[] = [
  {
    id: '1',
    username: 'admin',
    role: 'admin'
  }
];

// In a real application, you would use a secure password hashing method
// This is just for demonstration purposes
export const checkCredentials = (username: string, password: string): User | null => {
  // In a real app, NEVER store passwords in plain text
  // This is just for demonstration
  if (username === 'admin' && password === 'PUNEETHstonecrushers') {
    return users.find(user => user.username === username) || null;
  }
  return null;
};