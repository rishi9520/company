export default function TestimonialsSection() {
  return (
    <section className="py-20 parallax-bg relative" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
    }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-morphism p-8 rounded-2xl hover-lift">
            <div className="text-primary text-2xl mb-4">"</div>
            <p className="text-foreground mb-6 italic">
              "CODICORE's SkoolHub 2.0 has completely transformed our school administration. 
              The automation features have saved us countless hours."
            </p>
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="School principal testimonial photo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground">Dr. Sarah Johnson</div>
                <div className="text-muted-foreground text-sm">Principal, Green Valley School</div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl hover-lift">
            <div className="text-secondary text-2xl mb-4">"</div>
            <p className="text-foreground mb-6 italic">
              "The retail management solution provided by CODICORE has streamlined our operations 
              and improved our customer service significantly."
            </p>
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Retail business owner testimonial photo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground">Mark Rodriguez</div>
                <div className="text-muted-foreground text-sm">Owner, TechMart Electronics</div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl hover-lift">
            <div className="text-accent text-2xl mb-4">"</div>
            <p className="text-foreground mb-6 italic">
              "Professional, reliable, and innovative. CODICORE delivered exactly what we needed 
              for our restaurant management system."
            </p>
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Restaurant manager testimonial photo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground">Emily Chen</div>
                <div className="text-muted-foreground text-sm">Manager, Fusion Bistro</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            <div className="glass-morphism p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">EduTech</div>
            </div>
            <div className="glass-morphism p-4 rounded-lg">
              <div className="text-2xl font-bold text-secondary">RetailPro</div>
            </div>
            <div className="glass-morphism p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">FoodChain</div>
            </div>
            <div className="glass-morphism p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">SmartSys</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
