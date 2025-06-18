import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectTabs from '../components/ProjectTabs';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <ProjectTabs />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
