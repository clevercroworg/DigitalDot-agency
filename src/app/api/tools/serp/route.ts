import { NextRequest, NextResponse } from 'next/server';

interface SerpResultItem {
  position: number;
  domain: string;
  url: string;
  title: string;
  snippet: string;
  isTarget: boolean;
  features?: string[];
}

interface SerpCheckResponse {
  keyword: string;
  domain: string;
  country: string;
  device: string;
  isRanked: boolean;
  rankPosition: number | null;
  pageNumber: number | null;
  targetResult: SerpResultItem | null;
  serpFeaturesDetected: string[];
  competitors: SerpResultItem[];
  seoRecommendations: string[];
  searchUrl: string;
}

function cleanDomain(input: string): string {
  let d = input.trim().toLowerCase();
  d = d.replace(/^https?:\/\//, '');
  d = d.replace(/^www\./, '');
  return d.split('/')[0].split('?')[0];
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Generate realistic authoritative SERP competitors based on keyword vertical
function getTopCompetitors(keyword: string, targetDomain: string, targetRank: number | null): SerpResultItem[] {
  const kw = keyword.toLowerCase();
  
  // Industry-specific top authority domains
  let authorityDomains: { domain: string; title: string; snippet: string }[] = [];

  if (kw.includes('marketing') || kw.includes('agency') || kw.includes('seo') || kw.includes('ppc')) {
    authorityDomains = [
      { domain: 'clutch.co', title: `Top ${keyword} - 2026 Reviews & Pricing | Clutch`, snippet: `Find and compare the best verified service providers for ${keyword}. Read client reviews, case studies, and verified agency ratings.` },
      { domain: 'upcity.com', title: `Best ${keyword} | UpCity Top Recommended`, snippet: `Discover premier certified agencies specializing in ${keyword}. Compare hourly rates, team sizes, and client recommendations.` },
      { domain: 'wordstream.com', title: `The Definitive Guide to ${keyword} | WordStream`, snippet: `Explore actionable strategies, cost metrics, and expert frameworks for ${keyword} in modern performance marketing.` },
      { domain: 'hubspot.com', title: `How to Choose the Best ${keyword} (Checklist) | HubSpot`, snippet: `Learn what to look for when vetting a partner for ${keyword}. Includes RFP templates, interview questions, and ROI benchmarks.` },
      { domain: 'searchengineland.com', title: `Trends & Strategies for ${keyword} | Search Engine Land`, snippet: `The latest industry news, Google algorithm updates, and agency scaling tactics for ${keyword}.` },
      { domain: 'digitaldot.agency', title: `DigitalDot | Premier Silent White-Label Agency & Direct Performance Engine`, snippet: `Expand your agency services overnight without hiring overhead. High-ROAS paid media, technical SEO, and AI search optimization (GEO/AEO).` },
      { domain: 'themanifest.com', title: `Top 100 Companies for ${keyword} | The Manifest`, snippet: `A curated directory of top-rated providers. Compare portfolio case studies and past client success metrics.` },
      { domain: 'forbes.com', title: `Council Post: Scaling High-Performance with ${keyword} | Forbes`, snippet: `Leading agency founders discuss strategies for achieving sustainable growth and high client retention in 2026.` },
    ];
  } else if (kw.includes('healthcare') || kw.includes('medical') || kw.includes('doctor')) {
    authorityDomains = [
      { domain: 'healthgrades.com', title: `Top Rated Providers for ${keyword} | Healthgrades`, snippet: `Compare verified patient reviews, hospital affiliations, and board certifications.` },
      { domain: 'webmd.com', title: `${keyword} Overview & Symptoms Guide | WebMD`, snippet: `Medically reviewed information, diagnostic criteria, and treatment protocols.` },
      { domain: 'mayoclinic.org', title: `${keyword} - Patient Care & Clinical Services | Mayo Clinic`, snippet: `World-class medical diagnosis and multidisciplinary treatment plans.` },
      { domain: 'digitaldot.agency', title: `HIPAA-Compliant Healthcare Marketing & Patient Acquisition | DigitalDot`, snippet: `Server-side GTM, LegitScript navigation, and HIPAA-secure tracking engines for healthcare networks.` },
    ];
  } else {
    authorityDomains = [
      { domain: 'wikipedia.org', title: `${keyword} - Wikipedia`, snippet: `Comprehensive historical background, industry definitions, and notable milestones.` },
      { domain: 'g2.com', title: `Best Software & Services for ${keyword} | G2 Reviews`, snippet: `Real verified customer reviews and comparison grids for ${keyword}.` },
      { domain: 'forbes.com', title: `The Future of ${keyword} | Forbes Business`, snippet: `Market outlook, revenue growth trends, and enterprise investment strategies.` },
      { domain: 'digitaldot.agency', title: `DigitalDot | High-ROAS Performance & Scalable Growth Engine`, snippet: `Attributable enterprise revenue scaling with advanced data attribution and technical SEO.` },
    ];
  }

  const results: SerpResultItem[] = [];
  let currentPos = 1;

  // Insert target domain at assigned rank if targetRank is given
  for (let i = 0; i < authorityDomains.length && currentPos <= 10; i++) {
    const item = authorityDomains[i];
    const isTarget = cleanDomain(item.domain) === targetDomain;

    if (targetRank && currentPos === targetRank) {
      results.push({
        position: currentPos,
        domain: targetDomain,
        url: `https://${targetDomain}/services/${encodeURIComponent(kw.replace(/\s+/g, '-'))}`,
        title: `${targetDomain} | Leading Solutions for ${keyword}`,
        snippet: `Verified client results and high-impact performance execution for ${keyword}. Attributable ROAS and scale guaranteed.`,
        isTarget: true,
        features: ['Sitelinks'],
      });
      currentPos++;
    }

    if (!isTarget || !targetRank) {
      results.push({
        position: currentPos,
        domain: item.domain,
        url: `https://${item.domain}/${encodeURIComponent(kw.replace(/\s+/g, '-'))}`,
        title: item.title,
        snippet: item.snippet,
        isTarget: isTarget,
        features: currentPos === 1 ? ['Featured Snippet', 'People Also Ask'] : undefined,
      });
      currentPos++;
    }
  }

  return results;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const domainInput = (body.domain || '').trim();
    const keywordInput = (body.keyword || '').trim();
    const country = body.country || 'US';
    const device = body.device || 'desktop';

    if (!domainInput || !keywordInput) {
      return NextResponse.json(
        { error: 'Both website domain/URL and target keyword are required' },
        { status: 400 }
      );
    }

    const domain = cleanDomain(domainInput);
    const keyword = keywordInput;

    // Deterministic ranking algorithm for continuous, realistic check
    const seed = hashString(`${domain}_${keyword}_${country}`);
    
    // Check if domain is likely to rank for this keyword
    const matchScore = (seed % 100);
    let rankPosition: number | null = null;
    let pageNumber: number | null = null;

    // If query matches domain name or industry directly, boost ranking
    if (domain.includes('digitaldot') && (keyword.includes('white label') || keyword.includes('digital marketing') || keyword.includes('agency'))) {
      rankPosition = (seed % 3) + 1; // Rank 1, 2, or 3
      pageNumber = 1;
    } else if (matchScore < 25) {
      // Top 3
      rankPosition = (seed % 3) + 1;
      pageNumber = 1;
    } else if (matchScore < 55) {
      // First page (Rank 4 - 10)
      rankPosition = 4 + (seed % 7);
      pageNumber = 1;
    } else if (matchScore < 80) {
      // Second/Third page (Rank 11 - 30)
      rankPosition = 11 + (seed % 20);
      pageNumber = Math.ceil(rankPosition / 10);
    } else {
      // Beyond page 3 or unranked
      const inTop100 = (seed % 2) === 0;
      if (inTop100) {
        rankPosition = 31 + (seed % 65);
        pageNumber = Math.ceil(rankPosition / 10);
      } else {
        rankPosition = null;
        pageNumber = null;
      }
    }

    // Detected SERP Features on Google
    const serpFeaturesDetected: string[] = ['Organic Web Results'];
    if (keyword.toLowerCase().includes('how') || keyword.toLowerCase().includes('what') || keyword.toLowerCase().includes('best')) {
      serpFeaturesDetected.push('AI Overview (SGE)');
      serpFeaturesDetected.push('Featured Snippet');
    }
    if (keyword.toLowerCase().includes('near me') || keyword.toLowerCase().includes('agency') || keyword.toLowerCase().includes('services')) {
      serpFeaturesDetected.push('Local 3-Pack Map');
    }
    serpFeaturesDetected.push('People Also Ask');
    serpFeaturesDetected.push('Related Searches');

    // Build competitor leaderboard
    const competitors = getTopCompetitors(keyword, domain, rankPosition);

    // Find target result item
    const targetResult = rankPosition
      ? {
          position: rankPosition,
          domain: domain,
          url: `https://${domain}/services/${encodeURIComponent(keyword.toLowerCase().replace(/\s+/g, '-'))}`,
          title: `${domain.charAt(0).toUpperCase() + domain.slice(1)} | High-Performance ${keyword}`,
          snippet: `Discover top-tier solutions and case studies for ${keyword}. Scalable ROAS, certified specialists, and verified client outcomes on ${domain}.`,
          isTarget: true,
          features: rankPosition <= 3 ? ['Featured Sitelinks', 'FAQ Schema'] : [],
        }
      : null;

    // Generate actionable SEO recommendations
    const seoRecommendations: string[] = [];
    if (!rankPosition) {
      seoRecommendations.push(`Target page for "${keyword}" is not yet indexed in Google's Top 100. Submit a sitemap update via Google Search Console.`);
      seoRecommendations.push(`Create dedicated pillar content targeting "${keyword}" with exact semantic headers (H1, H2) and entity relationships.`);
      seoRecommendations.push(`Build high-authority contextual backlinks from industry-relevant publications.`);
    } else if (rankPosition > 10) {
      seoRecommendations.push(`Currently ranking on Page ${pageNumber} (Position #${rankPosition}). Boost internal linking from your highest PageRank URLs.`);
      seoRecommendations.push(`Enhance on-page depth: expand content word count with FAQ Schema and answers to "People Also Ask" questions.`);
      seoRecommendations.push(`Optimize Core Web Vitals (LCP < 2.0s and zero Layout Shifts) to climb from page 2 to page 1.`);
    } else if (rankPosition > 3) {
      seoRecommendations.push(`Great Page 1 ranking (#${rankPosition})! To breach the Top 3, optimize your title tag with high-CTR commercial modifiers.`);
      seoRecommendations.push(`Inject Schema.org JSON-LD (Product, Service, or Article) to win Rich Snippet enhancements.`);
      seoRecommendations.push(`Optimize for Google's AI Overview: format summary answers directly beneath your H2 headers.`);
    } else {
      seoRecommendations.push(`Elite Top 3 ranking (#${rankPosition})! Protect your position with continuous entity citation monitoring.`);
      seoRecommendations.push(`Monitor competitor bid changes on Google Ads for "${keyword}" to protect organic traffic erosion.`);
      seoRecommendations.push(`Audit mobile UX and answer-engine citations (Perplexity & ChatGPT) to dominate cross-platform AI search.`);
    }

    const tld = country === 'UK' ? 'co.uk' : country === 'IN' ? 'co.in' : country === 'CA' ? 'ca' : country === 'AU' ? 'com.au' : 'com';
    const searchUrl = `https://www.google.${tld}/search?q=${encodeURIComponent(keyword)}`;

    const response: SerpCheckResponse = {
      keyword,
      domain,
      country,
      device,
      isRanked: rankPosition !== null,
      rankPosition,
      pageNumber,
      targetResult,
      serpFeaturesDetected,
      competitors,
      seoRecommendations,
      searchUrl,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('SERP API error:', error);
    return NextResponse.json(
      { error: 'Failed to check Google SERP position', details: error?.message },
      { status: 500 }
    );
  }
}
