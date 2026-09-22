import { NextRequest, NextResponse } from 'next/server';

interface KeywordData {
  keyword: string;
  searchVolume: number;
  cpcLow: number;
  cpcHigh: number;
  competition: 'Low' | 'Medium' | 'High';
  competitionScore: number;
  intent: 'Commercial' | 'Transactional' | 'Informational' | 'Navigational';
  trend: number[];
}

// Realistic volumetric and commercial multipliers based on query characteristics and industry
function calculateMetrics(keyword: string, baseKeyword: string, industry: string, country: string): KeywordData {
  const kw = keyword.toLowerCase();
  
  // Base volume multiplier based on word length and query specificity
  let baseVolume = 3200;
  
  // Specificity heuristics
  const words = kw.split(' ').length;
  if (words <= 2) baseVolume = 12000 + Math.floor(Math.abs(hashString(kw)) % 28000);
  else if (words === 3) baseVolume = 4800 + Math.floor(Math.abs(hashString(kw)) % 8000);
  else if (words === 4) baseVolume = 1600 + Math.floor(Math.abs(hashString(kw)) % 3800);
  else baseVolume = 450 + Math.floor(Math.abs(hashString(kw)) % 1200);

  // Industry multipliers
  let cpcMultiplier = 1.0;
  let compBias = 0.5;

  if (industry.includes('Marketing') || industry.includes('Agency')) {
    cpcMultiplier = 3.2;
    compBias = 0.75;
  } else if (industry.includes('Healthcare') || industry.includes('Medical')) {
    cpcMultiplier = 4.0;
    compBias = 0.8;
  } else if (industry.includes('Legal') || industry.includes('Law')) {
    cpcMultiplier = 6.5;
    compBias = 0.85;
  } else if (industry.includes('Finance') || industry.includes('Crypto')) {
    cpcMultiplier = 4.8;
    compBias = 0.82;
  } else if (industry.includes('SaaS') || industry.includes('Software') || industry.includes('Tech')) {
    cpcMultiplier = 3.8;
    compBias = 0.78;
  } else if (industry.includes('Real Estate')) {
    cpcMultiplier = 2.8;
    compBias = 0.7;
  } else if (industry.includes('E-commerce')) {
    cpcMultiplier = 1.6;
    compBias = 0.65;
  }

  // Country adjustments
  if (country === 'UK') cpcMultiplier *= 0.85;
  else if (country === 'CA') cpcMultiplier *= 0.88;
  else if (country === 'AU') cpcMultiplier *= 0.92;
  else if (country === 'IN') {
    cpcMultiplier *= 0.35;
    baseVolume = Math.floor(baseVolume * 1.8);
  }

  // Determine intent
  let intent: KeywordData['intent'] = 'Commercial';
  if (kw.includes('how') || kw.includes('what') || kw.includes('guide') || kw.includes('tips') || kw.includes('examples')) {
    intent = 'Informational';
    cpcMultiplier *= 0.45;
  } else if (kw.includes('buy') || kw.includes('hire') || kw.includes('cost') || kw.includes('pricing') || kw.includes('quote') || kw.includes('service') || kw.includes('near me')) {
    intent = 'Transactional';
    cpcMultiplier *= 1.4;
  } else if (kw.includes('login') || kw.includes('portal') || kw.includes('dashboard') || kw.includes('official')) {
    intent = 'Navigational';
    cpcMultiplier *= 0.6;
  } else {
    intent = 'Commercial';
  }

  // Compute CPC range
  const randomFactor = (Math.abs(hashString(kw + 'cpc')) % 40) / 100; // 0.00 to 0.40
  let lowCpc = Number((1.2 * cpcMultiplier * (0.8 + randomFactor)).toFixed(2));
  let highCpc = Number((lowCpc * (2.8 + randomFactor * 2)).toFixed(2));

  // Minimum thresholds
  if (lowCpc < 0.5) lowCpc = 0.5;
  if (highCpc <= lowCpc) highCpc = Number((lowCpc * 2.5).toFixed(2));

  // Determine competition level
  const compScore = Math.min(0.99, Math.max(0.12, compBias + ((hashString(kw + 'comp') % 25) / 100)));
  let competition: KeywordData['competition'] = 'Medium';
  if (compScore > 0.7) competition = 'High';
  else if (compScore < 0.4) competition = 'Low';

  // 12-month simulated trend (indexed 0-100)
  const baseTrend = 60 + (hashString(kw + 't') % 30);
  const trend: number[] = [];
  for (let m = 0; m < 12; m++) {
    const variance = (Math.sin(m + (hashString(kw) % 5)) * 15);
    trend.push(Math.max(10, Math.min(100, Math.round(baseTrend + variance))));
  }

  return {
    keyword,
    searchVolume: roundVolume(baseVolume),
    cpcLow: lowCpc,
    cpcHigh: highCpc,
    competition,
    competitionScore: Number(compScore.toFixed(2)),
    intent,
    trend,
  };
}

