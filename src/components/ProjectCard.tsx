
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, image, tags, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/50 dark:bg-black/70 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          <button 
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="View project"
          >
            <Eye size={20} />
          </button>
          <button 
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Open project"
          >
            <ExternalLink size={20} />
          </button>
        </div>
        
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
