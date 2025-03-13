
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="py-10 border-t">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-display font-bold text-xl mb-1">Portfolio</p>
            <p className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="mt-6 md:mt-0 md:ml-auto">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full flex items-center justify-center border hover:bg-secondary transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
