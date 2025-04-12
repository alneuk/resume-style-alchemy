
import React from 'react';
import { Sparkles, Clock, Palette, FileText, PenTool, Award } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Suggestions',
      description: 'Get smart recommendations to highlight your skills and experience effectively.'
    },
    {
      icon: Clock,
      title: 'Quick Creation',
      description: 'Build a professional resume in minutes with our intuitive editor.'
    },
    {
      icon: Palette,
      title: 'Beautiful Templates',
      description: 'Choose from dozens of modern, ATS-friendly resume templates.'
    },
    {
      icon: FileText,
      title: 'Multiple Formats',
      description: 'Download your resume as PDF, DOCX, or share via a custom link.'
    },
    {
      icon: PenTool,
      title: 'Custom Styling',
      description: 'Personalize fonts, colors, and layout to match your preferences.'
    },
    {
      icon: Award,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes through applicant tracking systems.'
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Job Search Experience</h2>
          <p className="text-xl text-gray-600">
            Our resume builder combines beautiful design with powerful features to help you land your dream job.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
