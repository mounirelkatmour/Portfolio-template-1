
import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { Award, Briefcase, Code, PenTool } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', icon: <PenTool size={24} />, level: 90 },
  { name: 'Frontend Development', icon: <Code size={24} />, level: 85 },
  { name: 'Brand Strategy', icon: <Briefcase size={24} />, level: 80 },
  { name: 'Project Management', icon: <Award size={24} />, level: 75 },
];

const About = () => {
  const headerObserver = useIntersectionObserver({ threshold: 0.3 });
  const contentObserver = useIntersectionObserver({ threshold: 0.3 });
  const skillsObserver = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="py-24">
      <div className="container-section">
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            headerObserver.hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          ref={headerObserver.elementRef as React.RefObject<HTMLDivElement>}
        >
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">Creative Designer & Developer</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            className={cn(
              "transition-all duration-700 delay-100",
              contentObserver.hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            ref={contentObserver.elementRef as React.RefObject<HTMLDivElement>}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-lg">
              <p>
                I'm a designer and developer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. With 5+ years of 
                experience in the industry, I've worked with a diverse range of clients 
                from startups to established brands.
              </p>
              <p>
                My approach combines minimalist aesthetics with thoughtful interactions 
                to create products that are not only visually appealing but also highly 
                functional and easy to use.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring new technologies, 
                reading design books, or hiking in the mountains.
              </p>
            </div>
          </div>
          
          <div 
            className={cn(
              "transition-all duration-700 delay-300",
              skillsObserver.hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            ref={skillsObserver.elementRef as React.RefObject<HTMLDivElement>}
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-black dark:bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: skillsObserver.hasIntersected ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 600}ms` 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
