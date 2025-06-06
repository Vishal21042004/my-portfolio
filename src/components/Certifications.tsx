import React from 'react';
import { Award, FileText } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to Machine Learning',
      issuer: 'NPTEL',
      date: 'Sep 2024',
      link: '#',
      image: '/images/nptel.jpg'
    },
    {
      title: 'C++ BootCamp',
      issuer: 'LetsUpgrade',
      date: 'Jun-Jul 2024',
      link: '#',
      image: '/images/C++.jpg'
    },
    {
      title: 'Python GUI Development with Tkinter',
      issuer: 'Udemy',
      date: 'March 2025',
      link: '#',
      image: '/images/PythonGUItkinter(Udemy).jpg'
    }
  ];

  // Helper to check if file is a PDF
  const isPdf = (file: string) => file.toLowerCase().endsWith('.pdf');

  return (
    <section id="certifications" className="pt-16 -mt-16 reveal">
      <h2 className="section-heading text-center mb-12">Certifications</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col items-center"
          >
            <div className="flex flex-col items-center mb-4">
              {isPdf(cert.image) ? (
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                  title="View PDF"
                >
                  <FileText size={64} className="text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">View PDF</span>
                </a>
              ) : (
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-28 h-28 object-contain rounded-full mb-2 border"
                  />
                </a>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Award size={24} className="text-primary/80" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-heading font-medium mb-1">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
              <p className="text-sm font-medium">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
