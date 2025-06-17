
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
    },
    {
      id: 4,
      title: "Conferência Tech Summit - Live Coverage",
      description: "Cobertura ao vivo das principais palestras",
      thumbnail: "/api/placeholder/400/300",
      duration: "4:15",
      event: "Tech Summit",
      date: "Fevereiro 2024"
    },
    {
      id: 5,
      title: "Evento Corporativo BMW - Streaming",
      description: "Transmissão do lançamento da nova linha",
      thumbnail: "/api/placeholder/400/300",
      duration: "2:50",
      event: "BMW Launch",
      date: "Dezembro 2023"
    },
    {
      id: 6,
      title: "Gala Beneficente - Ao Vivo",
      description: "Cobertura completa do evento beneficente",
      thumbnail: "/api/placeholder/400/300",
      duration: "3:45",
      event: "Gala Beneficente",
      date: "Novembro 2023"
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
    },
    {
      id: 4,
      client: "Startup TechFlow",
      category: "Tecnologia",
      objective: "Construir presença digital e educar sobre inovação",
      results: "+300% seguidores, +150% leads",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"],
      highlight: "Conteúdo técnico acessível e engaging"
    },
    {
      id: 5,
      client: "Academia FitLife",
      category: "Fitness & Wellness",
      objective: "Motivar e educar sobre vida saudável",
      results: "+180% engajamento, +90% matrículas",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"],
      highlight: "Transformações reais inspiradoras"
    },
    {
      id: 6,
      client: "Escritório de Advocacia Santos",
      category: "Jurídico",
      objective: "Educar sobre direitos e construir autoridade",
      results: "+250% seguidores, +120% consultas",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300", "/api/placeholder/300/300"],
      highlight: "Linguagem jurídica acessível"
    }
  ];

  const VideoCard = ({ video }: { video: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-dhaart-brown-medium/10">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dhaart-brown-dark/50 via-transparent to-dhaart-blue-deep/30 group-hover:from-dhaart-brown-dark/40 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 bg-dhaart-brown-dark text-dhaart-beige px-3 py-1 rounded-full text-sm font-dm-sans font-medium shadow-lg">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-dhaart-beige/95 rounded-full p-5 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
            <Play className="w-10 h-10 text-dhaart-brown-dark fill-current" />
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-dhaart-beige/5">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-dhaart-blue-deep text-white px-4 py-1 rounded-full text-xs font-raleway font-semibold">
            {video.event}
          </span>
          <span className="text-dhaart-brown-medium text-sm font-dm-sans font-medium">
            {video.date}
          </span>
        </div>
        <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep mb-3 leading-tight">
          {video.title}
        </h3>
        <p className="font-dm-sans text-dhaart-blue-gray leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );

  const SocialCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-dhaart-brown-medium/10">
      <div className="p-6 bg-gradient-to-br from-white to-dhaart-blue-deep/5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep mb-1">
              {project.client}
            </h3>
            <span className="font-dm-sans text-sm text-dhaart-brown-medium font-medium bg-dhaart-brown-medium/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <span className="bg-dhaart-beige text-dhaart-brown-dark px-4 py-2 rounded-full text-sm font-raleway font-semibold shadow-md">
            Ativo
          </span>
        </div>
        
        <p className="font-dm-sans text-dhaart-blue-gray mb-5 leading-relaxed">
          {project.objective}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-5">
          {project.images.map((img: string, index: number) => (
            <div key={index} className="relative group">
              <img 
                src={img} 
                alt={`${project.client} post ${index + 1}`}
                className="w-full h-28 object-cover rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
              />
              <div className="absolute inset-0 bg-dhaart-blue-deep/20 group-hover:bg-dhaart-blue-deep/10 transition-all duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-dhaart-beige/30 to-dhaart-brown-medium/10 p-4 rounded-xl mb-4 border border-dhaart-beige/50">
          <p className="font-dm-sans font-semibold text-dhaart-brown-dark text-sm">
            📈 {project.results}
          </p>
        </div>
        
        <p className="font-dm-sans text-xs text-dhaart-brown-medium italic bg-dhaart-blue-deep/5 p-3 rounded-lg">
          💡 {project.highlight}
        </p>
      </div>
    </div>
  );

  return (
    <section id="projetos" className="py-24 bg-gradient-to-br from-dhaart-beige/10 via-white to-dhaart-blue-deep/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-raleway font-bold text-5xl md:text-6xl text-dhaart-blue-deep mb-6 leading-tight">
            Nossos <span className="text-dhaart-brown-dark">Projetos</span>
          </h2>
          <p className="font-dm-sans text-xl text-dhaart-blue-gray max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos trabalhos que desenvolvemos com paixão e dedicação, 
            transformando momentos em memórias inesquecíveis
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-2xl border-2 border-dhaart-beige/50">
            <button
              onClick={() => setActiveTab('realtime')}
              className={`px-8 py-4 rounded-2xl font-raleway font-bold text-lg transition-all duration-300 ${
                activeTab === 'realtime'
                  ? 'bg-gradient-to-r from-dhaart-blue-deep to-dhaart-blue-gray text-white shadow-xl transform scale-105'
                  : 'text-dhaart-blue-deep hover:bg-dhaart-beige/30 hover:text-dhaart-brown-dark'
              }`}
            >
              <Video className="w-5 h-5 inline mr-3" />
              Realtime
            </button>
            <button
              onClick={() => setActiveTab('social-media')}
              className={`px-8 py-4 rounded-2xl font-raleway font-bold text-lg transition-all duration-300 ${
                activeTab === 'social-media'
                  ? 'bg-gradient-to-r from-dhaart-brown-dark to-dhaart-brown-medium text-white shadow-xl transform scale-105'
                  : 'text-dhaart-blue-deep hover:bg-dhaart-beige/30 hover:text-dhaart-brown-dark'
              }`}
            >
              <Image className="w-5 h-5 inline mr-3" />
              Social Media
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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
            className={`inline-block px-10 py-5 rounded-2xl font-raleway font-bold text-xl transition-all duration-300 shadow-2xl transform hover:scale-105 ${
              activeTab === 'realtime'
                ? 'bg-gradient-to-r from-dhaart-blue-deep to-dhaart-blue-gray text-white hover:from-dhaart-blue-gray hover:to-dhaart-blue-deep'
                : 'bg-gradient-to-r from-dhaart-brown-medium to-dhaart-brown-dark text-white hover:from-dhaart-brown-dark hover:to-dhaart-brown-medium'
            }`}
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
