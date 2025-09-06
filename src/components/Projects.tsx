import React from 'react';
import { ExternalLink, Github, Lock, Clock } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'PEX Dubai Landing Page',
      description: 'Responsive landing page for PEX with analytics funnels and server-side deployment (backend code not included).',
      image: 'https://raw.githubusercontent.com/DanilSidorov8625/PEX-Dubai-Landing-Page/main/Preview-AE.avif',
      liveUrl: 'https://danilsidorov8625.github.io/PEX-Dubai-Landing-Page/',
      codeUrl: 'https://github.com/DanilSidorov8625/PEX-Dubai-Landing-Page',
    },
    {
      title: 'OMI – One Million Images',
      description: 'A collaborative 1,000 × 1,000 image grid built with vanilla JS and Node.js, featuring real-time uploads (Socket.io), Cloudflare R2 storage, and custom logging/caching for maximum performance.',
      image: 'https://github.com/DanilSidorov8625/OMI/raw/main/Preview-OMI.avif',
      liveUrl: 'https://omnaris.xyz/',
      codeUrl: 'https://github.com/DanilSidorov8625/OMI',
    },
    {
      title: 'PowerScan',
      description: 'An AI-powered Powerball ticket scanner that uses GPT-4o to extract numbers from uploaded photos (HEIC/JPEG) or manual entry and instantly check for winning combinations.',
      image: 'https://github.com/DanilSidorov8625/PowerScan/raw/main/Preview-PowerScans.avif', // Replace with actual image if different
      liveUrl: 'https://powerscan.omnaris.xyz/',
      codeUrl: 'https://github.com/DanilSidorov8625/PowerScan',
    },
    {
      title: 'Scans – Warehouse Scanning App',
      description: 'A fast, role-based warehouse scanning platform (Node.js, Express, EJS) handling hundreds of daily scans with CSV/email exports and live analytics, all hosted on a $5/month Linode.',
      image: 'https://github.com/DanilSidorov8625/Scans/raw/main/Preview-Scans.avif',
      liveUrl: 'https://scans.omnaris.xyz/',
      codeUrl: 'https://github.com/DanilSidorov8625/Scans',
    },
    {
      title: 'Contract Work – Legacy PHP System',
      description: 'Ongoing contract role modernizing a custom PHP codebase: refactoring legacy routing, auth, and mail systems, integrating Composer packages, and improving long-term maintainability without breaking existing workflows.',
      image: 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=600',
      isPrivate: true,
    },
    {
      title: 'Contract Work - React Native Expo App',
      description: 'Large-scale mobile app in progress — 40+ screens, 50+ API endpoints, full i18n support, analytics, end-to-end testing, and EAS updates. Built with Expo, Redux, SQLite, PHP, MySQL, targeting production release.',
      image: 'https://images.pexels.com/photos/1181251/pexels-photo-1181251.jpeg?auto=compress&cs=tinysrgb&w=600',
      // liveUrl: 'https://apps.apple.com/app/id0000000000',
      // isPrivateCode: true,
      codeUrl: '',
      isPrivateCode: true,
      inProgress: true,
    },
    {
      title: 'VibeSearch',
      description: 'In-progress semantic search engine that scrapes, vectorizes, and indexes fanfiction and media content using rented H100 GPUs. Built with LibSQL, Deno, and the AHA stack (Astro, HTMX, Alpine.js) for a lightweight and reactive frontend.',
      image: 'https://images.pexels.com/photos/7054785/pexels-photo-7054785.jpeg?auto=compress&cs=tinysrgb&w=600',
      inProgress: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    {project.liveUrl && !project.isPrivate && !project.inProgress && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.codeUrl && !project.isPrivateCode && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <div className="flex items-center space-x-2 bg-gray-600/50 text-gray-300 px-3 py-2 rounded-lg text-sm">
                        <Lock className="w-4 h-4" />
                        <span>Private</span>
                      </div>
                    )}
                    {project.inProgress && (
                      <div className="flex items-center space-x-2 bg-orange-500/50 text-orange-200 px-3 py-2 rounded-lg text-sm">
                        <Clock className="w-4 h-4" />
                        <span>In Progress</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};