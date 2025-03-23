
import { useState, useEffect } from 'react';
import { scrollTo } from '@/utils/animations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-xl font-display font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-primary">S</span>iddharth<span className="text-primary">.</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Experience', id: 'experience' },
            { label: 'Contact', id: 'contact' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium relative group transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 relative ${mobileMenuOpen ? 'h-5' : 'h-5'} transform transition-all duration-300`}>
            <span className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'}`} />
            <span className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'} top-2`} />
            <span className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'}`} />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        } bg-background/95 backdrop-blur-md shadow-md`}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col space-y-4">
            {[
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
