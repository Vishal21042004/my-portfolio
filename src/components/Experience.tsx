
import React from 'react';
import { Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'ML Research Presentation',
      organization: 'PEIS 2025, NIT Uttarakhand',
      description: 'Presented research on ML-based wildlife poaching detection systems',
      period: 'March 2025'
    },
    {
      title: 'Hackathon Participation',
      organization: 'Bangalore TechFest',
      description: 'Developed an application during 24-hour intensive hackathon',
      period: 'December 2024'
    },
    {
      title: 'Student Team Lead',
      organization: 'College Projects & Events',
      description: 'Led multiple student project teams and coordinated tech events',
      period: '2023 - Present'
    }
  ];

  return (
    <section id="experience" className="pt-16 -mt-16 reveal">
      <h2 className="section-heading text-center mb-12">Experience & Activities</h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={exp.title} 
            className="card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/70"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4">
                <p className="font-medium text-primary/80">{exp.period}</p>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-lg font-heading font-medium">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{exp.organization}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block card bg-secondary/30">
          <div className="flex items-center justify-center space-x-3">
            <Award size={20} className="text-primary/80" />
            <span className="font-medium">Always seeking new opportunities to learn and grow</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
