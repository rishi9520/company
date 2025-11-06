import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Users, Target, Rocket, TrendingUp, Award, Trophy,
  Star, Heart, Zap, Globe, Shield, Sparkles,
  Code, Briefcase, GraduationCap, Clock, MapPin,
  Building2, Calendar, CheckCircle2, ArrowRight,
  Lightbulb, Brain, Coffee, Laptop, Smile,
  MessageCircle, Settings, PieChart, BarChart3,
  Gift, Flame, CircleDot, Play, Eye, Share2,
  DollarSign, TrendingDown, Activity, FileCheck,
  UserCheck, ShieldCheck, Home, Plane, Palmtree,
  BookOpen, Video, Headphones, CloudCog, Container,
  Network, Database, Server, Terminal, GitBranch,
  Package, Boxes, Layers, Workflow, MonitorSmartphone,
  Fingerprint, Key, Lock, AlertCircle, Bell,
  Mail, Phone, Send, ThumbsUp, BadgeCheck, Palette
} from 'lucide-react';
import { useLenis } from '@/hooks/use-lenis';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import companyLogo from '@asset/logo_of_company-removebg-preview_1762392516625.png';

export default function CareersPage() {
  useLenis();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('culture');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: inquiryForm.name.split(' ')[0],
          lastName: inquiryForm.name.split(' ').slice(1).join(' ') || '',
          email: inquiryForm.email,
          subject: inquiryForm.subject || 'Career Inquiry',
          message: inquiryForm.message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully! We will get back to you soon.');
        setInquiryForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  useEffect(() => {
    const createFloatingElement = () => {
      const symbols = ['💼', '🚀', '⭐', '💡', '🎯', '🏆', '💪', '🌟', '✨', '🔥', '💻', '📱', '🎨', '📊'];
      const element = document.createElement('div');
      element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      element.className = 'fixed pointer-events-none z-0';
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

    const interval = setInterval(createFloatingElement, 600);

    return () => clearInterval(interval);
  }, []);

  const ValueCard = ({ icon: Icon, title, description, color }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="group relative p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500"
        data-testid={`value-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{ background: `linear-gradient(135deg, ${color})` }}></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${color})` }}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  };

  const BenefitCard = ({ icon: Icon, title, description, featured = false }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className={`relative p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}
        data-testid={`benefit-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {featured && (
          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 border-none">
            <Star className="w-3 h-3 mr-1 fill-white" />
            Popular
          </Badge>
        )}

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
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
        className="relative group text-center"
        data-testid={`process-step-${number}`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
          {number}
        </div>

        <div className="pt-8 p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
          <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
          <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </motion.div>
    );
  };

  const TeamMemberCard = ({ name, role, image, quote }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        whileHover={{ y: -10 }}
        className="relative p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
        data-testid={`team-member-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            {name.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground italic leading-relaxed">
          "{quote}"
        </p>
      </motion.div>
    );
  };

  const DepartmentCard = ({ icon: Icon, title, description, openings, color }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setSelectedDepartment(title.toLowerCase())}
        className={`relative p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border cursor-pointer transition-all duration-300 ${
          selectedDepartment === title.toLowerCase()
            ? 'border-primary shadow-lg shadow-primary/20'
            : 'border-white/10 hover:border-primary/30'
        }`}
        data-testid={`department-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color})` }}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            {openings} roles
          </Badge>
        </div>
      </motion.div>
    );
  };

  const StatCard = ({ icon: Icon, value, label, color }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView && typeof value === 'number') {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
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
        className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 text-center"
        data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial opacity-20" style={{ background: `radial-gradient(circle, ${color}, transparent)` }}></div>

        <Icon className="w-10 h-10 mx-auto mb-4" style={{ color }} />
        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {typeof value === 'number' ? count : value}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </motion.div>
    );
  };

  const PerkCard = ({ icon: Icon, title, items }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
        data-testid={`perk-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground">{title}</h4>
        </div>

        <ul className="space-y-2">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.05)_0deg,rgba(6,182,212,0.05)_90deg,rgba(139,92,246,0.05)_180deg,rgba(245,158,11,0.05)_270deg,rgba(16,185,129,0.05)_360deg)] animate-spin-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse-slow"></div>

        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="career-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary"/>
              <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#career-grid)"/>
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
              <Badge className="mb-6 px-6 py-2 text-sm bg-gradient-to-r from-primary to-secondary border-none" data-testid="badge-join-team">
                <Users className="w-4 h-4 mr-2" />
                Join Our Growing Team
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Build Your Career
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
              data-testid="hero-description"
            >
              Join a team of passionate innovators building the future of technology. Grow, learn, and make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50" onClick={() => {
                const openingsSection = document.getElementById('job-openings');
                openingsSection?.scrollIntoView({ behavior: 'smooth' });
              }} data-testid="button-view-openings">
                <Briefcase className="mr-2 w-5 h-5" />
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2" onClick={() => {
                const cultureSection = document.getElementById('life-at-codicore');
                cultureSection?.scrollIntoView({ behavior: 'smooth' });
              }} data-testid="button-life-at-codicore">
                <Play className="mr-2 w-5 h-5" />
                Life at Codicore
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Trophy, label: 'Award Winning', value: 'Culture' },
                { icon: TrendingUp, label: 'Fast Growing', value: 'Company' },
                { icon: Globe, label: 'Global', value: 'Team' },
                { icon: Zap, label: 'Cutting Edge', value: 'Tech' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="p-4 rounded-xl bg-background/50 backdrop-blur-md border border-white/10"
                  data-testid={`hero-feature-${index}`}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-stats">
                <Activity className="w-4 h-4 mr-2" />
                Company Overview
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  By The Numbers
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our journey in creating exceptional technology solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Building2}
                value="2025"
                label="Founded"
                color="#10b981"
              />
              <StatCard
                icon={Users}
                value={50}
                label="Team Members"
                color="#3b82f6"
              />
              <StatCard
                icon={Target}
                value={100}
                label="Projects Completed"
                color="#8b5cf6"
              />
              <StatCard
                icon={Star}
                value="4.9/5"
                label="Employee Rating"
                color="#f59e0b"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-values">
                <Heart className="w-4 h-4 mr-2" />
                Our Core Values
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  What We Believe In
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard
                icon={Lightbulb}
                title="Innovation First"
                description="We embrace creativity and encourage bold ideas. Every team member has the freedom to experiment and push boundaries."
                color="#f59e0b, #dc2626"
              />
              <ValueCard
                icon={Users}
                title="Collaborative Spirit"
                description="We believe in the power of teamwork. Together, we achieve more than we ever could alone."
                color="#3b82f6, #06b6d4"
              />
              <ValueCard
                icon={Target}
                title="Excellence Driven"
                description="We set high standards and continuously strive to exceed them. Quality is non-negotiable."
                color="#8b5cf6, #a855f7"
              />
              <ValueCard
                icon={Rocket}
                title="Growth Mindset"
                description="We invest in continuous learning and development. Your growth is our priority."
                color="#10b981, #059669"
              />
              <ValueCard
                icon={Shield}
                title="Integrity Always"
                description="We operate with transparency, honesty, and ethical practices in everything we do."
                color="#6366f1, #4f46e5"
              />
              <ValueCard
                icon={Globe}
                title="Impact Focused"
                description="We build solutions that make a real difference in people's lives and businesses."
                color="#ec4899, #f472b6"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="life-at-codicore" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-culture">
                <Sparkles className="w-4 h-4 mr-2" />
                Work Culture
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Life at Codicore
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Experience a workplace where innovation meets balance
              </p>
            </div>

            <Tabs defaultValue="culture" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-4 mb-12 h-auto p-2 bg-background/50 backdrop-blur-md" data-testid="tabs-culture">
                <TabsTrigger value="culture" className="px-4 py-3" data-testid="tab-culture">
                  <Heart className="w-4 h-4 mr-2" />
                  Culture
                </TabsTrigger>
                <TabsTrigger value="benefits" className="px-4 py-3" data-testid="tab-benefits">
                  <Gift className="w-4 h-4 mr-2" />
                  Benefits
                </TabsTrigger>
                <TabsTrigger value="growth" className="px-4 py-3" data-testid="tab-growth">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Growth
                </TabsTrigger>
                <TabsTrigger value="perks" className="px-4 py-3" data-testid="tab-perks">
                  <Star className="w-4 h-4 mr-2" />
                  Perks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="culture" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <BenefitCard
                    icon={Coffee}
                    title="Flexible Working"
                    description="Work from anywhere with flexible hours that fit your lifestyle and productivity patterns"
                  />
                  <BenefitCard
                    icon={Users}
                    title="Diverse & Inclusive"
                    description="A welcoming environment that celebrates diversity and fosters belonging for everyone"
                    featured={true}
                  />
                  <BenefitCard
                    icon={Smile}
                    title="Fun Team Events"
                    description="Regular team building activities, celebrations, and social gatherings"
                  />
                  <BenefitCard
                    icon={MessageCircle}
                    title="Open Communication"
                    description="Direct access to leadership with transparent, honest conversations"
                  />
                  <BenefitCard
                    icon={Laptop}
                    title="Latest Tech Stack"
                    description="Work with cutting-edge technologies and modern development tools"
                  />
                  <BenefitCard
                    icon={Brain}
                    title="Innovation Time"
                    description="Dedicated time for exploring new ideas and working on passion projects"
                  />
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <BenefitCard
                    icon={Shield}
                    title="Health Insurance"
                    description="Comprehensive health coverage for you and your family members"
                    featured={true}
                  />
                  <BenefitCard
                    icon={Palmtree}
                    title="Paid Time Off"
                    description="Generous vacation days, sick leave, and paid holidays throughout the year"
                  />
                  <BenefitCard
                    icon={Home}
                    title="Remote Work"
                    description="Full remote work options with home office setup support"
                  />
                  <BenefitCard
                    icon={Award}
                    title="Performance Bonuses"
                    description="Merit-based bonuses and recognition for outstanding contributions"
                  />
                  <BenefitCard
                    icon={GraduationCap}
                    title="Learning Budget"
                    description="Annual learning budget for courses, conferences, and certifications"
                  />
                  <BenefitCard
                    icon={DollarSign}
                    title="Competitive Salary"
                    description="Industry-leading compensation packages with regular reviews"
                  />
                </div>
              </TabsContent>

              <TabsContent value="growth" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Career Development</h3>
                      <ul className="space-y-3">
                        {[
                          'Personalized growth plans with clear milestones',
                          'Regular one-on-ones with mentors and managers',
                          'Internal promotion opportunities',
                          'Cross-functional project exposure',
                          'Leadership training programs'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Learning Opportunities</h3>
                      <ul className="space-y-3">
                        {[
                          'Access to premium online learning platforms',
                          'Sponsored conference attendance',
                          'Internal tech talks and workshops',
                          'Book club and knowledge sharing sessions',
                          'Certification support and reimbursement'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="perks" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PerkCard
                    icon={Laptop}
                    title="Equipment & Setup"
                    items={[
                      'Latest MacBook or high-spec laptop',
                      'Multiple monitors and peripherals',
                      'Ergonomic chair and desk setup',
                      'Home office stipend'
                    ]}
                  />
                  <PerkCard
                    icon={Coffee}
                    title="Office Amenities"
                    items={[
                      'Free snacks and beverages',
                      'Modern collaborative spaces',
                      'Gaming and recreation area',
                      'Standing desks available'
                    ]}
                  />
                  <PerkCard
                    icon={Plane}
                    title="Work & Travel"
                    items={[
                      'Workation opportunities',
                      'Team offsites and retreats',
                      'Travel expense coverage',
                      'Relocation assistance'
                    ]}
                  />
                  <PerkCard
                    icon={BookOpen}
                    title="Resources"
                    items={[
                      'Technical book library',
                      'Software licenses provided',
                      'Cloud credits for experiments',
                      'Research time allocation'
                    ]}
                  />
                  <PerkCard
                    icon={Heart}
                    title="Wellness"
                    items={[
                      'Mental health support',
                      'Fitness membership subsidy',
                      'Wellness programs',
                      'Flexible sick leave'
                    ]}
                  />
                  <PerkCard
                    icon={Users}
                    title="Community"
                    items={[
                      'Employee resource groups',
                      'Diversity initiatives',
                      'Social clubs and activities',
                      'Volunteer opportunities'
                    ]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        <AnimatedSection id="job-openings" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-departments">
                <Briefcase className="w-4 h-4 mr-2" />
                Open Departments
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Find Your Team
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore opportunities across different teams and specializations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <DepartmentCard
                icon={Code}
                title="Engineering"
                description="Build scalable solutions"
                openings={8}
                color="#3b82f6, #2563eb"
              />
              <DepartmentCard
                icon={Palette}
                title="Design"
                description="Craft beautiful experiences"
                openings={3}
                color="#ec4899, #db2777"
              />
              <DepartmentCard
                icon={Brain}
                title="Product"
                description="Shape product vision"
                openings={2}
                color="#8b5cf6, #7c3aed"
              />
              <DepartmentCard
                icon={BarChart3}
                title="Marketing"
                description="Drive growth strategies"
                openings={4}
                color="#f59e0b, #d97706"
              />
              <DepartmentCard
                icon={Users}
                title="Sales"
                description="Build client relationships"
                openings={5}
                color="#10b981, #059669"
              />
              <DepartmentCard
                icon={Settings}
                title="Operations"
                description="Optimize processes"
                openings={2}
                color="#6366f1, #4f46e5"
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals. Don't see your role?
              </p>
              <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-primary to-secondary" onClick={() => setLocation('/contact')} data-testid="button-submit-application">
                <Send className="mr-2 w-5 h-5" />
                Submit Open Application
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-voices">
                <MessageCircle className="w-4 h-4 mr-2" />
                Team Voices
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  What Our Team Says
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear directly from the people who make Codicore great
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMemberCard
                name="Ravi Kumar"
                role="Senior Software Engineer"
                quote="The learning opportunities here are incredible. I've grown more in 6 months than I did in 2 years elsewhere."
              />
              <TeamMemberCard
                name="Priya Sharma"
                role="Product Designer"
                quote="The collaborative culture and creative freedom make every day exciting. Best team I've worked with!"
              />
              <TeamMemberCard
                name="Amit Patel"
                role="DevOps Lead"
                quote="Work-life balance is real here. The flexibility lets me be productive while being present for my family."
              />
              <TeamMemberCard
                name="Sneha Reddy"
                role="Full Stack Developer"
                quote="From day one, I felt valued and heard. The mentorship program helped me transition smoothly."
              />
              <TeamMemberCard
                name="Rahul Singh"
                role="QA Engineer"
                quote="The attention to quality and the latest tools we use make testing enjoyable and impactful."
              />
              <TeamMemberCard
                name="Ananya Gupta"
                role="Marketing Manager"
                quote="Great people, innovative projects, and a culture that celebrates wins. Proud to be part of this team!"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-process">
                <Workflow className="w-4 h-4 mr-2" />
                Hiring Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Your Journey With Us
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A transparent, respectful hiring process designed to find the right fit
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <ProcessStep
                number={1}
                icon={Send}
                title="Apply"
                description="Submit your application with resume and portfolio"
              />
              <ProcessStep
                number={2}
                icon={Phone}
                title="Initial Chat"
                description="Brief conversation with our HR team to understand your background"
              />
              <ProcessStep
                number={3}
                icon={Code}
                title="Assessment"
                description="Technical or role-specific evaluation based on the position"
              />
              <ProcessStep
                number={4}
                icon={Users}
                title="Team Interview"
                description="Meet the team and discuss culture fit and collaboration"
              />
            </div>

            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Typical Timeline</h3>
                  <p className="text-muted-foreground mb-4">
                    Our entire process usually takes 2-3 weeks from application to offer. We value your time and
                    provide feedback at every stage.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Regular updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Constructive feedback</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Respectful process</span>
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
              <Badge className="mb-4 px-4 py-2" variant="secondary" data-testid="badge-contact">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Have Questions?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our talent team is here to help you find the perfect role
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
                  <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2 text-foreground">Email Us</h4>
                  <p className="text-sm text-muted-foreground">careers@codicore.com</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
                  <Phone className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2 text-foreground">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 XXX XXX XXXX</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
                  <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2 text-foreground">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">Hathras, Uttar Pradesh</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Quick Inquiry</h3>
                <form onSubmit={handleInquirySubmit} className="space-y-4" data-testid="form-inquiry">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-background/50 text-foreground placeholder:text-muted-foreground"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      required
                      data-testid="input-name"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-background/50 text-foreground placeholder:text-muted-foreground"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-background/50 text-foreground placeholder:text-muted-foreground"
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({...inquiryForm, subject: e.target.value})}
                    data-testid="input-subject"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-background/50 text-foreground placeholder:text-muted-foreground"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                    required
                    data-testid="textarea-message"
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary" size="lg" data-testid="button-send-message">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
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
                  Ready to Start Your Journey?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Join a team that values innovation, growth, and making a real impact
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50" onClick={() => setLocation('/contact')} data-testid="button-apply-now">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2" onClick={() => setLocation('/about')} data-testid="button-learn-more">
                  <Users className="mr-2 w-5 h-5" />
                  Learn More About Us
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Equal Opportunity Employer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Diversity Valued</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Remote Friendly</span>
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