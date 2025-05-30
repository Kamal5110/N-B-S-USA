import { useState, useEffect, memo, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { assetPath } from '@/config';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loadingClassName?: string;
  width?: number;
  height?: number;
  webpSrc?: string; // Explicit WebP version of the image
  avifSrc?: string; // Explicit AVIF version of the image
  sizes?: string; // Responsive sizes attribute
  disableAutoWebp?: boolean; // Option to disable automatic WebP generation
}

// Helper to get webp version of an image URL
const getWebpUrl = (url: string): string => {
  // Skip already webp images
  if (url.endsWith('.webp')) return url;
  
  // Skip SVGs
  if (url.endsWith('.svg')) return url;
  
  // Skip URLs with query parameters
  if (url.includes('?')) return url;
  
  // Skip data URLs
  if (url.startsWith('data:')) return url;
  
  // Skip external URLs
  if (url.startsWith('http') && !url.includes(window.location.hostname)) return url;
  
  // Only convert local JPG, PNG, GIF images
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const hasValidExt = validExtensions.some(ext => url.toLowerCase().endsWith(ext));
  
  if (!hasValidExt) return url;
  
  // Extract path and extension
  const lastDotIndex = url.lastIndexOf('.');
  if (lastDotIndex === -1) return url;
  
  const basePath = url.substring(0, lastDotIndex);
  return `${basePath}.webp`;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/images/placeholder.svg',
  className,
  loadingClassName,
  width,
  height,
  loading,
  webpSrc: explicitWebpSrc,
  avifSrc,
  sizes = '100vw',
  disableAutoWebp = false,
  // Remove fetchPriority from props destructuring to avoid React warnings
  ...props
}) => {
  // Process paths with assetPath helper for GitHub Pages compatibility
  const processedSrc = src.startsWith('http') ? src : assetPath(src);
  const processedFallbackSrc = fallbackSrc.startsWith('http') ? fallbackSrc : assetPath(fallbackSrc);
  const processedWebpSrc = explicitWebpSrc && !explicitWebpSrc.startsWith('http') ? assetPath(explicitWebpSrc) : explicitWebpSrc;
  const processedAvifSrc = avifSrc && !avifSrc.startsWith('http') ? assetPath(avifSrc) : avifSrc;
  
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(processedSrc);
  
  // Auto-generate WebP URL if not explicitly provided
  const webpSrc = useMemo(() => {
    if (processedWebpSrc) return processedWebpSrc;
    if (disableAutoWebp) return undefined;
    
    // For auto-generated WebP, we need to apply the assetPath after generating the WebP URL
    const webpUrl = getWebpUrl(src);
    return webpUrl.startsWith('http') ? webpUrl : assetPath(webpUrl);
  }, [src, processedWebpSrc, disableAutoWebp]);

  // Enhance alt text with keywords for SEO if not already present
  const enhancedAlt = useMemo(() => {
    const lowerAlt = alt.toLowerCase();
    return (lowerAlt.includes('accounting') || 
           lowerAlt.includes('bookkeeping') || 
           lowerAlt.includes('cpa') || 
           lowerAlt.includes('nishav'))
      ? alt
      : `${alt} - Nishav Business Solutions offshore accounting`;
  }, [alt]);

  useEffect(() => {
    // Reset states when src changes
    setLoaded(false);
    setError(false);
    setCurrentSrc(processedSrc);
  }, [processedSrc]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    console.log(`Image loading error: ${currentSrc}`);
    
    // If we're already on the fallback path, mark as error and don't try again
    if (currentSrc === processedFallbackSrc) {
      setError(true);
      return;
    }
    
    // Try direct path (with leading slash) if the relative path failed
    if (currentSrc === processedSrc && !currentSrc.startsWith('http')) {
      const directSrc = '/images/' + src.split('/').pop();
      console.log(`Trying direct path: ${directSrc}`);
      setCurrentSrc(directSrc);
      return;
    }
    
    // Final fallback to placeholder
    setError(true);
    if (processedFallbackSrc) {
      console.log(`Falling back to: ${processedFallbackSrc}`);
      setCurrentSrc(processedFallbackSrc);
    }
  };

  // Determine if this is a critical image (above the fold) or not
  const isAboveTheFold = !loading || loading === 'eager';
  const loadingStrategy = isAboveTheFold ? 'eager' : 'lazy';
  
  // Generate a proper size string for srcset if dimensions are provided
  const sizeAttr = width && height ? { width, height } : {};
  
  // Simplified placeholder for non-critical images
  const simplePlaceholder = !isAboveTheFold && !loaded;
  
  // Determine if we should use picture element with multiple formats
  const hasPictureFormats = webpSrc || processedAvifSrc;
  
  return (
    <div 
      className={cn(
        "relative inline-block overflow-hidden",
        !loaded && loadingClassName
      )}
      style={{ 
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto'
      }}
    >
      {simplePlaceholder ? (
        <div className="absolute inset-0 bg-gray-100"></div>
      ) : !loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="w-8 h-1 bg-gray-200"></div>
        </div>
      )}
      
      {hasPictureFormats ? (
        <picture>
          {/* AVIF format - best compression/quality ratio but less support */}
          {processedAvifSrc && <source type="image/avif" srcSet={processedAvifSrc} sizes={sizes} />}
          
          {/* WebP format - good compression/quality with better support */}
          {webpSrc && <source type="image/webp" srcSet={webpSrc} sizes={sizes} />}
          
          {/* Original format as fallback */}
          <img
            src={currentSrc}
            alt={enhancedAlt}
            loading={loading || loadingStrategy}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              className,
              'transition-opacity duration-300',
              loaded ? 'opacity-100' : 'opacity-0',
              error && 'filter grayscale'
            )}
            sizes={sizes}
            {...sizeAttr}
            {...props}
          />
        </picture>
      ) : (
        <img
          src={currentSrc}
          alt={enhancedAlt}
          loading={loading || loadingStrategy}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            className,
            'transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            error && 'filter grayscale'
          )}
          sizes={sizes}
          {...sizeAttr}
          {...props}
        />
      )}
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(OptimizedImage);