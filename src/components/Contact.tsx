import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is handled by Web3Forms
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative people. Let's bring your
                ideas to life!
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: 'danilsidorov8625@gmail.com' },
                { icon: Phone, text: '+1 (732) 856-4305' },
                { icon: MapPin, text: 'NJ, USA' },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 text-gray-300">
                    <Icon className="w-6 h-6 text-blue-400" />
                    <span className="text-lg">{contact.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, url: 'https://github.com/DanilSidorov8625' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/danil-sidorov-844109217/' },
                { icon: Twitter, url: 'https://x.com/dvs8625' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  >
                    <Icon className="w-6 h-6 text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <form
            className="space-y-6"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value="ce487f31-6c51-45c3-8534-53346abcc8aa" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            {[
              { name: 'name', type: 'text', label: 'Your Name' },
              { name: 'email', type: 'email', label: 'Your Email' },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/30 backdrop-blur-sm border-2 border-gray-600/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:bg-gray-700/60 transition-all duration-300 peer hover:border-gray-500 hover:bg-gray-700/40 shadow-lg"
                  placeholder=" "
                />
                <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-medium bg-gradient-to-r from-gray-800 to-gray-800 px-2 rounded">
                  {field.label}
                </label>
              </div>
            ))}
            
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-700/30 backdrop-blur-sm border-2 border-gray-600/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:bg-gray-700/60 transition-all duration-300 peer resize-none hover:border-gray-500 hover:bg-gray-700/40 shadow-lg"
                placeholder=" "
              />
              <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-medium bg-gradient-to-r from-gray-800 to-gray-800 px-2 rounded">
                Your Message
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-3 font-medium text-lg shadow-lg"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};