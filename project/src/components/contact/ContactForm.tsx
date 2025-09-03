import React from 'react';
import { Mail } from 'lucide-react';

const App: React.FC = () => {
  const handleRedirect = () => {
    // Construct the URL to redirect to Gmail with pre-filled fields.
    const subject = encodeURIComponent('General Inquiry');
    const body = encodeURIComponent('Hello, I would like to get in touch with you.');
    
    // The recipient email address.
    const toEmail = 'muddappa.mk@gmail.com';
    
    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${toEmail}&su=${subject}&body=${body}`;
    
    // Redirect to the constructed URL.
    window.location.href = gmailLink;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full text-white">
            <Mail size={48} />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Click the button below to send us an email directly via Gmail.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Open Gmail
        </button>
      </div>
    </div>
  );
};

export default App;
