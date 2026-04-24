import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn('w-full h-full', className)}
      />
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500 pointer-events-none',
          loaded ? 'opacity-0' : 'opacity-100'
        )}
      />
    </div>
  );
};

export default LazyImage;
