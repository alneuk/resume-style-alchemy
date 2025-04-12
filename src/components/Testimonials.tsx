
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialCard = ({ quote, author, role, company, image }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={author}
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="mt-6 flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ResumeAlchemy helped me land interviews at three Fortune 500 companies. The AI suggestions were spot on!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Innovations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop"
    },
    {
      quote: "After struggling with my resume for weeks, I created a polished version in under 30 minutes with ResumeAlchemy.",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "Cloud Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
    },
    {
      quote: "The templates are beautiful and ATS-friendly. I received more callbacks in one week than I had in months!",
      author: "Emma Rodriguez",
      role: "HR Specialist",
      company: "Global Recruiters",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2188&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Thousands of job seekers have transformed their careers with ResumeAlchemy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
