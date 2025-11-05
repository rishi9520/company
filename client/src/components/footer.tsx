// client/src/components/Footer.tsx

import { SiLinkedin, SiFacebook, SiYoutube } from "react-icons/si";
import logoImage from "@asset/logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0e0e0e] to-black border-t border-white/10 py-16 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Top Section --- */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20">
                <img
                  src={logoImage}
                  alt="CODICORE Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CODICORE
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Where ideas meet code. Building next-generation intelligent
              software systems for modern businesses.
            </p>
            <p className="text-xs text-gray-500 tracking-wide">
              CIN: <span className="text-gray-300">U58200UP2025PTC230810</span>
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wide">
              Products
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "SkoolHub 2.0",
                "Retail Management",
                "Restaurant Solutions",
                "Custom Development",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("careers")}
                  className="hover:text-primary transition-colors duration-200"
                >
                  Careers
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex space-x-4 mb-5">
              <a
                href="https://www.linkedin.com/in/rishi-agrawal-994a42253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-700/40 transition-all duration-300"
              >
                <SiLinkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/1CVFhTjsSj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
              >
                <SiFacebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@softcode21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-600/40 transition-all duration-300"
              >
                <SiYoutube className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Follow us for updates and tech insights.
            </p>
          </div>
        </div>

        {/* --- Bottom Line --- */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            © 2025{" "}
            <span className="text-gray-300 font-semibold">
              CODICORE PRIVATE LIMITED
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
