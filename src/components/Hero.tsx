const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-end justify-center relative overflow-hidden bg-gradient-to-br from-dhaart-blue-deep via-dhaart-blue-gray to-dhaart-brown-dark">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-dhaart-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10 pb-20 text-center">
        <div className="animate-fade-in max-w-6xl mx-auto">
          <div className="relative mb-10">
            {/* Primeira linha - Autêntica */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[9rem] text-white leading-none mb-8 md:mb-12 lg:mb-16 xl:mb-0">
              <span className="font-poppins  tracking-tight">Autêntica.</span>
            </h1>
            
            {/* Segunda linha sobreposta - Criativa */}
            <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[18rem] leading-none relative -mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 mb-4 md:mb-2">
              <span className="font-parisienne text-dhaart-beige relative z-10 tracking-normal">Criativa.</span>
            </h1>
            
            {/* Terceira linha - Humanizada */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[9rem] text-white leading-none relative -mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20">
              <span className="font-poppins  tracking-tight">Humanizada.</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mb-12 mt-12 mx-auto">
            <p className="font-dm-sans text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-2">
              Feita para que sua marca permaneça <span className="font-bold text-white italic">na mente e no coração</span>
            </p>
            <p className="font-dm-sans text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed">
              de quem importa: o seu paciente, o seu cliente, o seu público.
            </p>
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
