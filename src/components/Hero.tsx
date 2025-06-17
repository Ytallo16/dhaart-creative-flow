
const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dhaart-blue-deep via-dhaart-blue-gray to-dhaart-brown-dark">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-dhaart-black/40"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <div className="relative">
            {/* Primeira linha - Autêntica */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-2">
              <span className="font-raleway font-bold">Autêntica.</span>
            </h1>
            
            {/* Segunda linha sobreposta - Criativa */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none relative -mt-4 md:-mt-6 lg:-mt-8 mb-2">
              <span className="font-playfair italic font-bold text-dhaart-beige relative z-10">Criativa.</span>
            </h1>
            
            {/* Terceira linha - Humanizada */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none relative -mt-4 md:-mt-6 lg:-mt-8">
              <span className="font-raleway font-bold">Humanizada.</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12 mt-8">
            <p className="font-dm-sans text-lg md:text-xl text-white/90 leading-relaxed mb-2">
              Feita para que sua marca permaneça <span className="font-bold text-white">na mente e no coração</span>
            </p>
            <p className="font-dm-sans text-lg md:text-xl text-white/90 leading-relaxed">
              de quem importa: o seu paciente, o seu cliente, o seu público.
            </p>
          </div>
          
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
