import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Award, Target, Eye, Lightbulb, Zap } from 'lucide-react';
import { useLenis } from '@/hooks/use-lenis';

// Framer Motion Animation Variants (isse code clean rehta hai)
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeInOut' },
};

export default function AboutPage() {
  useLenis();

  // 3D tilt effect ke liye useEffect ko aese hi rehne dete hain, ye bohot accha effect hai
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15; // Thoda subtle kiya
        const rotateY = (centerX - x) / 15; // Thoda subtle kiya
        
        (card as HTMLElement).style.transform = `
          perspective(1200px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(1.02, 1.02, 1.02)
        `;
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background me subtle grid lines, jo professional look deti hain */}
      <div className="fixed inset-0 pointer-events-none tech-grid opacity-30"></div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">

          {/* === Hero Section === */}
          <motion.div 
            className="text-center mb-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
              {...fadeInUp}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              Driven by innovation, Codiceore was born from a simple idea: to solve real-world problems with intelligent, elegant code.
            </motion.p>
          </motion.div>

          {/* === Our Mission & Vision === */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-28">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaborating on a vision" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            <div className="space-y-10">
              <motion.div {...fadeInUp} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-4">
                  <Eye className="w-10 h-10 text-primary" />
                  <h2 className="text-4xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's leading B2B tech partner, empowering businesses to achieve unparalleled efficiency through intelligent automation.
                </p>
              </motion.div>
              <motion.div {...fadeInUp} viewport={{ once: true }} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
                <div className="flex items-center gap-4 mb-4">
                  <Target className="w-10 h-10 text-secondary" />
                  <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To build revolutionary products like SkoolHub 2.0 that solve core operational challenges, starting with the education sector, and expanding to every industry in need of a digital transformation.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* === Our Core Values === */}
          <div className="mb-28">
            <motion.h2 className="text-4xl font-bold text-center mb-16 gradient-text" {...fadeInUp} viewport={{ once: true }}>
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Lightbulb, title: 'Innovation First', description: 'We constantly challenge the status quo to build what\'s next.' },
                { icon: Users, title: 'Customer Centricity', description: 'Our clients\' success is our ultimate benchmark.' },
                { icon: Zap, title: 'Execution Excellence', description: 'We deliver high-quality, reliable software with speed and precision.' }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="tilt-card glass-morphism p-8 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <value.icon className="w-12 h-12 mx-auto mb-5 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* === Meet the Founder === */}
          <div className="glass-morphism rounded-3xl p-10 md:p-16 mb-28">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse-slow opacity-50"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                    alt="Rishi Agrawal, Founder & CEO"
                    className="relative w-full h-full rounded-full object-cover border-4 border-background"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-2">The Mind Behind The Code</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Rishi Agrawal</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At just 17, Rishi founded Codiceore with a singular vision: to solve India's unique challenges with home-grown technology. As a self-taught programmer and a student himself, he experienced the daily operational hurdles in schools firsthand, which led to the creation of SkoolHub 2.0.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "I believe code is the most powerful tool of our generation. My goal is not just to build a company, but to build solutions that empower our nation."
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* === Legal & Recognition === */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
             <h3 className="text-3xl font-bold text-center mb-8 gradient-text relative z-10">Our Recognition</h3>
             <p className="text-muted-foreground mb-8">We are proud to be a DPIIT Certified Startup, recognized by the Government of India.</p>
             <div className="flex justify-center">
                {/* Yahan Startup India ka logo daalna hai */}
                <div className="w-64 p-4 glass-morphism rounded-2xl">
                    <img src="/path/to/startup-india-logo.png" alt="Startup India Logo" className="w-full h-auto"/>
                </div>
             </div>
             <p className="text-xs text-muted-foreground mt-8">CODICORE PRIVATE LIMITED | CIN: U58200UP2025PTC230810</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}