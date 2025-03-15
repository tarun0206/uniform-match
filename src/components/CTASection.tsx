
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AppleIcon, Shield, Flag } from 'lucide-react';

export const CTASection: React.FC = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const screens = [
    "https://placehold.co/640x1280/EFF6FF/1E40AF?text=Defense+Connect&font=inter",
    "https://placehold.co/640x1280/EFF6FF/1E40AF?text=Service+Matching&font=inter",
    "https://placehold.co/640x1280/EFF6FF/1E40AF?text=Secure+Messaging&font=inter"
  ];
  
  const [currentScreen, setCurrentScreen] = React.useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (phoneRef.current) {
        observer.unobserve(phoneRef.current);
      }
      
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  
  // Auto advance screens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [screens.length]);
  
  return (
    <div className="bg-gradient-to-b from-background to-blue-50 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Phone mockup */}
          <div 
            ref={phoneRef} 
            className="relative transition-all duration-700 opacity-0 translate-y-10 order-2 md:order-1"
          >
            <div className="max-w-xs mx-auto">
              {/* Phone frame */}
              <div className="relative rounded-[3rem] p-4 bg-white shadow-2xl border-8 border-gray-800 aspect-[9/19] overflow-hidden">
                {/* Screen */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  {screens.map((screen, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <img 
                        src={screen} 
                        alt={`App Screen ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Phone details */}
                <div className="absolute top-5 inset-x-0 w-1/2 h-6 mx-auto rounded-full bg-black"></div>
              </div>
            </div>
            
            {/* Floating annotations */}
            <div className="absolute top-1/4 -right-4 glass p-3 rounded-lg shadow-lg text-sm animate-float">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Shield className="text-blue-700 w-4 h-4" />
                </div>
                <span>Secure Matching</span>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 -left-4 glass p-3 rounded-lg shadow-lg text-sm animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Flag className="text-blue-700 w-4 h-4" />
                </div>
                <span>Service Priority</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            ref={contentRef} 
            className="space-y-8 transition-all duration-700 opacity-0 translate-y-10 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Download Defense Connect and Start Your Journey Today
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our secure app makes it easy to find your perfect match in the defense community. Create your profile, verify your service, and connect with potential partners—anywhere, anytime.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="rounded-xl text-base px-6 py-6 bg-indigo-700 hover:bg-indigo-800 shadow-md group">
                <AppleIcon className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-base font-medium">App Store</span>
                </div>
              </Button>
              
              <Button className="rounded-xl text-base px-6 py-6 bg-indigo-700 hover:bg-indigo-800 shadow-md group">
                <svg className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9 5c.1.1.1.1.2.2v13.5c0 .1-.1.2-.1.2l-7.9 4.4c-.1 0-.1 0-.2 0-.1 0-.1 0-.2-.1L2 17.6c0-.1-.1-.1-.1-.2V3.9c0-.1.1-.2.1-.2L9.8.3c.1 0 .1 0 .2 0 .1 0 .1 0 .2.1l7.7 4.6z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-base font-medium">Google Play</span>
                </div>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-700">4.8</span>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-700">1M+</span>
                  <span className="text-sm text-muted-foreground mt-1">Defense Users</span>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-700">50k+</span>
                  <span className="text-sm text-muted-foreground mt-1">Service Matches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
