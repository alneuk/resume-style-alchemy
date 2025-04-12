
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TemplateShowcase from '@/components/TemplateShowcase';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TemplateShowcase />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
