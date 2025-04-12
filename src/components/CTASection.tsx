
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    'Professional templates designed by experts',
    'AI-powered content suggestions',
    'ATS-friendly formatting',
    'Unlimited resume downloads',
    'Multiple format options (PDF, DOCX, TXT)',
    'Custom styling options'
  ];

  return (
    <div className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your resume?</h2>
            <p className="text-xl opacity-90">
              Join thousands of job seekers who have used ResumeAlchemy to land their dream jobs.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="mt-8 bg-white text-primary hover:bg-gray-100">
              Create Your Resume Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary-800 rounded-lg"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md">
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <div className="h-8 bg-primary-100 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                  <div className="h-20 bg-primary-50 rounded w-full mb-2"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 bg-primary rounded-full"></div>
                    <div className="h-8 w-8 bg-blue-400 rounded-full"></div>
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-10 w-24 bg-primary rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
