// File: src/pages/products.tsx

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Cloud, Code, Dna, Layers, Play, Shield, Sparkles, Store, Users, Utensils, Zap, BarChart } from 'lucide-react';
import { useLenis } from '@/hooks/use-lenis';

// CSS Module ko import kiya
import styles from '../styles/ProductsPage.module.css';

// Interactive 3D Card Component
const ProductCard = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    ref.current.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
    ref.current.style.boxShadow = `0 50px 100px -20px rgba(16, 185, 129, 0.3)`;
    ref.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    ref.current.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.2)';
  };
  return (
    <motion.div
      ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className={`${styles.productCardBase} ${className}`}
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

// Feature Component for Horizontal Scroll
const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className={`${styles.featureCardHorizontal} shrink-0 w-[400px] h-[450px] p-8 rounded-3xl flex flex-col justify-between`}>
      <div>
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${color}`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-4">{title}</h3>
      </div>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
};

// The Main Page Component
export default function ProductsPage() {
  useLenis();
  const reverseScrollRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const deepDiveRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: reverseProgress } = useScroll({ target: reverseScrollRef, offset: ['start end', 'end start'] });
  const reverseY = useTransform(reverseProgress, [0.1, 0.9], ['120%', '-120%']);

  const { scrollYProgress: horizontalProgress } = useScroll({ target: horizontalScrollRef, offset: ['start start', 'end end'] });
  const horizontalX = useTransform(horizontalProgress, [0.1, 0.9], ['0%', '-66.66%']);

  const { scrollYProgress: deepDiveProgress } = useScroll({ target: deepDiveRef, offset: ['start end', 'end start'] });
  const scaleImage = useTransform(deepDiveProgress, [0.1, 0.5], [0.8, 1]);
  const opacityImage = useTransform(deepDiveProgress, [0.1, 0.3], [0.2, 1]);

  return (
    <div className={styles.productPageWrapper}>
      <div className="fixed inset-0 w-full h-screen z-0">
        <video src="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      </div>
      <div className={styles.holographicGrid}></div>

      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">Our Innovations</h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">Crafting intelligent software that doesn't just solve problems—it creates opportunities.</p>
          </motion.div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <ProductCard className={styles.glassMorphism}>
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-base font-bold animate-glow">
                      <Sparkles className="w-6 h-6" /><span>Flagship Product</span>
                    </div>
                    <h2 className="text-5xl font-bold gradient-text">SkoolHub 2.0</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">The future of school administration is here. An AI-powered ecosystem designed to bring harmony, efficiency, and intelligence to your campus.</p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {[{ icon: Users, text: 'Student Lifecycle AI' }, { icon: Zap, text: 'Instant Smart Timetables' }, { icon: Brain, text: 'Predictive Analytics' }, { icon: Shield, text: 'Fort-Knox Security' }].map((feature, index) => (
                        <div key={index} className={`${styles.featureItem} flex items-center space-x-3 p-3 rounded-lg`}>
                          <feature.icon className="w-6 h-6 text-primary" />
                          <span className="text-foreground font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4"><button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold button-shine flex items-center justify-center space-x-3"><Play size={24} /> <span>Watch The Film</span></button></div>
                  </div>
                  <div className="relative aspect-video">
                    <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
                    <video src="/videos/skoolhub-promo.mp4" autoPlay loop muted playsInline className="relative rounded-2xl shadow-2xl w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </ProductCard>

            <div ref={deepDiveRef} className="text-center py-32">
                <h2 className="text-5xl font-bold gradient-text mb-8">A Look Under the Hood</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20">SkoolHub isn't just a tool, it's a complete operating system for your school, built on three powerful pillars.</p>
                <div className="grid lg:grid-cols-2 items-center gap-16">
                    <motion.div style={{ scale: scaleImage, opacity: opacityImage }} className="relative aspect-square">
                        <img src="https://images.unsplash.com/photo-1591115765324-212b0c51193f?auto=format&fit=crop&w=1000&q=80" alt="Tech Dashboard" className="object-cover rounded-3xl w-full h-full"/>
                        <div className={`absolute inset-0 rounded-3xl ${styles.techImageOverlay}`}></div>
                    </motion.div>
                    <div className="text-left space-y-8">
                        {[{icon: Dna, title: "The AI Core", desc: "Our proprietary AI learns from your school's unique patterns to make smarter, predictive decisions every day."},
                          {icon: Layers, title: "Modular Architecture", desc: "From admissions to alumni, every module works in perfect harmony, yet is powerful enough to stand on its own."},
                          {icon: Shield, title: "Unbreakable Security", desc: "With end-to-end encryption and dedicated cloud servers, your school's data is more secure than in a physical vault."}].map((item, i) => (
                            <motion.div key={i} className="flex gap-6 items-start" initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.7, delay: i * 0.2}}>
                                <div className="p-4 bg-primary/10 rounded-lg"><item.icon className="w-8 h-8 text-primary"/></div>
                                <div><h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground text-lg">{item.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={reverseScrollRef} className="h-[300vh] relative my-32">
              <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                  <h2 className="text-5xl font-bold gradient-text text-center mb-16 absolute top-[15%]">The Codiceore Engine</h2>
                  <motion.div style={{ y: reverseY }} className="flex flex-col gap-10">
                      {[{ icon: Brain, title: 'AI-Powered Core', description: 'Every product is built on an intelligent foundation that learns and adapts to your specific business needs.' },
                        { icon: Cloud, title: 'Infinitely Scalable Cloud', description: 'Our cloud-native architecture grows with you, from 10 to 10 million users, without breaking a sweat.' },
                        { icon: Users, title: 'Human-Centric Design', description: 'We believe technology should be powerful, yet feel incredibly simple and intuitive to use every single day.' },
                        { icon: Code, title: 'Clean & Efficient Code', description: 'Our commitment to quality code means faster, more reliable, and secure software for you.' },
                      ].map((item, index) => (
                          <div key={index} className={`w-[650px] p-8 ${styles.glassCard} rounded-2xl flex items-center gap-6`}>
                              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><item.icon className="w-8 h-8 text-primary" /></div>
                              <div><h3 className="text-2xl font-bold text-foreground">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                          </div>
                      ))}
                  </motion.div>
              </div>
            </div>

            <div ref={horizontalScrollRef} className="h-[300vh] relative my-32">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{amount: 0.5}} className="px-6">
                        <h2 className="text-5xl font-bold gradient-text text-center mb-6">Our Growing Ecosystem</h2>
                        <p className="text-xl text-muted-foreground text-center mb-24">The same core intelligence, tailored for every industry.</p>
                    </motion.div>
                    <motion.div style={{ x: horizontalX }} className="flex gap-10 pl-24">
                        <FeatureCard icon={Store} title="CodiRetail" description="AI-driven inventory, predictive sales analytics, and hyper-personalized customer engagement for the modern retailer." color="from-green-500 to-emerald-600"/>
                        <FeatureCard icon={Utensils} title="CodiResto" description="Automated kitchen workflows, smart ordering systems, and data-driven menu engineering for peak restaurant efficiency." color="from-orange-500 to-red-600"/>
                        <FeatureCard icon={BarChart} title="CodiAnalytics" description="A powerful, standalone business intelligence platform that transforms your raw data into actionable, profitable insights." color="from-blue-500 to-purple-600"/>
                    </motion.div>
                </div>
            </div>
            
            <div className="text-center py-24">
              <h2 className="text-5xl font-bold gradient-text mb-8">Our Core Philosophy</h2>
              <div className="grid md:grid-cols-3 gap-10 mt-16">
                {[{ icon: '💡', title: 'Innovation First', desc: 'We don\'t follow trends, we aim to create them by solving problems in ways no one has thought of before.' },
                  { icon: '🤝', title: 'Partners, Not Vendors', desc: 'Your success is our success. We work with you, not just for you, to achieve your goals.' },
                  { icon: '💎', title: 'Quality Over Quantity', desc: 'We believe in building fewer, better things. Our focus is on robust, reliable, and beautiful software.' }
                ].map((item, i) => (
                  <ProductCard key={i} delay={i * 0.15} className={`${styles.solutionCard} group p-1 rounded-3xl`}>
                    <div className={`${styles.solutionCardInner} p-8 text-center flex flex-col items-center`}><div className="text-6xl mb-6">{item.icon}</div><h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3><p className="text-muted-foreground text-lg">{item.desc}</p></div>
                  </ProductCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}