import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const floatingRef = useRef<HTMLDivElement>(null);
  
  const toggleOpen = () => setIsOpen(!isOpen);
  
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (floatingRef.current && !floatingRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="fixed bottom-5 left-5 z-40" ref={floatingRef}>
      <button
        onClick={toggleOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg transition-all hover:bg-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-52 rounded-lg bg-white p-4 shadow-xl"
          >
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold text-[var(--primary)]">Contact Us</h3>
              <div className="mt-1 h-1 w-16 bg-[var(--accent)] mx-auto"></div>
            </div>
            
            <ul className="space-y-3">
              {/* US Call */}
              <li>
                <a 
                  href="tel:+18001234567"
                  className="flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm">Call US Office</span>
                </a>
              </li>
              
              {/* India Call */}
              <li>
                <a 
                  href="tel:+919649410824"
                  className="flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm">Call India Office</span>
                </a>
              </li>
              
              {/* WhatsApp */}
              <li>
                <a 
                  href="https://wa.me/919649410824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600/10 text-green-600">
                    <svg width="16" height="16" viewBox="0 0 256 258" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                      <path d="M67.663 221.823l4.185 2.093c17.77 10.19 38.08 15.492 58.616 15.494 67.876 0 123.264-55.487 123.264-123.425 0-32.974-12.866-63.923-36.25-87.345C194.16 5.09 163.207-7.788 130.464 7.77a123.44 123.44 0 0 0-87.38 36.303c-32.293 32.3-43.347 76.79-29.886 131.488l2.105 4.19-9.06 33.815 61.42-31.743Z" fill="currentColor"/>
                      <path d="M219.877 37.276C190.178 7.577 150.435 7.777 128.202 7.77H128.14c-22.092 0-62.037-.452-92.316 29.826-25.87 25.872-27.216 60.048-27.216 69.49 0 19.318 7.506 39.042 19.1 52.95l-19.295 58.526c-.955 2.946 2.922 5.578 5.422 3.72l57.253-35.527c13.288 8.603 28.917 13.183 44.897 13.192 37.74 0 80.765-23.005 95.947-61.35 17.86-45.143-4.035-92.47-12.057-100.52zm-12.95 109.798c-2.597 12.304-14.618 27.097-27.088 33.54-18.58 9.62-42.8 12.13-63.816-4.605l-4.654-3.582-31.773 17.677 9.486-30.82-4.222-4.818c-19.53-22.183-19.53-53.614-.213-75.49 18.478-19.52 43.398-20.26 56.094-20.26a78.736 78.736 0 0 1 55.395 22.92c11.19 11.24 17.9 26.257 17.924 42.96.043 8.323-2.5 15.58-7.134 22.478z" fill="#FFF"/>
                      <path d="M187.775 149.32c-1.208-2.722-2.444-2.79-3.583-2.887-.927-.073-1.987-.067-3.037-.067-1.582 0-3.975.735-6.05 2.556-1.74 1.525-7.543 7.286-7.543 17.761 0 10.475 7.674 20.627 8.743 22.064 1.07 1.435 14.594 23.455 36.31 31.928 17.89 6.972 21.575 5.603 25.45 5.274 3.886-.317 12.526-5.036 14.302-9.942 1.762-4.907 1.762-9.123 1.245-10.003-.525-.878-1.976-1.37-4.126-2.4-2.145-1.035-12.728-6.25-14.688-6.976-1.962-.72-3.404-.735-4.783 1.678-1.85 3.196-3.736 6.474-5.43 8.418-1.38 1.595-3.582 1.704-5.43.878-2.498-1.03-9.425-3.464-17.973-11.054-6.616-5.886-11.1-13.166-12.478-15.372-1.393-2.214-.147-3.41.95-4.51 1.062-1.012 10.195-11.588 10.195-11.588s1.328-2.214.398-4.122c-.927-1.908-3.847-5.407-3.847-5.407s-1.977-2.312-3.472-1.23" fill="#FFF"/>
                    </svg>
                  </span>
                  <span className="ml-3 text-sm">WhatsApp</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="mailto:contact@nishavbusiness.com"
                  className="flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm">Email Us</span>
                </a>
              </li>
              
              <li>
                <Link 
                  href="/contact"
                  className="flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm">Contact Form</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  href="/book-meeting"
                  className="flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm">Book Meeting</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingContact;