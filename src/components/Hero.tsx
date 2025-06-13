
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float animate-delay-400"></div>

      <div className="container-width section-padding text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Frase principal con efecto neón */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter font-bold mb-6 leading-tight">
            <span className="text-gray-300">Hola, soy </span>
            <span className="neon-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-glow">
              Tu Nombre
            </span>
          </h1>
          
          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-8 font-inter font-medium animate-fade-in-up animate-delay-200">
            Full-Stack Developer
          </h2>
          
          {/* Texto descriptivo */}
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed font-inter animate-fade-in-up animate-delay-400">
            Creo experiencias digitales excepcionales combinando diseño elegante 
            con código robusto. Especializado en React, Node.js y tecnologías modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animate-delay-600">
            <button className="btn-primary">
              Ver mis proyectos
            </button>
            <button className="btn-secondary">
              Descargar CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animate-delay-600">
            <a 
              href="https://github.com" 
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover-scale"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:tu@email.com" 
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover-scale"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-500 hover:text-blue-400 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
