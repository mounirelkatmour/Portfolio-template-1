
import { ArrowDown } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={elementRef as React.RefObject<HTMLDivElement>}
    >
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight transition-all duration-1000 delay-100",
              hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Crafting Digital <br />
            <span className="text-gradient bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white">
              Experiences
            </span>
          </h1>
          
          <p 
            className={cn(
              "text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300",
              hasIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            A minimalist approach to design that focuses on simplicity, usability, and thoughtful details.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500",
              hasIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <a 
              href="#portfolio" 
              className="px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover-effect"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-transparent border border-black dark:border-white font-medium text-sm hover-effect"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#portfolio" className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2 text-muted-foreground">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_100%)]" />
    </section>
  );
};

export default Hero;
