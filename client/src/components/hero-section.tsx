import { Play, ChevronDown, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';
import logoImage from '@assets/logo_real_1757315406260.png';

export default function HeroSection() {
  const [, setLocation] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-secondary/20 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="logo-container mb-8">
          <div className="logo-glow"></div>
          <div className="w-32 h-32 mx-auto rounded-3xl flex items-center justify-center relative z-10 hover-lift overflow-hidden">
            <img 
              src={logoImage} 
              alt="CODICORE Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up">
          CODICORE
        </h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
          PRIVATE LIMITED
        </h2>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Ideas meet Code. Next-gen software solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => setLocation('/products')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            data-testid="button-explore-products"
          >
            <span>Explore Products</span>
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => setLocation('/dashboard')}
            className="px-8 py-4 glass-morphism text-foreground rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <Play size={20} />
            <span>View Dashboard</span>
          </button>
        </div>
        
        <div className="mt-16 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.8s' }}>
          CIN: U58200UP2025PTC230810 | Legally Registered in India
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start pt-2"
        >
          <ChevronDown className="w-4 h-4 text-primary animate-pulse" />
        </button>
      </div>
    </section>
  );
}
