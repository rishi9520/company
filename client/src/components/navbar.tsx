import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Package, Cpu, Phone, Users } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@asset/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percent = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled_percent);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/products", label: "Products", icon: Package },
    { href: "/technology", label: "Technology", icon: Cpu },
    { href: "/careers", label: "Careers", icon: Users },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-smooth shadow-lg shadow-primary/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled
            ? "backdrop-blur-xl bg-background/90 border-b border-white/10 shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer group relative" data-testid="link-home-logo">
            {/* Logo Container - Mobile Optimized */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden transition-smooth group-hover:scale-105 bg-gradient-to-br from-primary/15 to-secondary/15 backdrop-blur-sm border border-white/10">
              <img
                src={logoImage}
                alt="CODICORE Logo"
                className="w-full h-full object-contain p-1.5 sm:p-2"
              />
            </div>
            
            {/* Brand Name - Responsive */}
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold gradient-text tracking-tight">
                CODICORE
              </span>
              <span className="text-[8px] sm:text-[9px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block group-hover:text-primary/70 transition-smooth">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-smooth group ${
                  location === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {/* Background on Active/Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth ${location === link.href ? 'opacity-100' : ''}`}></div>
                
                {/* Icon */}
                <link.icon 
                  size={18} 
                  className={`relative z-10 transition-smooth group-hover:scale-110 ${
                    location === link.href ? 'text-primary' : 'group-hover:text-primary'
                  }`}
                />
                
                {/* Label */}
                <span className="relative z-10">{link.label}</span>
                
                {/* Active Indicator */}
                {location === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 glass-morphism rounded-xl flex items-center justify-center text-foreground transition-smooth hover:scale-110"
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            <div className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-6 py-4 transition-smooth ${
                    location === link.href
                      ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border-l-4 border-primary"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  <link.icon size={20} className={location === link.href ? 'text-primary' : ''} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
