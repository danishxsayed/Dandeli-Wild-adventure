import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: Record<string, any> | Record<string, any>[];
  ogType?: string;
  ogImage?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  schema,
  ogType = "website",
  ogImage,
}: SEOProps) => {
  const location = useLocation();
  const primaryDomain = "https://dandeliwildadventure.com";
  const currentUrl = canonical || `${primaryDomain}${location.pathname === "/" ? "" : location.pathname}`;
  const defaultImage = `${primaryDomain}/assets/hero-dandeli.jpg`;

  useEffect(() => {
    // 1. Title Tag
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Meta Keywords
    if (keywords) {
      let metaKey = document.querySelector('meta[name="keywords"]');
      if (!metaKey) {
        metaKey = document.createElement("meta");
        metaKey.setAttribute("name", "keywords");
        document.head.appendChild(metaKey);
      }
      metaKey.setAttribute("content", keywords);
    } else {
      const metaKey = document.querySelector('meta[name="keywords"]');
      if (metaKey) {
        metaKey.remove();
      }
    }

    // 4. Open Graph Tags
    const ogData: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:url": currentUrl,
      "og:type": ogType,
      "og:image": ogImage || defaultImage,
    };

    Object.entries(ogData).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    // 5. Twitter Card Tags
    const twitterData: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage || defaultImage,
    };

    Object.entries(twitterData).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    // 6. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // 7. JSON-LD Schema Markup
    // Remove any existing dynamic script tag first
    const existingScript = document.getElementById("seo-jsonld");
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.id = "seo-jsonld";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up the JSON-LD script tag on unmount / navigation
      const scriptToClean = document.getElementById("seo-jsonld");
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [title, description, keywords, currentUrl, ogType, ogImage, schema, defaultImage]);

  return null;
};

export default SEO;
