import { SiLinkedin, SiFacebook, SiYoutube } from 'react-icons/si';
import logoImage from '@assets/logo.png';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-muted relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="CODICORE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">CODICORE</span>
            </div>
            <p className="text-muted-foreground">
              Where ideas meet code. Building next-generation software solutions.
            </p>
            <div className="text-sm text-muted-foreground">
              CIN: U58200UP2025PTC230810
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">SkoolHub 2.0</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retail Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Restaurant Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('careers')} className="hover:text-primary transition-colors">Careers</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a 
                href="https://www.linkedin.com/in/rishi-agrawal-994a42253" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover-lift transition-all duration-300"
              >
                <SiLinkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.facebook.com/share/1CVFhTjsSj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover-lift transition-all duration-300"
              >
                <SiFacebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://youtube.com/@softcode21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center hover-lift transition-all duration-300"
              >
                <SiYoutube className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Follow us for updates and tech insights
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 CODICORE PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
