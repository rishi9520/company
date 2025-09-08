import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Package, Cpu, Phone, BarChart3, Users } from 'lucide-react';
import { useLocation } from 'wouter';
import logoImage from '@assets/logo_real_1757315406260.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (path: string) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
  };

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
              onClick={() => navigateTo('/')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
            >
              <Home size={16} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => navigateTo('/about')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/about' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
            >
              <Info size={16} />
              <span>About</span>
            </button>
            <button 
              onClick={() => navigateTo('/products')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/products' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
            >
              <Package size={16} />
              <span>Products</span>
            </button>
            <button 
              onClick={() => navigateTo('/technology')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/technology' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
            >
              <Cpu size={16} />
              <span>Technology</span>
            </button>
            <button 
              onClick={() => navigateTo('/careers')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/careers' ? 'bg-accent/20 text-accent' : 'text-foreground hover:text-accent hover:bg-accent/10'}`}
            >
              <Users size={16} />
              <span>Careers</span>
            </button>
            <button 
              onClick={() => navigateTo('/dashboard')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/dashboard' ? 'bg-secondary/20 text-secondary' : 'text-foreground hover:text-secondary hover:bg-secondary/10'}`}
            >
              <BarChart3 size={16} />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => navigateTo('/contact')} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location === '/contact' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
            >
              <Phone size={16} />
              <span>Contact</span>
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
          <div className="md:hidden mt-4 glass-morphism p-6 rounded-2xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateTo('/')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => navigateTo('/about')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/about' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
              >
                <Info size={20} />
                <span>About</span>
              </button>
              <button 
                onClick={() => navigateTo('/products')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/products' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
              >
                <Package size={20} />
                <span>Products</span>
              </button>
              <button 
                onClick={() => navigateTo('/technology')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/technology' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
              >
                <Cpu size={20} />
                <span>Technology</span>
              </button>
              <button 
                onClick={() => navigateTo('/careers')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/careers' ? 'bg-accent/20 text-accent' : 'text-foreground hover:text-accent hover:bg-accent/10'}`}
              >
                <Users size={20} />
                <span>Careers</span>
              </button>
              <button 
                onClick={() => navigateTo('/dashboard')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/dashboard' ? 'bg-secondary/20 text-secondary' : 'text-foreground hover:text-secondary hover:bg-secondary/10'}`}
              >
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </button>
              <button 
                onClick={() => navigateTo('/contact')} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${location === '/contact' ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'}`}
              >
                <Phone size={20} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
