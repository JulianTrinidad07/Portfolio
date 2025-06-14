
import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "tu@email.com",
      href: "mailto:tu@email.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789"
    },
    {
      icon: <MapPin size={24} />,
      label: "Ubicación",
      value: "Madrid, España",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:tu@email.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="section-padding min-h-[600px] relative bg-portfolio-darker/50">
        <div className="absolute inset-0 z-0">
    <img
      src="/Contacto.png"
      alt="Satélite orbitando la Tierra"
      className="w-full h-full object-cover opacity-30"
    />
  </div>
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-portfolio-dark p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-playfair font-semibold text-portfolio-text mb-6">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-portfolio-text mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-portfolio-darker border border-white/20 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-primary focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-portfolio-text mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-portfolio-darker border border-white/20 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-primary focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-portfolio-text mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-portfolio-darker border border-white/20 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-primary focus:outline-none transition-colors duration-300"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-portfolio-text mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-portfolio-darker border border-white/20 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-primary focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-portfolio-dark p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-playfair font-semibold text-portfolio-text mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-portfolio-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-portfolio-text-muted text-sm">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-portfolio-text hover:text-portfolio-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-portfolio-text">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-portfolio-dark p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-playfair font-semibold text-portfolio-text mb-6">
                Sígueme en redes
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center justify-center w-12 h-12 bg-portfolio-darker rounded-full text-portfolio-text-muted transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-playfair font-semibold text-portfolio-text mb-4">
                Disponibilidad
              </h3>
              <p className="text-portfolio-text-muted mb-4">
                Actualmente disponible para nuevos proyectos freelance y oportunidades de trabajo remoto.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Disponible ahora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
