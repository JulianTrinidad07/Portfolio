
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con panel de administración, carrito de compras, sistema de pagos y gestión de inventario.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización offline.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard interactivo del clima con mapas en tiempo real, pronósticos extendidos y alertas meteorológicas.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales con métricas en tiempo real, reportes automatizados y visualizaciones de datos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "Flask", "Pandas", "Chart.js", "Twitter API"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Plataforma educativa con cursos interactivos, seguimiento de progreso, quizzes y certificaciones.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Aplicación para seguimiento de criptomonedas con alertas de precio, análisis técnico y portfolio management.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "CoinGecko API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding min-h-[600px] relative bg-portfolio-darker/50">
  <div className="absolute inset-0 z-0">
    <img
      src="/Project.png"
      alt="Fondo habilidades"
      className="w-full h-full object-cover opacity-30"
    />
  </div>
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`bg-portfolio-dark rounded-2xl overflow-hidden border border-white/10 card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="bg-portfolio-dark/80 p-2 rounded-full text-portfolio-text hover:text-portfolio-primary transition-colors duration-300"
                    aria-label="Ver código en GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demo}
                    className="bg-portfolio-dark/80 p-2 rounded-full text-portfolio-text hover:text-portfolio-primary transition-colors duration-300"
                    aria-label="Ver demo en vivo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-portfolio-text mb-3">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-portfolio-primary/20 text-portfolio-primary text-sm rounded-full border border-portfolio-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más proyectos */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Ver todos los proyectos en GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
