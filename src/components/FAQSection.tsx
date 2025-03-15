
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How does your matching algorithm work?",
      answer: "Our AI-powered algorithm matches profiles based on multiple factors including core values, life goals, personality traits, and preferences. We use a compatibility score system that goes beyond superficial attributes to find truly compatible partners."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We prioritize your safety with verified profiles, privacy controls, content moderation, and encrypted messaging. Our team monitors suspicious activities, and we provide tools to block and report users if needed."
    },
    {
      question: "What does your pricing structure look like?",
      answer: "We offer a freemium model with basic matching at no cost. Premium plans start at $19.99/month with discounts for 3-month ($49.99) and 6-month ($89.99) subscriptions. Premium features include advanced filters, unlimited messaging, and profile boosts."
    },
    {
      question: "How do you verify user profiles?",
      answer: "We use a comprehensive verification process that includes ID verification, social media cross-referencing, and selfie verification to ensure authentic profiles. Premium members can access additional verification badges that show their profile has been thoroughly checked."
    },
    {
      question: "Can I use the service if I'm looking for a specific community match?",
      answer: "Yes, our platform supports various community preferences. You can set specific parameters in your profile to match with people from similar backgrounds, communities, or with specific preferences. Our diverse user base spans multiple communities."
    }
  ];
  
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our platform and services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-rose-100">
              <AccordionTrigger className="text-lg font-medium py-6 text-left hover:text-rose-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center glass p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is ready to help you with any other questions you might have.
          </p>
          <Button variant="ghost" className="border border-rose-200 text-rose-600 hover:bg-rose-50 px-6 py-2 rounded-full">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
