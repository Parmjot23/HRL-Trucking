import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gauge, Weight, Shield, Settings, CheckCircle } from 'lucide-react';

const FleetPage: React.FC = () => {
  const trucks = [
    {
      name: 'Heavy-Duty Hauler HD-40',
      capacity: '40 Tons',
      category: 'Heavy Duty',
      description: 'Our flagship truck for the most demanding projects',
      specifications: {
        engine: 'Caterpillar C15 600HP',
        transmission: 'Allison 4500RDS',
        axles: 'Tandem Rear, Single Front',
        brakes: 'Air Disc Brakes',
        suspension: 'Air Ride Suspension'
      },
      features: [
        'GPS Real-time Tracking',
        'Advanced Hydraulic System',
        'DOT Safety Certified',
        'Environmental Compliance',
        'Emergency Communication',
        'Load Monitoring System'
      ],
      dimensions: {
        length: '32 ft',
        width: '8.5 ft',
        height: '12 ft'
      },
      available: true,
      hourlyRate: 200,
      dailyRate: 1400
    },
    {
      name: 'Standard Workhorse SW-25',
      capacity: '25 Tons',
      category: 'Standard',
      description: 'Versatile truck perfect for most construction projects',
      specifications: {
        engine: 'Cummins ISX 450HP',
        transmission: 'Eaton Fuller 10-Speed',
        axles: 'Tandem Rear, Single Front',
        brakes: 'Air Disc Brakes',
        suspension: 'Leaf Spring Suspension'
      },
      features: [
        'GPS Tracking',
        'Hydraulic Lift System',
        'Safety Certified',
        'Fuel Efficient',
        'Easy Loading',
        'Weather Protection'
      ],
      dimensions: {
        length: '28 ft',
        width: '8 ft',
        height: '11 ft'
      },
      available: true,
      hourlyRate: 150,
      dailyRate: 1000
    },
    {
      name: 'Compact Urban CU-15',
      capacity: '15 Tons',
      category: 'Compact',
      description: 'Perfect for urban projects and tight spaces',
      specifications: {
        engine: 'Cummins ISB 300HP',
        transmission: 'Allison 2500HS',
        axles: 'Single Rear, Single Front',
        brakes: 'Hydraulic Disc Brakes',
        suspension: 'Coil Spring Suspension'
      },
      features: [
        'Compact Design',
        'Low Emissions',
        'Precision Control',
        'Urban Certified',
        'Noise Reduction',
        'Maneuverability'
      ],
      dimensions: {
        length: '24 ft',
        width: '7.5 ft',
        height: '10 ft'
      },
      available: false,
      hourlyRate: 120,
      dailyRate: 800
    }
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

      {/* Truck Showcase */}
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
              Truck <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications and features for each truck in our professional fleet.
            </p>
          </motion.div>

          <div className="space-y-12">
            {trucks.map((truck, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Truck Image */}
                  <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Truck className="h-32 w-32 text-gray-400" />
                    <div className="absolute top-6 right-6">
                      {truck.available ? (
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Available
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          In Use
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Truck Details */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{truck.name}</h3>
                        <span className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold">
                          {truck.category} • {truck.capacity}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">${truck.hourlyRate}/hr</div>
                        <div className="text-gray-600">${truck.dailyRate}/day</div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-6">{truck.description}</p>

                    {/* Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Settings className="h-5 w-5 mr-2 text-primary-600" />
                          Specifications
                        </h4>
                        <div className="space-y-2 text-sm">
                          {Object.entries(truck.specifications).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between">
                              <span className="capitalize text-gray-600">{key}:</span>
                              <span className="font-medium text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary-600" />
                          Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {truck.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dimensions */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Dimensions</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{truck.dimensions.length}</div>
                          <div className="text-gray-600">Length</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{truck.dimensions.width}</div>
                          <div className="text-gray-600">Width</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{truck.dimensions.height}</div>
                          <div className="text-gray-600">Height</div>
                        </div>
                      </div>
                    </div>

                    <button
                      className={`w-full py-4 px-6 rounded-xl font-bold transition-colors ${
                        truck.available
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!truck.available}
                    >
                      {truck.available ? `Request ${truck.name}` : 'Currently Unavailable'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage; 