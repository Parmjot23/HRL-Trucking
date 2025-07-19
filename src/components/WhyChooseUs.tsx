import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Fully Licensed & Insured',
      description: 'Complete coverage for peace of mind on every project',
      stats: '100% Compliance'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent transport needs',
      stats: '<15 min Response'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Professional drivers with 15+ years average experience',
      stats: '15+ Years Experience'
    },
    {
      icon: Award,
      title: 'Industry Leading Safety',
      description: 'Zero accidents record with rigorous safety protocols',
      stats: '0 Accidents in 2024'
    }
  ];

  const achievements = [
    { number: '5,000+', label: 'Projects Completed' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '15+', label: 'Years in Business' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  const testimonialHighlights = [
    'Most reliable trucking service we\'ve worked with',
    'Always on time, professional drivers',
    'Competitive pricing with exceptional service',
    'Essential partner for our construction projects'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose <span className="text-gradient">HRL Trucking?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of excellence in dump truck transport, we've built our reputation 
            on reliability, safety, and exceptional customer service.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl mb-6 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
                <reason.icon className="h-12 w-12 text-primary-600 mx-auto mb-4 transition-all duration-300" />
                <div className="text-2xl font-black text-primary-600 mb-2">{reason.stats}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Track Record
            </h3>
            <p className="text-xl text-gray-300">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Testimonial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h3>
            <div className="space-y-4">
              {testimonialHighlights.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5 transition-all duration-300" />
                  <p className="text-gray-700 text-lg">{quote}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current transition-all duration-300" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.9/5 Rating</span>
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "HRL Trucking has been our go-to partner for all major construction projects. 
              Their reliability and professionalism are unmatched in the industry."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-gray-600 transition-all duration-300" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Construction Partners Inc.</div>
                <div className="text-gray-600 text-sm">General Contractor</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 