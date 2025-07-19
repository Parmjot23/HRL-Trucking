import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gauge, Weight, Shield, CheckCircle } from 'lucide-react';

const FleetPage: React.FC = () => {
  const fleetHighlights = [
    'Heavy-duty haulers for demanding projects',
    'Versatile trucks for everyday work',
    'Compact units ideal for urban sites',
    'GPS real-time tracking on every vehicle',
    'Strict safety and maintenance standards',
    'Experienced operators available 24/7'
  ];


  const fleetStats = [
    { icon: Truck, label: 'Total Trucks', value: '150+', color: 'bg-blue-500' },
    { icon: Gauge, label: 'Max Capacity', value: '40 Tons', color: 'bg-green-500' },
    { icon: Weight, label: 'Total Fleet Capacity', value: '6,000 Tons', color: 'bg-purple-500' },
    { icon: Shield, label: 'Safety Rating', value: '100%', color: 'bg-primary-500' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Our <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Fleet</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            State-of-the-art dump trucks engineered for performance, safety, and reliability.
            Every vehicle in our fleet meets the highest industry standards.
          </motion.p>
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {fleetStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`${stat.color} p-6 rounded-2xl mb-4 mx-auto w-20 h-20 flex items-center justify-center`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

        {/* Fleet Highlights */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Fleet <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse fleet is equipped to handle projects of any scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {fleetHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
};

export default FleetPage; 