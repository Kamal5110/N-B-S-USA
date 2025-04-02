import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '@/lib/data';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials,
  autoPlayInterval = 5000
}) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const length = testimonials.length;

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);
  
  // Animation variants for slides
  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto overflow-hidden py-12 px-4 md:px-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl" />
      
      <div className="relative py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                  <span className="text-2xl font-bold text-primary">{testimonials[current].author.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonials[current].author}</h3>
                  <p className="text-gray-600">{testimonials[current].role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonials[current].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                "{testimonials[current].content}"
              </blockquote>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 'right' : 'left');
                setCurrent(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;