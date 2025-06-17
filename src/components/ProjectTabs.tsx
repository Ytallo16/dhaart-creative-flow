
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('realtime');

  const realtimeProjects = [
    {
      id: 1,
      name: "Fashion Week São Paulo 2024",
      description: "Cobertura completa dos bastidores e desfiles da maior semana de moda do país",
      date: "Março 2024",
      location: "São Paulo, SP",
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
    },
    {
      id: 2,
      name: "Lançamento Tesla Model Y",
      description: "Evento exclusivo de lançamento com transmissão ao vivo e conteúdo instantâneo",
      date: "Janeiro 2024",
      location: "Rio de Janeiro, RJ",
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
    },
    {
      id: 3,
      name: "Festival de Inverno Campos do Jordão",
      description: "Cobertura musical completa com foco em experiências imersivas",
      date: "Julho 2023",
      location: "Campos do Jordão, SP",
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
    }
  ];

  const socialMediaProjects = [
    {
      id: 1,
      client: "Restaurante Botanica",
      objective: "Aumentar engajamento e reservas através de conteúdo gastronômico premium",
      results: "+150% engajamento, +80% reservas",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"]
    },
    {
      id: 2,
      client: "Clínica Estética Lumière",
      objective: "Educar sobre procedimentos e construir autoridade no segmento",
      results: "+200% seguidores, +95% leads qualificados",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"]
    },
    {
      id: 3,
      client: "Loja de Moda Atelier",
      objective: "Showcasing de coleções e impulsionamento de vendas online",
      results: "+120% vendas online, +85% engajamento",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"]
    }
  ];

  const ProjectCard = ({ project, type }: { project: any, type: string }) => {
    if (type === 'realtime') {
      return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="relative overflow-hidden h-64">
            <img 
              src={project.images[0]} 
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-dhaart-beige text-dhaart-brown-dark px-3 py-1 rounded-full text-sm font-dm-sans">
                {project.date}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep mb-2">
              {project.name}
            </h3>
            <p className="font-dm-sans text-dhaart-blue-gray mb-3">
              {project.description}
            </p>
            <p className="font-dm-sans text-sm text-dhaart-brown-medium">
              📍 {project.location}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep">
              {project.client}
            </h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-dm-sans">
              Ativo
            </span>
          </div>
          
          <p className="font-dm-sans text-dhaart-blue-gray mb-4">
            {project.objective}
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.images.map((img: string, index: number) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.client} post ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
          
          <div className="bg-dhaart-beige/20 p-3 rounded-lg">
            <p className="font-dm-sans font-semibold text-dhaart-brown-dark text-sm">
              📈 {project.results}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl text-dhaart-blue-deep mb-4">
            Nossos Projetos
          </h2>
          <p className="font-dm-sans text-xl text-dhaart-blue-gray max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que desenvolvemos com paixão e dedicação
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('realtime')}
              className={`px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300 ${
                activeTab === 'realtime'
                  ? 'bg-dhaart-blue-deep text-white shadow-lg'
                  : 'text-dhaart-blue-deep hover:bg-dhaart-beige/20'
              }`}
            >
              Realtime
            </button>
            <button
              onClick={() => setActiveTab('social-media')}
              className={`px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300 ${
                activeTab === 'social-media'
                  ? 'bg-dhaart-blue-deep text-white shadow-lg'
                  : 'text-dhaart-blue-deep hover:bg-dhaart-beige/20'
              }`}
            >
              Social Media
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activeTab === 'realtime' 
            ? realtimeProjects.map(project => (
                <ProjectCard key={project.id} project={project} type="realtime" />
              ))
            : socialMediaProjects.map(project => (
                <ProjectCard key={project.id} project={project} type="social-media" />
              ))
          }
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/5511999999999?text=${
              activeTab === 'realtime' 
                ? 'Solicito um orçamento para cobertura do meu evento!'
                : 'Quero transformar meu Instagram! Vamos conversar?'
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dhaart-brown-medium text-white px-8 py-4 rounded-full font-raleway font-semibold text-lg hover:bg-dhaart-brown-dark hover:scale-105 transition-all duration-300 shadow-xl inline-block"
          >
            {activeTab === 'realtime' 
              ? 'Solicite um orçamento para seu evento'
              : 'Quer transformar seu Instagram? Fale com a gente'
            }
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
