interface ImageOptions {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
}

export function optimizeImage(url: string | null | undefined, options: ImageOptions = {}): string {
  if (!url) return '';

  const { width = 800, quality = 80, format = 'auto' } = options;

  // Only apply Cloudflare image optimization for absolute URLs on our domain or Supabase storage
  const isOptimizable =
    url.startsWith('https://') || url.startsWith('http://');

  if (!isOptimizable) return url;

  const params = [`w=${width}`, `q=${quality}`, `f=${format}`].join(',');
  return `/cdn-cgi/image/${params}/${url}`;
}
