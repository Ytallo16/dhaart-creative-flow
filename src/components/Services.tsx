import { Camera, Users, Zap, Megaphone, GraduationCap, Palette } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

const Services = () => {
  const titleRef = useIntersectionObserver({ threshold: 0.3 });
  const servicesGridRef = useIntersectionObserver({ threshold: 0.2 });

  const services = [
    {
      id: 1,
      title: "Cobertura Real Time",
      icon: <Camera className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Gerenciamento de redes sociais (Social Media)",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Captações pontuais",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Campanhas e lançamentos",
      icon: <Megaphone className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Treinamento para equipes internas e palestras",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Branding e reposicionamento de marca",
      icon: <Palette className="w-8 h-8" />
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleRef.isIntersecting 
              ? 'animate-slide-up opacity-100' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-raleway font-bold text-4xl md:text-5xl text-dhaart-blue-deep mb-6">
            Serviços disponíveis
          </h2>
          <p className="font-dm-sans text-lg md:text-xl text-dhaart-blue-gray max-w-3xl mx-auto leading-relaxed">
            Soluções criativas e estratégicas para transformar sua presença digital e conectar sua marca com seu público
          </p>
        </div>

        <div 
          ref={servicesGridRef.elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 transition-all duration-800 ${
            servicesGridRef.isIntersecting 
              ? 'animate-fade-in opacity-100' 
              : 'opacity-0 translate-y-5'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-dhaart-blue-gray/20 hover:border-dhaart-brown-medium/40 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-dhaart-blue-deep text-white p-3 rounded-full group-hover:bg-dhaart-brown-medium transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep group-hover:text-dhaart-brown-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services; 