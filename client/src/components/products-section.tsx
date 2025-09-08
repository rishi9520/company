import { CheckCircle, Play, GraduationCap, Store, Utensils, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 parallax-bg relative" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
    }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions designed to transform businesses across industries
          </p>
        </div>
        
        {/* SkoolHub 2.0 Showcase */}
        <div className="glass-morphism p-8 md:p-12 rounded-3xl mb-16 hover-lift">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold">
                Flagship Product
              </div>
              <h3 className="text-4xl font-bold gradient-text">SkoolHub 2.0</h3>
              <p className="text-xl text-muted-foreground">
                Comprehensive automated school management software that revolutionizes educational administration
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Student Information Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Automated Attendance Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Fee Management System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Parent-Teacher Communication</span>
                </div>
              </div>
              
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover-lift transition-all duration-300 flex items-center space-x-2">
                <Play size={20} />
                <span>View Demo</span>
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="SkoolHub 2.0 dashboard interface showing educational management features" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        {/* Other Solutions */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-morphism p-8 rounded-2xl hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Education Solutions</h4>
            <p className="text-muted-foreground mb-6">
              Comprehensive digital transformation for educational institutions
            </p>
            <button className="text-primary font-semibold hover:text-secondary transition-colors flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Retail Management</h4>
            <p className="text-muted-foreground mb-6">
              Point of sale and inventory management systems for retail businesses
            </p>
            <button className="text-secondary font-semibold hover:text-accent transition-colors flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Restaurant Solutions</h4>
            <p className="text-muted-foreground mb-6">
              Complete restaurant management with ordering and kitchen automation
            </p>
            <button className="text-accent font-semibold hover:text-primary transition-colors flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
