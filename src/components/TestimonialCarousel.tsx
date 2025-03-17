
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "UniformMatch helped me find my soulmate through their value-based matching. We're getting married next month!",
      author: "Priya & Arjun",
      location: "Mumbai, India",
      image: "https://girlandworld.com/wp-content/uploads/2020/07/img-20200721-wa0003.jpg"
    },
    {
      quote: "The app matched us based on our core values and life goals. After 6 months of getting to know each other, we're now engaged!",
      author: "Maya & David",
      location: "New York, USA",
      image: "https://girlandworld.com/wp-content/uploads/2020/07/img-20200721-wa0003.jpg"
    },
    {
      quote: "We're from different backgrounds but share the same values. This platform helped us connect in a meaningful way.",
      author: "Raj & Lisa",
      location: "London, UK",
      image: "https://girlandworld.com/wp-content/uploads/2020/07/img-20200721-wa0003.jpg"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Auto-advance slides
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, testimonials.length]);
  
  return (
    <div className="relative overflow-hidden bg-background py-12">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Love Stories That Started Here</h2>
          <p className="text-muted-foreground text-lg">
            Read about the journeys of couples who found their perfect match through our platform.
          </p>
        </div>
        
        {/* Using shadcn Carousel for more reliable behavior */}
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto">
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Quote */}
                      <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                        <Quote className="text-rose-200 w-12 h-12 mb-4" />
                        <p className="text-lg md:text-xl italic mb-6">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="bg-white/80 backdrop-blur-sm hover:bg-white" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="bg-white/80 backdrop-blur-sm hover:bg-white" />
            </div>
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-rose-600 w-6' : 'bg-rose-200'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
