import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, HardHat, Mountain, Wrench, Clock, ArrowRight } from 'lucide-react';

// Import service images
import constructionHaulingImg from '../assets/images/Construction Hauling.png';
import miningImg from '../assets/images/Mining.png';
import industrialServicesImg from '../assets/images/Industrial Services.png';
import emergencyServicesImg from '../assets/images/emergency services.png';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Construction Hauling',
      description: 'Reliable transport for construction materials, debris removal, and site preparation.',
      features: ['Material delivery', 'Debris removal', 'Site preparation', 'Equipment transport'],
      price: 'Starting at $150/hour',
      image: constructionHaulingImg
    },
    {
      icon: Mountain,
      title: 'Mining Operations',
      description: 'Heavy-duty hauling for mining operations with specialized equipment and expertise.',
      features: ['Ore transport', 'Overburden removal', 'Equipment hauling', 'Site access'],
      price: 'Starting at $200/hour',
      image: miningImg
    },
    {
      icon: Wrench,
      title: 'Industrial Services',
      description: 'Comprehensive industrial transport solutions for manufacturing and processing.',
      features: ['Waste management', 'Raw materials', 'Industrial cleanup', 'Emergency response'],
      price: 'Starting at $175/hour',
      image: industrialServicesImg
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: '24/7 emergency response for urgent hauling and cleanup operations.',
      features: ['24/7 availability', 'Rapid response', 'Disaster cleanup', 'Emergency hauling'],
      price: 'Premium rates apply',
      image: emergencyServicesImg
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover h-96 sm:h-80 md:h-96 lg:h-80 xl:h-96"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-responsive img-optimize transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Enhanced Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/85 group-hover:via-black/55 group-hover:to-black/25 transition-all duration-300" />
              
              {/* Additional bottom overlay for content area */}
              <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-600/95 backdrop-blur-sm p-3 rounded-xl group-hover:bg-primary-700/95 transition-colors shadow-lg">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-shadow-strong">{service.title}</h3>
                </div>

                <p className="text-gray-100 mb-4 text-sm sm:text-base leading-relaxed text-shadow-medium">{service.description}</p>

                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-200 text-sm text-shadow-soft">
                      <div className="w-1.5 h-1.5 bg-primary-300 rounded-full flex-shrink-0 shadow-sm"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-white/30">
                  <span className="font-semibold text-primary-200 text-sm sm:text-base text-shadow-soft bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-primary-400/20">{service.price}</span>
                  <Link
                    to="/quote"
                    className="flex items-center space-x-2 bg-primary-600/95 hover:bg-primary-700/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl text-shadow-soft border border-primary-400/30"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
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