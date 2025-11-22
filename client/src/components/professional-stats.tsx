import { motion } from 'framer-motion';
import { Users, Code, Award, TrendingUp, Globe, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StatProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ icon: Icon, value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
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
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card rounded-2xl p-6 sm:p-8 text-center md:hover-lift"
      data-testid={`stat-${label.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="relative inline-block mb-3 sm:mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 md:opacity-50"></div>
        <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full p-3 sm:p-4">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </div>
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>

      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

export default function ProfessionalStats() {
  const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', delay: 0.1 },
    { icon: Code, value: 1200, suffix: '+', label: 'Projects Delivered', delay: 0.2 },
    { icon: Award, value: 50, suffix: '+', label: 'Awards Won', delay: 0.3 },
    { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Satisfaction', delay: 0.4 },
    { icon: Globe, value: 25, suffix: '+', label: 'Countries Served', delay: 0.5 },
    { icon: Clock, value: 24, suffix: '/7', label: 'Support Available', delay: 0.6 },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider"
          >
            Our Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Success By The Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Years of excellence and dedication reflected in our achievements
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
