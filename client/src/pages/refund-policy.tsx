
import { useLenis } from '@/hooks/use-lenis';
import { RefreshCw, DollarSign, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
  useLenis();

  return (
    <div className="min-h-screen bg-background py-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 mb-12">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
              <RefreshCw className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Refund & Cancellation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Refund & Cancellation Policy</h1>
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
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At CODICORE Private Limited, we strive for 100% customer satisfaction. This policy outlines our 
            refund and cancellation terms for SkoolHub 2.0 subscriptions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-primary/10 border border-primary/30 rounded-lg p-4">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">7-Day Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">Full refund for new customers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-secondary/10 border border-secondary/30 rounded-lg p-4">
              <Clock className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Cancel Anytime</p>
                <p className="text-sm text-muted-foreground">No long-term contracts</p>
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
                <DollarSign className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">1. Refund Eligibility</h2>
            </div>
            
            <div className="space-y-6">
              {/* Eligible for Refund */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <h3 className="text-xl font-bold text-primary">You ARE Eligible for Refund If:</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                  <li><strong>New Customer Trial:</strong> You request refund within 7 days of first subscription</li>
                  <li><strong>Service Unavailability:</strong> Our service was down for more than 48 consecutive hours</li>
                  <li><strong>Technical Issues:</strong> Critical bugs preventing core functionality (after failed support attempts)</li>
                  <li><strong>Billing Error:</strong> You were charged incorrectly or multiple times</li>
                  <li><strong>Feature Misrepresentation:</strong> Advertised features are significantly different from actual product</li>
                </ul>
              </div>

              {/* NOT Eligible for Refund */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <XCircle className="text-destructive mt-1 flex-shrink-0" size={24} />
                  <h3 className="text-xl font-bold text-destructive">You are NOT Eligible for Refund If:</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                  <li>Refund request is made after 7 days (except for service downtime)</li>
                  <li>You simply changed your mind or no longer need the service</li>
                  <li>Your subscription has been used extensively (multiple logins, data entry, etc.)</li>
                  <li>Account was terminated due to violation of Terms of Service</li>
                  <li>You failed to cancel before automatic renewal</li>
                  <li>Free trial was already used in the past</li>
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
                <Clock className="text-secondary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">2. Refund Process & Timeline</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Step 1: Submit Refund Request</h3>
                <p className="leading-relaxed">
                  Email us at <a href="mailto:refunds@codicore.com" className="text-primary hover:underline">refunds@codicore.com</a> with:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Registered email address</li>
                  <li>Order/Invoice number</li>
                  <li>Reason for refund request</li>
                  <li>Supporting documents (if applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Step 2: Review Process</h3>
                <p className="leading-relaxed">
                  Our team will review your request within <strong>3-5 business days</strong>. 
                  We may contact you for additional information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Step 3: Refund Processing</h3>
                <p className="leading-relaxed mb-2">
                  Once approved, refunds will be processed within:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Credit/Debit Cards:</strong> 7-10 business days</li>
                  <li><strong>UPI/Net Banking:</strong> 3-5 business days</li>
                  <li><strong>Digital Wallets:</strong> 2-4 business days</li>
                </ul>
                <p className="text-sm mt-3">
                  Note: Actual credit to your account depends on your bank/payment provider.
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">
                    <strong>Important:</strong> Refund will be credited to the original payment method. 
                    We cannot process refunds to different accounts.
                  </p>
                </div>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <XCircle className="text-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold">3. Subscription Cancellation</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How to Cancel</h3>
                <p className="leading-relaxed mb-2">You can cancel your subscription anytime through:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Dashboard:</strong> Account Settings → Subscription → Cancel</li>
                  <li><strong>Email:</strong> Send request to <a href="mailto:support@codicore.com" className="text-primary hover:underline">support@codicore.com</a></li>
                  <li><strong>Phone:</strong> Call +91 XXX XXX XXXX (business hours)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cancellation Terms</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Immediate Cancellation:</strong> You can cancel anytime, but access continues until end of current billing period
                  </li>
                  <li>
                    <strong>No Partial Refunds:</strong> Cancellation does NOT result in refund for remaining days of current billing cycle
                  </li>
                  <li>
                    <strong>Auto-Renewal Stops:</strong> Future charges will be automatically stopped
                  </li>
                  <li>
                    <strong>Data Retention:</strong> Your data will be retained for 90 days after cancellation, then permanently deleted
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> To avoid charges, cancel at least 7 days before your next billing date.
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
            <h2 className="text-2xl font-bold mb-6">4. Free Trial Policy</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We may offer free trials from time to time. Trial terms:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free trial can only be used once per organization</li>
                <li>Payment information required to start trial</li>
                <li>Auto-converts to paid subscription unless cancelled before trial ends</li>
                <li>Cancel anytime during trial for zero charges</li>
                <li>Trial length and availability may vary</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">5. Chargebacks & Disputes</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                If you dispute a charge with your bank instead of contacting us first:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your account will be immediately suspended</li>
                <li>You may be charged a chargeback fee (₹500 or actual cost)</li>
                <li>Access to data may be restricted until resolved</li>
                <li>Multiple chargebacks may result in permanent account termination</li>
              </ul>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Please Note:</strong> We strongly encourage you to contact us first to resolve any billing issues. 
                  We're here to help!
                </p>
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
            <h2 className="text-2xl font-bold mb-6">6. Special Cases</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Annual Subscriptions</h3>
                <p className="leading-relaxed">
                  Annual plans are non-refundable after 7 days. However, you can cancel to prevent auto-renewal next year.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Custom Development</h3>
                <p className="leading-relaxed">
                  Custom development work is non-refundable once work has commenced. Specific terms outlined in project contract.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Add-on Features</h3>
                <p className="leading-relaxed">
                  Add-on features purchased mid-cycle are pro-rated and non-refundable.
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
            <h2 className="text-2xl font-bold mb-6">7. Contact Us</h2>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                For refund requests, cancellations, or billing questions:
              </p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p><strong className="text-foreground">Refunds:</strong> <a href="mailto:refunds@codicore.com" className="text-primary hover:underline">refunds@codicore.com</a></p>
                <p><strong className="text-foreground">Support:</strong> <a href="mailto:support@codicore.com" className="text-primary hover:underline">support@codicore.com</a></p>
                <p><strong className="text-foreground">Phone:</strong> +91 XXX XXX XXXX</p>
                <p><strong className="text-foreground">Company:</strong> CODICORE PRIVATE LIMITED</p>
                <p><strong className="text-foreground">CIN:</strong> U58200UP2025PTC230810</p>
              </div>
              <p className="text-sm mt-4">
                Business Hours: Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
