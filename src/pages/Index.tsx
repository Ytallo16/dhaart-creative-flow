
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectTabs from '../components/ProjectTabs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectTabs />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
