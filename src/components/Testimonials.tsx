import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building, Wrench, HardHat } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marcus Johnson',
      company: 'Johnson Construction',
      industry: 'Construction',
      icon: HardHat,
      rating: 5,
      text: 'HRL Trucking has been our go-to partner for over 5 years. Their reliability and professionalism are unmatched. Never had a single delay on any of our projects.',
      project: 'Downtown Office Complex'
    },
    {
      name: 'Sarah Chen',
      company: 'MineCore Industries',
      industry: 'Mining',
      icon: Wrench,
      rating: 5,
      text: 'Outstanding service for our mining operations. The heavy-duty trucks handle our toughest jobs with ease. Safety standards are top-notch.',
      project: 'Copper Mine Expansion'
    },
    {
      name: 'David Rodriguez',
      company: 'Metro Developers',
      industry: 'Real Estate',
      icon: Building,
      rating: 5,
      text: 'Professional drivers, competitive pricing, and excellent communication. HRL makes project planning so much easier with their reliable scheduling.',
      project: 'Residential Complex'
    }
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders say about our 
            dump truck transport services and commitment to excellence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-primary-200 absolute top-6 right-6 transition-all duration-300" />
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current transition-all duration-300" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Project Info */}
              <div className="bg-primary-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-primary-600 font-medium mb-1">Recent Project</div>
                <div className="text-primary-800 font-semibold">{testimonial.project}</div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="bg-primary-600 p-3 rounded-full">
                <testimonial.icon className="h-6 w-6 text-white transition-all duration-300" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.industry}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary-200 mb-2">4.9/5</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary-200 mb-2">500+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary-200 mb-2">98%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary-200 mb-2">5,000+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-500">
            <p className="text-xl text-primary-100 mb-6">
              "The most reliable trucking partner we've ever worked with. 
              HRL Trucking consistently exceeds expectations."
            </p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-300 fill-current transition-all duration-300" />
              ))}
              <span className="ml-4 text-primary-100 font-medium">
                - Industry Consensus
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 