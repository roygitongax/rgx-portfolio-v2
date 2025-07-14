
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Photo Placeholder */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-4 border-primary/30 animate-scale-in">
          <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">RG</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Roy Gitonga
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gradient max-w-3xl mx-auto leading-tight">
          Aspiring Security Engineer | Asset Audit
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          IT Professional | Cybersecurity Enthusiast | Low-Code Developer
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="apple-gradient hover:opacity-90 transition-all duration-300 hover-lift text-lg px-8 py-6 text-black font-semibold"
            onClick={() => {
              console.log('Download CV clicked');
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV (PDF)
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 hover-lift border-primary text-primary hover:bg-primary hover:text-black"
            onClick={() => scrollToSection('resume')}
          >
            View Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/roygitongax" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-foreground hover:text-primary transition-all duration-300 hover-lift"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/roy-gitonga/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-foreground hover:text-primary transition-all duration-300 hover-lift"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:roygitongax@outlook.com" 
            className="p-3 rounded-full bg-secondary text-foreground hover:text-primary transition-all duration-300 hover-lift"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="tel:+254769873257" 
            className="p-3 rounded-full bg-secondary text-foreground hover:text-primary transition-all duration-300 hover-lift"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('resume')}
          className="animate-bounce hover:text-primary transition-colors duration-300"
          aria-label="Scroll to Resume"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
