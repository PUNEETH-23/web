import { Inquiry } from '../types';

// Initial empty array for inquiries that will be populated when users submit forms
export const inquiries: Inquiry[] = [];

// Function to add a new inquiry
export const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'read'>): Inquiry => {
  const newInquiry: Inquiry = {
    id: Date.now().toString(),
    ...inquiry,
    createdAt: new Date(),
    read: false
  };
  
  inquiries.push(newInquiry);
  return newInquiry;
};

// Function to mark inquiry as read
export const markInquiryAsRead = (id: string): boolean => {
  const inquiry = inquiries.find(inq => inq.id === id);
  if (inquiry) {
    inquiry.read = true;
    return true;
  }
  return false;
};

// Function to get all inquiries
export const getAllInquiries = (): Inquiry[] => {
  return [...inquiries].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

// Function to get unread inquiries count
export const getUnreadCount = (): number => {
  return inquiries.filter(inq => !inq.read).length;
};