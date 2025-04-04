import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Detect scroll for condensed header on mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close mobile menu when location changes (user navigates to a new page)
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Add touch event handling for better mobile experience
  const handleLinkTouchStart = (event: React.TouchEvent) => {
    event.currentTarget.classList.add('active-touch');
  };

  const handleLinkTouchEnd = (event: React.TouchEvent) => {
    event.currentTarget.classList.remove('active-touch');
  };

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/nishav_business_solutions_logo.png" 
                alt="Nishav Business Solutions Logo" 
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
                width="200" 
                height="64"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = "/images/nishav_new_logo.jpeg";
                }}
              />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              ref={buttonRef}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-md p-2 transition-colors" 
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation and CTA Button */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-6 mr-8">
              <Link href="/" className={`${isActive('/') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
                Home
              </Link>
              <Link href="/about" className={`${isActive('/about') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
                About
              </Link>
              <Link href="/services" className={`${isActive('/services') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
                Services
              </Link>
              <Link href="/clients" className={`${isActive('/clients') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
                Clients
              </Link>
              <Link href="/blogs" className={`${isActive('/blogs') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
                Blogs
              </Link>
              <Link href="/contact" className={`${isActive('/contact') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
                Contact Us
              </Link>
            </nav>
            
            <div>
              <Link href="/book-meeting" className="bg-[var(--accent)] text-white px-6 py-2 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md whitespace-nowrap">
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Improved for better accessibility */}
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`md:hidden fixed inset-0 top-[${isScrolled ? '52px' : '68px'}] bg-white z-50 transition-opacity duration-300 overflow-y-auto
            ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ height: 'calc(100vh - 68px)' }}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} 
                text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg
                hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/20 hover:text-[var(--primary)]`}
              onTouchStart={handleLinkTouchStart}
              onTouchEnd={handleLinkTouchEnd}
            >
              <i className="fas fa-home mr-3"></i>
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} 
                text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg
                hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/20 hover:text-[var(--primary)]`}
              onTouchStart={handleLinkTouchStart}
              onTouchEnd={handleLinkTouchEnd}
            >
              <i className="fas fa-info-circle mr-3"></i>
              About
            </Link>
            <Link 
              href="/services" 
              className={`${isActive('/services') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} 
                text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg
                hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/20 hover:text-[var(--primary)]`}
              onTouchStart={handleLinkTouchStart}
              onTouchEnd={handleLinkTouchEnd}
            >
              <i className="fas fa-briefcase mr-3"></i>
              Services
            </Link>
            <Link 
              href="/clients" 
              className={`${isActive('/clients') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} 
                text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg
                hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/20 hover:text-[var(--primary)]`}
              onTouchStart={handleLinkTouchStart}
              onTouchEnd={handleLinkTouchEnd}
            >
              <i className="fas fa-users mr-3"></i>
              Clients
            </Link>
            <Link 
              href="/blogs" 
              className={`${isActive('/blogs') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} 
                text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg
                hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/20 hover:text-[var(--primary)]`}
              onTouchStart={handleLinkTouchStart}
              onTouchEnd={handleLinkTouchEnd}
            >
              <i className="fas fa-blog mr-3"></i>
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} 
                text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg
                hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/20 hover:text-[var(--primary)]`}
              onTouchStart={handleLinkTouchStart}
              onTouchEnd={handleLinkTouchEnd}
            >
              <i className="fas fa-envelope mr-3"></i>
              Contact Us
            </Link>
            
            <div className="pt-6 mt-4 border-t border-gray-200">
              <Link 
                href="/book-meeting" 
                className="bg-[var(--accent)] text-white w-full block text-center py-3 px-6 rounded-md font-bold text-lg shadow-md
                  active:transform active:scale-95 hover:bg-[var(--accent)]/90 transition-all duration-300"
                onTouchStart={handleLinkTouchStart}
                onTouchEnd={handleLinkTouchEnd}
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Book a Meeting
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
