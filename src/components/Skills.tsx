

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Redux", level: 80, icon: "🔄" },
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: 92, icon: "📂" },
        { name: "VS code", level: 75, icon: "🐳" },
        { name: "Vite", level: 70, icon: "☁️" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Jest", level: 85, icon: "🧪" },
      ]
    },
        {
      title: "Backend",  
      skills: [
        { name: "Node.js", level: 0, icon: "🟢" },
        { name: "Python", level: 0, icon: "🐍" },
        { name: "SQL", level: 0, icon: "🗄️" },
        { name: "Express", level: 0, icon: "⚡" },
        { name: "MongoDB", level: 0, icon: "🍃" },
      ]
    },
  ];

  return (
    <section id="skills" className="section-padding min-h-[600px] relative">
        <div className="absolute inset-0 z-0">
    <img
      src="/Habilidades.png"
      alt="Fondo habilidades"
      className="w-full h-full object-cover opacity-30"
    />
  </div>
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6">
            Habilidades
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-portfolio-darker/50 p-6 rounded-2xl border border-white/10 card-hover"
            >
               <h3 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-6 flex items-center gap-2">
               {category.title === "Backend" && <span>🔒</span>}
                 {category.title}
                    </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-portfolio-text font-medium">{skill.name}</span>
                      </div>
                      <span className="text-portfolio-text-muted text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-portfolio-dark rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
