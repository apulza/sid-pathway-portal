
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { initScrollAnimations } from '@/utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize scroll animations when component mounts
    const cleanup = initScrollAnimations();
    
    // Re-initialize on window resize
    const handleResize = () => {
      cleanup();
      initScrollAnimations();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup when component unmounts
    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Siddharth Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
