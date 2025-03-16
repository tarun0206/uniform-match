
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
  Flag,
  Medal
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
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-blue-50 text-blue-700 font-medium mb-4">
              <Medal className="w-3.5 h-3.5 mr-1.5" />
              Why Choose DefenseConnect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Finding Your Life Partner Should Be Honorable
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines military values of integrity and commitment with modern technology to help you find a truly compatible life partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <USPCard 
              icon={Shield} 
              title="Military-Focused Matching" 
              description="Our specialized algorithm matches you based on service branch, rank compatibility, and shared understanding of military lifestyle." 
              delay={0}
              className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-blue-100/50"
            />
            <USPCard 
              icon={UserCheck} 
              title="Verified Defense Personnel" 
              description="Every profile is verified with service credentials to ensure you're connecting with genuine defense community members." 
              delay={200}
              className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-blue-100/50"
            />
            <USPCard 
              icon={Flag} 
              title="Service-Oriented Approach" 
              description="Our platform honors the values of duty, honor and commitment that are central to defense personnel and their families." 
              delay={400}
              className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-blue-100/50"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white text-blue-700 font-medium mb-4">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How DefenseConnect Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process makes finding your perfect match simple, secure, and tailored to defense personnel.
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
