export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      link: 'https://github.com/example'
    }
    // Add more projects
  ]

  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}