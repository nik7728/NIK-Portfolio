import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'TravelU - Website',
      description: 'Developed a responsive travel website using HTML, CSS, JavaScript, and PHP, with secure user authentication handled via PHP and MySQL on XAMPP. Implemented dynamic content, database management, and a user-friendly interface for an enhanced travel booking experience.',
      image: '/travel.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Personal Portfolio',
      description: 'Built with HTML, CSS, and JavaScript (or React, if applicable), this portfolio showcases my skills, projects, and experience in web development. It features a clean and responsive design, smooth animations, and an interactive user experience.',
      image: '/personal.png',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-navy-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-navy-100 text-navy-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;