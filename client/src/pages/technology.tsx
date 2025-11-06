import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { 
  Database, Cloud, Brain, Code, Smartphone, Lock, 
  Server, Cpu, Zap, Globe, Shield, Workflow,
  GitBranch, Package, Terminal, Boxes, Layers,
  Network, HardDrive, Gauge, Rocket, CheckCircle2,
  Award, Trophy, Star, TrendingUp, Users, Building2,
  FileCheck, Briefcase, Target, Lightbulb, Sparkles,
  Code2, Blocks, Binary, Bug, Wrench, Settings,
  PenTool, Figma, Palette, Layout, MonitorSmartphone,
  CloudCog, Container, Infinity, ArrowRight, ChevronRight,
  Eye, Heart, Share2, Download, Play, CircleDot,
  Activity, BarChart3, PieChart, LineChart, TrendingDown,
  Fingerprint, Key, UserCheck, ShieldCheck, AlertCircle
} from 'lucide-react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiKubernetes, SiGooglecloud,
  SiPython, SiDjango, SiFlask, SiFastapi,
  SiNextdotjs, SiVite, SiWebpack, SiBabel,
  SiJest, SiCypress, SiVitest,
  SiGraphql, SiApollographql, SiPrisma, SiSupabase,
  SiVercel, SiNetlify, SiCloudflare, SiNginx,
  SiGit, SiGithub, SiGitlab, SiBitbucket,
  SiFigma, SiAdobexd, SiSketch, SiFramer,
  SiJira, SiSlack, SiNotion, SiTrello,
  SiTensorflow, SiPytorch, SiOpencv, SiNumpy,
  SiJavascript, SiHtml5, SiCss3, SiSass,
  SiBootstrap, SiMui, SiChakraui, SiRadixui,
  SiStripe, SiPaypal, SiRazorpay, SiSquare,
  SiFirebase, SiAuth0, SiOkta, SiKeycloak,
  SiElasticsearch, SiKibana, SiGrafana, SiPrometheus,
  SiJenkins, SiGithubactions, SiCircleci, SiTravisci,
  SiSonarqube, SiSnyk, SiDatadog, SiNewrelic
} from 'react-icons/si';
import { useLenis } from '@/hooks/use-lenis';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import companyLogo from '@asset/logo_of_company-removebg-preview_1762392516625.png';

