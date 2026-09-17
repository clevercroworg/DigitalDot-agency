export interface AudienceModeContent {
  id: 'agency' | 'enterprise';
  title: string;
  badge: string;
  headlineHighlight: string;
  message: string[];
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; action: 'modal' | 'scroll'; target?: string };
  highlightMetric: { value: string; label: string };
}

export const AUDIENCE_MODES: Record<'agency' | 'enterprise', AudienceModeContent> = {
  agency: {
    id: 'agency',
    title: 'For Agency Partners (White-Label)',
    badge: 'Confidential Agency Fulfillment',
    headlineHighlight: 'Expand Your Agency Overnight',
    message: [
      '100% Brand Anonymity',
      'Strict Non-Circumvention NDA',
      'Wholesaled Margin Growth',
      'Zero Hiring Overhead'
    ],
    primaryCta: {
      text: 'Book an Agency Partner Call',
      href: '#contact-consultation'
    },
    secondaryCta: {
      text: 'Download Confidential Partner Deck',
      action: 'modal'
    },
    highlightMetric: {
      value: '+38%',
      label: 'Average Net Agency Margin Lift'
    }
  },
  enterprise: {
    id: 'enterprise',
    title: 'For High-Growth Brands & Enterprise',
    badge: 'Direct Performance Engine',
    headlineHighlight: 'Scale Attributable Revenue',
    message: [
      '$1.15M+/Mo Attributable Revenue',
      '5.8× Average ROAS',
      'Server-Side GA4/GTM Tracking',
      'HIPAA & LegitScript Compliant'
    ],
    primaryCta: {
      text: 'Schedule Enterprise Consultation',
      href: '#contact-consultation'
    },
    secondaryCta: {
      text: 'View Direct Case Studies',
      action: 'scroll',
      target: '#case-studies'
    },
    highlightMetric: {
      value: '5.8×',
      label: 'Average Documented ROAS'
    }
  }
};

export const TRUST_BADGES = [
  { label: '100% Brand Anonymity & NDA Protected', icon: 'ShieldCheck' },
  { label: 'Zero Internal Hiring Overhead', icon: 'UsersMinus' },
  { label: '$1.2M+ Monthly Attributable Revenue', icon: 'TrendingUp' }
];

export const DIRECT_CLIENTS = [
  { name: 'Greenhouse Treatment Center', location: 'Dallas, TX', vertical: 'Behavioral Health' },
  { name: 'Yacht Club India', location: 'Mumbai / Goa', vertical: 'Ultra-Luxury Marine' },
  { name: 'Stepping Stone Center for Recovery', location: 'Florida', vertical: 'Addiction Medicine' },
  { name: 'Southeast Addiction Center', location: 'Georgia / Tennessee', vertical: 'Dual-Diagnosis Health' },
  { name: 'Aton Center & Sabino Recovery', location: 'California & Arizona', vertical: 'Executive Treatment' },
  { name: 'Acqua Recovery', location: 'Utah', vertical: 'Residential Healthcare' },
  { name: 'Tranquility Woods', location: 'Maryland', vertical: 'Holistic Behavioral Health' }
];

export const PARTNERSHIP_STEPS = [
  {
    step: '01',
    title: 'Seamless Handoff & Strategic Alignment',
    summary: 'Brief us on your client\'s goals, KPIs, and current funnel bottlenecks. We align on brand guidelines, communication protocols, and white-label reporting formats.',
    purpose: 'Structured onboarding with transparent communication and minimal internal team lift.',
    deliverables: ['Custom Slack / Portal Bridge', 'KPI Benchmark Mapping', 'Wholesale Scope Validation']
  },
  {
    step: '02',
    title: 'Silent Backend Execution',
    summary: 'Certified media buyers and technical SEO specialists execute high-performance campaigns, structured server-side tracking, and continuous optimization behind the scenes.',
    purpose: 'Guarantees 100% brand anonymity while leveraging enterprise execution expertise.',
    deliverables: ['Daily Bid & Budget Sculpting', 'Server-Side CAPI / GA4 Pipeline', 'LegitScript / Ad Policy Navigation']
  },
  {
    step: '03',
    title: 'Branded Scale & Delivery',
    summary: 'Present white-labeled reports, insights, and growth metrics directly to your client under your agency\'s logo, retaining 100% of the client relationship and high profit margins.',
    purpose: 'Delivers white-label SEO and PPC reports under your brand to protect loyalty and boost profit margins.',
    deliverables: ['Whitelabel Looker Studio Dashboards', 'Executive Strategy Decks', 'Client Retention Consulting']
  }
];

