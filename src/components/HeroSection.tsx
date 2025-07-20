import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, Clock, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Truck, value: '150+', label: 'Trucks in Fleet' },
    { icon: Clock, value: '24/7', label: 'Available Service' },
    { icon: Shield, value: '100%', label: 'Insured & Licensed' },
  ];

  const features = [
    'Professional & Reliable Service',
    'State-of-the-Art Fleet',
    'Competitive Pricing',
    'Licensed & Insured'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative container-custom text-center text-white pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mb-12"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              <span className="block">POWERFUL</span>
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                DUMP TRUCK
              </span>
              <span className="block">SOLUTIONS</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            >
              Professional dump truck transport services for construction, mining, and industrial projects. 
              <span className="text-primary-400 font-semibold"> Reliable. Efficient. Safe.</span>
            </motion.p>

            {/* Feature List */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm md:text-base">
                  <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            >
              <Link
                to="/quote"
                className="group bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 flex items-center space-x-2"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/fleet"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                View Our Fleet
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 text-center group"
              >
                <stat.icon className="h-12 w-12 text-primary-400 mx-auto mb-4 group-hover:text-primary-300 transition-colors" />
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 