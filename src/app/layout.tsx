import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DigitalDot | Silent White-Label Agency & Direct Performance Engine',
  description: 'Expand your agency services overnight without hiring overhead, or scale your enterprise brand with high-ROAS paid media, technical SEO, and AI search optimization (GEO/AEO).',
  keywords: [
    'white-label digital marketing',
    'white-label SEO',
    'white-label PPC',
    'Generative Engine Optimization',
    'GEO',
    'AEO',
    'HIPAA compliant marketing',
    'LegitScript PPC'
  ],
  authors: [{ name: 'DigitalDot Agency' }],
  metadataBase: new URL('https://digitaldot.agency'),
  openGraph: {
    type: 'website',
    url: 'https://digitaldot.agency/',
    title: 'DigitalDot | Silent White-Label Agency & Direct Performance Engine',
    description: '100% Brand Anonymity, strict NDA non-circumvention guarantee, and $1.15M+/mo attributable revenue performance.',
    siteName: 'DigitalDot',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233B82F6'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='4' fill='%230B0F17'/></svg>",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://digitaldot.agency/#organization",
      "name": "DigitalDot",
      "url": "https://digitaldot.agency",
      "logo": "https://digitaldot.agency/logo.png",
      "description": "The silent white-label growth engine for digital marketing agencies and premier performance marketing agency for enterprise brands.",
      "sameAs": [
        "https://www.linkedin.com/company/digitaldot"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://digitaldot.agency/#service",
      "name": "DigitalDot White-Label & Performance Marketing Services",
      "provider": {
        "@id": "https://digitaldot.agency/#organization"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing & White-Label Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Paid Media Management (Google & Meta Ads)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO & AI Search Optimization (GEO / AEO)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion-Driven Web Design & Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "100% Confidential White-Label Agency Fulfillment"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "48",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitaldot.agency/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does white-label partnership execution work with DigitalDOT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We operate 100% silently behind the scenes under a strict NDA and non-circumvention agreement. You retain full client ownership, while our team delivers technical SEO, PPC, and web development under your agency brand."
          }
        },
        {
          "@type": "Question",
          "name": "What are Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO and AEO optimize your digital assets so that AI search platforms (ChatGPT, Gemini, Perplexity) cite, recommend, and surface your business when prospective clients ask complex, conversational queries."
          }
        },
        {
          "@type": "Question",
          "name": "How does conversion-focused web development lower customer acquisition costs (CPA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delivering sub-second load times, intuitive mobile UX, and frictionless conversion paths improves Google Ads Quality Scores and conversion rates, directly lowering cost per lead and cost per acquisition."
          }
        },
        {
          "@type": "Question",
          "name": "How do you guarantee agency brand protection and non-circumvention?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every partnership is secured by a legally binding Non-Disclosure Agreement (NDA) and 100% Non-Circumvention Guarantee. We never contact your clients directly."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage heavily regulated verticals like healthcare and finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialize in HIPAA-compliant tracking, LegitScript compliance navigation, server-side data masking, and ad policy governance for high-stakes verticals."
          }
        },
        {
          "@type": "Question",
          "name": "How do we get started or access wholesale white-label rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can download our Confidential Partner Deck & Wholesale Rate Card instantly or schedule an Agency Partner Call."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Typography: Syne, Plus Jakarta Sans, Inter, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preload hero image for fast LCP */}
        <link rel="preload" as="image" href="/images/dashboard-preview.jpg" fetchPriority="high" />

        {/* Section 10 Schema.org JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FBFBFC] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
