import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src?: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  if (!src) {
    return (
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <span className="text-gray-300 text-xs font-medium">Immagine non disponibile</span>
      </div>
    );
  }

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
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-100 animate-pulse pointer-events-none"
        />
      )}
    </div>
  );
};

export default LazyImage;
