// client/src/components/Navbar.tsx

import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Package, Cpu, Phone, Users } from "lucide-react";
import { useLocation, Link } from "wouter";
import logoImage from "@asset/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-gradient-to-r from-[#090909cc] to-[#111111cc] border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImage}
                alt="CODICORE Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-white tracking-wide hidden sm:block">
              CODICORE
            </span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></span>
                )}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-200 hover:text-white transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-4 pt-2 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    location === link.href
                      ? "bg-primary/20 text-primary"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