export const CORE_PILLARS = [
  {
    id: 'paid-media',
    pillar: 'Pillar 01',
    title: 'Performance Paid Media (Google Ads & Meta Ads)',
    description: 'Full-funnel search, display, and paid social campaigns optimized using smart bidding, negative keyword sculpting, and policy navigation for restricted verticals (LegitScript, HIPAA).',
    metrics: ['Target CPA Reductions', 'Strict Policy Compliance', 'Omnichannel Retargeting'],
    tags: ['Google Search', 'Performance Max', 'Meta Ads', 'LinkedIn Ads']
  },
  {
    id: 'technical-seo-geo',
    pillar: 'Pillar 02',
    title: 'Technical SEO, Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO)',
    description: 'Dominating traditional Google organic search while positioning your brand for direct citations across AI discovery engines, including ChatGPT, Google Gemini, and Perplexity using rich schema and semantic architecture.',
    metrics: ['AI Engine Citation Lift', 'Rich Semantic Graphs', 'Core Web Vitals Pass'],
    tags: ['ChatGPT Discovery', 'Google Gemini', 'Perplexity Citations', 'Schema.org JSON-LD']
  },
  {
    id: 'web-architecture',
    pillar: 'Pillar 03',
    title: 'Sub-Second Conversion Web Architecture & UX Engineering',
    description: 'High-speed, mobile-responsive web applications built on Next.js, React, and WordPress optimized for instantaneous Core Web Vitals, driving down Cost Per Acquisition (CPA) and boosting conversion rates.',
    metrics: ['< 800ms Time-to-Interactive', '+24% Higher Conversion Rate', 'Quality Score Uplift'],
    tags: ['Next.js / React', 'Tailwind CSS', 'Headless CMS', 'High-Converting Funnels']
  },
  {
    id: 'data-attribution',
    pillar: 'Pillar 04',
    title: 'Server-Side Data Attribution & Analytics Stack',
    description: 'End-to-end data pipelines leveraging Server-Side GTM, GA4, Meta Conversions API (CAPI), and dynamic call tracking (CallRail, CTM) synchronized directly to offline CRM revenue.',
    metrics: ['100% First-Party Data Capture', 'Offline Closed-Loop Attribution', 'Zero Signal Loss'],
    tags: ['Server-Side GTM', 'Meta CAPI', 'CallRail Integration', 'GA4 Advanced Modeling']
  }
];

export const CASE_STUDIES = [
  {
    id: 'healthcare-ppc',
    category: 'Direct Enterprise Client',
    vertical: 'Residential Healthcare & PPC Compliance',
    headline: '$1.15M/Month Attributable Revenue with Full HIPAA & LegitScript Compliance',
    metrics: [
      { label: 'Attributable Revenue', value: '$1.15M/mo' },
      { label: 'Documented ROAS', value: '5.8×' },
      { label: 'Monthly Admissions', value: '38+' }
    ],
    quote: 'Scaling patient admissions in residential behavioral health is an operational minefield due to LegitScript restrictions and strict HIPAA compliance rules. DigitalDOT completely re-architected our Google Search, Performance Max, and Meta campaigns from scratch, implementing server-side GA4 tracking and CRM integration for total pipeline transparency.',
    author: 'Executive Director',
    role: 'Residential Behavioral Health Center (Dallas, Texas)',
    badge: 'LegitScript Verified'
  },
  {
    id: 'white-label-agency',
    category: 'White-Label Agency Partner',
    vertical: 'Agency Net Margins & Client Protection',
    headline: '+38% Net Margin Expansion With 100% Brand Anonymity Behind the Scenes',
    metrics: [
      { label: 'Net Margin Lift', value: '+38%' },
      { label: 'Internal Headcount Lift', value: '0' },
      { label: 'Client Retention Rate', value: '96.4%' }
    ],
    quote: 'The biggest risk when scaling an agency is hiring expensive internal media buyers or outsourcing to offshore teams who try to bypass you. DigitalDOT\'s 100% Client Protection Guarantee and strict non-circumvention agreement give us complete peace of mind while operating silently as our backend team.',
    author: 'Founder & Managing Director',
    role: 'Boutique US Digital Marketing Agency',
    badge: '100% Anonymity Under NDA'
  },
  {
    id: 'luxury-yachting',
    category: 'Direct Enterprise Brand',
    vertical: 'High-Ticket Lead Generation & Luxury Marketing',
    headline: '32% Lower CPA for Ultra-High-Net-Worth Yacht Memberships',
    metrics: [
      { label: 'CPA Reduction', value: '-32%' },
      { label: 'Blended ROAS', value: '3.8×' },
      { label: 'vs Industry Benchmark', value: '4.2×' }
    ],
    quote: 'Reaching High-Net-Worth Individuals for high-ticket yacht memberships requires surgical audience targeting and elite creative strategy. DigitalDOT integrated our media campaigns directly with our back-end CRM through offline conversion tracking, lowering CPA by 32%.',
    author: 'Managing Director',
    role: 'Luxury Marine & Yacht Charter Group (Mumbai / Goa)',
    badge: 'Ultra-Luxury Tier'
  }
];

