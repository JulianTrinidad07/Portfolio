
const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2023 - Presente",
      description: "Lidero el desarrollo de aplicaciones web escalables utilizando React y Node.js. Implementé arquitecturas microservicios que mejoraron el rendimiento en un 40%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Reduje el tiempo de carga de la aplicación principal en 60%",
        "Lideré un equipo de 5 desarrolladores",
        "Implementé CI/CD pipelines que redujeron deployment time en 80%"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2021 - 2023",
      description: "Desarrollé features end-to-end para una plataforma SaaS, desde el diseño de la base de datos hasta la interfaz de usuario. Colaboré estrechamente con el equipo de UX/UI.",
      technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Stripe"],
      achievements: [
        "Desarrollé el sistema de pagos que procesó +$1M en transacciones",
        "Aumenté la retención de usuarios en 35% con nuevas features",
        "Optimicé queries de base de datos mejorando performance en 50%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2021",
      description: "Creé sitios web responsive y aplicaciones web para diversos clientes. Me especialicé en optimización de performance y SEO técnico.",
      technologies: ["JavaScript", "React", "SCSS", "Webpack", "Figma"],
      achievements: [
        "Entregué +20 proyectos web con 100% satisfacción del cliente",
        "Implementé mejores prácticas de SEO aumentando tráfico orgánico en 60%",
        "Reduje el bundle size promedio de aplicaciones en 45%"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Mi trayectoria profesional construyendo soluciones innovadoras
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="relative md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-portfolio-dark hidden md:block"></div>

                <div className="bg-portfolio-darker/50 p-8 rounded-2xl border border-white/10 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-playfair font-semibold text-portfolio-text mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-portfolio-primary font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-portfolio-text-muted font-medium mt-2 md:mt-0">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-portfolio-text-muted mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-portfolio-secondary/20 text-portfolio-secondary text-sm rounded-full border border-portfolio-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-portfolio-text font-semibold mb-3">Logros destacados:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start space-x-2 text-portfolio-text-muted"
                        >
                          <span className="text-portfolio-accent mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
