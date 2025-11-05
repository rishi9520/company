
import { useLenis } from '@/hooks/use-lenis';

export default function PrivacyPolicy() {
  useLenis();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              CODICORE Private Limited collects personal information including name, email, phone number, and school details 
              when you use SkoolHub 2.0 or contact us through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information. 
              All data is encrypted in transit and at rest using AWS security protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy concerns, contact us at: privacy@codicore.com
              <br />
              CODICORE Private Limited
              <br />
              CIN: U58200UP2025PTC230810
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
