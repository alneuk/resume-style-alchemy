
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Resume, <span className="gradient-text">Land Your Dream Job</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Create professional resumes in minutes with our AI-powered tools. Stand out from the competition with modern templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                View Templates
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
              <span className="text-gray-300">•</span>
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-4 -left-4 bg-blue-100 h-full w-full rounded-lg"></div>
            <div className="absolute top-8 -left-8 bg-blue-200 h-full w-full rounded-lg"></div>
            <div className="relative bg-white p-4 shadow-lg rounded-lg border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                alt="Resume Example" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
