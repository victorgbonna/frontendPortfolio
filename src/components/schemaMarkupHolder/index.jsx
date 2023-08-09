import Head from 'next/head';
import Script from 'next/script'


export default function SchemaMarkupHolder({schema, page}){
  const s_schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": "Sample Article Title",
    "description": "Brief description of the article.",
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
    "datePublished": "2023-08-09",
    "image": "http://example.com/article-image.jpg"
  };  
  const ex_schema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "John Doe's Portfolio",
    "description": "A showcase of John Doe's creative projects.",
    "publisher": {
      "@type": "Organization",
      "name": "John Doe Studios"
    },
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
    "image": {
      "@type": "ImageObject",
      "url": "http://example.com/portfolio-image.jpg",
      "width": 1200,
      "height": 630
    },
    "url": "http://example.com/portfolio",
    "mainEntityOfPage": "http://example.com/portfolio",
    "sameAs": [
      "http://twitter.com/johndoe",
      "http://linkedin.com/in/johndoe"
    ]
    // Add additional properties as needed for individual projects, images, etc.
  };
  return (
    // <Head>
      <script id={'schema-for-'+page} type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    // </Head>
  );
};

