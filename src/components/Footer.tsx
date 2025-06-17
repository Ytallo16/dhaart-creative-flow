
import { Instagram, Phone, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-dhaart-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src="/lovable-uploads/d213942e-eba3-4bbd-bc3c-f2509f80d947.png" 
              alt="Dhaart Agência" 
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
            <p className="font-dm-sans text-gray-300 leading-relaxed mb-6">
              Agência criativa especializada em transformar ideias em experiências visuais marcantes através de coberturas em tempo real e estratégias de social media.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-dhaart-brown-medium p-3 rounded-full hover:bg-dhaart-beige hover:text-dhaart-brown-dark transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dhaart-brown-medium p-3 rounded-full hover:bg-dhaart-beige hover:text-dhaart-brown-dark transition-all duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-raleway font-bold text-xl mb-6">Serviços</h3>
            <ul className="space-y-3 font-dm-sans text-gray-300">
              <li><a href="#" className="hover:text-dhaart-beige transition-colors">Cobertura Realtime</a></li>
              <li><a href="#" className="hover:text-dhaart-beige transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-dhaart-beige transition-colors">Estratégia Digital</a></li>
              <li><a href="#" className="hover:text-dhaart-beige transition-colors">Produção de Conteúdo</a></li>
              <li><a href="#" className="hover:text-dhaart-beige transition-colors">Consultoria Criativa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-raleway font-bold text-xl mb-6">Vamos conversar?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-dhaart-beige" />
                <span className="font-dm-sans">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-dhaart-beige">✉️</span>
                <span className="font-dm-sans">contato@dhaart.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-dhaart-beige">📍</span>
                <span className="font-dm-sans">São Paulo, SP</span>
              </div>
            </div>
            
            <a
              href="https://wa.me/5511999999999?text=Vamos conversar sobre meu projeto!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dhaart-beige text-dhaart-brown-dark px-6 py-3 rounded-full font-raleway font-semibold hover:bg-white transition-all duration-300 inline-block mt-6"
            >
              Vamos conversar?
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-dm-sans text-gray-400 text-sm">
              © 2024 Dhaart Agência. Todos os direitos reservados.
            </p>
            <p className="font-dm-sans text-gray-400 text-sm mt-4 md:mt-0">
              Criatividade que conecta marcas e pessoas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
