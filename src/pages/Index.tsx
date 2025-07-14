
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Labs from '@/components/Labs';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Resume />
      <Labs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
