import { useEffect } from 'react';
import { Rocket, Users, TrendingUp, MapPin, Clock, DollarSign, Award, Star } from 'lucide-react';
import { useLenis } from '@/hooks/use-lenis';

export default function CareersPage() {
  useLenis();

  useEffect(() => {
    // Advanced career page animations
    const createCareerParticle = () => {
      const particles = ['💼', '🚀', '⭐', '💡', '🎯', '🏆', '💪', '🌟'];
      const particle = document.createElement('div');
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.className = 'fixed text-2xl pointer-events-none z-0 animate-float3d';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      particle.style.color = `hsl(${160 + Math.random() * 60}, 82%, 36%)`;
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 20000);
    };

    const careerInterval = setInterval(createCareerParticle, 600);

    // Enhanced job card animations
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02) translateZ(20px)';
        (card as HTMLElement).style.boxShadow = '0 30px 60px rgba(16, 185, 129, 0.3)';
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
        (card as HTMLElement).style.boxShadow = 'none';
      });
    });

    return () => {
      clearInterval(careerInterval);
    };
  }, []);

  const BenefitCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
    <div 
      className="benefit-card glass-morphism p-8 rounded-3xl hover-lift transition-all duration-700 group relative overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  const JobCard = ({ title, department, type, location, salary, experience, skills, description, urgent = false, delay = 0 }: any) => (
    <div 
      className="job-card glass-morphism p-8 rounded-3xl relative overflow-hidden group transition-all duration-700"
      style={{ animationDelay: `${delay}s` }}
    >
      {urgent && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
          Urgent Hiring
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap items-center space-x-4 text-muted-foreground mb-4">
              <span className="flex items-center space-x-1">
                <Award size={16} className="text-primary" />
                <span>{department}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock size={16} className="text-secondary" />
                <span>{type}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin size={16} className="text-accent" />
                <span>{location}</span>
              </span>
            </div>
            
            {salary && (
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign size={16} className="text-green-500" />
                <span className="text-green-500 font-semibold">{salary}</span>
              </div>
            )}
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              <strong>Experience:</strong> {experience}
            </p>
          </div>
          
          <button 
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 transform hover:scale-105 group-hover:from-secondary group-hover:to-accent"
            data-testid={`button-apply-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Advanced Career Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(16,185,129,0.1),rgba(139,92,246,0.1),rgba(245,158,11,0.1),rgba(16,185,129,0.1))] animate-spin-slow"></div>
        
        {/* Career Growth Path */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="career-path" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                <path d="M 50 150 Q 150 50 250 150 Q 150 250 50 150" stroke="url(#gradient-career)" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="150" r="4" fill="#10B981"/>
                <circle cx="150" cy="100" r="3" fill="#06B6D4"/>
                <circle cx="250" cy="150" r="4" fill="#8B5CF6"/>
                <circle cx="150" cy="200" r="3" fill="#F59E0B"/>
              </pattern>
              <linearGradient id="gradient-career">
                <stop offset="0%" stopColor="#10B981"/>
                <stop offset="50%" stopColor="#06B6D4"/>
                <stop offset="100%" stopColor="#8B5CF6"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#career-path)" className="animate-pulse-slow"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent animate-pulse-slow"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text relative z-10 animate-slide-up">
              Join Our Team
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Shape the future of technology with passionate innovators and game-changing projects
            </p>
          </div>

          {/* Company Culture & Benefits */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 animate-slide-right">
              <h2 className="text-4xl font-bold gradient-text">Why CODICORE?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join a team that's not just building software, but crafting the future of digital innovation. 
                We believe in empowering our team members to reach their full potential while working on 
                projects that make a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '4.8/5', label: 'Employee Rating', icon: '⭐' },
                  { number: '95%', label: 'Retention Rate', icon: '💪' },
                  { number: '50+', label: 'Team Members', icon: '👥' },
                  { number: '100%', label: 'Remote Friendly', icon: '🏠' }
                ].map((stat, index) => (
                  <div key={index} className="benefit-card glass-morphism p-6 rounded-2xl text-center hover-lift transition-all duration-300">
                    <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse team collaboration" 
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold gradient-text text-center mb-16">Employee Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard
                icon={Rocket}
                title="Innovation Culture"
                description="Work on cutting-edge projects with the latest technologies and methodologies"
                delay={0.1}
              />
              <BenefitCard
                icon={TrendingUp}
                title="Career Growth"
                description="Clear advancement paths with mentorship and skill development programs"
                delay={0.2}
              />
              <BenefitCard
                icon={Users}
                title="Team Collaboration"
                description="Join passionate professionals in a supportive and inclusive environment"
                delay={0.3}
              />
              <BenefitCard
                icon={Award}
                title="Recognition"
                description="Performance-based rewards, bonuses, and public recognition programs"
                delay={0.4}
              />
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold gradient-text text-center mb-16">Current Openings</h2>
            
            <div className="space-y-8">
              <JobCard
                title="Senior React Developer"
                department="Frontend Engineering"
                type="Full-time"
                location="Remote/Hybrid"
                salary="₹8,00,000 - ₹15,00,000"
                experience="4-7 years"
                urgent={true}
                skills={["React 18", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]}
                description="Lead the development of next-generation web applications using React 18 and TypeScript. You'll work closely with our design and backend teams to create seamless user experiences."
                delay={0.1}
              />
              
              <JobCard
                title="Python Backend Developer"
                department="Backend Engineering"
                type="Full-time"
                location="Remote/On-site"
                salary="₹6,00,000 - ₹12,00,000"
                experience="3-6 years"
                skills={["Python", "Django", "FastAPI", "PostgreSQL", "AWS", "Docker"]}
                description="Build scalable backend systems and APIs using Python and Django. Focus on performance optimization and system architecture for high-traffic applications."
                delay={0.2}
              />
              
              <JobCard
                title="UI/UX Designer"
                department="Design"
                type="Full-time"
                location="Hybrid"
                salary="₹5,00,000 - ₹10,00,000"
                experience="2-5 years"
                skills={["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"]}
                description="Create intuitive and beautiful user interfaces for our products. Conduct user research and create design systems that scale across multiple platforms."
                delay={0.3}
              />
              
              <JobCard
                title="DevOps Engineer"
                department="Infrastructure"
                type="Full-time"
                location="Remote"
                salary="₹7,00,000 - ₹14,00,000"
                experience="3-6 years"
                urgent={true}
                skills={["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring"]}
                description="Manage cloud infrastructure and deployment pipelines. Ensure system reliability, scalability, and security across all our production environments."
                delay={0.4}
              />
              
              <JobCard
                title="Mobile App Developer"
                department="Mobile Engineering"
                type="Full-time"
                location="Hybrid"
                salary="₹6,00,000 - ₹11,00,000"
                experience="2-5 years"
                skills={["React Native", "Flutter", "iOS", "Android", "Firebase"]}
                description="Develop cross-platform mobile applications for iOS and Android. Work with native features and create smooth, performant mobile experiences."
                delay={0.5}
              />
            </div>
          </div>

          {/* Application Process */}
          <div className="benefit-card glass-morphism p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 animate-pulse-slow"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold gradient-text mb-8">Application Process</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {[
                  { step: "01", title: "Apply Online", description: "Submit your resume and portfolio" },
                  { step: "02", title: "Initial Screening", description: "HR interview and basic assessment" },
                  { step: "03", title: "Technical Round", description: "Coding test and technical discussion" },
                  { step: "04", title: "Final Interview", description: "Meet the team and discuss projects" }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-lg">
                      {process.step}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{process.title}</h4>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6">
                Don't see the perfect role? Send us your resume anyway! We're always looking for talented individuals.
              </p>
              
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 transform hover:scale-105">
                Send General Application
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        
        .benefit-card {
          transform-style: preserve-3d;
          animation: slideUp 0.8s ease-out both;
        }
        
        .job-card {
          transform-style: preserve-3d;
          animation: slideUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}