export default function TechnologyPage() {
  useLenis();
  const [activeTab, setActiveTab] = useState('frontend');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const createFloatingElement = () => {
      const symbols = ['⚡', '💻', '🚀', '🔧', '⚙️', '💡', '🌐', '📱', '☁️', '🔒', '⚙️', '🎯', '💎', '🔮', '✨'];
      const element = document.createElement('div');
      element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      element.className = 'fixed pointer-events-none z-0 animate-float-particle';
      element.style.left = Math.random() * window.innerWidth + 'px';
      element.style.top = -50 + 'px';
      element.style.fontSize = (20 + Math.random() * 30) + 'px';
      element.style.opacity = '0.6';
      element.style.animation = `float-up ${10 + Math.random() * 10}s linear forwards`;
      document.body.appendChild(element);
      
      setTimeout(() => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      }, 20000);
    };

    const interval = setInterval(createFloatingElement, 500);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const TechCard = ({ icon: Icon, title, description, color, delay = 0, featured = false }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
        onMouseEnter={() => setHoveredCard(title)}
        onMouseLeave={() => setHoveredCard(null)}
        className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-background/80 via-background/50 to-background/80 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 ${featured ? 'md:col-span-2' : ''}`}
        data-testid={`tech-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-700"></div>
        
        <div className="relative z-10">
          <motion.div 
            className="mb-6 inline-block"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500`} style={{ background: `linear-gradient(135deg, ${color})` }}>
              <Icon className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {hoveredCard === title && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-4 flex items-center text-primary font-medium"
            >
              <span>Explore More</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  const TechStackItem = ({ icon: Icon, name, category, proficiency }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="group relative p-6 rounded-xl bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300"
        data-testid={`tech-stack-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h4>
            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Proficiency</span>
            <span>{proficiency}%</span>
          </div>
          <Progress value={proficiency} className="h-1.5" />
        </div>
      </motion.div>
    );
  };

  const FeatureShowcase = ({ icon: Icon, title, description, stats }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        className="group relative p-8 rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500"
        data-testid={`feature-showcase-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-center p-3 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const StatCard = ({ icon: Icon, value, label, color, trend }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        const target = parseInt(value);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
        data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial opacity-20" style={{ background: `radial-gradient(circle, ${color}, transparent)` }}></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color})` }}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            {trend && (
              <Badge variant={trend > 0 ? "default" : "destructive"} className="px-2 py-1">
                {trend > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {Math.abs(trend)}%
              </Badge>
            )}
          </div>
          
          <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {typeof value === 'number' ? count : value}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </motion.div>
    );
  };

  const TimelineItem = ({ year, title, description, icon: Icon, position }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: position === 'left' ? -50 : 50 }}
        className={`flex items-center gap-8 ${position === 'right' ? 'flex-row-reverse' : ''}`}
        data-testid={`timeline-item-${year}`}
      >
        <div className={`flex-1 ${position === 'right' ? 'text-left' : 'text-right'}`}>
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-primary">{year}</div>
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground">{title}</h4>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50"></div>
          <div className="absolute top-4 left-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2"></div>
        </div>
        
        <div className="flex-1"></div>
      </motion.div>
    );
  };

  const ProcessStep = ({ number, icon: Icon, title, description }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="relative group"
        data-testid={`process-step-${number}`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg z-10">
          {number}
        </div>
        
        <div className="pt-8 p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  const CertificationCard = ({ title, issuer, date, certificateNo, description }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-amber-500/10 via-background/80 to-background/60 backdrop-blur-xl border-2 border-amber-500/30 hover:border-amber-500/50 transition-all duration-300"
        data-testid={`certification-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-amber-500/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-yellow-500/10 to-transparent blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-2 bg-amber-500/20 text-amber-600 border-amber-500/30">
                  <Star className="w-3 h-3 mr-1 fill-amber-500" />
                  Certified
                </Badge>
              </div>
            </div>
            <Trophy className="w-10 h-10 text-amber-500/50" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-foreground font-semibold mb-1">{issuer}</p>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          <Separator className="my-4 bg-amber-500/20" />
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Issue Date</p>
              <p className="text-sm font-semibold text-foreground">{date}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Certificate No.</p>
              <p className="text-sm font-semibold text-foreground font-mono">{certificateNo}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const AnimatedSection = ({ children, className = "" }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.05)_0deg,rgba(6,182,212,0.05)_120deg,rgba(139,92,246,0.05)_240deg,rgba(16,185,129,0.05)_360deg)] animate-spin-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse-slow"></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <circle cx="0" cy="0" r="2" fill="currentColor" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)"/>
        </svg>
      </div>

      <div className="relative z-10">
        <motion.section 
          ref={heroRef}
          style={{ opacity, scale }}
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src={companyLogo} 
                alt="Codicore Logo" 
                className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl animate-float"
                data-testid="company-logo"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 px-6 py-2 text-sm bg-gradient-to-r from-primary to-secondary border-none" data-testid="badge-established">
                <Building2 className="w-4 h-4 mr-2" />
                Established 2025 | DIPP Certified Startup
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Technology Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
              data-testid="hero-description"
            >
              Where Ideas Meet Code - Building intelligent software that transforms business chaos into harmony
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50" onClick={() => window.location.href = '/products'} data-testid="button-explore-stack">
                <Rocket className="mr-2 w-5 h-5" />
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2" onClick={() => window.location.href = '/products'} data-testid="button-view-projects">
                <Eye className="mr-2 w-5 h-5" />
                View Products
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Code2, label: '50+ Technologies', value: '50+' },
                { icon: Trophy, label: 'Projects Delivered', value: '100+' },
                { icon: Users, label: 'Happy Clients', value: '200+' },
                { icon: Zap, label: 'Uptime', value: '99.9%' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="p-4 rounded-xl bg-background/50 backdrop-blur-md border border-white/10"
                  data-testid={`hero-stat-${index}`}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <AnimatedSection className="py-20 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-certifications">
                <Award className="w-4 h-4 mr-2" />
                Official Certifications & Recognition
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Certified & Recognized
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Officially registered and certified by Government of India
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <CertificationCard
                title="Certificate of Incorporation"
                issuer="Ministry of Corporate Affairs, Government of India"
                date="26th August 2025"
                certificateNo="U58200UP2025PTC230810"
                description="CODICORE PRIVATE LIMITED - Officially incorporated under Companies Act, 2013"
              />
              <CertificationCard
                title="DIPP Startup Recognition"
                issuer="Department for Promotion of Industry and Internal Trade"
                date="30th October 2025"
                certificateNo="DIPP227042"
                description="Recognized as a startup working in Education Technology sector"
              />
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Company Details</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">CIN Number</p>
                      <p className="font-mono font-semibold text-foreground">U58200UP2025PTC230810</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">PAN Number</p>
                      <p className="font-mono font-semibold text-foreground">AANCC0250E</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">TAN Number</p>
                      <p className="font-mono font-semibold text-foreground">AGRC12050D</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Validity Period</p>
                      <p className="font-semibold text-foreground">10 Years (till 25 Aug 2035)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-core-tech">
                <Cpu className="w-4 h-4 mr-2" />
                Core Technologies
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Technology Categories
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology stack powering next-generation solutions
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <TechCard
                icon={Code}
                title="Frontend Development"
                description="Modern, responsive user interfaces with cutting-edge frameworks and libraries for exceptional user experiences"
                color="#3b82f6, #06b6d4"
                delay={0.1}
              />
              <TechCard
                icon={Server}
                title="Backend Architecture"
                description="Scalable server-side solutions with robust API design and microservices architecture"
                color="#10b981, #059669"
                delay={0.2}
              />
              <TechCard
                icon={Database}
                title="Database Systems"
                description="Advanced data management with SQL and NoSQL databases for optimal performance"
                color="#8b5cf6, #a855f7"
                delay={0.3}
              />
              <TechCard
                icon={Cloud}
                title="Cloud Infrastructure"
                description="Scalable cloud solutions with AWS, Google Cloud, and Azure for global reach"
                color="#f59e0b, #dc2626"
                delay={0.4}
              />
              <TechCard
                icon={Brain}
                title="AI & Machine Learning"
                description="Intelligent features powered by advanced ML algorithms and neural networks"
                color="#ec4899, #f472b6"
                delay={0.5}
              />
              <TechCard
                icon={Smartphone}
                title="Mobile Development"
                description="Cross-platform mobile applications with native performance and seamless UX"
                color="#06b6d4, #0891b2"
                delay={0.6}
              />
              <TechCard
                icon={Lock}
                title="Security & Auth"
                description="Enterprise-grade security protocols with OAuth, JWT, and encryption standards"
                color="#dc2626, #b91c1c"
                delay={0.7}
              />
              <TechCard
                icon={Workflow}
                title="DevOps & CI/CD"
                description="Automated deployment pipelines with continuous integration and delivery"
                color="#6366f1, #4f46e5"
                delay={0.8}
              />
              <TechCard
                icon={Network}
                title="API Development"
                description="RESTful and GraphQL APIs with comprehensive documentation and versioning"
                color="#14b8a6, #0d9488"
                delay={0.9}
              />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-tech-stack">
                <Blocks className="w-4 h-4 mr-2" />
                Complete Tech Stack
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Our Technology Arsenal
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                50+ cutting-edge technologies we master and implement
              </p>
            </div>

            <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12 h-auto p-2 bg-background/50 backdrop-blur-md" data-testid="tabs-tech-stack">
                <TabsTrigger value="frontend" className="px-4 py-3" data-testid="tab-frontend">
                  <Layout className="w-4 h-4 mr-2" />
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="px-4 py-3" data-testid="tab-backend">
                  <Server className="w-4 h-4 mr-2" />
                  Backend
                </TabsTrigger>
                <TabsTrigger value="database" className="px-4 py-3" data-testid="tab-database">
                  <Database className="w-4 h-4 mr-2" />
                  Database
                </TabsTrigger>
                <TabsTrigger value="cloud" className="px-4 py-3" data-testid="tab-cloud">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud
                </TabsTrigger>
                <TabsTrigger value="mobile" className="px-4 py-3" data-testid="tab-mobile">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile
                </TabsTrigger>
                <TabsTrigger value="ai" className="px-4 py-3" data-testid="tab-ai">
                  <Brain className="w-4 h-4 mr-2" />
                  AI/ML
                </TabsTrigger>
                <TabsTrigger value="tools" className="px-4 py-3" data-testid="tab-tools">
                  <Wrench className="w-4 h-4 mr-2" />
                  Tools
                </TabsTrigger>
              </TabsList>

              <TabsContent value="frontend" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={SiReact} name="React 18" category="UI Library" proficiency={98} />
                  <TechStackItem icon={SiTypescript} name="TypeScript" category="Type Safety" proficiency={95} />
                  <TechStackItem icon={SiNextdotjs} name="Next.js 14" category="Framework" proficiency={92} />
                  <TechStackItem icon={SiTailwindcss} name="Tailwind CSS" category="Styling" proficiency={96} />
                  <TechStackItem icon={SiVite} name="Vite" category="Build Tool" proficiency={94} />
                  <TechStackItem icon={SiJavascript} name="JavaScript ES6+" category="Language" proficiency={98} />
                  <TechStackItem icon={SiHtml5} name="HTML5" category="Markup" proficiency={99} />
                  <TechStackItem icon={SiCss3} name="CSS3" category="Styling" proficiency={97} />
                  <TechStackItem icon={SiSass} name="Sass/SCSS" category="CSS Preprocessor" proficiency={90} />
                  <TechStackItem icon={SiBootstrap} name="Bootstrap" category="Framework" proficiency={88} />
                  <TechStackItem icon={SiMui} name="Material-UI" category="Component Library" proficiency={85} />
                  <TechStackItem icon={SiRadixui} name="Radix UI" category="Primitives" proficiency={92} />
                  <TechStackItem icon={SiFramer} name="Framer Motion" category="Animation" proficiency={90} />
                  <TechStackItem icon={SiWebpack} name="Webpack" category="Bundler" proficiency={87} />
                  <TechStackItem icon={SiBabel} name="Babel" category="Transpiler" proficiency={86} />
                  <TechStackItem icon={Figma} name="Figma Integration" category="Design" proficiency={89} />
                </div>
              </TabsContent>

              <TabsContent value="backend" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={SiNodedotjs} name="Node.js" category="Runtime" proficiency={96} />
                  <TechStackItem icon={SiExpress} name="Express.js" category="Framework" proficiency={94} />
                  <TechStackItem icon={SiPython} name="Python" category="Language" proficiency={92} />
                  <TechStackItem icon={SiDjango} name="Django" category="Framework" proficiency={88} />
                  <TechStackItem icon={SiFlask} name="Flask" category="Micro Framework" proficiency={86} />
                  <TechStackItem icon={SiFastapi} name="FastAPI" category="Modern Framework" proficiency={90} />
                  <TechStackItem icon={SiGraphql} name="GraphQL" category="Query Language" proficiency={87} />
                  <TechStackItem icon={SiApollographql} name="Apollo Server" category="GraphQL Server" proficiency={85} />
                  <TechStackItem icon={Server} name="REST API" category="Architecture" proficiency={95} />
                  <TechStackItem icon={Workflow} name="Microservices" category="Architecture" proficiency={88} />
                  <TechStackItem icon={SiPrisma} name="Prisma" category="ORM" proficiency={89} />
                  <TechStackItem icon={Terminal} name="CLI Tools" category="Utilities" proficiency={91} />
                </div>
              </TabsContent>

              <TabsContent value="database" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={SiPostgresql} name="PostgreSQL" category="Relational DB" proficiency={94} />
                  <TechStackItem icon={SiMongodb} name="MongoDB" category="NoSQL DB" proficiency={91} />
                  <TechStackItem icon={SiRedis} name="Redis" category="Cache" proficiency={89} />
                  <TechStackItem icon={SiSupabase} name="Supabase" category="Backend as a Service" proficiency={87} />
                  <TechStackItem icon={Database} name="MySQL" category="Relational DB" proficiency={90} />
                  <TechStackItem icon={HardDrive} name="SQLite" category="Embedded DB" proficiency={88} />
                  <TechStackItem icon={SiElasticsearch} name="Elasticsearch" category="Search Engine" proficiency={85} />
                  <TechStackItem icon={Network} name="DynamoDB" category="NoSQL DB" proficiency={82} />
                </div>
              </TabsContent>

              <TabsContent value="cloud" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={Cloud} name="AWS" category="Cloud Platform" proficiency={92} />
                  <TechStackItem icon={SiGooglecloud} name="Google Cloud" category="Cloud Platform" proficiency={88} />
                  <TechStackItem icon={SiDocker} name="Docker" category="Containerization" proficiency={94} />
                  <TechStackItem icon={SiKubernetes} name="Kubernetes" category="Orchestration" proficiency={87} />
                  <TechStackItem icon={SiVercel} name="Vercel" category="Deployment" proficiency={93} />
                  <TechStackItem icon={SiNetlify} name="Netlify" category="Deployment" proficiency={90} />
                  <TechStackItem icon={SiCloudflare} name="Cloudflare" category="CDN" proficiency={89} />
                  <TechStackItem icon={SiNginx} name="Nginx" category="Web Server" proficiency={88} />
                  <TechStackItem icon={CloudCog} name="Lambda Functions" category="Serverless" proficiency={86} />
                  <TechStackItem icon={Container} name="ECS/EKS" category="Container Service" proficiency={84} />
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={SiReact} name="React Native" category="Cross Platform" proficiency={90} />
                  <TechStackItem icon={Smartphone} name="iOS Development" category="Native" proficiency={85} />
                  <TechStackItem icon={Smartphone} name="Android Development" category="Native" proficiency={87} />
                  <TechStackItem icon={MonitorSmartphone} name="Responsive Design" category="Web Mobile" proficiency={95} />
                  <TechStackItem icon={Smartphone} name="PWA" category="Progressive Web Apps" proficiency={92} />
                  <TechStackItem icon={Smartphone} name="Flutter" category="Cross Platform" proficiency={83} />
                </div>
              </TabsContent>

              <TabsContent value="ai" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={SiTensorflow} name="TensorFlow" category="ML Framework" proficiency={86} />
                  <TechStackItem icon={SiPytorch} name="PyTorch" category="ML Framework" proficiency={84} />
                  <TechStackItem icon={Brain} name="OpenAI GPT" category="LLM" proficiency={91} />
                  <TechStackItem icon={SiOpencv} name="OpenCV" category="Computer Vision" proficiency={82} />
                  <TechStackItem icon={SiNumpy} name="NumPy" category="Scientific Computing" proficiency={88} />
                  <TechStackItem icon={Brain} name="scikit-learn" category="ML Library" proficiency={85} />
                  <TechStackItem icon={Brain} name="Hugging Face" category="Transformers" proficiency={87} />
                  <TechStackItem icon={Brain} name="LangChain" category="LLM Framework" proficiency={89} />
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <TechStackItem icon={SiGit} name="Git" category="Version Control" proficiency={97} />
                  <TechStackItem icon={SiGithub} name="GitHub" category="Repository" proficiency={96} />
                  <TechStackItem icon={SiGitlab} name="GitLab" category="DevOps Platform" proficiency={88} />
                  <TechStackItem icon={SiJest} name="Jest" category="Testing" proficiency={90} />
                  <TechStackItem icon={SiCypress} name="Cypress" category="E2E Testing" proficiency={87} />
                  <TechStackItem icon={Bug} name="Playwright" category="Testing" proficiency={85} />
                  <TechStackItem icon={SiFigma} name="Figma" category="Design" proficiency={92} />
                  <TechStackItem icon={SiJira} name="Jira" category="Project Management" proficiency={89} />
                  <TechStackItem icon={SiSlack} name="Slack" category="Communication" proficiency={94} />
                  <TechStackItem icon={SiNotion} name="Notion" category="Documentation" proficiency={91} />
                  <TechStackItem icon={SiJenkins} name="Jenkins" category="CI/CD" proficiency={86} />
                  <TechStackItem icon={SiGithubactions} name="GitHub Actions" category="CI/CD" proficiency={93} />
                  <TechStackItem icon={SiSonarqube} name="SonarQube" category="Code Quality" proficiency={84} />
                  <TechStackItem icon={SiPrometheus} name="Prometheus" category="Monitoring" proficiency={82} />
                  <TechStackItem icon={SiGrafana} name="Grafana" category="Visualization" proficiency={83} />
                  <TechStackItem icon={SiDatadog} name="Datadog" category="Monitoring" proficiency={81} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-features">
                <Sparkles className="w-4 h-4 mr-2" />
                Key Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  What Makes Us Different
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced features and capabilities that set us apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <FeatureShowcase
                icon={Zap}
                title="Lightning Fast Performance"
                description="Optimized code and infrastructure ensuring sub-200ms response times and 99.9% uptime for mission-critical applications"
                stats={[
                  { value: '<200ms', label: 'Response Time' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '100K+', label: 'Requests/Min' }
                ]}
              />
              <FeatureShowcase
                icon={Shield}
                title="Enterprise Security"
                description="Bank-level encryption, OAuth 2.0, JWT authentication, and comprehensive security audits for complete data protection"
                stats={[
                  { value: 'AES-256', label: 'Encryption' },
                  { value: 'SOC 2', label: 'Compliant' },
                  { value: '100%', label: 'Secure' }
                ]}
              />
              <FeatureShowcase
                icon={Infinity}
                title="Infinite Scalability"
                description="Auto-scaling infrastructure with load balancing and microservices architecture handling millions of concurrent users"
                stats={[
                  { value: '1M+', label: 'Users' },
                  { value: 'Auto', label: 'Scaling' },
                  { value: '24/7', label: 'Available' }
                ]}
              />
              <FeatureShowcase
                icon={Brain}
                title="AI-Powered Intelligence"
                description="Machine learning algorithms and neural networks providing smart recommendations and predictive analytics"
                stats={[
                  { value: '95%', label: 'Accuracy' },
                  { value: 'Real-time', label: 'Processing' },
                  { value: '10+', label: 'AI Models' }
                ]}
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-stats">
                <Activity className="w-4 h-4 mr-2" />
                Performance Metrics
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Our Impact in Numbers
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time statistics showcasing our technological excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Rocket}
                value={100}
                label="Projects Delivered"
                color="#10b981, #059669"
                trend={25}
              />
              <StatCard
                icon={Users}
                value={200}
                label="Happy Clients"
                color="#3b82f6, #2563eb"
                trend={40}
              />
              <StatCard
                icon={Code2}
                value={50}
                label="Technologies Mastered"
                color="#8b5cf6, #7c3aed"
                trend={15}
              />
              <StatCard
                icon={Trophy}
                value={98}
                label="Client Satisfaction %"
                color="#f59e0b, #d97706"
                trend={5}
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-process">
                <Workflow className="w-4 h-4 mr-2" />
                Our Development Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  How We Build Excellence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <ProcessStep
                number={1}
                icon={Lightbulb}
                title="Discovery & Planning"
                description="Understanding requirements and creating detailed technical specifications"
              />
              <ProcessStep
                number={2}
                icon={PenTool}
                title="Design & Architecture"
                description="Crafting user-centric designs and scalable system architecture"
              />
              <ProcessStep
                number={3}
                icon={Code2}
                title="Development & Testing"
                description="Agile development with continuous testing and quality assurance"
              />
              <ProcessStep
                number={4}
                icon={Rocket}
                title="Deploy & Optimize"
                description="Seamless deployment with ongoing monitoring and optimization"
              />
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Quality Assurance</h3>
                  <p className="text-muted-foreground">Every step validated and verified</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Bug, title: 'Bug-Free Code', desc: '99% defect-free delivery' },
                  { icon: Gauge, title: 'Performance Tests', desc: 'Comprehensive benchmarking' },
                  { icon: ShieldCheck, title: 'Security Audits', desc: 'Regular vulnerability scans' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-background/50">
                    <item.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-1 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-timeline">
                <Target className="w-4 h-4 mr-2" />
                Our Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Innovation Timeline
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our technological evolution
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <TimelineItem
                year="2025 Q3"
                title="Company Incorporation"
                description="Officially registered as CODICORE PRIVATE LIMITED with Ministry of Corporate Affairs"
                icon={Building2}
                position="left"
              />
              <TimelineItem
                year="2025 Q4"
                title="DIPP Startup Recognition"
                description="Received official startup certification from DIPP, Government of India"
                icon={Award}
                position="right"
              />
              <TimelineItem
                year="2025 Q4"
                title="Technology Stack Expansion"
                description="Integrated 50+ cutting-edge technologies across frontend, backend, and cloud"
                icon={Layers}
                position="left"
              />
              <TimelineItem
                year="2026 Q1"
                title="AI/ML Integration"
                description="Launched advanced AI-powered features with machine learning capabilities"
                icon={Brain}
                position="right"
              />
              <TimelineItem
                year="2026 Q2"
                title="Global Expansion"
                description="Serving clients across 25+ countries with 99.9% uptime guarantee"
                icon={Globe}
                position="left"
              />
              <TimelineItem
                year="Future"
                title="Continuous Innovation"
                description="Committed to pushing boundaries and staying at the forefront of technology"
                icon={Rocket}
                position="right"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-architecture">
                <Boxes className="w-4 h-4 mr-2" />
                System Architecture
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Enterprise-Grade Architecture
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scalable, secure, and highly available system design
              </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl blur-3xl"></div>
              
              <div className="relative grid md:grid-cols-3 gap-8 p-8">
                {[
                  {
                    layer: 'Presentation Layer',
                    icon: Layout,
                    color: '#3b82f6',
                    components: [
                      'React Applications',
                      'Mobile Apps (iOS/Android)',
                      'Progressive Web Apps',
                      'Admin Dashboards'
                    ]
                  },
                  {
                    layer: 'Application Layer',
                    icon: Server,
                    color: '#10b981',
                    components: [
                      'REST API Gateway',
                      'GraphQL Server',
                      'WebSocket Services',
                      'Microservices'
                    ]
                  },
                  {
                    layer: 'Data Layer',
                    icon: Database,
                    color: '#8b5cf6',
                    components: [
                      'PostgreSQL (Primary DB)',
                      'Redis Cache',
                      'Elasticsearch',
                      'Object Storage'
                    ]
                  }
                ].map((arch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative group"
                    data-testid={`architecture-layer-${index}`}
                  >
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `linear-gradient(135deg, ${arch.color}, ${arch.color}dd)` }}
                        >
                          <arch.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{arch.layer}</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {arch.components.map((component, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                            <CircleDot className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: CloudCog, title: 'Load Balancing', desc: 'Distributed traffic management' },
                { icon: Container, title: 'Containerization', desc: 'Docker & Kubernetes' },
                { icon: Infinity, title: 'Auto-Scaling', desc: 'Dynamic resource allocation' },
                { icon: ShieldCheck, title: 'DDoS Protection', desc: 'Enterprise security layer' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 text-center"
                  data-testid={`architecture-feature-${index}`}
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Let's transform your ideas into powerful, scalable solutions with cutting-edge technology
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50" onClick={() => window.location.href = '/contact'} data-testid="button-start-project">
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2" onClick={() => window.location.href = '/contact'} data-testid="button-schedule-demo">
                  <Play className="mr-2 w-5 h-5" />
                  Schedule a Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>100% Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}