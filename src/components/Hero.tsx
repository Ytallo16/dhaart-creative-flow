
const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dhaart-blue-deep via-dhaart-blue-gray to-dhaart-brown-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-dhaart-black/20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-raleway font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Criatividade que
            <span className="block text-dhaart-beige">conecta marcas</span>
            <span className="block">e pessoas</span>
          </h1>
          
          <p className="font-dm-sans text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em experiências visuais marcantes através de coberturas em tempo real e estratégias de social media que fazem a diferença.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/5511999999999?text=${encodeURIComponent("Quer captar um momento importante da sua vida? Vamos conversar!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dhaart-beige text-dhaart-brown-dark px-8 py-4 rounded-full font-raleway font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Quer captar um momento importante da sua vida? Fale conosco!
            </a>
            
            <button 
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-dm-sans font-medium hover:bg-white hover:text-dhaart-blue-deep transition-all duration-300"
            >
              Ver nossos projetos
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dhaart-beige rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dhaart-beige rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
