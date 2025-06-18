
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
              src={isScrolled ? "/images/DHAART-LOGOTIPO-AZUL-PROFUNDO.png" : "/images/DHAART-LOGOTIPO-BEGE-CLARO.png"}
              alt="Dhaart Agência" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`font-dm-sans transition-colors duration-300 ${
                isScrolled ? 'text-dhaart-blue-deep hover:text-dhaart-brown-medium' : 'text-white hover:text-dhaart-beige'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={`font-dm-sans transition-colors duration-300 ${
                isScrolled ? 'text-dhaart-blue-deep hover:text-dhaart-brown-medium' : 'text-white hover:text-dhaart-beige'
              }`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className={`font-dm-sans transition-colors duration-300 ${
                isScrolled ? 'text-dhaart-blue-deep hover:text-dhaart-brown-medium' : 'text-white hover:text-dhaart-beige'
              }`}
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={`font-dm-sans transition-colors duration-300 ${
                isScrolled ? 'text-dhaart-blue-deep hover:text-dhaart-brown-medium' : 'text-white hover:text-dhaart-beige'
              }`}
            >
              Contato
            </button>
          </nav>

          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Dhaart"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full font-dm-sans font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'bg-dhaart-brown-medium text-white hover:bg-dhaart-brown-dark' 
                : 'bg-dhaart-beige text-dhaart-brown-dark hover:bg-white'
            }`}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
