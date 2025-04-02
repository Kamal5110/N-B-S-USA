import { lazy, Suspense, useState, useEffect, useRef, ReactNode, memo } from 'react';

// Interfaces for cleaner typing
interface LazyComponentProps {
  [key: string]: any;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  priority?: boolean; // Higher priority loads earlier
  id?: string; // For analytics tracking
}

// Check if IntersectionObserver is available
const hasIntersectionObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;

// Progressive enhancement - if browser supports native lazy loading use it
const supportsNativeLazyLoading = typeof HTMLImageElement !== 'undefined' && 'loading' in HTMLImageElement.prototype;

// Highly optimized loading placeholders with minimal DOM footprint
const MinimalLoadingFallback = memo(({ height = 200 }: { height?: number }) => (
  <div 
    className="bg-gradient-to-b from-gray-50 to-gray-100 animate-pulse" 
    style={{ minHeight: `${height}px` }}
    aria-hidden="true" 
  ></div>
));
MinimalLoadingFallback.displayName = 'MinimalLoadingFallback';

// Adaptive loading placeholder for components with variable sizes
const ComponentLoadingFallback = memo(({ height = 200, type = 'default' }: { height?: number; type?: 'default' | 'card' | 'section' }) => {
  // Different placeholder styles for different component types
  const styles = {
    default: "bg-gradient-to-b from-gray-50 to-gray-100",
    card: "bg-white border border-gray-200 rounded-lg shadow-sm",
    section: "bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
  };

  return (
    <div 
      className={`${styles[type]} animate-pulse`} 
      style={{ minHeight: `${height}px` }}
      aria-hidden="true"
    >
      <div className="p-4 flex items-center justify-center h-full">
        <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
});
ComponentLoadingFallback.displayName = 'ComponentLoadingFallback';

// Advanced LazyLoad wrapper with Intersection Observer and fallbacks
const LazyLoad = memo(({ 
  children, 
  threshold = 0.1, 
  rootMargin = '200px 0px', 
  className = '',
  height = 200,
  priority = false,
  id,
  placeholderType = 'default'
}: { 
  children: ReactNode; 
  threshold?: number; 
  rootMargin?: string; 
  className?: string;
  height?: number;
  priority?: boolean;
  id?: string;
  placeholderType?: 'default' | 'card' | 'section';
}) => {
  // Always show high-priority content immediately
  const [isVisible, setIsVisible] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);
  const hasTriggeredView = useRef(false);

  useEffect(() => {
    // Skip for high priority content
    if (priority) return;

    // Skip for server-side rendering
    if (typeof window === 'undefined') return;

    // If browser doesn't support IntersectionObserver, show the content immediately
    if (!hasIntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only load when element is about to enter viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Track view for analytics if ID is provided and hasn't been tracked yet
          if (id && !hasTriggeredView.current) {
            // Here you would integrate with analytics
            hasTriggeredView.current = true;
          }
          
          // Disconnect once visible to save memory
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observer) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold, priority, id]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ minHeight: isVisible ? 'auto' : `${height}px` }}
      data-observed={isVisible ? 'true' : 'false'}
      id={id}
    >
      {isVisible ? children : <ComponentLoadingFallback height={height} type={placeholderType} />}
    </div>
  );
});
LazyLoad.displayName = 'LazyLoad';

// Prefetching strategy for improved performance
// This is a utility to preload components that are likely to be seen soon
const prefetchComponent = (importFunc: () => Promise<any>) => {
  try {
    // Only prefetch in production and if the browser is idle
    if (process.env.NODE_ENV === 'production' && 'requestIdleCallback' in window) {
      // @ts-ignore - requestIdleCallback may not be recognized
      window.requestIdleCallback(() => {
        importFunc();
      });
    }
  } catch (e) {
    // Silent catch - prefetching is just an optimization
  }
};

// Lazy loaded components with named exports and prefetching hints for Fast Refresh compatibility
const ServicesSection = lazy(() => import('@/components/services/ServicesSection'));
const BlogsSection = lazy(() => import('@/components/blogs/BlogsSection'));
const ClientsSection = lazy(() => import('@/components/clients/ClientsSection'));
const TestimonialCarousel = lazy(() => import('@/components/home/TestimonialCarousel'));
const CertificationsSection = lazy(() => import('@/components/home/CertificationsSection'));

// Start prefetching critical components during idle time
if (typeof window !== 'undefined') {
  setTimeout(() => {
    prefetchComponent(() => import('@/components/services/ServicesSection'));
    prefetchComponent(() => import('@/components/clients/ClientsSection'));
  }, 5000); // Start prefetching after 5 seconds
}

// Enhanced components with both lazy-loading and intersection-observer
export const LazyServicesSection = memo(({ threshold, rootMargin, className, priority, id, ...props }: LazyComponentProps) => (
  <LazyLoad 
    threshold={threshold} 
    rootMargin={rootMargin} 
    className={className} 
    height={300}
    priority={priority}
    id={id || 'services-section'}
    placeholderType="section"
  >
    <Suspense fallback={<ComponentLoadingFallback height={300} type="section" />}>
      <ServicesSection {...props} />
    </Suspense>
  </LazyLoad>
));
LazyServicesSection.displayName = 'LazyServicesSection';

export const LazyBlogsSection = memo(({ threshold, rootMargin, className, priority, id, ...props }: LazyComponentProps) => (
  <LazyLoad 
    threshold={threshold} 
    rootMargin={rootMargin} 
    className={className} 
    height={300}
    priority={priority}
    id={id || 'blogs-section'}
    placeholderType="section"
  >
    <Suspense fallback={<ComponentLoadingFallback height={300} type="section" />}>
      <BlogsSection {...props} />
    </Suspense>
  </LazyLoad>
));
LazyBlogsSection.displayName = 'LazyBlogsSection';

export const LazyClientsSection = memo(({ threshold, rootMargin, className, priority, id, ...props }: LazyComponentProps) => (
  <LazyLoad 
    threshold={threshold} 
    rootMargin={rootMargin} 
    className={className} 
    height={250}
    priority={priority}
    id={id || 'clients-section'}
    placeholderType="section"
  >
    <Suspense fallback={<ComponentLoadingFallback height={250} type="section" />}>
      <ClientsSection {...props} />
    </Suspense>
  </LazyLoad>
));
LazyClientsSection.displayName = 'LazyClientsSection';

export const LazyTestimonialCarousel = memo(({ threshold, rootMargin, className, testimonials, priority, id, ...props }: LazyComponentProps & { testimonials: any[] }) => (
  <LazyLoad 
    threshold={threshold} 
    rootMargin={rootMargin} 
    className={className} 
    height={300}
    priority={priority}
    id={id || 'testimonial-carousel'}
    placeholderType="section"
  >
    <Suspense fallback={<ComponentLoadingFallback height={300} type="section" />}>
      <TestimonialCarousel testimonials={testimonials} {...props} />
    </Suspense>
  </LazyLoad>
));
LazyTestimonialCarousel.displayName = 'LazyTestimonialCarousel';

export const LazyCertificationsSection = memo(({ threshold, rootMargin, className, priority, id, ...props }: LazyComponentProps) => (
  <LazyLoad 
    threshold={threshold} 
    rootMargin={rootMargin} 
    className={className} 
    height={250}
    priority={priority}
    id={id || 'certifications-section'}
    placeholderType="section"
  >
    <Suspense fallback={<ComponentLoadingFallback height={250} type="section" />}>
      <CertificationsSection {...props} />
    </Suspense>
  </LazyLoad>
));
LazyCertificationsSection.displayName = 'LazyCertificationsSection';