
import { useLenis } from '@/hooks/use-lenis';
import { FileText, Scale, AlertTriangle, Shield, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Terms() {
  useLenis();

  return (
    <div className="min-h-screen bg-background py-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-accent/10 py-20 mb-12">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <Scale className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">Last Updated: January 26, 2025</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Important Notice */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6 mb-12"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-destructive mb-2">Important Notice</h3>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using CODICORE services, you agree to be bound by these Terms and Conditions. 
                Please read them carefully before using our services.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-10 text-foreground">
          {/* Section 1 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <FileText className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you and 
                <strong className="text-foreground"> CODICORE PRIVATE LIMITED</strong> (CIN: U58200UP2025PTC230810), 
                a company incorporated under the Companies Act, 2013.
              </p>
              <p className="leading-relaxed">
                By accessing or using SkoolHub 2.0, our website, or any related services (collectively, the "Services"), 
                you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p className="leading-relaxed">
                If you do not agree with any part of these Terms, you must immediately discontinue use of our Services.
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">2. Service Description</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                CODICORE provides cloud-based school management software solutions, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>SkoolHub 2.0:</strong> AI-powered automated teacher arrangement system</li>
                <li><strong>Attendance Management:</strong> Biometric integration and real-time tracking</li>
                <li><strong>Timetable Creation:</strong> Automated scheduling with conflict resolution</li>
                <li><strong>Communication Tools:</strong> WhatsApp notifications and alerts</li>
                <li><strong>Analytics & Reports:</strong> Real-time insights and data visualization</li>
                <li><strong>Custom Solutions:</strong> Tailored features for specific school requirements</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of the Services at any time with or without notice.
              </p>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">3. User Eligibility & Account Registration</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Eligibility</h3>
                <p className="leading-relaxed">
                  You must be at least 18 years old or have parental/guardian consent to use our Services. 
                  By registering, you represent that you have the legal capacity to enter into this agreement.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Account Registration</h3>
                <p className="leading-relaxed mb-2">When creating an account, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate, complete, and current information</li>
                  <li>Maintain the security of your password and account credentials</li>
                  <li>Promptly update any changes to your information</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.3 Account Termination</h3>
                <p className="leading-relaxed">
                  We reserve the right to suspend or terminate your account at our discretion if you violate these Terms, 
                  engage in fraudulent activities, or misuse our Services.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">4. Subscription & Payment Terms</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Subscription Plans</h3>
                <p className="leading-relaxed">
                  SkoolHub 2.0 operates on a Software-as-a-Service (SaaS) model with monthly or annual subscription plans. 
                  Pricing starts at ₹1,000/month and may vary based on features, number of users, and customization requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Payment</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Payments must be made in advance for the selected billing cycle</li>
                  <li>We accept payments via credit/debit cards, UPI, net banking, and digital wallets</li>
                  <li>All prices are in Indian Rupees (INR) and include applicable GST</li>
                  <li>Failed payments may result in service suspension until payment is received</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Automatic Renewal</h3>
                <p className="leading-relaxed">
                  Subscriptions automatically renew at the end of each billing period unless cancelled at least 7 days before renewal date. 
                  You will be charged the then-current subscription fee.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4.4 Price Changes</h3>
                <p className="leading-relaxed">
                  We reserve the right to modify subscription fees with 30 days' prior notice. 
                  Continued use after price changes constitutes acceptance of the new pricing.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">5. User Responsibilities & Acceptable Use</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">You agree to use our Services only for lawful purposes and in compliance with these Terms. You must NOT:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <XCircle className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <h4 className="font-semibold text-destructive">Prohibited Activities</h4>
                  </div>
                  <ul className="space-y-1 text-sm ml-6">
                    <li>• Violate any laws or regulations</li>
                    <li>• Infringe intellectual property rights</li>
                    <li>• Transmit malware or harmful code</li>
                    <li>• Attempt unauthorized access</li>
                    <li>• Reverse engineer the software</li>
                    <li>• Use for fraudulent purposes</li>
                    <li>• Share account credentials</li>
                    <li>• Scrape or harvest user data</li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <h4 className="font-semibold text-primary">Your Obligations</h4>
                  </div>
                  <ul className="space-y-1 text-sm ml-6">
                    <li>• Maintain data accuracy</li>
                    <li>• Secure your credentials</li>
                    <li>• Comply with applicable laws</li>
                    <li>• Respect user privacy</li>
                    <li>• Report security issues</li>
                    <li>• Use services responsibly</li>
                    <li>• Follow usage guidelines</li>
                    <li>• Provide truthful information</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">6. Intellectual Property Rights</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                All content, features, functionality, trademarks, logos, and technology of SkoolHub 2.0 are the exclusive property of 
                CODICORE Private Limited and are protected by Indian and international copyright, trademark, and intellectual property laws.
              </p>
              <p className="leading-relaxed">
                You are granted a limited, non-exclusive, non-transferable license to use the Services for their intended purpose. 
                You may not copy, modify, distribute, sell, or lease any part of our Services or software.
              </p>
            </div>
          </motion.section>

          {/* Section 7 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">7. Data Ownership & Privacy</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                You retain ownership of all data you submit to our Services. By using SkoolHub 2.0, you grant us a license to process, 
                store, and use your data solely for providing and improving our Services.
              </p>
              <p className="leading-relaxed">
                Your use of our Services is also governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, 
                which is incorporated by reference into these Terms.
              </p>
            </div>
          </motion.section>

          {/* Section 8 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl border-2 border-destructive/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                <Shield className="text-destructive" size={24} />
              </div>
              <h2 className="text-2xl font-bold">8. Disclaimer of Warranties & Limitation of Liability</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">8.1 Service "As Is"</h3>
                <p className="leading-relaxed">
                  Our Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. 
                  We do not guarantee uninterrupted, error-free, or secure operation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">8.2 Limitation of Liability</h3>
                <p className="leading-relaxed mb-2">
                  To the maximum extent permitted by law, CODICORE Private Limited shall NOT be liable for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or data breaches beyond our control</li>
                  <li>Third-party actions or content</li>
                  <li>Force majeure events (natural disasters, wars, pandemics, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">8.3 Maximum Liability</h3>
                <p className="leading-relaxed">
                  Our total liability shall not exceed the amount you paid for the Services in the 12 months preceding the claim.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 9 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">9. Indemnification</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless CODICORE Private Limited, its directors, employees, and affiliates 
                from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Your violation of these Terms</li>
                <li>Your misuse of the Services</li>
                <li>Your infringement of any third-party rights</li>
                <li>Any data or content you submit</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 10 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">10. Termination</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Your access to the Services will be immediately revoked</li>
                <li>You must cease all use of our software and content</li>
                <li>No refunds will be provided for the current billing period</li>
                <li>Your data will be retained for 90 days, after which it will be permanently deleted</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 11 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">11. Governing Law & Dispute Resolution</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">11.1 Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India, 
                  without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">11.2 Jurisdiction</h3>
                <p className="leading-relaxed">
                  Any disputes arising from these Terms or the Services shall be subject to the exclusive jurisdiction 
                  of the courts in Greater Noida, Uttar Pradesh, India.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">11.3 Dispute Resolution</h3>
                <p className="leading-relaxed">
                  Before initiating legal proceedings, parties agree to attempt good-faith negotiations and 
                  mediation to resolve disputes amicably.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 12 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">12. Miscellaneous</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">12.1 Entire Agreement</h3>
                <p className="leading-relaxed">
                  These Terms, along with our Privacy Policy and Refund Policy, constitute the entire agreement between you and CODICORE.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">12.2 Amendments</h3>
                <p className="leading-relaxed">
                  We may modify these Terms at any time. Changes will be effective upon posting. 
                  Your continued use constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">12.3 Severability</h3>
                <p className="leading-relaxed">
                  If any provision is found invalid, the remaining provisions shall remain in full effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">12.4 No Waiver</h3>
                <p className="leading-relaxed">
                  Failure to enforce any provision does not constitute a waiver of our rights.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl border-2 border-primary/30"
          >
            <h2 className="text-2xl font-bold mb-6">13. Contact Information</h2>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                For questions, concerns, or clarifications regarding these Terms, contact us:
              </p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p><strong className="text-foreground">Company Name:</strong> CODICORE PRIVATE LIMITED</p>
                <p><strong className="text-foreground">CIN:</strong> U58200UP2025PTC230810</p>
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:legal@codicore.com" className="text-primary hover:underline">legal@codicore.com</a></p>
                <p><strong className="text-foreground">Phone:</strong> +91 XXX XXX XXXX</p>
                <p><strong className="text-foreground">Address:</strong> Uttar Pradesh, India</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
