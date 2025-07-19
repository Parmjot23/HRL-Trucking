import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Gauge, Weight, Shield, ArrowRight } from 'lucide-react';

// Import fleet image
import fleetImage from '../assets/images/Our Premium Fleet.png';

const FleetPreview: React.FC = () => {
  const trucks = [
    {
      name: 'Heavy-Duty Hauler',
      capacity: '40 Tons',
      description: 'Perfect for large construction and mining projects',
      features: ['GPS Tracking', 'Hydraulic Systems', 'Safety Certified'],
      image: '/truck-1.jpg',
      available: true
    },
    {
      name: 'Standard Workhorse',
      capacity: '25 Tons',
      description: 'Versatile truck for medium-sized operations',
      features: ['Fuel Efficient', 'All-Weather', 'Easy Loading'],
      image: '/truck-2.jpg',
      available: true
    },
    {
      name: 'Compact Solution',
      capacity: '15 Tons',
      description: 'Ideal for urban construction and tight spaces',
      features: ['Compact Design', 'Low Emissions', 'Precision Control'],
      image: '/truck-3.jpg',
      available: false
    }
  ];

  const specs = [
    { icon: Truck, label: 'Fleet Size', value: '150+ Trucks' },
    { icon: Gauge, label: 'Max Capacity', value: '40 Tons' },
    { icon: Weight, label: 'Total Capacity', value: '6,000 Tons' },
    { icon: Shield, label: 'Safety Rating', value: '100%' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header with Fleet Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl mb-16"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-responsive bg-mobile img-optimize"
            style={{ backgroundImage: `url(${fleetImage})` }}
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/85" />
          
          {/* Additional center overlay for text area */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 text-center py-16 px-6 sm:py-20 sm:px-8 md:py-24 md:px-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 mx-auto max-w-5xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 text-shadow-strong">
                Our <span className="text-gradient bg-gradient-to-r from-primary-200 to-primary-50 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), 0px 0px 8px rgba(0, 0, 0, 0.5)' }}>Premium Fleet</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed text-shadow-medium">
                State-of-the-art dump trucks equipped with the latest technology, 
                maintained to the highest standards for maximum reliability and safety.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fleet Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {specs.map((spec, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300">
                <spec.icon className="h-12 w-12 text-primary-600 mx-auto mb-4 transition-all duration-300" />
                <div className="text-3xl font-black text-gray-900 mb-2">{spec.value}</div>
                <div className="text-gray-600 font-medium">{spec.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Truck Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {trucks.map((truck, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              {/* Truck Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Truck className="h-20 w-20 text-gray-400 transition-all duration-300" />
                {!truck.available && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    In Use
                  </div>
                )}
                {truck.available && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{truck.name}</h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {truck.capacity}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{truck.description}</p>

                <ul className="space-y-2 mb-6">
                  {truck.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    truck.available
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!truck.available}
                >
                  {truck.available ? 'Request This Truck' : 'Currently In Use'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/fleet"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>View Complete Fleet</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetPreview; 