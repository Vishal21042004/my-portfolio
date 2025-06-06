import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-16 -mt-16 reveal">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-heading mb-12">About Me</h2>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-justify">
            Hi, I'm Vishal — a passionate learner and problem-solver exploring the world of tech and development. I love building real-world solutions and diving into technologies that push boundaries. Whether it's web apps, IoT integrations, or AI-driven platforms, I enjoy turning ideas into intuitive, useful experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">6+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-muted-foreground">Certifications</p>
            </div>
          </div>
          
          <div className="mt-12 bg-secondary/50 border border-border rounded-lg p-6">
            <h3 className="font-heading font-medium text-lg mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">vishalkadalagi2004@gmail.com</p>
              </div>
              <div>
                <p className="text-muted-foreground">College Email</p>
                <p className="font-medium">02fe23bcs431@kletech.ac.in</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="font-medium">+91 6360430056</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">Belagavi, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
