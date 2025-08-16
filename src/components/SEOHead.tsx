import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  noindex = false,
  ogImage = 'https://jxingtech.my/og-image.png',
  structuredData 
}: SEOHeadProps) => {
  const location = useLocation();
  const fullCanonical = canonical || `https://jxingtech.my${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical_link) {
      canonical_link.setAttribute('href', fullCanonical);
    } else {
      canonical_link = document.createElement('link');
      canonical_link.rel = 'canonical';
      canonical_link.href = fullCanonical;
      document.head.appendChild(canonical_link);
    }

    // Set robots meta
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = noindex ? 'noindex, nofollow' : 'index, follow';
      document.head.appendChild(meta);
    }

    // Set Open Graph meta tags
    const updateOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:url', fullCanonical);
    updateOGMeta('og:image', ogImage);
    updateOGMeta('og:type', 'website');
    updateOGMeta('og:site_name', 'JXING Tech Group');

    // Set Twitter Card meta tags
    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', ogImage);

    // Set structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, fullCanonical, noindex, ogImage, structuredData]);

  return null;
};

export default SEOHead;