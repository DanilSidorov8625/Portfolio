import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Creative Developer',
    'Full Stack Engineer',
    'Problem Solver',
    'Code Enthusiast'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[currentIndex].length) {
        setCurrentText(texts[currentIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, texts]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <div className="text-white">Hi, I'm</div>
          <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Danil
          </div>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-12 h-12 flex items-center justify-center">
          <span className="font-light">{currentText}</span>
          <span className="ml-2 animate-pulse text-blue-400">|</span>
        </div>

        <button
          onClick={scrollToProjects}
          className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
        >
          <span className="text-lg font-medium">View My Work</span>
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};