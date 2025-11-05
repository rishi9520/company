
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLenis } from '@/hooks/use-lenis';

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing School Management in India",
    excerpt: "Discover how artificial intelligence is transforming the way schools handle teacher arrangements, attendance, and administrative tasks.",
    category: "Technology",
    author: "Rishi Agrawal",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    slug: "ai-revolutionizing-school-management"
  },
  {
    id: 2,
    title: "10 Benefits of Automated Teacher Arrangement Systems",
    excerpt: "Learn how automation can save schools 30+ minutes daily and reduce administrative stress significantly.",
    category: "Education",
    author: "CODICORE Team",
    date: "January 12, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop",
    slug: "benefits-automated-teacher-arrangement"
  },
  {
    id: 3,
    title: "Complete Guide to School Management Software in 2025",
    excerpt: "Everything you need to know about choosing the right school management system for your institution.",
    category: "Guide",
    author: "Rishi Agrawal",
    date: "January 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
    slug: "guide-school-management-software-2025"
  },
  {
    id: 4,
    title: "Why WhatsApp Integration is Crucial for Modern Schools",
    excerpt: "Real-time communication through WhatsApp can transform how schools coordinate with teachers and parents.",
    category: "Communication",
    author: "CODICORE Team",
    date: "January 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop",
    slug: "whatsapp-integration-schools"
  },
  {
    id: 5,
    title: "Understanding the ROI of School Management Systems",
    excerpt: "Calculate the actual return on investment when implementing automated school management solutions.",
    category: "Business",
    author: "Rishi Agrawal",
    date: "January 5, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    slug: "roi-school-management-systems"
  },
  {
    id: 6,
    title: "Future of EdTech: Trends to Watch in 2025",
    excerpt: "Explore the latest trends in educational technology and how they'll shape the future of learning.",
    category: "Trends",
    author: "CODICORE Team",
    date: "January 3, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    slug: "future-edtech-trends-2025"
  }
];

const categories = ["All", "Technology", "Education", "Guide", "Communication", "Business", "Trends"];

export default function BlogPage() {
  useLenis();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background pt-32 pb-20">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <BookOpen size={20} />
            <span className="font-semibold">Knowledge Hub</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Blog & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights on school management, automation, and educational technology
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
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search articles..."
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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-morphism p-12 rounded-3xl text-center"
        >
          <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and updates delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:scale-105 transition-smooth">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
