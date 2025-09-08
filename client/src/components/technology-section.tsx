import { Database, Cloud, Brain } from 'lucide-react';
import { SiReact, SiPython } from 'react-icons/si';

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies powering our innovative solutions
          </p>
        </div>
        
        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <SiReact className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Frontend</h4>
            <p className="text-muted-foreground text-sm">React.js, TypeScript, Tailwind CSS</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <SiPython className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Backend</h4>
            <p className="text-muted-foreground text-sm">Django, Node.js, Express</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Database</h4>
            <p className="text-muted-foreground text-sm">PostgreSQL, MongoDB, Redis</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Cloud</h4>
            <p className="text-muted-foreground text-sm">AWS, Docker, Kubernetes</p>
          </div>
        </div>
        
        {/* Detailed Tech Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 glass-morphism rounded-lg hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <SiReact className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground">React 18 & TypeScript</h5>
                <p className="text-muted-foreground text-sm">Modern component-based architecture</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 glass-morphism rounded-lg hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <SiPython className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground">Django Framework</h5>
                <p className="text-muted-foreground text-sm">Robust backend development</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 glass-morphism rounded-lg hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground">AI Integration</h5>
                <p className="text-muted-foreground text-sm">Machine learning capabilities</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Software development environment with code on multiple monitors" 
              className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
