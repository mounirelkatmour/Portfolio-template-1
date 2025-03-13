
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Minimal E-commerce',
    description: 'A clean, minimalist e-commerce platform with intuitive navigation and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    tags: ['UI/UX', 'Web Design', 'E-commerce']
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'Complete brand identity system with logo design, typography, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    tags: ['Branding', 'Logo Design', 'Typography']
  },
  {
    id: 3,
    title: 'Mobile Application',
    description: 'Clean and intuitive mobile app design with seamless user experience and fluid animations.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    tags: ['Mobile', 'App Design', 'UI/UX']
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive design system with reusable components, patterns, and guidelines.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Design System', 'Components', 'Documentation']
  }
];

const Portfolio = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const headerObserver = useIntersectionObserver({ threshold: 0.3 });
  const projectsObserver = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="portfolio" className="bg-secondary/50 py-24">
      <div className="container-section">
        <div 
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            headerObserver.hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          ref={headerObserver.elementRef as React.RefObject<HTMLDivElement>}
        >
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A selection of my recent work, showcasing my approach to design 
            and development with a focus on minimalism and user experience.
          </p>
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700",
            projectsObserver.hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          ref={projectsObserver.elementRef as React.RefObject<HTMLDivElement>}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
