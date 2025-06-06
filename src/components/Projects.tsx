
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart College Bus Tracking System',
      description: 'Real-time GPS tracking of college buses for students and staff.',
      tech: ['Firebase', 'Flutter', 'GPS'],
      links: {
        github: 'https://github.com/Vishal21042004/Smart_College_Bus_Tracking_System-TrackItRide-',
        live: '#'
      }
    },
    {
      title: 'Voice-Enabled Chat App',
      description: 'A web chat app with integrated speech-to-text for accessibility.',
      tech: ['JavaScript', 'Web Speech API', 'Firebase'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Virtual Travel Experience',
      description: 'VR-based global travel simulation with immersive 360° views.',
      tech: ['Three.js', 'WebVR', 'JavaScript'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Smart Exam Seat Allocator',
      description: 'AI/ML-based seating system that automates placement across halls.',
      tech: ['Python', 'AI/ML', 'MySQL', 'IOT'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Cloud based File Encryption and Decryption',
      description: 'Cloud-based solution for secure file encryption and decryption.',
      tech: ['html', 'php', 'Cryptography'],
      links: {
        github: 'https://github.com/Vishal21042004/Simple_File_Encryptor_and_Decrypter',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="pt-16 -mt-16 reveal">
      <h2 className="section-heading text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="card hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-heading font-medium mb-3">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-4 flex-grow">
              {project.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="chip bg-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 mt-4">
                <a 
                  href={project.links.github} 
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm border border-border rounded hover:bg-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.links.live} 
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm border border-border rounded hover:bg-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a 
          href="https://github.com/Vishal21042004" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary hover:bg-secondary/70 rounded-md transition-colors"
        >
          <Github size={18} />
          <span>View More on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
