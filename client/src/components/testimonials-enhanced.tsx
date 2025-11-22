import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import teamImage1 from '@assets/stock_images/diverse_business_tea_b07d3a2b.jpg';
import teamImage2 from '@assets/stock_images/diverse_business_tea_3e07fd0b.jpg';
import teamImage3 from '@assets/stock_images/professional_busines_de355176.jpg';

export default function TestimonialsEnhanced() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVision Inc.',
      image: teamImage1,
      rating: 5,
      text: 'CODICORE transformed our business with their innovative solutions. Their team is professional, responsive, and truly understands our needs. The SkoolHub platform has revolutionized how we manage our educational institution.',
      company: 'TechVision Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, RetailPro Solutions',
      image: teamImage2,
      rating: 5,
      text: 'Outstanding work! The retail management system they developed exceeded all our expectations. The attention to detail and commitment to quality is remarkable. Our efficiency has increased by 40% since implementation.',
      company: 'RetailPro Solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations, FoodChain Global',
      image: teamImage3,
      rating: 5,
      text: 'The restaurant management solution from CODICORE has been a game-changer for our multi-location business. Real-time analytics, inventory management, and seamless integration - everything we needed and more.',
      company: 'FoodChain Global'
    },
    {
      name: 'David Thompson',
      role: 'VP Engineering, CloudScale',
      image: teamImage1,
      rating: 5,
      text: 'Incredible team to work with! Their cloud services and AI integration capabilities are top-notch. They delivered a scalable solution that handles millions of requests per day without breaking a sweat.',
      company: 'CloudScale'
    },
    {
      name: 'Lisa Anderson',
      role: 'Product Manager, InnovateLabs',
      image: teamImage2,
      rating: 5,
      text: 'CODICORE turned our vision into reality. The custom development work was executed flawlessly, on time and within budget. Their technical expertise and project management skills are exceptional.',
      company: 'InnovateLabs'
    },
    {
      name: 'James Wilson',
      role: 'Founder, StartupHub',
      image: teamImage3,
      rating: 5,
      text: 'Best decision we made was partnering with CODICORE. Their end-to-end solutions and ongoing support have been invaluable to our growth. They truly care about their clients\' success.',
      company: 'StartupHub'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it - hear from businesses we've helped transform
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-testid={`testimonial-${index}`}
            >
              <Card className="glass-card rounded-2xl p-8 h-full flex flex-col hover-lift relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <Avatar className="w-14 h-14 border-2 border-primary/30">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-primary text-xs mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">Ready to join our success stories?</p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-smooth"
            data-testid="button-get-started-testimonials"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
