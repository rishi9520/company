import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectImage1 from '@assets/stock_images/successful_tech_comp_854c7538.jpg';
import projectImage2 from '@assets/stock_images/modern_software_deve_c6e5ba73.jpg';
import projectImage3 from '@assets/stock_images/professional_busines_487fe65b.jpg';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'SkoolHub 2.0 - Educational Revolution',
      client: 'Greenwood International School',
      category: 'Education Technology',
      image: projectImage1,
      description: 'Complete digital transformation of school management system serving 5000+ students',
      results: [
        { metric: '85%', label: 'Time Saved in Administration' },
        { metric: '95%', label: 'Parent Satisfaction Rate' },
        { metric: '60%', label: 'Reduction in Paper Usage' },
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      duration: '4 months',
      impact: 'Transformed traditional school operations into a modern, paperless system with real-time parent-teacher communication, automated attendance, and comprehensive analytics.',
    },
    {
      title: 'Multi-Location Retail Management',
      client: 'FreshMart Supermarkets',
      category: 'Retail & E-Commerce',
      image: projectImage2,
      description: 'Enterprise-grade retail management system for 50+ store locations',
      results: [
        { metric: '40%', label: 'Increase in Inventory Efficiency' },
        { metric: '30%', label: 'Reduction in Stockouts' },
        { metric: '$2M', label: 'Annual Cost Savings' },
      ],
      technologies: ['React', 'Django', 'Redis', 'Docker'],
      duration: '6 months',
      impact: 'Integrated POS systems across all locations with real-time inventory sync, predictive analytics for demand forecasting, and automated reordering.',
    },
    {
      title: 'AI-Powered Restaurant Analytics',
      client: 'Gourmet Restaurant Group',
      category: 'Hospitality & AI',
      image: projectImage3,
      description: 'Smart restaurant management with AI-driven insights for 25 restaurants',
      results: [
        { metric: '50%', label: 'Faster Table Turnover' },
        { metric: '35%', label: 'Reduction in Food Waste' },
        { metric: '4.8★', label: 'Average Customer Rating' },
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'MongoDB'],
      duration: '5 months',
      impact: 'Implemented AI-based demand prediction, automated kitchen management, and customer preference analysis to optimize operations and enhance dining experience.',
    },
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
            Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3 sm:mb-4 px-4"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4"
          >
            Real projects, real results, real impact on businesses
          </motion.p>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-testid={`case-study-${index}`}
            >
              <Card className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-smooth hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <Badge className="absolute top-6 left-6 bg-primary/90 text-white border-0">
                      {study.category}
                    </Badge>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-primary font-semibold mb-4 text-sm">
                      Client: {study.client}
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold gradient-text mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="bg-black/40 rounded-xl p-4 mb-6 border border-white/10">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {study.impact}
                        </p>
                      </div>
                    </div>

                    {/* Technologies & Duration */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="h-4 w-px bg-gray-600"></div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-smooth font-semibold group"
                    >
                      <span>Learn More About This Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 glass-card rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-smooth"
              data-testid="button-start-project"
            >
              Start Your Project
            </a>
            <a
              href="/products"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-smooth"
              data-testid="button-view-services"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
