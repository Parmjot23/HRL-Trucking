import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Mountain, Wrench, Clock, CheckCircle, Truck } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Construction Hauling',
      description: 'Complete construction site solutions for all your hauling needs',
      features: [
        'Material delivery and pickup',
        'Construction debris removal',
        'Site preparation and cleanup',
        'Equipment transportation',
        'Aggregate and fill delivery',
        'Waste material disposal'
      ],
      pricing: 'Starting at $150/hour',
      image: '/construction-service.jpg'
    },
    {
      icon: Mountain,
      title: 'Mining Operations',
      description: 'Heavy-duty solutions for mining and extraction operations',
      features: [
        'Ore and mineral transport',
        'Overburden removal',
        'Mine site access roads',
        'Equipment hauling',
        'Tailings management',
        'Environmental cleanup'
      ],
      pricing: 'Starting at $200/hour',
      image: '/mining-service.jpg'
    },
    {
      icon: Wrench,
      title: 'Industrial Services',
      description: 'Specialized transport for industrial and manufacturing facilities',
      features: [
        'Industrial waste management',
        'Raw material transport',
        'Plant maintenance support',
        'Emergency response',
        'Bulk material handling',
        'Facility cleanup projects'
      ],
      pricing: 'Starting at $175/hour',
      image: '/industrial-service.jpg'
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: '24/7 emergency response for urgent transport needs',
      features: [
        '24/7 emergency availability',
        'Rapid response deployment',
        'Disaster cleanup assistance',
        'Emergency debris removal',
        'Critical material transport',
        'Storm damage cleanup'
      ],
      pricing: 'Premium emergency rates',
      image: '/emergency-service.jpg'
    }
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
            Our <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive dump truck transport solutions tailored to your industry needs.
            From construction sites to mining operations, we deliver excellence every time.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl overflow-hidden card-hover"
              >
                {/* Service Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <service.icon className="h-24 w-24 text-gray-400" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-600 p-3 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-primary-600 font-semibold">{service.pricing}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-8 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                    Request Quote for {service.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Our Services?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise, state-of-the-art equipment, and unmatched customer service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Fleet</h3>
              <p className="text-gray-600">
                Latest model trucks with advanced safety features and GPS tracking for complete peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600">
                On-time delivery guaranteed with professional drivers who understand your project timelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support and emergency services when you need them most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 