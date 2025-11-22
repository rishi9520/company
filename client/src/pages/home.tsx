import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Users, Clock, CheckCircle, Code, Smartphone, Brain, Award, TrendingUp, Target, BookOpen, Lightbulb, Rocket, Play, Pause, VolumeX, Volume2, Cloud, X as TwitterX, Instagram } from 'lucide-react';
import { SiReact, SiDjango, SiPostgresql, SiPython, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useLocation } from 'wouter';
import { useRef, useState, useEffect } from 'react';
import codicoreLogo from '@asset/logo.png';
import founderPhoto1 from '@assets/rishi-founder.jpg';
import founderPhoto2 from '@assets/director.jpg';
import TypingText from '@/components/typing-text';
import LiveStats from '@/components/live-stats';
import SEO from '@/components/seo';
import ClientLogos from '@/components/client-logos';
import ProfessionalStats from '@/components/professional-stats';
import TestimonialsEnhanced from '@/components/testimonials-enhanced';
import CaseStudies from '@/components/case-studies';

export default function Home() {
  const [, setLocation] = useLocation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      if (isPlaying) {
        video.play().catch(error => {
          console.error("Error attempting to play video:", error);
        });
      } else {
        video.pause();
      }
    }
  }, [isPlaying, isMuted]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProductClick = (productName) => {
    switch (productName) {
      case 'SkoolHub 2.0':
        setLocation('/products');
        break;
      case 'Retail Management':
        setLocation('/retail-management');
        break;
      case 'Restaurant Solutions':
        setLocation('/restaurant-solutions');
        break;
      case 'Custom Development':
        setLocation('/custom-development');
        break;
      case 'AI Integration':
        setLocation('/ai-integration');
        break;
      case 'Cloud Services':
        setLocation('/cloud-services');
        break;
      default:
        setLocation('/products'); // Default to products page if not found
    }
  };

  return (
    <>
      <SEO
        title="Home - Leading Software Development Company"
        description="CODICORE Private Limited - Transforming businesses with innovative software solutions. SkoolHub 2.0, Retail Management, AI Integration, and Custom Development Services. Trusted by 500+ companies worldwide."
        keywords="software development, web development, mobile apps, AI integration, cloud services, SkoolHub, retail management, restaurant solutions, custom development, CODICORE"
      />

      {/* Hero Section - Animated Logo & Tagline */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Tech Grid Background */}
        <div className="absolute inset-0 tech-grid opacity-30"></div>

        <div className="container mx-auto px-6 text-center relative z-10" data-testid="hero-section">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="logo-container mb-8"
          >
            <div className="logo-glow"></div>
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-3xl flex items-center justify-center relative z-10 overflow-hidden" data-testid="img-logo">
              <img src={codicoreLogo} alt="CODICORE Logo" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            data-testid="text-company-name"
          >
            CODICORE
          </motion.h1>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 mb-4"
            data-testid="text-tagline"
          >
            <TypingText text="Where Ideas Meet Code" speed={80} delay={1500} />
          </motion.p>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            data-testid="text-vision"
          >
            Simplifying the complex. Building intelligent software that transforms business chaos into harmony.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => handleProductClick('SkoolHub 2.0')}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-primary/50"
              data-testid="button-explore-products"
            >
              <span>Explore SkoolHub 2.0</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setLocation('/contact')}
              className="px-8 py-4 glass-morphism text-foreground rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              data-testid="button-contact"
            >
              <Sparkles size={20} />
              <span>Get Started</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Young Genius Founder Section */}
      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" data-testid="section-founder">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6" data-testid="badge-founder">
                <Award size={20} />
                <span className="font-semibold">Founded by a 17-Year-Old Visionary</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-founder-name">
                Rishi Agrawal
              </h2>

              <p className="text-xl text-foreground/80 mb-4" data-testid="text-founder-age">
                <strong>17 years old</strong> • 12th Grade Student • Tech Entrepreneur
              </p>

              <p className="text-lg text-muted-foreground mb-6" data-testid="text-founder-story">
                While most teenagers are preparing for board exams, Rishi is building the future of EdTech. 
                At just 17, he founded and legally incorporated <strong>CODICORE PRIVATE LIMITED</strong>, 
                a company recognized by <strong>Startup India</strong>.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                His flagship product, <strong>SkoolHub 2.0</strong>, is revolutionizing how schools manage teacher 
                arrangements and attendance through AI-powered automation.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-accent/20 text-secondary px-4 py-2 rounded-lg" data-testid="badge-achievement-1">
                  <CheckCircle size={18} />
                  <span>Company Incorporated at 17</span>
                </div>
                <div className="flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-lg" data-testid="badge-achievement-2">
                  <CheckCircle size={18} />
                  <span>Startup India Recognized</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-lg" data-testid="badge-achievement-3">
                  <CheckCircle size={18} />
                  <span>AI Product Live</span>
                </div>
              </div>
            </motion.div>

            {/* Founder Images */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="glass-morphism p-2 rounded-2xl hover-lift" data-testid="img-founder-1">
                    <img 
                      src={founderPhoto1} 
                      alt="Rishi Agrawal - Founder" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  <div className="glass-morphism p-2 rounded-2xl hover-lift mt-8" data-testid="img-founder-2">
                    <img 
                      src={founderPhoto2} 
                      alt="Rishi Agrawal" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Credentials Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" data-testid="section-credentials">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-credentials-title">
              Legally <span className="gradient-text">Registered</span> & <span className="gradient-text">Recognized</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CODICORE PRIVATE LIMITED is a legally incorporated company with official recognition from Government of India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Certificate 1 - Incorporation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-morphism p-6 rounded-2xl hover-lift group"
              data-testid="card-certificate-incorporation"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certificate of Incorporation</h3>
              <p className="text-muted-foreground mb-4">Legally incorporated on <strong>August 26, 2025</strong></p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>CIN:</strong> U58200UP2025PTC230810
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>PAN:</strong> AANCC0250E
              </p>
            </motion.div>

            {/* Certificate 2 - Startup India */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-morphism p-6 rounded-2xl hover-lift group"
              data-testid="card-certificate-startup"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Startup India Recognition</h3>
              <p className="text-muted-foreground mb-4">Recognized by <strong>DPIIT</strong></p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Certificate No:</strong> DIPP227042
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Valid until:</strong> August 25, 2035
              </p>
            </motion.div>

            {/* Certificate 3 - Udyam */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-morphism p-6 rounded-2xl hover-lift group"
              data-testid="card-certificate-udyam"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Udyam Registration</h3>
              <p className="text-muted-foreground mb-4">MSME Registration</p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Udyam No:</strong> UDYAM-UP-36-0030253
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Type:</strong> Micro Enterprise
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SkoolHub 2.0 Product Showcase */}
      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" data-testid="section-product">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6" data-testid="badge-flagship">
              <Sparkles size={20} />
              <span className="font-semibold">Flagship Product</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-product-name">
              <span className="gradient-text">SkoolHub 2.0</span>
            </h2>

            <p className="text-2xl text-foreground/80 mb-4">
              The Ultimate School Management Ecosystem
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI-Powered Automatic Teacher Arrangement System with Real-time WhatsApp Notifications
            </p>
          </motion.div>

          {/* Product Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => handleProductClick('Retail Management')}
              className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              data-testid="card-retail-management"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Retail Management</h3>
              <p className="text-muted-foreground">Solutions for modern retail businesses.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => handleProductClick('Restaurant Solutions')}
              className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              data-testid="card-restaurant-solutions"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Restaurant Solutions</h3>
              <p className="text-muted-foreground">Streamline your restaurant operations.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onClick={() => handleProductClick('Custom Development')}
              className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              data-testid="card-custom-development"
            >
              <div className="w-16 h-16 bg-destructive/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Code className="text-destructive" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Custom Development</h3>
              <p className="text-muted-foreground">Tailored software solutions for your needs.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onClick={() => handleProductClick('AI Integration')}
              className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              data-testid="card-ai-integration"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Brain className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">AI Integration</h3>
              <p className="text-muted-foreground">Leverage AI for smarter solutions.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              onClick={() => handleProductClick('Cloud Services')}
              className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              data-testid="card-cloud-services"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Cloud className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Cloud Services</h3>
              <p className="text-muted-foreground">Scalable and reliable cloud infrastructure.</p>
            </motion.div>
          </div>


          {/* Problem - Solution Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Problem Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl border-2 border-destructive/30"
              data-testid="card-problem"
            >
              <div className="w-16 h-16 bg-destructive/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-destructive" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
              <p className="text-lg text-foreground/80 mb-4">
                <strong>Teacher Arrangement Chaos</strong>
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Schools waste <strong>hours daily</strong> managing teacher absences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Manual process of finding substitute teachers creates stress</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Disrupts student learning and wastes valuable time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Inefficient communication and delayed notifications</span>
                </li>
              </ul>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl border-2 border-primary/30 relative overflow-hidden"
              data-testid="card-solution"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <p className="text-lg text-foreground/80 mb-4">
                  <strong>AI-Powered Automatic Arrangement in &lt;1 Second</strong>
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Processes <strong>thousands of variables</strong> instantly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Finds perfect substitute based on expertise & workload</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Real-time WhatsApp notification to substitute teacher</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Customized logic for each school's unique rules</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Video Showcase */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl font-bold mb-8" data-testid="text-video-title">
              See <span className="gradient-text">SkoolHub 2.0</span> in Action!
            </h3>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border-2 border-primary/30" data-testid="video-container">
              <div className="relative aspect-video">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
                <video 
                  ref={videoRef}
                  src="/src/assets/skoolhub-promo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="relative rounded-2xl shadow-2xl w-full h-full object-cover" 
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={togglePlayPause}
                    className="p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">Key Features</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: 'Auto Arrangement', desc: 'AI finds perfect substitute in <1 second', color: 'primary' },
                { icon: Smartphone, title: 'WhatsApp Alerts', desc: 'Real-time notifications to teachers', color: 'secondary' },
                { icon: Users, title: 'Custom Logic', desc: 'Unique rules for each school', color: 'accent' },
                { icon: Clock, title: 'Timetable Management', desc: 'Complete schedule creation & control', color: 'primary' },
                { icon: TrendingUp, title: 'Live Analytics', desc: 'Real-time reports & insights', color: 'secondary' },
                { icon: Code, title: 'Biometric Integration', desc: 'Attendance device support', color: 'accent' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-morphism p-6 rounded-xl hover-lift group"
                  data-testid={`card-feature-${index}`}
                >
                  <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`text-${feature.color}`} size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block glass-morphism p-8 md:p-12 rounded-3xl border-2 border-primary/30" data-testid="card-pricing">
              <p className="text-lg text-muted-foreground mb-2">SaaS Pricing Model</p>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2" data-testid="text-price">
                ₹1,000<span className="text-2xl">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">Starting price • Monthly or Annual subscriptions</p>
              <button 
                onClick={() => setLocation('/products')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
                data-testid="button-view-pricing"
              >
                <span>View Full Details</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Horizontal Scroll Section */}
      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" data-testid="section-how-it-works">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6" data-testid="badge-how-it-works">
              <Lightbulb size={20} />
              <span className="font-semibold">How It Works</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-how-it-works-title">
              From <span className="gradient-text">Chaos</span> to <span className="gradient-text">Clarity</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how SkoolHub 2.0 transforms teacher arrangement in 4 simple steps
            </p>
          </motion.div>

          {/* Horizontal Scroll Steps */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
              {[
                {
                  step: 1,
                  title: 'Teacher Reports Absence',
                  description: 'When a teacher is absent, the system instantly detects it through attendance marking or manual input.',
                  icon: Users,
                  color: 'primary'
                },
                {
                  step: 2,
                  title: 'AI Analyzes Variables',
                  description: 'Our intelligent algorithm processes thousands of variables: subject expertise, workload, qualifications, and school rules in <1 second.',
                  icon: Brain,
                  color: 'secondary'
                },
                {
                  step: 3,
                  title: 'Perfect Match Found',
                  description: 'The system identifies the best substitute teacher based on availability, expertise, and compatibility.',
                  icon: CheckCircle,
                  color: 'accent'
                },
                {
                  step: 4,
                  title: 'Instant WhatsApp Alert',
                  description: 'Substitute teacher receives real-time WhatsApp notification with all class details. No manual calls needed!',
                  icon: Smartphone,
                  color: 'primary'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="min-w-[300px] md:min-w-[350px] snap-center"
                  data-testid={`card-step-${index}`}
                >
                  <div className="glass-morphism p-8 rounded-2xl h-full hover-lift group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-${step.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <step.icon className={`text-${step.color}`} size={32} />
                        </div>
                        <div className="text-5xl font-bold text-muted-foreground/20">
                          {step.step}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Time Comparison */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <div className="glass-morphism p-8 rounded-2xl text-center border-2 border-destructive/30" data-testid="card-manual-process">
              <div className="text-destructive text-xl font-bold mb-4">❌ Manual Process</div>
              <div className="text-6xl font-bold text-destructive mb-4">30+ min</div>
              <p className="text-muted-foreground">Wasted time daily finding substitutes</p>
            </div>

            <div className="glass-morphism p-8 rounded-2xl text-center border-2 border-primary/30" data-testid="card-automated-process">
              <div className="text-primary text-xl font-bold mb-4">✅ With SkoolHub 2.0</div>
              <div className="text-6xl font-bold text-primary mb-4">&lt;1 sec</div>
              <p className="text-muted-foreground">AI-powered instant arrangement</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog/Information Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" data-testid="section-blog">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6" data-testid="badge-insights">
              <BookOpen size={20} />
              <span className="font-semibold">Insights & Information</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-blog-title">
              Learn More About <span className="gradient-text">Automation</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how SkoolHub 2.0 is revolutionizing school management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Why Automation Matters',
                description: 'Schools lose valuable time in manual teacher arrangement. Learn how automation saves 30+ minutes daily and reduces administrative stress.',
                icon: Rocket,
                category: 'Efficiency'
              },
              {
                title: 'The Science Behind AI Matching',
                description: 'Our algorithm analyzes subject expertise, teacher workload, qualifications, and custom school rules to find the perfect substitute every time.',
                icon: Brain,
                category: 'Technology'
              },
              {
                title: 'Real-Time Communication',
                description: 'WhatsApp integration ensures instant notifications. Teachers receive arrangement details immediately, eliminating manual phone calls.',
                icon: Smartphone,
                category: 'Communication'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
                data-testid={`card-article-${index}`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <article.icon className="text-white" size={28} />
                </div>

                <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {article.category}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {article.description}
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" data-testid="section-tech-stack">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-tech-title">
              Built with <span className="gradient-text">Cutting-Edge</span> Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SkoolHub 2.0 leverages modern tech stack for performance, scalability, and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { Icon: SiReact, name: 'React', color: '#61DAFB' },
              { Icon: SiDjango, name: 'Django', color: '#092E20' },
              { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
              { Icon: SiPython, name: 'Python', color: '#3776AB' },
              { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
              { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism p-6 rounded-xl hover-lift group flex flex-col items-center justify-center aspect-square"
                data-testid={`card-tech-${index}`}
              >
                <tech.Icon className="text-5xl mb-4 group-hover:scale-125 transition-transform" style={{ color: tech.color }} />
                <p className="font-semibold text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <LiveStats />

      {/* Vision & Future Section */}
      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" data-testid="section-vision">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="text-vision-title">
              Our <span className="gradient-text">Vision</span> for the Future
            </h2>

            <p className="text-xl text-foreground/80 mb-6">
              "To simplify the complex. To build intelligent software that works silently in the background, 
              transforming business chaos into harmony."
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-morphism p-6 rounded-xl" data-testid="card-vision-current">
                <h3 className="text-xl font-bold mb-3 text-primary">Current Focus</h3>
                <p className="text-muted-foreground">EdTech & Automation Solutions</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl" data-testid="card-vision-expanding">
                <h3 className="text-xl font-bold mb-3 text-secondary">Expanding To</h3>
                <p className="text-muted-foreground">Retail & B2B Sectors</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl" data-testid="card-vision-mission">
                <h3 className="text-xl font-bold mb-3 text-accent">Mission</h3>
                <p className="text-muted-foreground">Transform Business Operations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Professional Stats Section */}
      <ProfessionalStats />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Testimonials Section */}
      <TestimonialsEnhanced />

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
          <div className="tech-grid absolute inset-0 opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-title">
              Ready to <span className="gradient-text">Transform</span> Your School?
            </h2>

            <p className="text-xl text-muted-foreground mb-12">
              Join the schools that have already automated their teacher arrangements with SkoolHub 2.0
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setLocation('/products')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-primary/50"
                data-testid="button-cta-demo"
              >
                <span>See SkoolHub 2.0 in Action</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setLocation('/contact')}
                className="px-8 py-4 glass-morphism text-foreground rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105"
                data-testid="button-cta-contact"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}