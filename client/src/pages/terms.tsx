
import { useLenis } from '@/hooks/use-lenis';

export default function Terms() {
  useLenis();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using SkoolHub 2.0 and CODICORE services, you accept and agree to be bound 
              by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              CODICORE provides school management software solutions including automated attendance, 
              substitute teacher management, and administrative tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Maintain confidentiality of account credentials</li>
              <li>Provide accurate and complete information</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not misuse or attempt to hack our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              CODICORE Private Limited shall not be liable for any indirect, incidental, or consequential 
              damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms shall be governed by the laws of India. Any disputes shall be subject to the 
              exclusive jurisdiction of courts in Greater Noida, Uttar Pradesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
