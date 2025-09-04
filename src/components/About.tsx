import React from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Server,
  Layers,
  Zap,
  GitBranch,
  Globe
} from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { icon: Code, label: 'JavaScript' },
    { icon: Layers, label: 'React' },
    { icon: Server, label: 'Node.js' },
    { icon: Palette, label: 'CSS3' },
    { icon: Globe, label: 'HTML5' },
    { icon: Database, label: 'Database' },
    { icon: GitBranch, label: 'Git' },
    { icon: Code, label: 'Python' },
    { icon: Server, label: 'Docker' },
    { icon: Zap, label: 'AWS' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a developer who turns ideas into reliable, efficient code. With a solid grasp of modern web
              technologies and attention to detail, I build digital products that are both practical and
              well-designed.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I focus on creating interactive websites, web applications, and user experiences that are
              responsive, fast, and easy to use.
            </p>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-700/50 p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300 mx-auto" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};