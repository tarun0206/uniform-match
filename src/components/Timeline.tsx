
import React, { useEffect, useRef } from 'react';
import { 
  UserRound, 
  Settings, 
  Sparkles, 
  Shield, 
  ArrowDown,
  CheckCircle2
} from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const Timeline: React.FC = () => {
  const steps: Step[] = [
    {
      icon: <UserRound className="h-6 w-6" />,
      title: "Create Profile",
      description: "Fill in your details, preferences, and upload verified photos to create your authentic profile.",
      color: "from-rose-400 to-rose-500"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Set Preferences",
      description: "Define your partner preferences including values, lifestyle, and future goals for better matching.",
      color: "from-fuchsia-400 to-fuchsia-500"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Matching",
      description: "Our AI algorithm finds compatible matches based on your profile and preferences.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Connection",
      description: "Connect securely with potential partners in a respectful environment with privacy controls.",
      color: "from-indigo-400 to-indigo-500"
    }
  ];
  
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const stepElements = timelineRef.current?.querySelectorAll('.timeline-step');
    stepElements?.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      stepElements?.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="container-custom py-12" ref={timelineRef}>
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div 
              className="timeline-step opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="hidden md:block text-sm font-medium mt-2 px-3 py-1 bg-rose-50 rounded-full text-rose-600">
                    Step {index + 1}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="glass p-6 rounded-2xl max-w-xl">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {/* Success message for first step to show completion status */}
                  {index === 0 && (
                    <div className="mt-4 flex items-center text-sm text-green-600">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      <span>Takes only 3 minutes to complete</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Connector */}
            {index < steps.length - 1 && (
              <div className="h-16 w-px bg-gradient-to-b from-rose-300 to-fuchsia-300 my-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
