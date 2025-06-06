
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python (Basics)', 'HTML', 'CSS', 'JavaScript (Basics)']
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'VS Code', 'Firebase', 'Jupyter Notebook']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Specialized Areas',
      skills: ['Web Development', 'Operating Systems', 'DBMS']
    }
  ];

  return (
    <section id="skills" className="pt-16 -mt-16 reveal">
      <h2 className="section-heading text-center mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="card hover:shadow-lg">
            <h3 className="text-xl font-heading font-medium mb-4">
              {category.title}
            </h3>
            
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary/70 rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 card text-center bg-secondary/30">
        <h3 className="text-xl font-heading font-medium mb-4">Currently Learning</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['React.js', 'Node.js', 'DevOps', 'Advanced ML'].map((tech) => (
            <span key={tech} className="chip bg-primary/10 text-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
