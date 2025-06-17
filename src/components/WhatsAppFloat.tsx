
import { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5511999999999?text=Olá! Vim através do site da Dhaart e gostaria de conversar sobre um projeto"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center group ${
          animate ? 'animate-bounce' : ''
        }`}
      >
        <span className="text-2xl mr-0 group-hover:mr-3 transition-all duration-300">💬</span>
        <span className="font-dm-sans font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs">
          Fale com a Dhaart
        </span>
      </a>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-600 transition-colors"
      >
        ×
      </button>
    </div>
  );
};

export default WhatsAppFloat;