export const CAPABILITIES = [
  {
    title: 'Paid Advertising & Performance Marketing (PPC)',
    description: 'Precision bidding engines across Google Search, Performance Max, Meta Ads, and LinkedIn Ads built for high conversion volume and strict ROAS accountability.',
    deliverables: ['Account Architecture & Auditing', 'Negative Keyword Sculpting', 'Ad Creative Iteration & Testing', 'Bid Strategy & Smart Bidding Tuning']
  },
  {
    title: 'Technical SEO & AI Search (GEO / AEO)',
    description: 'Comprehensive technical crawl optimization combined with entity-based schema architecture so that ChatGPT, Google Gemini, and Perplexity cite and recommend your brand.',
    deliverables: ['Schema.org Knowledge Graph Injection', 'Answer Engine Optimization (AEO)', 'Core Web Vitals Engineering', 'Programmatic Authority Silos']
  },
  {
    title: 'Web Design & Application Development',
    description: 'Bespoke React, Next.js, and modern headless web platforms built for sub-second page loads, intuitive mobile conversion pathways, and seamless CRM integrations.',
    deliverables: ['Frictionless CRO Wireframes', 'Sub-800ms Page Speed Guarantee', 'Accessible UI Component Systems', 'API & CRM Data Pipes']
  },
  {
    title: 'Conversion Rate Optimization (CRO) & Analytics',
    description: 'Server-side data hygiene that eliminates signal loss caused by browser blockers and privacy changes, piping verified offline revenue back into advertising algorithms.',
    deliverables: ['Server-Side Google Tag Manager', 'Meta Conversions API (CAPI)', 'Dynamic Call Tracking (CallRail/CTM)', 'Funnel Drop-off Diagnostic']
  },
  {
    title: 'White-Label Agency Fulfillment',
    description: 'Complete confidential backend delivery under your agency brand, protected by legally binding non-circumvention agreements and whitelabel client reporting.',
    deliverables: ['Strict Mutual Non-Circumvention NDA', 'Whitelabel Client Strategy Decks', 'Unbranded Slack/Email Support', 'Wholesale Margin Pricing Tiers']
  }
];

export const FAQS = [
  {
    question: 'How does white-label partnership execution work with DigitalDOT?',
    answer: 'We operate 100% silently behind the scenes under a strict NDA and non-circumvention agreement. You retain full client ownership, while our team delivers technical SEO, PPC, and web development under your agency brand.'
  },
  {
    question: 'What are Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO)?',
    answer: 'GEO and AEO optimize your digital assets so that AI search platforms (ChatGPT, Gemini, Perplexity) cite, recommend, and surface your business when prospective clients ask complex, conversational queries.'
  },
  {
    question: 'How does conversion-focused web development lower customer acquisition costs (CPA)?',
    answer: 'Delivering sub-second load times, intuitive mobile UX, and frictionless conversion paths improves Google Ads Quality Scores and conversion rates, directly lowering cost per lead and cost per acquisition.'
  },
  {
    question: 'How do you guarantee agency brand protection and non-circumvention?',
    answer: 'Every partnership is secured by a legally binding Non-Disclosure Agreement (NDA) and 100% Non-Circumvention Guarantee. We never contact your clients directly.'
  },
  {
    question: 'Can you manage heavily regulated verticals like healthcare and finance?',
    answer: 'Yes. We specialize in HIPAA-compliant tracking, LegitScript compliance navigation, server-side data masking, and ad policy governance for high-stakes verticals.'
  },
  {
    question: 'How do we get started or access wholesale white-label rates?',
    answer: 'You can download our Confidential Partner Deck & Wholesale Rate Card instantly or schedule an Agency Partner Call.'
  }
];

export const NAV_LINKS = {
  services: [
    { title: 'Digital Marketing', desc: 'Omnichannel growth systems for modern brands' },
    { title: 'PPC (Pay-Per-Click)', desc: 'High-intent search and conversion bidding' },
    { title: 'Meta & Google Ads', desc: 'Enterprise performance and retargeting engines' },
    { title: 'SEO (Search Engine Optimization)', desc: 'Technical SEO and AI Generative Search (GEO)' },
    { title: 'Web Design & Development', desc: 'Sub-second React & Next.js web applications' }
  ],
  work: [
    { title: 'Digital Marketing Case Studies', desc: 'Enterprise ROI & scaling breakdowns' },
    { title: 'Technical SEO Portfolios', desc: 'AI search dominance and organic growth' },
    { title: 'Web Architecture Showcases', desc: 'High-converting custom web builds' }
  ]
};
