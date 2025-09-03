import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Check, X } from 'lucide-react';

// This is a simple reusable Button component, enhanced with a loading state.
interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', isLoading, disabled, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        px-6 py-3 rounded-full font-semibold transition-all duration-300
        ${isLoading || disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:-translate-y-1'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      `}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

// Mock data for materials, ensuring the app is self-contained.
const materials = [
  { id: 1, name: 'Stainless Steel', description: 'Corrosion-resistant and durable.' },
  { id: 2, name: 'Aluminum', description: 'Lightweight and high strength-to-weight ratio.' },
  { id: 3, name: 'Copper', description: 'Excellent thermal and electrical conductivity.' },
  { id: 4, name: 'Brass', description: 'Malleable and corrosion-resistant.' },
  { id: 5, name: 'Bronze', description: 'Hard and brittle alloy with good wear resistance.' },
];

// Main App component that renders the contact form.
const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    materialInterest: '',
    urgency: '',
    contactMethod: '',
    quantity: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

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

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // This simulates a mailto link submission.
    // In a real-world application, this would be an API call to a backend.
    const subject = encodeURIComponent(
      `Inquiry about ${formData.materialInterest || 'Materials'}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Material of Interest: ${formData.materialInterest}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Project Urgency: ${formData.urgency}\n` +
      `Preferred Contact: ${formData.contactMethod}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:muddappa.mk@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto-close the modal after a few seconds
    setTimeout(() => {
        setIsSubmitted(false);
        // Reset form for a clean slate
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          materialInterest: '',
          urgency: '',
          contactMethod: '',
          quantity: ''
        });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Let's Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We're here to help you with your project needs.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`pl-12 w-full rounded-xl border ${
                    errors.name ? 'border-red-400' : 'border-gray-300'
                  } py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
              {errors.name && <p className="mt-2 text-sm text-red-600 font-medium">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`pl-12 w-full rounded-xl border ${
                    errors.email ? 'border-red-400' : 'border-gray-300'
                  } py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-600 font-medium">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`pl-12 w-full rounded-xl border ${
                    errors.phone ? 'border-red-400' : 'border-gray-300'
                  } py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
              {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone}</p>}
            </div>

            {/* Material Interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Material of Interest</label>
              <select
                name="materialInterest"
                value={formData.materialInterest}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a material (optional)</option>
                {materials.map(mat => (
                  <option key={mat.id} value={mat.name}>{mat.name}</option>
                ))}
              </select>
              {formData.materialInterest && (
                <p className="text-gray-500 mt-2 text-sm">
                  {materials.find(m => m.name === formData.materialInterest)?.description}
                </p>
              )}
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Urgency</label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select urgency (optional)</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact</label>
              <div className="flex gap-4 mt-2">
                {['Email', 'Phone', 'WhatsApp'].map(method => (
                  <label key={method} className="flex items-center gap-2 text-gray-700">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-blue-600 transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity (optional)"
                className="w-full rounded-xl border border-gray-300 py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your project or inquiry..."
                className={`pl-12 w-full rounded-xl border ${
                  errors.message ? 'border-red-400' : 'border-gray-300'
                } py-3 px-4 text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              ></textarea>
            </div>
            {errors.message && <p className="mt-2 text-sm text-red-600 font-medium">{errors.message}</p>}
          </div>

          <div className="flex justify-center">
            <Button type="submit" isLoading={isSubmitting}>
              Send Message
            </Button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100">
            <div className="flex justify-end">
              <button onClick={() => setIsSubmitted(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="text-center mt-4">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-gray-900">Thank You!</h3>
              <div className="mt-3">
                <p className="text-gray-500">
                  Your email client should open shortly. Please send the message from there. We'll be in touch as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
