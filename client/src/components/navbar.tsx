// client/src/components/navbar.tsx

import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Package, Cpu, Phone, Users } from 'lucide-react';
import { useLocation, Link } from 'wouter';
import logoImage from '@assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/products', label: 'Products', icon: Package },
    { href: '/technology', label: 'Technology', icon: Cpu },
    { href: '/careers', label: 'Careers', icon: Users },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-morphism backdrop-blur-xl bg-background/80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-3 cursor-pointer">
              <div className="w-25 h-25 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="CODICORE Logo" className="w-20 h-20 object-contain" />
              </div>
            
            </a>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location === link.href ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'
                }`}>
                  <link.icon size={16} />
                  <span>{link.label}</span>
                </a>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground hover:text-primary">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-morphism p-4 rounded-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                    location === link.href ? 'bg-primary/20 text-primary' : 'text-foreground hover:text-primary hover:bg-primary/10'
                  }`}>
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}