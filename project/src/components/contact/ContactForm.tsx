import React from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const handleRedirect = () => {
    const subject = encodeURIComponent('General Inquiry');
    const body = encodeURIComponent('Hello, I would like to get in touch with you.');
    const toEmail = 'muddappa.mk@gmail.com';
    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${toEmail}&su=${subject}&body=${body}`;
    window.location.href = gmailLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Sparkles className="text-white opacity-10" size={16} />
          </div>
        ))}
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-12 text-center max-w-lg w-full mx-4 transform hover:scale-105 transition-all duration-500">
        {/* Glowing icon container */}
        <div className="flex justify-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-6 rounded-full text-white shadow-2xl">
            <Mail size={56} className="drop-shadow-lg" />
          </div>
        </div>

        {/* Animated title */}
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-4 tracking-tight">
          Let's Connect
        </h1>
        
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 shadow-lg"></div>
        
        <p className="text-white/90 text-xl mb-8 leading-relaxed font-light">
          Ready to start a conversation? Click below to compose your message directly in Gmail.
        </p>

        {/* Enhanced button with multiple effects */}
        <button
          onClick={handleRedirect}
          className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 overflow-hidden"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center space-x-3">
            <Send size={24} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            <span className="tracking-wide">Launch Gmail</span>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
        </button>

        {/* Subtle footer text */}
        <p className="text-white/50 text-sm mt-8 font-light">
          Secure • Direct • Instant
        </p>
      </div>
    </div>
  );
};

export default App;
