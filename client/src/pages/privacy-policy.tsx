
import { useLenis } from '@/hooks/use-lenis';
import { Shield, Lock, Eye, Database, Mail, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  useLenis();

  return (
    <div className="min-h-screen bg-background py-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 mb-12">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Last Updated: January 26, 2025</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Quick Summary */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-morphism p-8 rounded-2xl mb-12 border border-primary/20"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="text-primary" />
            Quick Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">We Collect Minimal Data</p>
                <p className="text-sm text-muted-foreground">Only essential information for service delivery</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Your Data is Secure</p>
                <p className="text-sm text-muted-foreground">Industry-standard encryption & AWS security</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">No Third-Party Sale</p>
                <p className="text-sm text-muted-foreground">We never sell your personal information</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">You Have Control</p>
                <p className="text-sm text-muted-foreground">Request data deletion anytime</p>
              </div>
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
                <Database className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1.1 Personal Information</h3>
                <p className="leading-relaxed mb-3">
                  CODICORE Private Limited (CIN: U58200UP2025PTC230810) collects the following personal information when you use our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Details:</strong> Name, email address, phone number, school/organization name</li>
                  <li><strong>Account Information:</strong> Username, password (encrypted), profile picture</li>
                  <li><strong>School Data:</strong> Teacher details, student information, timetable, attendance records</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed via secure gateways)</li>
                  <li><strong>Communication Data:</strong> Messages, support tickets, feedback, and correspondence</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1.2 Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device ID</li>
                  <li><strong>Cookies & Tracking:</strong> Session cookies, preference cookies, analytics cookies</li>
                  <li><strong>Log Data:</strong> Server logs, error reports, performance metrics</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <FileText className="text-secondary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>Service Delivery:</strong> To provide and maintain SkoolHub 2.0 functionality, automated teacher arrangements, attendance tracking</li>
                <li><strong>Account Management:</strong> To create and manage your user account, authentication, and authorization</li>
                <li><strong>Communication:</strong> To send important notifications, updates, system alerts, and customer support responses</li>
                <li><strong>Payment Processing:</strong> To handle billing, invoicing, subscription management, and payment verification</li>
                <li><strong>Product Improvement:</strong> To analyze usage patterns, identify bugs, optimize performance, and develop new features</li>
                <li><strong>Security:</strong> To detect fraud, prevent unauthorized access, protect against cyber threats</li>
                <li><strong>Legal Compliance:</strong> To comply with Indian laws, regulations, and legal obligations</li>
                <li><strong>Marketing (Optional):</strong> To send promotional emails about new features (you can opt-out anytime)</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Lock className="text-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold">3. Data Security & Protection</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We implement industry-leading security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
                <li><strong>AWS Infrastructure:</strong> Hosted on secure AWS servers with DDoS protection and firewall</li>
                <li><strong>Access Control:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA)</li>
                <li><strong>Regular Audits:</strong> Periodic security audits and vulnerability assessments</li>
                <li><strong>Data Backup:</strong> Automated daily backups with disaster recovery plan</li>
                <li><strong>Employee Training:</strong> All team members undergo data protection training</li>
                <li><strong>Compliance:</strong> GDPR-inspired practices and adherence to IT Act 2000 (India)</li>
              </ul>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-destructive mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">
                    <strong>Important:</strong> While we use best practices, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
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
            <h2 className="text-2xl font-bold mb-6">4. Data Sharing & Third Parties</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed font-semibold text-foreground">
                We DO NOT sell your personal information to third parties.
              </p>
              <p className="leading-relaxed">
                We may share limited data with trusted service providers only for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Payment Processors:</strong> Razorpay, Stripe for secure payment handling</li>
                <li><strong>Cloud Hosting:</strong> AWS for infrastructure and data storage</li>
                <li><strong>Communication Services:</strong> WhatsApp Business API for notifications</li>
                <li><strong>Analytics:</strong> Google Analytics for usage insights (anonymized data)</li>
                <li><strong>Legal Requirements:</strong> When required by law enforcement or court orders</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All third-party providers are bound by strict confidentiality agreements and comply with data protection regulations.
              </p>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">5. Your Rights & Choices</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of all data we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails anytime</li>
                <li><strong>Withdraw Consent:</strong> Revoke permissions for data processing</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@codicore.com" className="text-primary hover:underline">privacy@codicore.com</a>
              </p>
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">6. Data Retention</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We retain your personal data only as long as necessary for the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Active Accounts:</strong> Data retained while subscription is active</li>
                <li><strong>Cancelled Accounts:</strong> Data deleted 90 days after cancellation (unless legally required)</li>
                <li><strong>Legal Obligations:</strong> Financial records retained for 7 years as per Indian tax laws</li>
                <li><strong>Backup Data:</strong> Deleted from backups within 30 days of account deletion</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 7 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">7. Children's Privacy</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                SkoolHub 2.0 is intended for use by schools and educational institutions. While student data may be processed, we do not knowingly collect personal information directly from children under 13 without parental consent.
              </p>
              <p className="leading-relaxed">
                Schools using our services are responsible for obtaining necessary parental consents for student data.
              </p>
            </div>
          </motion.section>

          {/* Section 8 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">8. International Data Transfers</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Your data is primarily stored in India on AWS servers. In some cases, data may be transferred to other countries for processing by third-party service providers. We ensure adequate safeguards are in place for such transfers.
              </p>
            </div>
          </motion.section>

          {/* Section 9 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">9. Changes to Privacy Policy</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl border-2 border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
            </div>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                For any privacy-related questions, concerns, or requests, please contact us:
              </p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:privacy@codicore.com" className="text-primary hover:underline">privacy@codicore.com</a></p>
                <p><strong className="text-foreground">Phone:</strong> +91 XXX XXX XXXX</p>
                <p><strong className="text-foreground">Address:</strong> CODICORE Private Limited, Uttar Pradesh, India</p>
                <p><strong className="text-foreground">CIN:</strong> U58200UP2025PTC230810</p>
                <p><strong className="text-foreground">PAN:</strong> AANCC0250E</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
