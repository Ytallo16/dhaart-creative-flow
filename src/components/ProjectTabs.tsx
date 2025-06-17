
import { useState } from 'react';
import { Play, Image, Video } from 'lucide-react';

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('realtime');

  const realtimeVideos = [
    {
      id: 1,
      title: "Fashion Week São Paulo 2024 - Backstage",
      description: "Cobertura completa dos bastidores dos principais desfiles",
      thumbnail: "/api/placeholder/300/533",
      duration: "2:30",
      event: "Fashion Week SP",
      date: "Março 2024"
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
    },
    {
      id: 7,
      title: "Casamento Premium - Live Stream",
      description: "Transmissão ao vivo de cerimônia exclusiva",
      thumbnail: "/api/placeholder/300/533",
      duration: "5:20",
      event: "Casamento Premium",
      date: "Maio 2024"
    },
    {
      id: 8,
      title: "Show Musical - Cobertura Completa",
      description: "Experiência musical imersiva em tempo real",
      thumbnail: "/api/placeholder/300/533",
      duration: "3:15",
      event: "Show Musical",
      date: "Abril 2024"
    },
    {
      id: 9,
      title: "Formatura Medicina - Streaming",
      description: "Momento especial transmitido ao vivo",
      thumbnail: "/api/placeholder/300/533",
      duration: "2:40",
      event: "Formatura",
      date: "Dezembro 2023"
    },
    {
      id: 10,
      title: "Evento Gastronômico - Live",
      description: "Festival gastronômico em tempo real",
      thumbnail: "/api/placeholder/300/533",
      duration: "4:05",
      event: "Festival Gastronômico",
      date: "Março 2024"
    },
    {
      id: 11,
      title: "Lançamento Produto - Ao Vivo",
      description: "Apresentação exclusiva de nova linha",
      thumbnail: "/api/placeholder/300/533",
      duration: "1:55",
      event: "Lançamento",
      date: "Janeiro 2024"
    },
    {
      id: 12,
      title: "Congresso Médico - Transmissão",
      description: "Palestras e discussões médicas ao vivo",
      thumbnail: "/api/placeholder/300/533",
      duration: "6:30",
      event: "Congresso Médico",
      date: "Fevereiro 2024"
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
    },
    {
      id: 7,
      client: "Padaria Artesanal Vila",
      category: "Alimentação",
      objective: "Mostrar processo artesanal e atrair clientes locais",
      results: "+95% engajamento, +60% vendas",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Storytelling do processo artesanal"
    },
    {
      id: 8,
      client: "Loja de Plantas Green",
      category: "Decoração & Plantas",
      objective: "Educar sobre cuidados e impulsionar vendas online",
      results: "+220% seguidores, +140% vendas",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Conteúdo educativo sobre plantas"
    },
    {
      id: 9,
      client: "Consultoria Financeira Pro",
      category: "Finanças",
      objective: "Educar sobre investimentos e gerar leads qualificados",
      results: "+180% seguidores, +110% consultas",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Educação financeira acessível"
    },
    {
      id: 10,
      client: "Pet Shop Amor Animal",
      category: "Pet Care",
      objective: "Conectar com tutores e promover produtos premium",
      results: "+160% engajamento, +85% vendas",
      images: ["/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427", "/api/placeholder/240/427"],
      highlight: "Conteúdo emocional com pets"
    }
  ];

  const VideoCard = ({ video }: { video: any }) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group border-2 border-dhaart-brown-medium/20 hover:border-dhaart-brown-medium/40">
      <div className="relative">
        <div className="aspect-[9/16] overflow-hidden">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dhaart-brown-dark/60 via-transparent to-dhaart-blue-deep/40 group-hover:from-dhaart-brown-dark/50 transition-all duration-500"></div>
        <div className="absolute top-4 right-4 bg-dhaart-brown-dark/90 text-dhaart-beige px-3 py-2 rounded-full text-sm font-dm-sans font-bold shadow-xl backdrop-blur-sm">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-dhaart-beige/95 rounded-full p-6 group-hover:scale-125 transition-transform duration-500 shadow-2xl border-2 border-dhaart-brown-medium/30">
            <Play className="w-12 h-12 text-dhaart-brown-dark fill-current" />
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-dhaart-beige/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-gradient-to-r from-dhaart-blue-deep to-dhaart-blue-gray text-white px-4 py-2 rounded-full text-xs font-raleway font-bold shadow-lg">
            {video.event}
          </span>
          <span className="text-dhaart-brown-medium text-sm font-dm-sans font-semibold bg-dhaart-brown-medium/10 px-3 py-1 rounded-full">
            {video.date}
          </span>
        </div>
        <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep mb-3 leading-tight hover:text-dhaart-brown-dark transition-colors duration-300">
          {video.title}
        </h3>
        <p className="font-dm-sans text-dhaart-blue-gray leading-relaxed text-sm">
          {video.description}
        </p>
      </div>
    </div>
  );

  const SocialCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-dhaart-brown-medium/20 hover:border-dhaart-brown-medium/40">
      <div className="p-6 bg-gradient-to-br from-white to-dhaart-blue-deep/8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-raleway font-bold text-xl text-dhaart-blue-deep mb-2 hover:text-dhaart-brown-dark transition-colors duration-300">
              {project.client}
            </h3>
            <span className="font-dm-sans text-sm text-dhaart-brown-dark font-bold bg-gradient-to-r from-dhaart-brown-medium/20 to-dhaart-beige/40 px-4 py-2 rounded-full shadow-md">
              {project.category}
            </span>
          </div>
          <span className="bg-gradient-to-r from-dhaart-beige to-dhaart-brown-medium/30 text-dhaart-brown-dark px-5 py-2 rounded-full text-sm font-raleway font-bold shadow-lg border border-dhaart-brown-medium/20">
            Ativo
          </span>
        </div>
        
        <p className="font-dm-sans text-dhaart-blue-gray mb-6 leading-relaxed text-sm">
          {project.objective}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {project.images.map((img: string, index: number) => (
            <div key={index} className="relative group">
              <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={img} 
                  alt={`${project.client} post ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dhaart-blue-deep/30 to-transparent group-hover:from-dhaart-blue-deep/20 transition-all duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-dhaart-beige/40 to-dhaart-brown-medium/20 p-5 rounded-2xl mb-5 border-2 border-dhaart-beige/60 shadow-inner">
          <p className="font-dm-sans font-bold text-dhaart-brown-dark text-sm">
            📈 {project.results}
          </p>
        </div>
        
        <p className="font-dm-sans text-xs text-dhaart-brown-medium italic bg-gradient-to-r from-dhaart-blue-deep/10 to-dhaart-brown-medium/10 p-4 rounded-xl border border-dhaart-blue-deep/20">
          💡 {project.highlight}
        </p>
      </div>
    </div>
  );

  return (
    <section id="projetos" className="py-32 bg-gradient-to-br from-dhaart-beige/15 via-white to-dhaart-blue-deep/8 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-raleway font-bold text-6xl md:text-7xl text-dhaart-blue-deep mb-8 leading-tight">
            Nossos <span className="text-dhaart-brown-dark bg-gradient-to-r from-dhaart-brown-medium to-dhaart-brown-dark bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="font-dm-sans text-xl text-dhaart-blue-gray max-w-4xl mx-auto leading-relaxed">
            Conheça alguns dos trabalhos que desenvolvemos com paixão e dedicação, 
            transformando momentos em memórias inesquecíveis
          </p>
        </div>

        <div className="flex justify-center mb-20">
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
              Realtime
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
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
