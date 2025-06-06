
import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-24 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="space-y-6 reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Vishal Kadalagi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Engineering Student | Developer | Tech Explorer
          </p>
          
          <div className="flex justify-center space-x-4 pt-4">
            <a 
              href="https://github.com/Vishal21042004" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vishal-kadalagi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors"
            >
              View projects
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
