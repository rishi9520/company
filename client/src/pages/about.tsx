import { useEffect } from 'react';
import { Tag, MapPin, Shield, Users, Award, Target } from 'lucide-react';
import { useLenis } from '@/hooks/use-lenis';

export default function AboutPage() {
  useLenis();

  useEffect(() => {
    // Advanced 3D tilt effects
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        (card as HTMLElement).style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          translateZ(20px)
          scale3d(1.02, 1.02, 1.02)
        `;
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated 3D Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse-slow"></div>
        
        {/* Floating 3D Geometric Shapes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateZ(${Math.random() * 100}px)`,
              filter: `blur(${Math.random() * 2}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section with 3D Effect */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent animate-pulse-slow"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text relative z-10 animate-slide-up">
              About CODICORE
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A legally registered technology company pioneering innovative software solutions across India
            </p>
          </div>

          {/* Company Story with Enhanced Animations */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 animate-slide-right">
              <div className="relative">
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey</h2>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Founded with a vision to bridge the gap between innovative ideas and cutting-edge technology, 
                  CODICORE PRIVATE LIMITED has emerged as a trusted partner for businesses seeking digital transformation.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Our flagship product, SkoolHub 2.0, represents our commitment to revolutionizing educational 
                  technology with automated school management solutions that serve thousands of students.
                </p>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { number: '2025', label: 'Founded', icon: Award },
                  { number: '500+', label: 'Projects', icon: Target },
                  { number: '50+', label: 'Clients', icon: Users }
                ].map((stat, index) => (
                  <div key={index} className="tilt-card glass-morphism p-6 rounded-2xl text-center hover-lift transition-all duration-500">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary animate-glow" />
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office workspace with team collaboration" 
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Legal Certification with 3D Cards */}
          <div className="tilt-card glass-morphism p-12 rounded-3xl mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 animate-pulse-slow"></div>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text relative z-10">Legal Certification</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
              {[
                { icon: Tag, title: 'Company Registration', detail: 'CIN: U58200UP2025PTC230810', color: 'from-primary to-primary/60' },
                { icon: MapPin, title: 'Registered Office', detail: 'Uttar Pradesh, India', color: 'from-secondary to-secondary/60' },
                { icon: Shield, title: 'Ministry Approved', detail: 'Corporate Affairs', color: 'from-accent to-accent/60' }
              ].map((cert, index) => (
                <div key={index} className="tilt-card group relative p-8 rounded-2xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <cert.icon className="w-16 h-16 mx-auto mb-4 text-primary animate-glow" />
                  <h4 className="font-semibold text-foreground text-xl mb-3">{cert.title}</h4>
                  <p className="text-muted-foreground">{cert.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Team Section with 3D Cards */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-8 gradient-text">Meet Our Visionaries</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate innovators driving technology forward with expertise and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Rishi Agrawal',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
                description: 'Visionary leader with expertise in software development and business strategy'
              },
              {
                name: 'Tech Lead',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
                description: 'Full-stack developer specializing in React, Django, and cloud architecture'
              },
              {
                name: 'Product Manager',
                role: 'Head of Product',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
                description: 'Expert in user experience design and product development lifecycle'
              }
            ].map((member, index) => (
              <div key={index} className="tilt-card glass-morphism p-8 rounded-3xl text-center group relative overflow-hidden transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-20"></div>
                    <img 
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">{member.name}</h4>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}