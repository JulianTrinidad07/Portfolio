
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navegación",
      links: [
        { name: "Inicio", href: "#home" },
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { name: "Desarrollo Web", href: "#" },
        { name: "Aplicaciones React", href: "#" },
        { name: "APIs REST", href: "#" },
        { name: "Consultoría", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:tu@email.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-portfolio-darker border-t border-white/10">
      <div className="container-width">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-gradient">
                Portfolio
              </h3>
              <p className="text-portfolio-text-muted leading-relaxed">
                Desarrollador Full-Stack apasionado por crear experiencias digitales excepcionales.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-portfolio-dark rounded-full text-portfolio-text-muted hover:text-portfolio-primary hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-portfolio-text">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-portfolio-text-muted hover:text-portfolio-primary transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-portfolio-text">
                Newsletter
              </h4>
              <p className="text-portfolio-text-muted text-sm">
                Suscríbete para recibir actualizaciones sobre nuevos proyectos y artículos técnicos.
              </p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 bg-portfolio-dark border border-white/20 rounded-l-lg text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-primary focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-portfolio-primary text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-portfolio-text-muted text-sm">
              <span>© {currentYear} Tu Nombre. Hecho con</span>
              <Heart size={16} className="text-red-500" />
              <span>y mucho café</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-portfolio-text-muted hover:text-portfolio-primary transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-portfolio-text-muted hover:text-portfolio-primary transition-colors duration-300">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
