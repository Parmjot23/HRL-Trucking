import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Truck, MapPin, Calendar, ArrowRight } from 'lucide-react';

const QuickQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    truckSize: '',
    distance: '',
    duration: ''
  });

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const projectTypes = [
    'Construction Site',
    'Mining Operation',
    'Demolition Cleanup',
    'Aggregate Delivery',
    'Industrial Waste'
  ];

  const truckSizes = [
    { label: 'Small (15 tons)', value: 'small', baseRate: 120 },
    { label: 'Medium (25 tons)', value: 'medium', baseRate: 150 },
    { label: 'Large (40 tons)', value: 'large', baseRate: 200 }
  ];

  const durations = [
    { label: 'Half Day (4 hours)', value: 'half', multiplier: 0.5 },
    { label: 'Full Day (8 hours)', value: 'full', multiplier: 1 },
    { label: 'Multi-Day', value: 'multi', multiplier: 2.5 }
  ];

  const handleCalculateQuote = () => {
    if (!formData.truckSize || !formData.distance || !formData.duration) return;

    const selectedTruck = truckSizes.find(truck => truck.value === formData.truckSize);
    const selectedDuration = durations.find(dur => dur.value === formData.duration);
    
    if (!selectedTruck || !selectedDuration) return;

    const baseRate = selectedTruck.baseRate;
    const distance = parseInt(formData.distance) || 0;
    const distanceMultiplier = distance > 50 ? 1.3 : distance > 25 ? 1.15 : 1;
    
    const estimate = baseRate * selectedDuration.multiplier * distanceMultiplier;
    setEstimatedCost(Math.round(estimate));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setEstimatedCost(null);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="h-8 w-8 text-primary-600" />
              <span className="text-primary-600 font-semibold text-lg">Instant Estimate</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Get Your <span className="text-gradient">Quick Quote</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Get an instant estimate for your dump truck transport needs. 
              Our transparent pricing means no surprises, just reliable service at competitive rates.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fleet Variety</h4>
                  <p className="text-gray-600">Choose from 15-40 ton capacity trucks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Distance-Based Pricing</h4>
                  <p className="text-gray-600">Fair rates based on actual distance</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                  <p className="text-gray-600">Half-day to multi-day projects</p>
                </div>
              </div>
            </div>

            {estimatedCost && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary-600 text-white p-6 rounded-2xl mb-8"
              >
                <h3 className="text-2xl font-bold mb-2">Estimated Cost</h3>
                <div className="text-4xl font-black">${estimatedCost}</div>
                <p className="text-primary-100 mt-2">*Final quote may vary based on specific requirements</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Estimate Calculator</h3>
            
            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                >
                  <option value="">Select project type...</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Truck Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Truck Size Needed
                </label>
                <select
                  value={formData.truckSize}
                  onChange={(e) => handleInputChange('truckSize', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                >
                  <option value="">Select truck size...</option>
                  {truckSizes.map((truck, index) => (
                    <option key={index} value={truck.value}>{truck.label}</option>
                  ))}
                </select>
              </div>

              {/* Distance */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Distance (miles)
                </label>
                <input
                  type="number"
                  value={formData.distance}
                  onChange={(e) => handleInputChange('distance', e.target.value)}
                  placeholder="Enter distance..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Project Duration
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                >
                  <option value="">Select duration...</option>
                  {durations.map((duration, index) => (
                    <option key={index} value={duration.value}>{duration.label}</option>
                  ))}
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculateQuote}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Calculate Estimate
              </button>

              {/* Get Detailed Quote */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-center mb-4">
                  Need a detailed quote with specific requirements?
                </p>
                <Link
                  to="/quote"
                  className="flex items-center justify-center space-x-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <span>Get Detailed Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickQuote; 