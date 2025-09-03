import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Check } from 'lucide-react';
import Button from '../common/Button';
import { materials } from '../../data/materialsData';

const ContactForm: React.FC = () => {
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

    // Prepare mailto link
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

    // Open Gmail / default mail client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
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

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-blue-50 rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Have Questions or Need a Quote? Reach Out Today!
      </h3>

      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6 flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-green-800 font-medium mb-1">Thank you!</h4>
            <p className="text-green-700">
              Your email client should open. Please send your message from there.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`pl-10 w-full rounded-md border ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`pl-10 w-full rounded-md border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className={`pl-10 w-full rounded-md border ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Material Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Material of Interest</label>
            <select
              name="materialInterest"
              value={formData.materialInterest}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a material (optional)</option>
              {materials.map(mat => (
                <option key={mat.id} value={mat.name}>{mat.name}</option>
              ))}
            </select>
            {formData.materialInterest && (
              <p className="text-gray-600 mt-1 text-sm">
                {materials.find(m => m.name === formData.materialInterest)?.description}
              </p>
            )}
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Urgency</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select urgency (optional)</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact</label>
            <div className="flex gap-4 mt-1">
              {['Email', 'Phone', 'WhatsApp'].map(method => (
                <label key={method} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={handleChange}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity (optional)"
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your project or inquiry..."
              className={`pl-10 w-full rounded-md border ${
                errors.message ? 'border-red-300' : 'border-gray-300'
              } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            ></textarea>
          </div>
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="lg" isLoading={isSubmitting} disabled={isSubmitting}>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
