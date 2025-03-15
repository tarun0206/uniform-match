
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Medal } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize elements as visible instead of hidden
    if (heroRef.current) {
      const textContent = heroRef.current.querySelector('.hero-text-content');
      const imageContent = heroRef.current.querySelector('.hero-image-content');
      
      if (textContent) {
        textContent.classList.remove('opacity-0', 'translate-y-6');
        textContent.classList.add('opacity-100');
      }
      
      if (imageContent) {
        imageContent.classList.remove('opacity-0', 'translate-y-6');
        imageContent.classList.add('opacity-100');
      }
    }
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-slate-100 min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-indigo-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={heroRef}>
          {/* Text content */}
          <div className="hero-text-content space-y-8 transition-all duration-700 ease-out">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 font-medium mb-2">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              <span>Exclusively For Defense Families</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-slate-800">
              Find Your Perfect Life Partner In The <span className="text-indigo-700">Defense Community</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Dedicated matchmaking service for military personnel and their families, connecting people who understand the values of duty, honor, and commitment.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full text-base px-6 shadow-md bg-indigo-600 hover:bg-indigo-700">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-6 border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                See Success Stories <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=32&h=32&auto=format&fit=crop" 
                    alt="User" className="w-full h-full object-cover" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 -ml-3 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=32&h=32&auto=format&fit=crop&ixlib=rb-${i}.1`} 
                      alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-600">
                <span className="text-indigo-600 font-semibold">20,000+</span> defense families connected
              </p>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="hero-image-content relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="bg-white/20 backdrop-blur-sm shadow-xl absolute inset-2 rounded-3xl overflow-hidden border border-blue-100">
                <img 
                  src="https://images.unsplash.com/photo-1627672360993-41d1065f86ba?q=80&w=800&auto=format&fit=crop" 
                  alt="Military couple in uniform" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <Medal className="text-indigo-500 w-5 h-5" />
                  <div>
                    <p className="text-xs font-medium">Service Match</p>
                    <p className="text-xs text-slate-500">98% compatibility</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    <Shield className="text-indigo-500 w-4 h-4" />
                  </div>
                  <p className="text-xs font-medium">3,500+ verified defense profiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
