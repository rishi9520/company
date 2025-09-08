import { Tag, MapPin, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About CODICORE</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legally registered technology company in India, pioneering innovative software solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between innovative ideas and cutting-edge technology, 
              CODICORE PRIVATE LIMITED has emerged as a trusted partner for businesses seeking digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our flagship product, SkoolHub 2.0, represents our commitment to revolutionizing educational 
              technology with automated school management solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-morphism p-6 rounded-lg text-center hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">2025</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="glass-morphism p-6 rounded-lg text-center hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with team collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        {/* Company Registration Details */}
        <div className="glass-morphism p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Legal Certification</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Tag className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">Company Registration</h4>
              <p className="text-muted-foreground">CIN: U58200UP2025PTC230810</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">Registered Office</h4>
              <p className="text-muted-foreground">Uttar Pradesh, India</p>
            </div>
            <div className="space-y-2">
              <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">Ministry Approved</h4>
              <p className="text-muted-foreground">Corporate Affairs</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 gradient-text">Meet Our Team</h3>
          <p className="text-lg text-muted-foreground">Passionate innovators driving technology forward</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="CEO and Founder portrait" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-foreground mb-2">Rishi Agrawal</h4>
            <p className="text-primary font-medium mb-3">Founder & CEO</p>
            <p className="text-muted-foreground text-sm">Visionary leader with expertise in software development and business strategy</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Chief Technology Officer portrait" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-foreground mb-2">Tech Lead</h4>
            <p className="text-secondary font-medium mb-3">Chief Technology Officer</p>
            <p className="text-muted-foreground text-sm">Full-stack developer specializing in React, Django, and cloud architecture</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Product Manager portrait" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-foreground mb-2">Product Manager</h4>
            <p className="text-accent font-medium mb-3">Head of Product</p>
            <p className="text-muted-foreground text-sm">Expert in user experience design and product development lifecycle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
