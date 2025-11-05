
import { useLocation } from "wouter";
import { Home, Search, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[200px] font-bold gradient-text leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Oops! Page Not Found
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setLocation("/")}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-primary/50"
            >
              <Home size={20} />
              <span>Go Home</span>
            </button>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 glass-morphism text-foreground rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16"
          >
            <p className="text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <Search size={18} />
              <span>Or explore these popular pages:</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Technology", path: "/technology" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <button
                  key={link.path}
                  onClick={() => setLocation(link.path)}
                  className="px-6 py-2 bg-muted/50 hover:bg-muted text-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/10"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
