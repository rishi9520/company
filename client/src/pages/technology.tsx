import { useEffect } from 'react';
import { Database, Cloud, Brain, Code, Smartphone, Lock } from 'lucide-react';
import { SiReact, SiPython, SiDocker, SiKubernetes, SiAws, SiPostgresql } from 'react-icons/si';
import { useLenis } from '@/hooks/use-lenis';

export default function TechnologyPage() {
  useLenis();

  useEffect(() => {
    // Advanced 3D tech visualization
    const createTechParticle = () => {
      const particles = ['⚡', '💻', '🚀', '🔧', '⚙️', '💡', '🌐', '📱'];
      const particle = document.createElement('div');
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.className = 'fixed text-2xl pointer-events-none z-0 animate-tech-float';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      particle.style.color = `hsl(${160 + Math.random() * 60}, 82%, 36%)`;
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      particle.style.transform = `translateZ(${Math.random() * 100}px) rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 20000);
    };

    const techInterval = setInterval(createTechParticle, 400);

    // 3D card interactions for tech stacks
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
      card.addEventListener('mouseenter', (e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const rotateX = (mouseY - centerY) / 10;
        const rotateY = (centerX - mouseX) / 10;
        
        (card as HTMLElement).style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          translateZ(30px)
          scale3d(1.05, 1.05, 1.05)
        `;
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
      });
    });

    return () => {
      clearInterval(techInterval);
    };
  }, []);

  const TechCard = ({ icon: Icon, title, description, technologies, gradient, delay = 0 }: any) => (
    <div 
      className="tech-card glass-morphism p-8 rounded-3xl hover-lift transition-all duration-700 relative overflow-hidden group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="relative mb-8">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl animate-spin-slow opacity-20`}></div>
          <div className={`relative w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <p className="text-sm text-primary font-medium">
          {technologies}
        </p>
      </div>
    </div>
  );

  const TechShowcase = ({ icon: Icon, name, description, color }: any) => (
    <div className="tech-card flex items-center space-x-4 p-6 glass-morphism rounded-2xl hover-lift transition-all duration-500 group">
      <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-foreground text-lg group-hover:gradient-text transition-all duration-300">
          {name}
        </h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Advanced 3D Tech Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.1),rgba(6,182,212,0.1),rgba(139,92,246,0.1),rgba(245,158,11,0.1),rgba(16,185,129,0.1))] animate-spin-slow"></div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 50 50 L 50 0" stroke="url(#gradient-circuit)" strokeWidth="1" fill="none"/>
                <circle cx="50" cy="50" r="3" fill="url(#gradient-circuit)"/>
              </pattern>
              <linearGradient id="gradient-circuit">
                <stop offset="0%" stopColor="#10B981"/>
                <stop offset="100%" stopColor="#06B6D4"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="animate-pulse-slow"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-radial from-secondary/20 to-transparent animate-pulse-slow"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text relative z-10 animate-slide-up">
              Technology Stack
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Cutting-edge technologies and frameworks powering next-generation solutions
            </p>
          </div>

          {/* Main Tech Categories */}
          <div className="grid lg:grid-cols-4 gap-8 mb-20">
            <TechCard
              icon={Code}
              title="Frontend"
              description="Modern, responsive user interfaces built with the latest frameworks"
              technologies="React 18, TypeScript, Tailwind CSS, Next.js"
              gradient="from-blue-500 to-cyan-600"
              delay={0.1}
            />
            <TechCard
              icon={Database}
              title="Backend"
              description="Scalable server-side architecture with robust API design"
              technologies="Node.js, Python, Django, Express.js"
              gradient="from-green-500 to-emerald-600"
              delay={0.2}
            />
            <TechCard
              icon={Brain}
              title="AI & ML"
              description="Intelligent features powered by machine learning algorithms"
              technologies="TensorFlow, PyTorch, OpenAI, Hugging Face"
              gradient="from-purple-500 to-pink-600"
              delay={0.3}
            />
            <TechCard
              icon={Cloud}
              title="Cloud & DevOps"
              description="Scalable infrastructure with automated deployment pipelines"
              technologies="AWS, Docker, Kubernetes, CI/CD"
              gradient="from-orange-500 to-red-600"
              delay={0.4}
            />
          </div>

          {/* Detailed Technology Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold gradient-text mb-8 animate-slide-right">
                Core Technologies
              </h2>
              
              <div className="space-y-6">
                <TechShowcase
                  icon={SiReact}
                  name="React 18 & TypeScript"
                  description="Component-based architecture with type safety"
                  color="bg-gradient-to-br from-blue-500 to-blue-600"
                />
                <TechShowcase
                  icon={SiPython}
                  name="Python & Django"
                  description="Robust backend development framework"
                  color="bg-gradient-to-br from-green-500 to-green-600"
                />
                <TechShowcase
                  icon={SiPostgresql}
                  name="PostgreSQL"
                  description="Advanced relational database system"
                  color="bg-gradient-to-br from-blue-600 to-indigo-600"
                />
                <TechShowcase
                  icon={SiAws}
                  name="Amazon Web Services"
                  description="Cloud infrastructure and services"
                  color="bg-gradient-to-br from-orange-500 to-yellow-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold gradient-text mb-8 animate-slide-left">
                Development Tools
              </h2>
              
              <div className="space-y-6">
                <TechShowcase
                  icon={SiDocker}
                  name="Docker Containers"
                  description="Containerized application deployment"
                  color="bg-gradient-to-br from-blue-500 to-blue-700"
                />
                <TechShowcase
                  icon={SiKubernetes}
                  name="Kubernetes"
                  description="Container orchestration platform"
                  color="bg-gradient-to-br from-purple-500 to-purple-700"
                />
                <TechShowcase
                  icon={Smartphone}
                  name="Mobile Development"
                  description="Cross-platform mobile applications"
                  color="bg-gradient-to-br from-pink-500 to-rose-600"
                />
                <TechShowcase
                  icon={Lock}
                  name="Security & Authentication"
                  description="Enterprise-grade security protocols"
                  color="bg-gradient-to-br from-red-500 to-red-700"
                />
              </div>
            </div>
          </div>

          {/* Architecture Visualization */}
          <div className="tech-card glass-morphism p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse-slow"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold gradient-text text-center mb-12">
                System Architecture Overview
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    title: 'Frontend Layer',
                    items: ['React Applications', 'Mobile Apps', 'Progressive Web Apps'],
                    icon: '🖥️'
                  },
                  {
                    title: 'API Gateway',
                    items: ['REST APIs', 'GraphQL', 'Real-time WebSockets'],
                    icon: '🌐'
                  },
                  {
                    title: 'Data Layer',
                    items: ['PostgreSQL', 'Redis Cache', 'File Storage'],
                    icon: '🗄️'
                  }
                ].map((layer, index) => (
                  <div key={index} className="space-y-6">
                    <div className="text-6xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {layer.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{layer.title}</h3>
                    <ul className="space-y-2">
                      {layer.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm bg-muted/30 px-3 py-2 rounded-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {[
              { metric: '99.9%', label: 'Uptime', icon: '⚡' },
              { metric: '<200ms', label: 'Response Time', icon: '🚀' },
              { metric: '1M+', label: 'Requests/Day', icon: '📊' },
              { metric: '100%', label: 'Security Score', icon: '🔒' }
            ].map((stat, index) => (
              <div key={index} className="tech-card glass-morphism p-6 rounded-2xl text-center hover-lift transition-all duration-300">
                <div className="text-4xl mb-4 animate-glow" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tech-float {
          0%, 100% { 
            transform: translateY(0px) rotateZ(0deg) scale(1);
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-50px) rotateZ(90deg) scale(1.2);
            opacity: 1;
          }
          50% { 
            transform: translateY(-30px) rotateZ(180deg) scale(0.8);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-70px) rotateZ(270deg) scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-tech-float {
          animation: tech-float 10s ease-in-out infinite;
        }
        
        .tech-card {
          transform-style: preserve-3d;
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}