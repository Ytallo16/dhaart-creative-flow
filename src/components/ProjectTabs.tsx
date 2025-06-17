
import { useState } from 'react';
import { Play, Image, Video } from 'lucide-react';

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('realtime');

  const realtimeVideos = [
    {
      id: 1,
      title: "Fashion Week São Paulo 2024 - Backstage",
      description: "Cobertura completa dos bastidores dos principais desfiles",
      thumbnail: "/api/placeholder/400/300",
      duration: "2:30",
      event: "Fashion Week SP",
      date: "Março 2024"
    },
    {
      id: 2,
      title: "Lançamento Tesla Model Y - Ao Vivo",
      description: "Transmissão exclusiva do evento de lançamento",
      thumbnail: "/api/placeholder/400/300",
      duration: "1:45",
      event: "Tesla Launch",
      date: "Janeiro 2024"
    },
    {
      id: 3,
      title: "Festival de Inverno - Highlights",
      description: "Melhores momentos do festival em tempo real",
      thumbnail: "/api/placeholder/400/300",
      duration: "3:20",
      event: "Festival de Inverno",
      date: "Julho 2023"
    }
  ];

  const socialMediaCases = [
    {
      id: 1,
      client: "Restaurante Botanica",
      category: "Gastronomia",
      objective: "Aumentar engajamento e reservas através de conteúdo gastronômico premium",
      results: "+150% engajamento, +80% reservas",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"],
      highlight: "Estratégia visual focada em food styling"
    },
    {
      id: 2,
      client: "Clínica Estética Lumière",
      category: "Saúde & Beleza",
      objective: "Educar sobre procedimentos e construir autoridade no segmento",
      results: "+200% seguidores, +95% leads qualificados",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"],
      highlight: "Conteúdo educativo com alta conversão"
    },
    {
      id: 3,
      client: "Loja de Moda Atelier",
      category: "Fashion",
      objective: "Showcasing de coleções e impulsionamento de vendas online",
      results: "+120% vendas online, +85% engajamento",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"],
      highlight: "Identidade visual consistente e moderna"
    }
  ];

  const VideoCard = ({ video }: { video: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-dhaart-blue-deep/30 group-hover:bg-dhaart-blue-deep/20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 bg-dhaart-brown-dark text-dhaart-beige px-3 py-1 rounded-full text-sm font-dm-sans font-medium">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-dhaart-beige/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-dhaart-brown-dark fill-current" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-dhaart-blue-gray/10 text-dhaart-blue-deep px-3 py-1 rounded-full text-xs font-raleway font-semibold">
            {video.event}
          </span>
          <span className="text-dhaart-blue-gray text-sm font-dm-sans">
            {video.date}
          </span>
        </div>
        <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep mb-2">
          {video.title}
        </h3>
        <p className="font-dm-sans text-dhaart-blue-gray">
          {video.description}
        </p>
      </div>
    </div>
  );

  const SocialCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep">
              {project.client}
            </h3>
            <span className="font-dm-sans text-sm text-dhaart-brown-medium">
              {project.category}
            </span>
          </div>
          <span className="bg-dhaart-beige text-dhaart-brown-dark px-3 py-1 rounded-full text-sm font-raleway font-semibold">
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
        
        <div className="bg-dhaart-beige/20 p-3 rounded-lg mb-3">
          <p className="font-dm-sans font-semibold text-dhaart-brown-dark text-sm">
            📈 {project.results}
          </p>
        </div>
        
        <p className="font-dm-sans text-xs text-dhaart-blue-gray italic">
          {project.highlight}
        </p>
      </div>
    </div>
  );

  return (
    <section id="projetos" className="py-20 bg-gray-50/50">
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
          <div className="bg-white rounded-full p-1 shadow-lg border border-dhaart-beige/30">
            <button
              onClick={() => setActiveTab('realtime')}
              className={`px-6 py-3 rounded-full font-raleway font-semibold transition-all duration-300 ${
                activeTab === 'realtime'
                  ? 'bg-dhaart-blue-deep text-white shadow-lg'
                  : 'text-dhaart-blue-deep hover:bg-dhaart-beige/20'
              }`}
            >
              <Video className="w-4 h-4 inline mr-2" />
              Realtime
            </button>
            <button
              onClick={() => setActiveTab('social-media')}
              className={`px-6 py-3 rounded-full font-raleway font-semibold transition-all duration-300 ${
                activeTab === 'social-media'
                  ? 'bg-dhaart-blue-deep text-white shadow-lg'
                  : 'text-dhaart-blue-deep hover:bg-dhaart-beige/20'
              }`}
            >
              <Image className="w-4 h-4 inline mr-2" />
              Social Media
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activeTab === 'realtime' && 
            realtimeVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))
          }
          
          {activeTab === 'social-media' && 
            socialMediaCases.map(project => (
              <SocialCard key={project.id} project={project} />
            ))
          }
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/5511999999999?text=${encodeURIComponent(
              activeTab === 'realtime' 
                ? 'Olá! Gostaria de solicitar um orçamento para cobertura do meu evento!'
                : 'Olá! Quero transformar meu Instagram! Vamos conversar?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dhaart-brown-medium text-white px-8 py-4 rounded-full font-raleway font-bold text-lg hover:bg-dhaart-brown-dark hover:scale-105 transition-all duration-300 shadow-xl inline-block"
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
