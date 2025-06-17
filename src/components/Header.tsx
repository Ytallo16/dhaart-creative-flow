
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d213942e-eba3-4bbd-bc3c-f2509f80d947.png" 
              alt="Dhaart Agência" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="font-dm-sans text-dhaart-blue-deep hover:text-dhaart-brown-medium transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('realtime')}
              className="font-dm-sans text-dhaart-blue-deep hover:text-dhaart-brown-medium transition-colors duration-300"
            >
              Realtime
            </button>
            <button 
              onClick={() => scrollToSection('social-media')}
              className="font-dm-sans text-dhaart-blue-deep hover:text-dhaart-brown-medium transition-colors duration-300"
            >
              Social Media
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="font-dm-sans text-dhaart-blue-deep hover:text-dhaart-brown-medium transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Dhaart"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dhaart-brown-medium text-white px-6 py-2 rounded-full font-dm-sans font-medium hover:bg-dhaart-brown-dark transition-colors duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
