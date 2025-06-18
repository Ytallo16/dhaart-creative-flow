
import { useState } from 'react';
import { Play, Image, Video } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('realtime');
  const titleRef = useIntersectionObserver({ threshold: 0.3 });
  const tabsRef = useIntersectionObserver({ threshold: 0.5 });
  const gridRef = useIntersectionObserver({ threshold: 0.1 });

  const realtimeVideos = [
    {
      id: 1,
      title: "Cobertura Realtime - Evento Especial",
      description: "Transmissão ao vivo profissional de evento corporativo",
      thumbnail: "/api/placeholder/300/533",
      duration: "Live",
      event: "Evento Corporativo",
      date: "2024",
      driveLink: "https://drive.google.com/file/d/1tQ-WScThcj5n5376ejSPpQys_Y-r7Oa4/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Lançamento Tesla Model Y - Ao Vivo",
      description: "Transmissão exclusiva do evento de lançamento",
      thumbnail: "/api/placeholder/300/533",
      duration: "1:45",
      event: "Tesla Launch",
      date: "Janeiro 2024"
    },
    {
      id: 3,
      title: "Festival de Inverno - Highlights",
      description: "Melhores momentos do festival em tempo real",
      thumbnail: "/api/placeholder/300/533",
      duration: "3:20",
      event: "Festival de Inverno",
      date: "Julho 2023"
    },
    {
      id: 4,
      title: "Conferência Tech Summit - Live Coverage",
      description: "Cobertura ao vivo das principais palestras",
      thumbnail: "/api/placeholder/300/533",
      duration: "4:15",
      event: "Tech Summit",
      date: "Fevereiro 2024"
    },
    {
      id: 5,
      title: "Evento Corporativo BMW - Streaming",
      description: "Transmissão do lançamento da nova linha",
      thumbnail: "/api/placeholder/300/533",
      duration: "2:50",
      event: "BMW Launch",
      date: "Dezembro 2023"
    },
    {
      id: 6,
      title: "Gala Beneficente - Ao Vivo",
      description: "Cobertura completa do evento beneficente",
      thumbnail: "/api/placeholder/300/533",
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
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Estratégia visual focada em food styling"
    },
    {
      id: 2,
      client: "Clínica Estética Lumière",
      category: "Saúde & Beleza",
      objective: "Educar sobre procedimentos e construir autoridade no segmento",
      results: "+200% seguidores, +95% leads qualificados",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Conteúdo educativo com alta conversão"
    },
    {
      id: 3,
      client: "Loja de Moda Atelier",
      category: "Fashion",
      objective: "Showcasing de coleções e impulsionamento de vendas online",
      results: "+120% vendas online, +85% engajamento",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Identidade visual consistente e moderna"
    },
    {
      id: 4,
      client: "Startup TechFlow",
      category: "Tecnologia",
      objective: "Construir presença digital e educar sobre inovação",
      results: "+300% seguidores, +150% leads",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Conteúdo técnico acessível e engaging"
    },
    {
      id: 5,
      client: "Academia FitLife",
      category: "Fitness & Wellness",
      objective: "Motivar e educar sobre vida saudável",
      results: "+180% engajamento, +90% matrículas",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Transformações reais inspiradoras"
    },
    {
      id: 6,
      client: "Escritório de Advocacia Santos",
      category: "Jurídico",
      objective: "Educar sobre direitos e construir autoridade",
      results: "+250% seguidores, +120% consultas",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Linguagem jurídica acessível"
    }
  ];

  const VideoCard = ({ video }: { video: any }) => {
    // Extrair o ID do Google Drive do link
    const getDriveVideoId = (url: string) => {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    };

    const videoId = video.driveLink ? getDriveVideoId(video.driveLink) : null;
    const embedUrl = videoId ? `https://drive.google.com/file/d/${videoId}/preview?autoplay=1&mute=1&loop=1` : null;

    return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 border-dhaart-brown-medium/20 hover:border-dhaart-brown-medium/40 max-w-sm mx-auto">
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden">
          {embedUrl ? (
            <div className="relative w-full h-full">
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                loading="eager"
                title={video.title}
                sandbox="allow-scripts allow-same-origin allow-presentation"
                onError={() => console.log('Erro ao carregar vídeo do Drive')}
              />
              <div className="absolute bottom-2 right-2">
                <a
                  href={video.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dhaart-blue-deep text-white px-2 py-1 rounded text-xs hover:bg-dhaart-blue-gray transition-colors"
                >
                  Ver no Drive
                </a>
              </div>
            </div>
          ) : (
            <>
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dhaart-brown-dark/60 via-transparent to-dhaart-blue-deep/40 group-hover:from-dhaart-brown-dark/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dhaart-beige/95 rounded-full p-4 group-hover:scale-125 transition-transform duration-500 shadow-2xl border-2 border-dhaart-brown-medium/30">
                  <Play className="w-8 h-8 text-dhaart-brown-dark fill-current" />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-dhaart-brown-dark/90 text-dhaart-beige px-2 py-1 rounded-full text-xs font-dm-sans font-bold shadow-xl backdrop-blur-sm">
          {video.duration}
        </div>
      </div>
      
      <div className="p-4 bg-gradient-to-br from-white to-dhaart-beige/10">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-gradient-to-r from-dhaart-blue-deep to-dhaart-blue-gray text-white px-3 py-1 rounded-full text-xs font-raleway font-bold shadow-lg">
            {video.event}
          </span>
          <span className="text-dhaart-brown-medium text-xs font-dm-sans font-semibold bg-dhaart-brown-medium/10 px-2 py-1 rounded-full">
            {video.date}
          </span>
        </div>
        <h3 className="font-raleway font-bold text-lg text-dhaart-blue-deep mb-2 leading-tight hover:text-dhaart-brown-dark transition-colors duration-300 line-clamp-2">
          {video.title}
        </h3>
        <p className="font-dm-sans text-dhaart-blue-gray leading-relaxed text-sm line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
    );
  };

  const SocialCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-dhaart-brown-medium/20 hover:border-dhaart-brown-medium/40 max-w-sm mx-auto">
      <div className="p-4 bg-gradient-to-br from-white to-dhaart-blue-deep/8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-raleway font-bold text-lg text-dhaart-blue-deep mb-2 hover:text-dhaart-brown-dark transition-colors duration-300 line-clamp-1">
              {project.client}
            </h3>
            <span className="font-dm-sans text-xs text-dhaart-brown-dark font-bold bg-gradient-to-r from-dhaart-brown-medium/20 to-dhaart-beige/40 px-3 py-1 rounded-full shadow-md">
              {project.category}
            </span>
          </div>
          <span className="bg-gradient-to-r from-dhaart-beige to-dhaart-brown-medium/30 text-dhaart-brown-dark px-3 py-1 rounded-full text-xs font-raleway font-bold shadow-lg border border-dhaart-brown-medium/20">
            Ativo
          </span>
        </div>
        
        <p className="font-dm-sans text-dhaart-blue-gray mb-4 leading-relaxed text-sm line-clamp-2">
          {project.objective}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.images.slice(0, 4).map((img: string, index: number) => (
            <div key={index} className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={img} 
                  alt={`${project.client} post ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dhaart-blue-deep/30 to-transparent group-hover:from-dhaart-blue-deep/20 transition-all duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-dhaart-beige/40 to-dhaart-brown-medium/20 p-3 rounded-xl mb-3 border-2 border-dhaart-beige/60 shadow-inner">
          <p className="font-dm-sans font-bold text-dhaart-brown-dark text-xs">
            📈 {project.results}
          </p>
        </div>
        
        <p className="font-dm-sans text-xs text-dhaart-brown-medium italic bg-gradient-to-r from-dhaart-blue-deep/10 to-dhaart-brown-medium/10 p-3 rounded-xl border border-dhaart-blue-deep/20 line-clamp-2">
          💡 {project.highlight}
        </p>
      </div>
    </div>
  );

  return (
    <section id="projetos" className="py-32 min-h-screen" style={{backgroundColor: '#D8C3A5'}}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef.elementRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleRef.isIntersecting 
              ? 'animate-fade-in opacity-100' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-raleway font-bold text-6xl md:text-7xl text-dhaart-brown-dark mb-8 leading-tight">
            Nossos Projetos
          </h2>
          
        </div>

        <div 
          ref={tabsRef.elementRef}
          className={`flex justify-center mb-20 transition-all duration-1000 ${
            tabsRef.isIntersecting 
              ? 'animate-scale-in opacity-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white rounded-3xl p-3 shadow-2xl border-3 border-dhaart-beige/60">
            <button
              onClick={() => setActiveTab('realtime')}
              className={`px-10 py-5 rounded-3xl font-raleway font-bold text-lg transition-all duration-500 ${
                activeTab === 'realtime'
                  ? 'bg-gradient-to-r from-dhaart-blue-deep to-dhaart-blue-gray text-white shadow-2xl transform scale-110 border-2 border-dhaart-blue-deep/30'
                  : 'text-dhaart-blue-deep hover:bg-gradient-to-r hover:from-dhaart-beige/40 hover:to-dhaart-brown-medium/20 hover:text-dhaart-brown-dark hover:scale-105'
              }`}
            >
              <Video className="w-6 h-6 inline mr-3" />
              Cobertura Realtime
            </button>
            <button
              onClick={() => setActiveTab('social-media')}
              className={`px-10 py-5 rounded-3xl font-raleway font-bold text-lg transition-all duration-500 ${
                activeTab === 'social-media'
                  ? 'bg-gradient-to-r from-dhaart-brown-dark to-dhaart-brown-medium text-white shadow-2xl transform scale-110 border-2 border-dhaart-brown-medium/30'
                  : 'text-dhaart-blue-deep hover:bg-gradient-to-r hover:from-dhaart-beige/40 hover:to-dhaart-brown-medium/20 hover:text-dhaart-brown-dark hover:scale-105'
              }`}
            >
              <Image className="w-6 h-6 inline mr-3" />
              Social Media
            </button>
          </div>
        </div>

        <div 
          ref={gridRef.elementRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-20 transition-all duration-1000 ${
            gridRef.isIntersecting 
              ? 'animate-slide-up opacity-100' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {activeTab === 'realtime' && 
            realtimeVideos.map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-500 ${
                  gridRef.isIntersecting 
                    ? 'animate-fade-in opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  animationDelay: gridRef.isIntersecting ? `${index * 0.1}s` : '0s'
                }}
              >
                <VideoCard video={video} />
              </div>
            ))
          }
          
          {activeTab === 'social-media' && 
            socialMediaCases.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-500 ${
                  gridRef.isIntersecting 
                    ? 'animate-fade-in opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  animationDelay: gridRef.isIntersecting ? `${index * 0.1}s` : '0s'
                }}
              >
                <SocialCard project={project} />
              </div>
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
            className={`inline-block px-12 py-6 rounded-3xl font-raleway font-bold text-xl transition-all duration-500 shadow-2xl transform hover:scale-110 border-2 ${
              activeTab === 'realtime'
                ? 'bg-gradient-to-r from-dhaart-blue-deep to-dhaart-blue-gray text-white hover:from-dhaart-blue-gray hover:to-dhaart-blue-deep border-dhaart-blue-deep/30'
                : 'bg-gradient-to-r from-dhaart-brown-medium to-dhaart-brown-dark text-white hover:from-dhaart-brown-dark hover:to-dhaart-brown-medium border-dhaart-brown-medium/30'
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
