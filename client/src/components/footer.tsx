import { useState } from "react";
import { Link } from "wouter";
import { 
  SiLinkedin, 
  SiFacebook, 
  SiYoutube,
  SiInstagram,
  SiX,
  SiWhatsapp 
} from "react-icons/si";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  ArrowUp,
  Sparkles,
  ExternalLink,
  Heart
} from "lucide-react";
import logoImage from "@asset/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const socialLinks = [
    { 
      icon: SiLinkedin, 
      href: "https://www.linkedin.com/in/rishi-agrawal-994a42253",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50",
      label: "LinkedIn"
    },
    { 
      icon: SiFacebook, 
      href: "https://www.facebook.com/share/1CVFhTjsSj/",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-400/50",
      label: "Facebook"
    },
    { 
      icon: SiYoutube, 
      href: "https://youtube.com/@softcode21",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:shadow-red-500/50",
      label: "YouTube"
    },
    { 
      icon: SiInstagram, 
      href: "#",
      color: "from-pink-600 via-purple-600 to-orange-500",
      hoverColor: "hover:shadow-pink-500/50",
      label: "Instagram"
    },
    { 
      icon: SiX, 
      href: "#",
      color: "from-slate-700 to-slate-900",
      hoverColor: "hover:shadow-slate-500/50",
      label: "X (Twitter)"
    }
  ];

  const productLinks = [
    "SkoolHub 2.0",
    "Retail Management",
    "Restaurant Solutions",
    "Custom Development",
    "AI Integration",
    "Cloud Services"
  ];

  const companyLinks = [
    { label: "About Us", action: () => scrollToSection("about") },
    { label: "Careers", action: () => scrollToSection("careers") },
    { label: "Technology", action: () => scrollToSection("technology") },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", action: () => scrollToSection("contact") }
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"];

  return (
    <footer className="relative bg-gradient-to-b from-background via-card to-background border-t border-white/10 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section with Newsletter */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Brand & Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-smooth"></div>
                  <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 to-secondary/15 backdrop-blur-sm border border-white/10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-smooth">
                    <img
                      src={logoImage}
                      alt="CODICORE Logo"
                      className="w-full h-full object-contain p-3"
                      data-testid="img-footer-logo"
                    />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-smooth animate-pulse" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">
                    CODICORE
                  </h3>
                  <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mt-1">
                    Private Limited
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
                Where <span className="text-primary font-semibold">ideas</span> meet <span className="text-secondary font-semibold">code</span>. 
                Building next-generation intelligent software systems for modern businesses.
              </p>

              <div className="flex items-center gap-2 text-sm">
                <div className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg">
                  <span className="text-gray-400">CIN:</span> 
                  <span className="text-gray-200 font-mono ml-2">U58200UP2025PTC230810</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="glass-card rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 transition-smooth">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold text-white">Stay Updated</h4>
              </div>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Subscribe to our newsletter for the latest updates, tech insights, and exclusive offers.
              </p>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-5 py-3.5 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-smooth"
                      data-testid="input-newsletter-email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-smooth flex items-center gap-2 group/btn"
                    data-testid="button-newsletter-submit"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                  </button>
                </div>

                {isSubscribed && (
                  <div className="absolute -bottom-8 left-0 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
                    ✓ Successfully subscribed!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Products */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map((item, index) => {
                  let linkHref = "#";
                  if (item === "SkoolHub 2.0") {
                    linkHref = "/products/skoolhub-2.0"; // Assuming this is the correct product page
                  } else if (item === "Retail Management") {
                    linkHref = "/products/retail-management"; // Placeholder
                  } else if (item === "Restaurant Solutions") {
                    linkHref = "/products/restaurant-solutions"; // Placeholder
                  } else if (item === "Custom Development") {
                    linkHref = "/services/custom-development"; // Placeholder
                  } else if (item === "AI Integration") {
                    linkHref = "/services/ai-integration"; // Placeholder
                  } else if (item === "Cloud Services") {
                    linkHref = "/services/cloud-services"; // Placeholder
                  }
                  return (
                    <li key={item}>
                      <a
                        href={linkHref}
                        className="text-gray-400 hover:text-primary transition-smooth text-sm flex items-center gap-2 group"
                        style={{ animationDelay: `${index * 50}ms` }}
                        data-testid={`link-product-${item.toLowerCase().replace(/ /g, '-')}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-smooth"></span>
                        <span className="group-hover:translate-x-1 transition-smooth">{item}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-smooth text-sm flex items-center gap-2 group"
                        style={{ animationDelay: `${index * 50}ms` }}
                        data-testid={`link-company-${link.label.toLowerCase().replace(/ /g, '-')}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-smooth"></span>
                        <span className="group-hover:translate-x-1 transition-smooth">{link.label}</span>
                      </a>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-primary transition-smooth text-sm flex items-center gap-2 group"
                        style={{ animationDelay: `${index * 50}ms` }}
                        data-testid={`button-company-${link.label.toLowerCase().replace(/ /g, '-')}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-smooth"></span>
                        <span className="group-hover:translate-x-1 transition-smooth">{link.label}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((item, index) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="text-gray-400 hover:text-primary transition-smooth text-sm flex items-center gap-2 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                      data-testid={`link-legal-${item.toLowerCase().replace(/ /g, '-')}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-smooth"></span>
                      <span className="group-hover:translate-x-1 transition-smooth">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Connect
              </h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <a href="mailto:contact@codicore.com" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-smooth group" data-testid="link-contact-email">
                  <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-smooth" />
                  <span className="text-sm">contact@codicore.com</span>
                </a>

                <a href="tel:+918954730444" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-smooth group" data-testid="link-contact-phone">
                  <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-smooth" />
                  <span className="text-sm">+91 8954730444</span>
                </a>

                <div className="flex items-start gap-3 text-gray-400 group" data-testid="text-contact-address">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">
                    Plot No. 27, Near Sector 15, Noida, Uttar Pradesh 201301, India
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative w-11 h-11 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-xl ${social.hoverColor} transition-smooth group`}
                      title={social.label}
                      style={{ animationDelay: `${index * 100}ms` }}
                      data-testid={`link-social-${social.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      <social.icon className="w-5 h-5 text-white relative z-10" />
                      <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
                    </a>
                  ))}
                  
                  {/* WhatsApp Link */}
                  <a 
                    href="https://wa.me/918954730444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white hover-lift transition-all duration-300 transform hover:scale-105"
                    data-testid="link-whatsapp"
                  >
                    <SiWhatsapp className="w-6 h-6" />
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CODICORE PRIVATE LIMITED
              </span>
              . All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in India
              </p>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-smooth group"
                aria-label="Scroll to top"
                data-testid="button-scroll-to-top"
              >
                <ArrowUp className="w-5 h-5 text-primary group-hover:translate-y-[-2px] transition-smooth" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}