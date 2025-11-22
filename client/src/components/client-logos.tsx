import { motion } from 'framer-motion';
import { SiGoogle, SiAmazon, SiApple, SiMeta, SiNetflix, SiAdobe, SiSalesforce, SiOracle, SiSap, SiCisco, SiSpotify, SiSlack } from 'react-icons/si';

export default function ClientLogos() {
  const clients = [
    { name: 'Google', icon: SiGoogle, color: 'text-red-500' },
    { name: 'Amazon', icon: SiAmazon, color: 'text-orange-500' },
    { name: 'Apple', icon: SiApple, color: 'text-gray-400' },
    { name: 'Meta', icon: SiMeta, color: 'text-blue-600' },
    { name: 'Netflix', icon: SiNetflix, color: 'text-red-600' },
    { name: 'Adobe', icon: SiAdobe, color: 'text-red-700' },
    { name: 'Salesforce', icon: SiSalesforce, color: 'text-blue-400' },
    { name: 'Oracle', icon: SiOracle, color: 'text-red-800' },
    { name: 'SAP', icon: SiSap, color: 'text-blue-800' },
    { name: 'Cisco', icon: SiCisco, color: 'text-blue-500' },
    { name: 'Spotify', icon: SiSpotify, color: 'text-green-500' },
    { name: 'Slack', icon: SiSlack, color: 'text-purple-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Trusted By Industry Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Join the growing list of companies that trust us with their digital transformation
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-2xl p-8 flex items-center justify-center hover:scale-110 transition-smooth group"
              data-testid={`client-logo-${client.name.toLowerCase()}`}
            >
              <client.icon 
                className={`w-12 h-12 ${client.color} group-hover:scale-125 transition-smooth opacity-70 group-hover:opacity-100`}
                aria-label={client.name}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-primary font-bold text-2xl">500+</span> companies worldwide trust our solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
