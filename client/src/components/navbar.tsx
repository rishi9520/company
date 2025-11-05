import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Package, Cpu, Phone, Users, ChevronDown, Sparkles } from "lucide-react";
import { useLocation, Link } from "wouter";
import logoImage from "@asset/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percent = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled_percent);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300 shadow-lg shadow-primary/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-2xl bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 border-b border-white/10 shadow-2xl shadow-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with Enhanced Animation */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer group relative">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Logo Container */}
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                  <img
                    src={logoImage}
                    alt="CODICORE Logo"
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>
                
                {/* Sparkle Effect */}
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
              
              {/* Brand Name with Gradient */}
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-tight hidden sm:block group-hover:from-primary group-hover:via-white group-hover:to-secondary transition-all duration-500">
                  CODICORE
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase hidden lg:block group-hover:text-primary/80 transition-colors duration-300">
                  Private Limited
                </span>
              </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden ${
                    location === link.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isScrolled ? 'slideDown 0.5s ease-out' : 'none'
                  }}
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${location === link.href ? 'opacity-100' : ''}`}></div>
                  
                  {/* Icon with Animation */}
                  <link.icon 
                    size={18} 
                    className={`relative z-10 transition-all duration-300 group-hover:scale-110 ${
                      location === link.href ? 'text-primary' : 'group-hover:text-primary'
                    }`}
                  />
                  
                  {/* Label */}
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Active Indicator */}
                  {location === link.href && (
                    <>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                      <span className="absolute inset-0 border border-primary/20 rounded-xl"></span>
                    </>
                  )}
                  
                  {/* Hover Underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with Animation */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 text-gray-200 hover:text-white transition-all duration-300 group overflow-hidden"
            >
              {/* Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"></div>
              
              {/* Icon */}
              <div className="relative z-10">
                {isMobileMenuOpen ? (
                  <X size={20} className="animate-in spin-in-90 duration-300" />
                ) : (
                  <Menu size={20} className="animate-in spin-in-90 duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-b from-black/95 via-slate-900/95 to-black/95 backdrop-blur-2xl border-t border-white/10 px-6 pb-6 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                      location === link.href
                        ? "bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 text-white border border-primary/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out' : 'none'
                    }}
                  >
                    {/* Icon */}
                    <link.icon 
                      size={22} 
                      className={`transition-all duration-300 group-hover:scale-110 ${
                        location === link.href ? 'text-primary' : 'group-hover:text-primary'
                      }`}
                    />
                    
                    {/* Label */}
                    <span className="font-medium text-base">{link.label}</span>
                    
                    {/* Arrow Indicator */}
                    <ChevronDown 
                      size={16} 
                      className={`ml-auto transition-transform duration-300 ${
                        location === link.href ? 'rotate-90 text-primary' : 'opacity-0 group-hover:opacity-100 group-hover:rotate-90'
                      }`}
                    />
                    
                    {/* Active Glow */}
                    {location === link.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-xl"></div>
                    )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
