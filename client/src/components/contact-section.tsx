import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiFacebook, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent Successfully!",
          description: "Our team will get back to you shortly.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else throw new Error("Failed to send message");
    } catch (error) {
      toast({
        title: "❌ Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,5,10,0.85), rgba(5,5,10,0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want a demo? Let’s build something
            amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM SIDE */}
          <div className="glass-morphism rounded-2xl p-8 shadow-xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="skoolhub">SkoolHub 2.0 Demo</SelectItem>
                    <SelectItem value="custom">Custom Development</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <Send className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </div>

          {/* CONTACT DETAILS SIDE */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-white" />,
                title: "Email",
                value: "contact@codicore.com",
                gradient: "from-primary to-secondary",
              },
              {
                icon: <Phone className="w-6 h-6 text-white" />,
                title: "Phone",
                value: "+91 98765 43210",
                gradient: "from-secondary to-accent",
              },
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: "Office",
                value: "Uttar Pradesh, India",
                gradient: "from-accent to-primary",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-morphism p-6 rounded-2xl flex items-center space-x-4 hover-lift transition-all"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-md`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            {/* QUICK CONNECT */}
            <div className="glass-morphism p-6 rounded-2xl">
              <h4 className="font-semibold mb-4 text-foreground">
                Quick Connect
              </h4>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    href: "https://wa.me/919876543210",
                    icon: <SiWhatsapp className="w-6 h-6 text-white" />,
                    gradient: "from-green-500 to-green-600",
                  },
                  {
                    href: "https://www.linkedin.com/in/rishi-agrawal-994a42253",
                    icon: <SiLinkedin className="w-6 h-6 text-white" />,
                    gradient: "from-blue-600 to-blue-700",
                  },
                  {
                    href: "https://www.facebook.com/share/1CVFhTjsSj/",
                    icon: <SiFacebook className="w-6 h-6 text-white" />,
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    href: "https://youtube.com/@softcode21",
                    icon: <SiYoutube className="w-6 h-6 text-white" />,
                    gradient: "from-red-500 to-red-600",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
