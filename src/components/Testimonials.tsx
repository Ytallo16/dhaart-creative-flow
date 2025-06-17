
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marina Silva",
      role: "Diretora de Marketing - Fashion Brand",
      content: "A Dhaart transformou completamente nossa presença digital. O trabalho em tempo real durante nossa fashion week foi impecável!",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      role: "CEO - Tech Startup",
      content: "Profissionalismo e criatividade em cada entrega. Nossa estratégia de social media nunca teve resultados tão expressivos.",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Ana Beatriz",
      role: "Gerente - Restaurante Gourmet",
      content: "O conteúdo criado pela equipe da Dhaart é simplesmente excepcional. Nosso engajamento aumentou 200% em 3 meses!",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <section className="py-20 bg-dhaart-blue-deep">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="font-dm-sans text-xl text-white/80 max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-raleway font-semibold text-dhaart-blue-deep">
                    {testimonial.name}
                  </h4>
                  <p className="font-dm-sans text-sm text-dhaart-blue-gray">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <p className="font-dm-sans text-dhaart-blue-gray leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex text-dhaart-beige mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
