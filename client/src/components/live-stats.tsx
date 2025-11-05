
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Users, Clock, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  {
    icon: GraduationCap,
    label: "Schools Using SkoolHub",
    value: 10,
    suffix: "+",
    color: "from-primary to-secondary"
  },
  {
    icon: Users,
    label: "Teachers Helped",
    value: 500,
    suffix: "+",
    color: "from-secondary to-accent"
  },
  {
    icon: Clock,
    label: "Hours Saved Monthly",
    value: 1500,
    suffix: "+",
    color: "from-accent to-primary"
  },
  {
    icon: TrendingUp,
    label: "Efficiency Improvement",
    value: 95,
    suffix: "%",
    color: "from-purple-500 to-pink-500"
  }
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function LiveStats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impact By <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time statistics showing how SkoolHub 2.0 is transforming schools across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl hover-lift group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-5xl font-bold mb-3 gradient-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            * Statistics updated in real-time based on active deployments
          </p>
        </motion.div>
      </div>
    </section>
  );
}
