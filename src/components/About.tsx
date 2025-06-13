
const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-darker/50">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8">
              Sobre mí
            </h2>
            
            <div className="space-y-4 text-portfolio-text-muted leading-relaxed">
              <p>
                Soy un desarrollador Full-Stack apasionado por crear soluciones digitales 
                innovadoras. Con más de 3 años de experiencia, me especializo en construir 
                aplicaciones web modernas que combinan un diseño excepcional con funcionalidad robusta.
              </p>
              
              <p>
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
                utilizando las mejores prácticas de la industria. Disfruto trabajando en 
                equipos colaborativos donde puedo aportar mi experiencia técnica y aprender 
                de otros profesionales.
              </p>
              
              <p>
                Cuando no estoy programando, me gusta contribuir a proyectos de código abierto, 
                escribir artículos técnicos y mantenerme al día con las últimas tendencias en 
                desarrollo web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">50+</div>
                <div className="text-sm text-portfolio-text-muted">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">3+</div>
                <div className="text-sm text-portfolio-text-muted">Años exp.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">15+</div>
                <div className="text-sm text-portfolio-text-muted">Tecnologías</div>
              </div>
            </div>
          </div>

          {/* Imagen/Avatar */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Desarrollador profesional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/20 to-portfolio-secondary/20"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-portfolio-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
