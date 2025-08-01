import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import QuickQuote from '../components/QuickQuote';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <QuickQuote />
      <Testimonials />
    </div>
  );
};

export default HomePage; 