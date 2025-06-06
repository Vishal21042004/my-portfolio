
import React from 'react';

const Education = () => {
  const educationData = [
    {
      level: 'Bachelor of Engineering (CSE)',
      school: 'KLE Dr. M. S. Sheshgiri College of Engineering & Technology, Belagavi',
      period: '2023 - Present',
      description: 'Focused on software development, systems, and data-driven projects',
    },
    {
      level: 'Diploma in Computer Science',
      school: 'Motichand Lengade Bharatesh Polytechnic, Belagavi',
      period: '2021 - 2023',
      description: 'Hands-on programming experience and early project work',
    },
    {
      level: '10th Grade (CBSE)',
      school: 'Shree Shankarling Model School, Hukkeri, Belagavi',
      period: '2010 - 2020',
      description: 'Foundation in computer awareness and logical thinking',
    }
  ];

  return (
    <section id="education" className="pt-16 -mt-16 reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center mb-12">Education</h2>
        
        <div className="relative border-l border-border ml-6 md:ml-0">
          {educationData.map((item, index) => (
            <div key={index} className="mb-12 ml-8 md:ml-0">
              <div className="md:grid md:grid-cols-7 items-start">
                {/* Timeline circle */}
                <div className="absolute -left-3 md:static md:col-span-1 md:flex md:justify-center">
                  <div className="w-6 h-6 rounded-full border-4 border-primary/70 bg-background"></div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-6 md:pl-8">
                  <div className="card hover:shadow-md transition-all duration-300 bg-secondary/20">
                    <span className="inline-block px-3 py-1 text-sm border border-primary/30 rounded-full text-primary/90 mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-heading font-medium mb-2">{item.level}</h3>
                    <p className="text-muted-foreground mb-2">{item.school}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
