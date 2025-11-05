
import { useLenis } from '@/hooks/use-lenis';
import { Cookie, Settings, Eye, BarChart, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  useLenis();

  return (
    <div className="min-h-screen bg-background py-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 py-20 mb-12">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Cookie className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Cookie Usage</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Cookie Policy</h1>
            <p className="text-muted-foreground text-lg">Last Updated: January 26, 2025</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Quick Overview */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-morphism p-8 rounded-2xl mb-12 border border-accent/20"
        >
          <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files stored on your device when you visit our website. They help us provide 
            a better user experience, remember your preferences, and analyze how you use our Services.
          </p>
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
                <Settings className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">1. Types of Cookies We Use</h2>
            </div>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Essential Cookies (Required)</h3>
                    <p className="text-sm text-muted-foreground mt-1">These cookies are necessary for the website to function</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                  <li><strong>Session Cookies:</strong> Maintain your login session and authentication</li>
                  <li><strong>Security Cookies:</strong> Protect against CSRF attacks and unauthorized access</li>
                  <li><strong>Load Balancing:</strong> Distribute traffic across servers efficiently</li>
                  <li><strong>Form Data:</strong> Remember information you've entered in forms</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Duration:</strong> Session-based (deleted when you close browser) or up to 30 days
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-bold text-secondary">Functional Cookies (Optional)</h3>
                    <p className="text-sm text-muted-foreground mt-1">Enhance your experience with personalized features</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                  <li><strong>Language Preferences:</strong> Remember your chosen language</li>
                  <li><strong>Theme Settings:</strong> Save dark/light mode preference</li>
                  <li><strong>User Preferences:</strong> Remember dashboard layout and settings</li>
                  <li><strong>Video Player:</strong> Remember playback settings and volume</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Duration:</strong> Up to 1 year
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <BarChart className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-bold text-accent">Analytics Cookies (Optional)</h3>
                    <p className="text-sm text-muted-foreground mt-1">Help us understand how you use our website</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                  <li><strong>Google Analytics:</strong> Track page views, bounce rates, and user behavior</li>
                  <li><strong>Performance Metrics:</strong> Monitor website speed and performance</li>
                  <li><strong>Error Tracking:</strong> Identify and fix technical issues</li>
                  <li><strong>Usage Patterns:</strong> Understand which features are most popular</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Duration:</strong> Up to 2 years
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Third Party:</strong> Google Analytics (data is anonymized)
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Eye className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-bold text-purple-500">Marketing Cookies (Optional)</h3>
                    <p className="text-sm text-muted-foreground mt-1">Show relevant advertisements and content</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                  <li><strong>Social Media:</strong> Enable sharing on Facebook, LinkedIn, Twitter</li>
                  <li><strong>Remarketing:</strong> Show ads to users who visited our website</li>
                  <li><strong>Campaign Tracking:</strong> Measure effectiveness of marketing campaigns</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Duration:</strong> Up to 1 year
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Third Parties:</strong> Facebook, Google Ads, LinkedIn
                </p>
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
            <h2 className="text-2xl font-bold mb-6">2. How to Manage Cookies</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                You have control over cookies. You can manage or delete cookies through:
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                <p className="leading-relaxed mb-2">Most browsers allow you to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>View cookies stored on your device</li>
                  <li>Delete existing cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Set preferences for specific websites</li>
                </ul>
              </div>

              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Browser-Specific Instructions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li>• <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li>• <strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
                </ul>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Note:</strong> Disabling essential cookies may affect website functionality. 
                  Some features may not work properly without cookies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">3. Third-Party Cookies</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We use trusted third-party services that may set cookies on our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Facebook Pixel:</strong> Marketing and remarketing campaigns</li>
                <li><strong>LinkedIn Insight Tag:</strong> Professional network advertising</li>
                <li><strong>YouTube:</strong> Embedded video playback</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies. We recommend reviewing them:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
                <li>Facebook Privacy Policy: <a href="https://www.facebook.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.facebook.com/privacy</a></li>
              </ul>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">4. Your Consent</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this policy. 
                You can withdraw consent at any time by adjusting your browser settings.
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
            <h2 className="text-2xl font-bold mb-6">5. Updates to Cookie Policy</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We may update this Cookie Policy periodically. Changes will be posted on this page with an updated date. 
                We encourage you to review this policy regularly.
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
                <Shield className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">6. Contact Us</h2>
            </div>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                For questions about our Cookie Policy, contact us:
              </p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:privacy@codicore.com" className="text-primary hover:underline">privacy@codicore.com</a></p>
                <p><strong className="text-foreground">Company:</strong> CODICORE PRIVATE LIMITED</p>
                <p><strong className="text-foreground">CIN:</strong> U58200UP2025PTC230810</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
