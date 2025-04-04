// Nishav Business Solutions utility functions

/**
 * Utility function for smooth scrolling to sections
 */
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/**
 * Utility function for lazy loading images
 */
function setupLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          if (image.dataset.srcset) {
            image.srcset = image.dataset.srcset;
          }
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    let lazyLoadThrottleTimeout;
    
    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }
      
      lazyLoadThrottleTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        
        lazyImages.forEach((img) => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.classList.remove('lazy');
          }
        });
        
        if (lazyImages.length === 0) {
          document.removeEventListener('scroll', lazyLoad);
          window.removeEventListener('resize', lazyLoad);
          window.removeEventListener('orientationChange', lazyLoad);
        }
      }, 20);
    }
    
    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationChange', lazyLoad);
  }
}

/**
 * Initialize all utility functions when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Nishav Business Solutions - Initializing utilities');
  
  // Setup lazy loading for images
  setupLazyLoading();
  
  // Setup smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });
});