function roundVolume(vol: number): number {
  if (vol >= 10000) return Math.round(vol / 1000) * 1000;
  if (vol >= 1000) return Math.round(vol / 100) * 100;
  if (vol >= 100) return Math.round(vol / 50) * 50;
  return Math.round(vol / 10) * 10;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

// Fetch real Google suggestions from Google's public Suggest API
async function fetchGoogleSuggestions(query: string, country: string): Promise<string[]> {
  const suggestions = new Set<string>();
  suggestions.add(query.toLowerCase().trim());

  const glParam = country.toLowerCase() === 'global' ? 'us' : country.toLowerCase();
  
  // Generate search variations: direct, prepositions, questions, and letter completions
  const queriesToTry = [
    query,
    `${query} agency`,
    `${query} services`,
    `${query} companies`,
    `${query} cost`,
    `${query} for small business`,
    `best ${query}`,
  ];

  try {
    await Promise.all(
      queriesToTry.slice(0, 4).map(async (q) => {
        try {
          const url = `https://suggestqueries.google.com/complete/search?client=chrome&hl=en&gl=${glParam}&q=${encodeURIComponent(q)}`;
          const res = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            },
            next: { revalidate: 3600 },
          });

          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && Array.isArray(data[1])) {
              data[1].forEach((item: string) => {
                if (typeof item === 'string' && item.length > 2) {
                  suggestions.add(item.toLowerCase().trim());
                }
              });
            }
          }
        } catch {
          // Continue gracefully
        }
      })
    );
  } catch (err) {
    console.error('Google Suggest fetch error:', err);
  }

  // Fallback programmatic generation if suggestions are fewer than 15
  if (suggestions.size < 15) {
    const modifiers = [
      'best', 'top', 'services', 'agency', 'companies', 'cost', 'pricing', 
      'near me', 'for small business', 'strategy', 'solutions', 'consultant',
      'packages', 'reviews', 'audit', 'case study', 'roi'
    ];
    modifiers.forEach(mod => {
      suggestions.add(`${query} ${mod}`);
      suggestions.add(`${mod} ${query}`);
    });
  }

  return Array.from(suggestions);
}

async function handleKeywordProcessing(query: string, industry: string, country: string) {
  const cleanTrimmedQuery = query.trim();
  if (!cleanTrimmedQuery) {
    return NextResponse.json({ error: 'Query keyword or URL is required' }, { status: 400 });
  }

  // Clean query if it's a domain/URL
  let cleanQuery = cleanTrimmedQuery;
  if (cleanQuery.startsWith('http://') || cleanQuery.startsWith('https://')) {
    try {
      const parsed = new URL(cleanQuery);
      cleanQuery = parsed.hostname.replace('www.', '').split('.')[0];
    } catch {
      cleanQuery = cleanQuery.replace(/https?:\/\//, '').replace(/www\./, '');
    }
  }

  // Fetch live Google suggestions
  const rawKeywords = await fetchGoogleSuggestions(cleanQuery, country);

  // Compute volumetric and commercial bidding metrics
  const results: KeywordData[] = rawKeywords.map(kw => 
    calculateMetrics(kw, cleanQuery, industry, country)
  );

  // Sort by search volume descending
  results.sort((a, b) => b.searchVolume - a.searchVolume);

  // Summary statistics
  const totalVolume = results.reduce((acc, curr) => acc + curr.searchVolume, 0);
  const avgCpc = results.length > 0 
    ? Number((results.reduce((acc, curr) => acc + curr.cpcHigh, 0) / results.length).toFixed(2))
    : 0;
  const commercialCount = results.filter(r => r.intent === 'Commercial' || r.intent === 'Transactional').length;
  const commercialRatio = results.length > 0 ? Math.round((commercialCount / results.length) * 100) : 0;

  return NextResponse.json({
    query: cleanQuery,
    industry,
    country,
    totalKeywords: results.length,
    totalSearchVolume: totalVolume,
    avgHighCpc: avgCpc,
    commercialIntentPercentage: commercialRatio,
    keywords: results.slice(0, 50),
  });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || searchParams.get('q') || '';
    const industry = searchParams.get('industry') || 'All Industries';
    const country = searchParams.get('country') || 'US';

    return await handleKeywordProcessing(query, industry, country);
  } catch (error: any) {
    console.error('Keyword GET API error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve keyword metrics', details: error?.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = (body.query || body.q || '').trim();
    const industry = body.industry || 'All Industries';
    const country = body.country || 'US';

    return await handleKeywordProcessing(query, industry, country);
  } catch (error: any) {
    console.error('Keyword POST API error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve keyword metrics', details: error?.message },
      { status: 500 }
    );
  }
}
