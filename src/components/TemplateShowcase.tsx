
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TemplateCard = ({ 
  image, 
  title, 
  category 
}: { 
  image: string, 
  title: string, 
  category: string 
}) => {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-white shadow-md">
      <div className="h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <div className="p-6 w-full">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-gray-300 mb-4">{category}</p>
          <Button size="sm" className="w-full">Use Template</Button>
        </div>
      </div>
    </div>
  );
};

const TemplateShowcase = () => {
  const templates = [
    {
      image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop',
      title: 'Modern Professional',
      category: 'Corporate'
    },
    {
      image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop',
      title: 'Creative Design',
      category: 'Creative'
    },
    {
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop',
      title: 'Executive Suite',
      category: 'Management'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?q=80&w=2069&auto=format&fit=crop',
      title: 'Fresh Graduate',
      category: 'Entry Level'
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Choose from our collection of professionally-designed templates to showcase your qualifications.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="icon" aria-label="Previous template">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next template">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              image={template.image}
              title={template.title}
              category={template.category}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg">
            View All Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateShowcase;
