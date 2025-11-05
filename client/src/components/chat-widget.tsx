
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "918954730444";
  const whatsappMessage = "Hello CODICORE! I need help with ";

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
            aria-label="Open chat"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </button>
        ) : (
          <div className="glass-morphism rounded-3xl shadow-2xl w-96 max-w-[calc(100vw-3rem)] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">CODICORE Support</h3>
                  <p className="text-white/80 text-sm">We're here to help!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-background/95 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-2xl p-4">
                  <p className="text-foreground mb-2">👋 Hello! How can we help you today?</p>
                  <p className="text-muted-foreground text-sm">Chat with us on WhatsApp for instant support!</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage + "SkoolHub 2.0")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white hover:scale-105 transition-all duration-300"
                  >
                    <SiWhatsapp className="w-6 h-6" />
                    <div className="flex-1 text-left">
                      <p className="font-semibold">SkoolHub 2.0 Support</p>
                      <p className="text-sm text-white/80">Chat about school management</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage + "Custom Development")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div className="flex-1 text-left">
                      <p className="font-semibold">Custom Development</p>
                      <p className="text-sm text-white/80">Discuss your project</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage + "General Inquiry")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-6 h-6" />
                    <div className="flex-1 text-left">
                      <p className="font-semibold">General Inquiry</p>
                      <p className="text-sm text-white/80">Ask us anything</p>
                    </div>
                  </a>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-muted-foreground text-xs mb-2">Available 24/7</p>
                  <p className="text-muted-foreground text-xs">
                    <a href="tel:+918954730444" className="text-primary hover:underline">
                      +91 89547 30444
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
