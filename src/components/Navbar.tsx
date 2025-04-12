
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg 
            viewBox="0 0 24 24" 
            className="h-8 w-8 text-primary"
            fill="currentColor"
          >
            <path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm-11-10a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm11 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-11-4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
          </svg>
          <span className="text-xl font-bold text-gray-900">ResumeAlchemy</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Templates</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          <Button variant="outline" className="mr-2">Login</Button>
          <Button>Sign Up</Button>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-16 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2 text-lg">Templates</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2 text-lg">Features</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2 text-lg">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2 text-lg">About</a>
            <Button variant="outline" className="w-full mt-4">Login</Button>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
