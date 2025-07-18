import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, HardHat, Mountain, Wrench, Clock, ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Construction Hauling',
      description: 'Reliable transport for construction materials, debris removal, and site preparation.',
      features: ['Material delivery', 'Debris removal', 'Site preparation', 'Equipment transport'],
      price: 'Starting at $150/hour'
    },
    {
      icon: Mountain,
      title: 'Mining Operations',
      description: 'Heavy-duty hauling for mining operations with specialized equipment and expertise.',
      features: ['Ore transport', 'Overburden removal', 'Equipment hauling', 'Site access'],
      price: 'Starting at $200/hour'
    },
    {
      icon: Wrench,
      title: 'Industrial Services',
      description: 'Comprehensive industrial transport solutions for manufacturing and processing.',
      features: ['Waste management', 'Raw materials', 'Industrial cleanup', 'Emergency response'],
      price: 'Starting at $175/hour'
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: '24/7 emergency response for urgent hauling and cleanup operations.',
      features: ['24/7 availability', 'Rapid response', 'Disaster cleanup', 'Emergency hauling'],
      price: 'Premium rates apply'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Professional <span className="text-gradient">Transport Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From construction sites to mining operations, we deliver reliable dump truck services 
            tailored to your specific industry needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 card-hover"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-600 p-3 rounded-xl group-hover:bg-primary-700 transition-colors">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="font-semibold text-primary-600">{service.price}</span>
                <Link
                  to="/quote"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <Truck className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl mb-8 text-primary-100">
            Our experienced team can design a transport solution specifically for your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Discuss Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview; 