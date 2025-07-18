import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Truck, MapPin, Calendar, User, FileText, CheckCircle } from 'lucide-react';

const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Project Details
    projectType: '',
    material: '',
    quantity: '',
    truckSize: '',
    
    // Location Details
    pickupLocation: '',
    deliveryLocation: '',
    distance: '',
    accessRequirements: '',
    
    // Schedule
    startDate: '',
    endDate: '',
    duration: '',
    timeFlexible: false,
    
    // Contact Info
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Additional Requirements
    additionalServices: [],
    specialRequirements: '',
    budget: ''
  });

  const steps = [
    { id: 1, title: 'Project Details', icon: FileText },
    { id: 2, title: 'Locations', icon: MapPin },
    { id: 3, title: 'Schedule', icon: Calendar },
    { id: 4, title: 'Contact Info', icon: User },
    { id: 5, title: 'Review', icon: CheckCircle }
  ];

  const projectTypes = [
    'Construction Site Cleanup',
    'Demolition Debris Removal',
    'Mining Material Transport',
    'Aggregate Delivery',
    'Industrial Waste Removal',
    'Emergency Cleanup',
    'Custom Project'
  ];

  const materials = [
    'Concrete', 'Asphalt', 'Dirt/Soil', 'Gravel', 'Sand', 'Debris', 'Rocks/Stone', 'Other'
  ];

  const truckSizes = [
    { value: 'small', label: 'Small (15 tons)' },
    { value: 'medium', label: 'Medium (25 tons)' },
    { value: 'large', label: 'Large (40 tons)' },
    { value: 'multiple', label: 'Multiple Trucks Needed' }
  ];

  const additionalServices = [
    'Loading Assistance',
    'Sorting/Separation',
    'Weekend Service',
    'Express Service',
    'Environmental Compliance',
    'Site Preparation'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitQuote = () => {
    console.log('Quote submitted:', formData);
    // Handle quote submission
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Project Type *
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select project type...</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Material Type *
              </label>
              <select
                value={formData.material}
                onChange={(e) => handleInputChange('material', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select material...</option>
                {materials.map((material, index) => (
                  <option key={index} value={material}>{material}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Estimated Quantity
              </label>
              <input
                type="text"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                placeholder="e.g., 50 cubic yards, 25 tons"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Truck Size Needed *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {truckSizes.map((truck, index) => (
                  <label key={index} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="truckSize"
                      value={truck.value}
                      checked={formData.truckSize === truck.value}
                      onChange={(e) => handleInputChange('truckSize', e.target.value)}
                      className="mr-3"
                    />
                    <span>{truck.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Pickup Location *
              </label>
              <input
                type="text"
                value={formData.pickupLocation}
                onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                placeholder="Full address including city and state"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Delivery Location *
              </label>
              <input
                type="text"
                value={formData.deliveryLocation}
                onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
                placeholder="Full address including city and state"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Estimated Distance (miles)
              </label>
              <input
                type="number"
                value={formData.distance}
                onChange={(e) => handleInputChange('distance', e.target.value)}
                placeholder="Distance between locations"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Site Access Requirements
              </label>
              <textarea
                value={formData.accessRequirements}
                onChange={(e) => handleInputChange('accessRequirements', e.target.value)}
                placeholder="Any special access requirements, restrictions, or site conditions..."
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Requirements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Preferred Start Date *
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Expected End Date
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Project Duration
              </label>
              <select
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select duration...</option>
                <option value="half-day">Half Day (4 hours)</option>
                <option value="full-day">Full Day (8 hours)</option>
                <option value="multi-day">Multiple Days</option>
                <option value="ongoing">Ongoing Project</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="timeFlexible"
                checked={formData.timeFlexible}
                onChange={(e) => handleInputChange('timeFlexible', e.target.checked)}
                className="mr-3"
              />
              <label htmlFor="timeFlexible" className="text-gray-700">
                I'm flexible with scheduling for better rates
              </label>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Company/Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Additional Services
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {additionalServices.map((service, index) => (
                  <label key={index} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.additionalServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="mr-2"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Special Requirements
              </label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Any special requirements or additional information..."
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Budget Range (Optional)
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select budget range...</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="over-5000">Over $5,000</option>
              </select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Review Your Quote Request</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div><strong>Project:</strong> {formData.projectType}</div>
              <div><strong>Material:</strong> {formData.material}</div>
              <div><strong>Quantity:</strong> {formData.quantity}</div>
              <div><strong>Truck Size:</strong> {formData.truckSize}</div>
              <div><strong>From:</strong> {formData.pickupLocation}</div>
              <div><strong>To:</strong> {formData.deliveryLocation}</div>
              <div><strong>Start Date:</strong> {formData.startDate}</div>
              <div><strong>Contact:</strong> {formData.name} - {formData.email} - {formData.phone}</div>
              {formData.additionalServices.length > 0 && (
                <div><strong>Additional Services:</strong> {formData.additionalServices.join(', ')}</div>
              )}
            </div>

            <div className="bg-primary-50 border border-primary-200 p-6 rounded-lg">
              <h4 className="font-bold text-primary-900 mb-2">What Happens Next?</h4>
              <ul className="space-y-2 text-primary-800">
                <li>• We'll review your requirements within 2 hours</li>
                <li>• Our team will contact you to discuss details</li>
                <li>• You'll receive a detailed quote within 24 hours</li>
                <li>• We can schedule your service immediately upon approval</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Request <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Quote</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get a detailed quote for your dump truck transport needs. 
            Our comprehensive form ensures accurate pricing and faster service.
          </motion.p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    currentStep >= step.id 
                      ? 'bg-primary-600 border-primary-600 text-white' 
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className={`ml-3 font-medium ${
                    currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl shadow-lg mb-8"
          >
            {renderStepContent()}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={submitQuote}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Calculator className="h-5 w-5" />
                <span>Submit Quote Request</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage; 