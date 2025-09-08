import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '@assets/logo_real_1757315406260.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-morphism backdrop-blur-20' : 'glass-morphism'
      }`}
      style={{
        background: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={logoImage} 
                alt="CODICORE Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold gradient-text">CODICORE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('technology')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('careers')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Careers
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-morphism p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition-colors text-left">Products</button>
              <button onClick={() => scrollToSection('technology')} className="text-foreground hover:text-primary transition-colors text-left">Technology</button>
              <button onClick={() => scrollToSection('careers')} className="text-foreground hover:text-primary transition-colors text-left">Careers</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
