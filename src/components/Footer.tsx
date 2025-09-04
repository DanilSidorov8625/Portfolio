import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-400">
            &copy; 2025 Danil. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="w-6 h-6 text-gray-300 hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};