
import React, { useEffect } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Hero } from '@/components/Hero';
import { USPCard } from '@/components/USPCard';
import { Timeline } from '@/components/Timeline';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { 
  UserCheck, 
  Shield, 
  Sparkles,
} from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      {/* Hero Section */}
      <Hero />
      
      {/* USP Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-rose-50 text-rose-600 font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Finding Your Life Partner Should Be Meaningful
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines traditional values with modern technology to help you find a truly compatible life partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <USPCard 
              icon={Sparkles} 
              title="Advanced Compatibility Algorithm" 
              description="Our AI-powered algorithm matches you based on values, goals, and personalities for deeper connections." 
              delay={0}
            />
            <USPCard 
              icon={UserCheck} 
              title="Verified Profiles Only" 
              description="Every profile is verified to ensure you're connecting with genuine people looking for meaningful relationships." 
              delay={200}
            />
            <USPCard 
              icon={Shield} 
              title="Privacy-First Approach" 
              description="Your personal information is protected with strong privacy controls and secure messaging systems." 
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section-padding bg-rose-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white text-rose-600 font-medium mb-4">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Sacred Connection Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process makes finding your perfect match simple and meaningful.
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialCarousel />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* FAQ Accordion */}
      <FAQSection />
    </AppLayout>
  );
};

export default Index;
