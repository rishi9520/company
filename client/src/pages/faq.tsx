
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Minus, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLenis } from '@/hooks/use-lenis';

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What is SkoolHub 2.0?",
        a: "SkoolHub 2.0 is an AI-powered automated school management system that handles teacher arrangements, attendance tracking, fee management, and parent-teacher communication. It uses advanced algorithms to find the perfect substitute teacher in less than 1 second when a teacher is absent."
      },
      {
        q: "How many schools are currently using SkoolHub 2.0?",
        a: "Currently, 10+ schools across India are using SkoolHub 2.0 to streamline their operations and save valuable administrative time."
      },
      {
        q: "Is SkoolHub 2.0 suitable for my school size?",
        a: "Yes! SkoolHub 2.0 is designed to scale from small schools with 100 students to large institutions with 5000+ students. The system adapts to your specific needs and custom rules."
      }
    ]
  },
  {
    category: "Features",
    questions: [
      {
        q: "How does the automatic teacher arrangement work?",
        a: "When a teacher marks absent, our AI algorithm instantly analyzes thousands of variables including subject expertise, teacher workload, qualifications, and your school's custom rules. It finds the perfect substitute in <1 second and sends a WhatsApp notification to the selected teacher."
      },
      {
        q: "Can I customize the arrangement logic?",
        a: "Absolutely! Each school has unique rules. SkoolHub 2.0 allows you to set custom logic based on your preferences - subject priority, teacher experience, workload distribution, and more."
      },
      {
        q: "Does it integrate with biometric devices?",
        a: "Yes, SkoolHub 2.0 supports integration with popular biometric attendance devices for automated attendance tracking."
      },
      {
        q: "What reports and analytics are available?",
        a: "We provide real-time analytics including attendance trends, teacher workload distribution, subject-wise arrangement frequency, time saved, and custom reports as per your needs."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        q: "What is the pricing model?",
        a: "SkoolHub 2.0 follows a SaaS pricing model starting at ₹1,000/month. We offer both monthly and annual subscription plans with discounts on annual commitments."
      },
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 14-day free trial with full access to all features so you can experience the power of automation before committing."
      },
      {
        q: "Are there any hidden charges?",
        a: "No hidden charges. Our pricing is transparent and includes all features, updates, and customer support. Custom integrations may have additional costs."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What technology stack is used?",
        a: "SkoolHub 2.0 is built with React.js (frontend), Django (backend), PostgreSQL (database), and hosted on secure cloud infrastructure for 99.9% uptime."
      },
      {
        q: "Is my school data secure?",
        a: "Security is our top priority. We use bank-level encryption, regular backups, and comply with data protection regulations. Your data is stored securely and never shared with third parties."
      },
      {
        q: "Can SkoolHub 2.0 work offline?",
        a: "The system requires internet connectivity for real-time notifications and cloud sync. However, we're working on offline capabilities for basic features."
      },
      {
        q: "How long does implementation take?",
        a: "Implementation typically takes 1-2 weeks depending on your school size and data migration requirements. Our team provides full support during onboarding."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        q: "What kind of support do you provide?",
        a: "We offer 24/7 email support, live chat during business hours, video training sessions, and a comprehensive knowledge base. Premium plans include dedicated account managers."
      },
      {
        q: "How do I get started?",
        a: "Simply contact us through our website or call us. We'll schedule a demo, understand your requirements, and create a customized implementation plan."
      },
      {
        q: "Can I request new features?",
        a: "Yes! We actively listen to customer feedback. You can submit feature requests through our support portal, and we evaluate them for future releases."
      }
    ]
  }
];

export default function FAQPage() {
  useLenis();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const categories = ["All", ...faqData.map(section => section.category)];

  const filteredFAQs = faqData.filter(section => {
    if (selectedCategory !== "All" && section.category !== selectedCategory) return false;
    
    if (searchQuery) {
      return section.questions.some(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background pt-32 pb-20">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
            <HelpCircle size={20} />
            <span className="font-semibold">Help Center</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about SkoolHub 2.0 and our services
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-morphism p-6 rounded-2xl">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background/50"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                {categories.map((cat) => (
                  <Badge
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 whitespace-nowrap ${
                      selectedCategory === cat 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                        : 'hover:bg-primary/10'
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Sections */}
        {filteredFAQs.map((section, sectionIndex) => (
          <motion.div
            key={section.category}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.questions
                .filter(q => 
                  !searchQuery || 
                  q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  q.a.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item, qIndex) => {
                  const questionId = `${section.category}-${qIndex}`;
                  const isOpen = openQuestions.includes(questionId);

                  return (
                    <div
                      key={questionId}
                      className="glass-morphism rounded-xl overflow-hidden hover-lift transition-all"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full p-6 flex items-center justify-between text-left group"
                      >
                        <h3 className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                          {item.q}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-muted-foreground leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
            </div>
          </motion.div>
        ))}

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No FAQs found matching your search.</p>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-morphism p-12 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:scale-105 transition-smooth inline-block">
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
