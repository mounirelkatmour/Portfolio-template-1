
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6',
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-display font-bold tracking-tight">
              Portfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={cn(
                  'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                )}
              />
              <span 
                className={cn(
                  'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2',
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span 
                className={cn(
                  'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-4',
                  mobileMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-4'
                )}
              />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            'fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden',
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-medium text-gray-900 dark:text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
