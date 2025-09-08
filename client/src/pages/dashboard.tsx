import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, DollarSign, Activity, Zap, Brain, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLenis } from '@/hooks/use-lenis';

const analyticsData = [
  { month: 'Jan', revenue: 45000, users: 1200, projects: 8 },
  { month: 'Feb', revenue: 52000, users: 1450, projects: 12 },
  { month: 'Mar', revenue: 48000, users: 1380, projects: 10 },
  { month: 'Apr', revenue: 61000, users: 1600, projects: 15 },
  { month: 'May', revenue: 58000, users: 1520, projects: 13 },
  { month: 'Jun', revenue: 67000, users: 1800, projects: 18 }
];

const projectsData = [
  { name: 'SkoolHub 2.0', value: 45, color: '#10B981' },
  { name: 'Retail Solutions', value: 30, color: '#06B6D4' },
  { name: 'Restaurant Tech', value: 15, color: '#8B5CF6' },
  { name: 'Custom Dev', value: 10, color: '#F59E0B' }
];

export default function DashboardPage() {
  useLenis();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    // Advanced 3D floating elements
    const createFloatingElement = () => {
      const element = document.createElement('div');
      element.className = 'fixed pointer-events-none z-0';
      element.style.width = '4px';
      element.style.height = '4px';
      element.style.background = `linear-gradient(45deg, 
        hsl(${Math.random() * 60 + 160}, 82%, 36%), 
        hsl(${Math.random() * 60 + 180}, 95%, 42%))`;
      element.style.borderRadius = '50%';
      element.style.left = Math.random() * window.innerWidth + 'px';
      element.style.top = Math.random() * window.innerHeight + 'px';
      element.style.animation = `float-3d ${5 + Math.random() * 10}s ease-in-out infinite`;
      element.style.transform = `translateZ(${Math.random() * 100}px)`;
      document.body.appendChild(element);
      
      setTimeout(() => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      }, 15000);
    };

    const floatInterval = setInterval(createFloatingElement, 300);

    // Advanced particle system
    const createParticleSystem = () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createFloatingElement(), i * 100);
      }
    };

    createParticleSystem();

    return () => {
      clearInterval(floatInterval);
    };
  }, []);

  const StatCard = ({ title, value, change, icon: Icon, delay = 0, id }: any) => (
    <Card 
      className="dashboard-card glass-morphism border-none hover-lift transition-all duration-700 relative overflow-hidden group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setActiveCard(id)}
      onMouseLeave={() => setActiveCard(null)}
      data-testid={`card-${id}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
          {title}
          <Icon className={`w-5 h-5 transition-all duration-300 ${activeCard === id ? 'text-primary animate-glow' : 'text-muted-foreground'}`} />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
        <p className={`text-sm transition-colors duration-300 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? '+' : ''}{change}% from last month
        </p>
      </CardContent>
    </Card>
  );

  const ChartCard = ({ title, children, delay = 0 }: any) => (
    <Card className="dashboard-card glass-morphism border-none hover-lift transition-all duration-700 animate-slide-up relative overflow-hidden group" style={{ animationDelay: `${delay}s` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Advanced 3D Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.1),rgba(6,182,212,0.1),rgba(139,92,246,0.1),rgba(16,185,129,0.1))] animate-spin-slow"></div>
        
        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-primary/30 animate-pulse-slow"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 10}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateZ(${Math.random() * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Hero Dashboard Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-secondary/10 to-transparent animate-pulse-slow"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text relative z-10 animate-slide-up">
              Dashboard
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Real-time insights and analytics for CODICORE operations
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <StatCard
              title="Total Revenue"
              value="₹6,70,000"
              change={12.5}
              icon={DollarSign}
              delay={0.1}
              id="revenue"
            />
            <StatCard
              title="Active Users"
              value="1,800"
              change={8.2}
              icon={Users}
              delay={0.2}
              id="users"
            />
            <StatCard
              title="Projects Completed"
              value="18"
              change={25.0}
              icon={Activity}
              delay={0.3}
              id="projects"
            />
            <StatCard
              title="Growth Rate"
              value="23.4%"
              change={5.7}
              icon={TrendingUp}
              delay={0.4}
              id="growth"
            />
          </div>

          {/* Advanced Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ChartCard title="Revenue Analytics" delay={0.1}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(16,185,129,0.3)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="url(#gradient1)" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Project Distribution" delay={0.2}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                  >
                    {projectsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(16,185,129,0.3)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Performance Metrics with 3D Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Zap, title: 'System Performance', value: '99.8%', color: 'from-yellow-500 to-orange-500' },
              { icon: Brain, title: 'AI Processing', value: '2.4M ops/s', color: 'from-purple-500 to-pink-500' },
              { icon: Globe, title: 'Global Reach', value: '15 Countries', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Security Score', value: '100%', color: 'from-green-500 to-emerald-500' }
            ].map((metric, index) => (
              <div key={index} className="dashboard-card group relative overflow-hidden transition-all duration-700">
                <div className="glass-morphism p-8 rounded-2xl h-full relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-full animate-spin-slow opacity-20`}></div>
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500`}>
                        <metric.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">{metric.title}</h3>
                    <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity with Enhanced Animations */}
          <ChartCard title="User Activity Trends" delay={0.3}>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="users" fill="url(#gradient2)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotateZ(0deg);
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotateZ(90deg);
            opacity: 1;
          }
          50% { 
            transform: translateY(-10px) translateX(-10px) rotateZ(180deg);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-15px) translateX(5px) rotateZ(270deg);
            opacity: 0.9;
          }
        }
        
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .dashboard-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .dashboard-card:hover {
          transform: translateY(-10px) rotateX(5deg) scale(1.02);
        }
      `}</style>
    </div>
  );
}