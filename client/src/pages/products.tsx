import { useEffect } from 'react';
import { CheckCircle, Play, GraduationCap, Store, Utensils, ArrowRight, Sparkles, Zap, Users } from 'lucide-react';
import { useLenis } from '@/hooks/use-lenis';

export default function ProductsPage() {
  useLenis();

  useEffect(() => {
    // Advanced particle animation system
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'fixed w-1 h-1 bg-primary/30 rounded-full pointer-events-none z-0';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = window.innerHeight + 'px';
      particle.style.animation = `float-up ${3 + Math.random() * 4}s linear forwards`;
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 7000);
    };

    const particleInterval = setInterval(createParticle, 200);

    // 3D card interactions
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        (card as HTMLElement).style.transform = 'translateY(-20px) rotateX(5deg) scale(1.02)';
        (card as HTMLElement).style.boxShadow = '0 40px 80px rgba(16, 185, 129, 0.3)';
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'translateY(0) rotateX(0) scale(1)';
        (card as HTMLElement).style.boxShadow = 'none';
      });
    });

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Dynamic 3D Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)] animate-pulse-slow"></div>
        
        {/* 3D Geometric Shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * 50}px)`,
            }}
          >
            <div className="w-8 h-8 border border-primary/20 rotate-45 animate-spin-slow"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-radial from-secondary/20 to-transparent animate-pulse-slow"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text relative z-10 animate-slide-up">
              Our Products
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Revolutionary solutions transforming industries with cutting-edge technology
            </p>
          </div>

          {/* SkoolHub 2.0 Flagship Showcase */}
          <div className="product-card glass-morphism p-12 rounded-3xl mb-20 relative overflow-hidden transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse-slow"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-lg font-bold animate-glow">
                  <Sparkles className="w-5 h-5" />
                  <span>Flagship Product</span>
                </div>
                
                <h2 className="text-5xl font-bold gradient-text">SkoolHub 2.0</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Next-generation automated school management ecosystem that revolutionizes educational administration 
                  with AI-powered insights and seamless integration across all school operations.
                </p>

                {/* Feature Grid with 3D Effects */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: Users, text: 'Student Information Management' },
                    { icon: Zap, text: 'Automated Attendance Tracking' },
                    { icon: CheckCircle, text: 'Smart Fee Management' },
                    { icon: CheckCircle, text: 'Parent-Teacher Communication' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg glass-morphism hover-lift transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary animate-glow" />
                      <span className="text-foreground font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 flex items-center space-x-3 transform hover:scale-105">
                    <Play size={24} />
                    <span>Live Demo</span>
                  </button>
                  <button className="px-8 py-4 glass-morphism text-foreground rounded-xl font-bold hover-lift transition-all duration-300 transform hover:scale-105">
                    Request Quote
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="SkoolHub 2.0 dashboard interface"
                  className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-float">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories with Enhanced 3D Effects */}
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: GraduationCap,
                title: 'Education Solutions',
                description: 'Comprehensive digital transformation for educational institutions with AI-powered analytics',
                gradient: 'from-blue-500 to-purple-600',
                bgGradient: 'from-blue-500/10 to-purple-600/10'
              },
              {
                icon: Store,
                title: 'Retail Management',
                description: 'Advanced point of sale and inventory management with real-time analytics and insights',
                gradient: 'from-green-500 to-emerald-600',
                bgGradient: 'from-green-500/10 to-emerald-600/10'
              },
              {
                icon: Utensils,
                title: 'Restaurant Solutions',
                description: 'Complete restaurant ecosystem with AI-powered kitchen automation and customer management',
                gradient: 'from-orange-500 to-red-600',
                bgGradient: 'from-orange-500/10 to-red-600/10'
              }
            ].map((product, index) => (
              <div key={index} className="product-card group relative overflow-hidden transition-all duration-700">
                <div className="glass-morphism p-10 rounded-3xl h-full relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Animated Icon Container */}
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-3xl animate-spin-slow opacity-20`}></div>
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <product.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:gradient-text transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {product.description}
                    </p>

                    <button className="group/btn flex items-center space-x-3 text-primary font-bold hover:text-secondary transition-colors duration-300">
                      <span>Explore Features</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Showcase */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold gradient-text mb-8">Why Choose Our Solutions?</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'AI-Powered', description: 'Machine learning integration', icon: '🤖' },
                { title: 'Cloud-Native', description: 'Scalable infrastructure', icon: '☁️' },
                { title: '24/7 Support', description: 'Round-the-clock assistance', icon: '🚀' },
                { title: 'Mobile-First', description: 'Responsive design', icon: '📱' }
              ].map((feature, index) => (
                <div key={index} className="product-card glass-morphism p-6 rounded-2xl text-center hover-lift transition-all duration-300">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}