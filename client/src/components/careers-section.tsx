import { Rocket, Users, TrendingUp } from 'lucide-react';

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology
          </p>
        </div>
        
        {/* Company Culture */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Why Work With Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Rocket className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Innovation-First Culture</h4>
                  <p className="text-muted-foreground">Work on cutting-edge projects that make a real impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Collaborative Environment</h4>
                  <p className="text-muted-foreground">Join a team of passionate professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Growth Opportunities</h4>
                  <p className="text-muted-foreground">Continuous learning and career advancement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse team collaboration in modern office environment" 
              className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        {/* Job Openings */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Current Openings</h3>
          
          <div className="glass-morphism p-6 rounded-2xl hover-lift">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="space-y-2 mb-4 md:mb-0">
                <h4 className="text-xl font-semibold text-foreground">Senior React Developer</h4>
                <p className="text-muted-foreground">Full-time • Remote/On-site • Experience: 3-5 years</p>
                <p className="text-sm text-muted-foreground">Build next-generation web applications with our tech stack</p>
              </div>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover-lift transition-all duration-300"
                data-testid="button-apply-react-dev"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl hover-lift">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="space-y-2 mb-4 md:mb-0">
                <h4 className="text-xl font-semibold text-foreground">Python Backend Developer</h4>
                <p className="text-muted-foreground">Full-time • Remote/On-site • Experience: 2-4 years</p>
                <p className="text-sm text-muted-foreground">Develop robust APIs and backend systems</p>
              </div>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-lg font-semibold hover-lift transition-all duration-300"
                data-testid="button-apply-python-dev"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="glass-morphism p-6 rounded-2xl hover-lift">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="space-y-2 mb-4 md:mb-0">
                <h4 className="text-xl font-semibold text-foreground">UI/UX Designer</h4>
                <p className="text-muted-foreground">Full-time • Remote/On-site • Experience: 2-3 years</p>
                <p className="text-sm text-muted-foreground">Design beautiful and intuitive user experiences</p>
              </div>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-semibold hover-lift transition-all duration-300"
                data-testid="button-apply-designer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
