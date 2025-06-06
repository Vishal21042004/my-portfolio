
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-medium mb-6">Vishal Kadalagi</h2>
          
          <p className="text-muted-foreground mb-6">
            Engineering Student | Developer | Tech Explorer
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/Vishal21042004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vishal-kadalagi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Vishal Kadalagi. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
