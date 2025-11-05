import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock } from 'lucide-react';
import { SiWhatsapp, SiLinkedin, SiFacebook, SiYoutube, SiX, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLenis } from '@/hooks/use-lenis';

export default function ContactPage() {
  useLenis();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    // Advanced floating elements for contact page
    const createContactParticle = () => {
      const icons = ['✉️', '📞', '🌐', '💼', '🚀', '⚡', '💡', '🎯'];
      const particle = document.createElement('div');
      particle.textContent = icons[Math.floor(Math.random() * icons.length)];
      particle.className = 'fixed text-xl pointer-events-none z-0 animate-contact-float';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      particle.style.animationDuration = `${6 + Math.random() * 8}s`;
      particle.style.opacity = '0.6';
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 14000);
    };

    const contactInterval = setInterval(createContactParticle, 500);

    // Enhanced form field animations
    const inputs = document.querySelectorAll('.form-field');
    inputs.forEach((input, index) => {
      input.addEventListener('focus', () => {
        (input.parentElement as HTMLElement)?.classList.add('field-focused');
      });
      
      input.addEventListener('blur', () => {
        (input.parentElement as HTMLElement)?.classList.remove('field-focused');
      });
    });

    return () => {
      clearInterval(contactInterval);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully! 🚀",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          budget: '',
          timeline: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message ❌",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const FormField = ({ children, delay = 0 }: any) => (
    <div className="form-field-container relative transition-all duration-500" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );

  const ContactCard = ({ icon: Icon, title, details, link, delay = 0 }: any) => (
    <div 
      className="contact-card glass-morphism p-8 rounded-3xl hover-lift transition-all duration-700 group relative overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground">{details}</p>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-secondary transition-colors duration-300 text-sm"
              >
                Click to connect →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Advanced Contact Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_50%)] animate-pulse-slow"></div>
        
        {/* Communication Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="2" fill="#10B981"/>
                <circle cx="50" cy="50" r="1" fill="#06B6D4"/>
                <circle cx="150" cy="50" r="1" fill="#8B5CF6"/>
                <circle cx="50" cy="150" r="1" fill="#F59E0B"/>
                <circle cx="150" cy="150" r="1" fill="#EF4444"/>
                <path d="M100 100 L50 50 M100 100 L150 50 M100 100 L50 150 M100 100 L150 150" 
                      stroke="url(#gradient-network)" strokeWidth="1" opacity="0.3"/>
              </pattern>
              <linearGradient id="gradient-network">
                <stop offset="0%" stopColor="#10B981"/>
                <stop offset="100%" stopColor="#06B6D4"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" className="animate-pulse-slow"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent animate-pulse-slow"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text relative z-10 animate-slide-up">
              Get In Touch
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ready to transform your business? Let's discuss your next big project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="contact-card glass-morphism p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse-slow"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold gradient-text mb-8 flex items-center space-x-3">
                  <MessageCircle className="w-8 h-8" />
                  <span>Send Us a Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField delay={0.1}>
                      <Label htmlFor="firstName" className="text-foreground font-semibold">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="form-field bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl transition-all duration-300 focus:border-primary focus:bg-muted"
                        data-testid="input-first-name"
                        required
                      />
                    </FormField>
                    <FormField delay={0.2}>
                      <Label htmlFor="lastName" className="text-foreground font-semibold">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="form-field bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl transition-all duration-300 focus:border-primary focus:bg-muted"
                        data-testid="input-last-name"
                        required
                      />
                    </FormField>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField delay={0.3}>
                      <Label htmlFor="email" className="text-foreground font-semibold">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-field bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl transition-all duration-300 focus:border-primary focus:bg-muted"
                        data-testid="input-email"
                        required
                      />
                    </FormField>
                    <FormField delay={0.4}>
                      <Label htmlFor="phone" className="text-foreground font-semibold">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-field bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl transition-all duration-300 focus:border-primary focus:bg-muted"
                        data-testid="input-phone"
                      />
                    </FormField>
                  </div>

                  <FormField delay={0.5}>
                    <Label htmlFor="company" className="text-foreground font-semibold">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-field bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl transition-all duration-300 focus:border-primary focus:bg-muted"
                      data-testid="input-company"
                    />
                  </FormField>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField delay={0.6}>
                      <Label htmlFor="subject" className="text-foreground font-semibold">Project Type *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                        <SelectTrigger className="bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl" data-testid="select-subject">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="skoolhub">SkoolHub 2.0 Demo</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="custom">Custom Software Solution</SelectItem>
                          <SelectItem value="consultation">Technical Consultation</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormField>
                    <FormField delay={0.7}>
                      <Label htmlFor="budget" className="text-foreground font-semibold">Project Budget</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger className="bg-muted/50 border-border text-foreground mt-2 h-12 rounded-xl" data-testid="select-budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1lakh">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1lakh-5lakh">₹1,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="5lakh-10lakh">₹5,00,000 - ₹10,00,000</SelectItem>
                          <SelectItem value="above-10lakh">Above ₹10,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormField>
                  </div>
                  
                  <FormField delay={0.8}>
                    <Label htmlFor="message" className="text-foreground font-semibold">Project Details *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-field bg-muted/50 border-border text-foreground mt-2 rounded-xl transition-all duration-300 focus:border-primary focus:bg-muted"
                      data-testid="textarea-message"
                      required
                    />
                  </FormField>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white h-14 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105"
                    data-testid="button-send-message"
                  >
                    Send Message <Send className="w-5 h-5 ml-3" />
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information & Social */}
            <div className="space-y-8">
              <ContactCard
                icon={Mail}
                title="Email Us"
                details="contact@codicore.com"
                link="mailto:contact@codicore.com"
                delay={0.1}
              />
              
              <ContactCard
                icon={Phone}
                title="Call Us"
                details="+91 7599377142, +91 7819914361"
                link="tel:+917599377142"
                delay={0.2}
              />
              
              <ContactCard
                icon={MapPin}
                title="Visit Us"
                details="JAWAHAR BAJAR B11 BLOCK SADABAD HATHRAS 281306, UTTAR PRADESH"
                delay={0.3}
              />

              <ContactCard
                icon={Clock}
                title="Business Hours"
                details="Mon - Fri: 9:00 AM - 7:00 PM IST"
                delay={0.4}
              />

              {/* Enhanced Social Media */}
              <div className="contact-card glass-morphism p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 animate-pulse-slow"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                    <span>Connect With Us</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://www.linkedin.com/in/rishi-agrawal-994a42253" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white hover-lift transition-all duration-300 transform hover:scale-105"
                      data-testid="link-linkedin"
                    >
                      <SiLinkedin className="w-6 h-6" />
                      <span className="font-semibold">LinkedIn</span>
                    </a>
                    <a 
                      href="https://youtube.com/@softcode21" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl text-white hover-lift transition-all duration-300 transform hover:scale-105"
                      data-testid="link-youtube"
                    >
                      <SiYoutube className="w-6 h-6" />
                      <span className="font-semibold">YouTube</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/share/1CVFhTjsSj/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white hover-lift transition-all duration-300 transform hover:scale-105"
                      data-testid="link-facebook"
                    >
                      <SiFacebook className="w-6 h-6" />
                      <span className="font-semibold">Facebook</span>
                    </a>
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
                    <a 
                      href="https://x.com/FirstOf60837" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl text-white hover-lift transition-all duration-300 transform hover:scale-105"
                      data-testid="link-twitter"
                    >
                      <SiX className="w-6 h-6" />
                      <span className="font-semibold">Twitter</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/rishiagrawal45202/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 rounded-2xl text-white hover-lift transition-all duration-300 transform hover:scale-105"
                      data-testid="link-instagram"
                    >
                      <SiInstagram className="w-6 h-6" />
                      <span className="font-semibold">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Promise */}
              <div className="contact-card glass-morphism p-6 rounded-2xl text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary animate-glow" />
                <h4 className="font-bold text-foreground mb-2">Quick Response Promise</h4>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours on business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes contact-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 1;
          }
        }
        
        .animate-contact-float {
          animation: contact-float 8s ease-in-out infinite;
        }
        
        .field-focused {
          transform: scale(1.02);
        }
        
        .form-field:focus {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        
        .contact-card {
          transform-style: preserve-3d;
          animation: slideUp 0.8s ease-out both;
        }
        
        .form-field-container {
          animation: slideUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}