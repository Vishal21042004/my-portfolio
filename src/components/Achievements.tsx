
import React from 'react';
import { Trophy, Award, Users, Target } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      title: 'Intro to Machine Learning',
      issuer: 'NPTEL',
      date: 'Sep 2024',
      color: 'cyber-blue'
    },
    {
      title: 'DevOps Foundation',
      issuer: 'Infosys',
      date: 'Nov 2024',
      color: 'cyber-purple'
    },
    {
      title: 'Python GUI with Tkinter',
      issuer: 'Certificate Course',
      date: 'Jan 2025',
      color: 'cyber-pink'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Research Paper Presentation',
      description: 'Presented ML-based wildlife poaching detection paper at PEIS 2025, NIT Uttarakhand',
      color: 'cyber-blue'
    },
    {
      icon: Target,
      title: '24hr Hackathon Achievement',
      description: 'Developed a real-time application during Bangalore TechFest hackathon',
      color: 'cyber-purple'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led multiple student project teams and volunteered for college cultural events',
      color: 'cyber-pink'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-blue mb-12 text-center neon-text">
          &gt; ACHIEVEMENTS_CERTS
        </h2>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-green mb-8 text-center neon-text">
            &gt; CERTIFICATIONS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="cyber-border p-6 hover:scale-105 transition-transform duration-300 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-${cert.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Award className={`text-${cert.color}`} size={24} />
                </div>
                
                <h4 className={`text-lg font-orbitron font-bold text-${cert.color} mb-2 neon-text`}>
                  {cert.title}
                </h4>
                
                <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                <p className={`text-${cert.color} text-sm font-bold`}>{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-orbitron font-bold text-cyber-yellow mb-8 text-center neon-text">
            &gt; ACHIEVEMENTS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="cyber-border p-6 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-${achievement.color}/20 rounded-full flex items-center justify-center mb-4`}>
                  <achievement.icon className={`text-${achievement.color}`} size={24} />
                </div>
                
                <h4 className={`text-lg font-orbitron font-bold text-${achievement.color} mb-3 neon-text`}>
                  {achievement.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Section */}
        <div className="mt-16">
          <div className="cyber-border p-8 text-center">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-blue mb-6 neon-text">
              &gt; EXTRACURRICULAR_ACTIVITIES
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Research Presentations',
                'Hackathon Participation',
                'Team Leadership',
                'Event Volunteering'
              ].map((activity, index) => (
                <div 
                  key={activity}
                  className="cyber-border p-4 hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300"
                >
                  <span className="font-bold">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
