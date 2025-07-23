import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Check } from 'lucide-react';
import Button from '../common/Button';
import { materials } from '../../data/materialsData';
import { addInquiry } from '../../data/inquiryData';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    materialInterest: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add inquiry to our data store
      addInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        materialInterest: formData.materialInterest
      });
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        materialInterest: ''
      });
      
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-blue  rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6 flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-green-800 font-medium mb-1">Thank you for your inquiry!</h4>
            <p className="text-green-700">
              We've received your message and will get back to you as soon as possible.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`pl-10 w-full rounded-md border ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-10 w-full rounded-md border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`pl-10 w-full rounded-md border ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="(555) 123-4567"
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            
            {/* Material Interest */}
            <div>
              <label htmlFor="materialInterest" className="block text-sm font-medium text-gray-700 mb-1">
                Material of Interest
              </label>
              <select
                id="materialInterest"
                name="materialInterest"
                value={formData.materialInterest}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a material (optional)</option>
                {materials.map((material) => (
                  <option key={material.id} value={material.name}>
                    {material.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`pl-10 w-full rounded-md border ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              size="lg"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;