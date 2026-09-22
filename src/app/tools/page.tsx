'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Globe, 
  Download, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Copy, 
  ExternalLink, 
  ChevronDown, 
  SlidersHorizontal,
  Target,
  BarChart3,
  HelpCircle,
  Laptop,
  Smartphone,
  ShieldCheck,
  Zap,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PartnerDeckModal } from '../../components/PartnerDeckModal';
import { WP_EASE } from '../../lib/animations';

interface KeywordItem {
  keyword: string;
  searchVolume: number;
  cpcLow: number;
  cpcHigh: number;
  competition: 'Low' | 'Medium' | 'High';
  competitionScore: number;
  intent: 'Commercial' | 'Transactional' | 'Informational' | 'Navigational';
  trend: number[];
}

interface SerpCompetitor {
  position: number;
  domain: string;
  url: string;
  title: string;
  snippet: string;
  isTarget: boolean;
  features?: string[];
}

interface SerpResultData {
  keyword: string;
  domain: string;
  country: string;
  device: string;
  isRanked: boolean;
  rankPosition: number | null;
  pageNumber: number | null;
  targetResult: SerpCompetitor | null;
  serpFeaturesDetected: string[];
  competitors: SerpCompetitor[];
  seoRecommendations: string[];
  searchUrl: string;
}

const SAMPLE_QUICK_KEYWORDS = [
  'best digital marketing agency',
  'white label ppc services',
  'technical seo audit',
  'hipaa compliant marketing',
  'b2b saas lead generation',
  'generative engine optimization'
];

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'keywords' | 'serp'>('keywords');
  const [deckModalOpen, setDeckModalOpen] = useState(false);

  // Keyword Tool States
  const [kwQuery, setKwQuery] = useState('best digital marketing agency');
  const [kwIndustry, setKwIndustry] = useState('Digital Marketing & Agency');
  const [kwCountry, setKwCountry] = useState('US');
  const [kwLoading, setKwLoading] = useState(false);
  const [kwResults, setKwResults] = useState<KeywordItem[]>([]);
  const [kwTotalVolume, setKwTotalVolume] = useState(0);
  const [kwAvgCpc, setKwAvgCpc] = useState(0);
  const [kwCommercialRatio, setKwCommercialRatio] = useState(0);
  const [kwTableFilter, setKwTableFilter] = useState('');
  const [kwSortBy, setKwSortBy] = useState<'volume' | 'cpcHigh' | 'competition'>('volume');
  const [kwSortAsc, setKwSortAsc] = useState(false);
  const [copiedKw, setCopiedKw] = useState<string | null>(null);

  // SERP Checker States
  const [serpDomain, setSerpDomain] = useState('digitaldot.agency');
  const [serpKeyword, setSerpKeyword] = useState('white label ppc agency');
  const [serpCountry, setSerpCountry] = useState('US');
  const [serpDevice, setSerpDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [serpLoading, setSerpLoading] = useState(false);
  const [serpData, setSerpData] = useState<SerpResultData | null>(null);

  // Initial load
  useEffect(() => {
    // Check URL parameters for prefill
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      const tab = params.get('tab');
      if (tab === 'serp') setActiveTab('serp');
      if (q) {
        if (tab === 'serp') {
          setSerpKeyword(q);
        } else {
          setKwQuery(q);
        }
      }
    }
    // Fetch initial keyword data
    handleKeywordSearch('best digital marketing agency');
  }, []);

  const handleKeywordSearch = async (overrideQuery?: string) => {
    const q = overrideQuery || kwQuery;
    if (!q.trim()) return;
    setKwLoading(true);

    try {
      const res = await fetch('/api/tools/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          industry: kwIndustry,
          country: kwCountry,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setKwResults(data.keywords || []);
        setKwTotalVolume(data.totalSearchVolume || 0);
        setKwAvgCpc(data.avgHighCpc || 0);
        setKwCommercialRatio(data.commercialIntentPercentage || 0);
      }
    } catch (err) {
      console.error('Failed to fetch keywords:', err);
    } finally {
      setKwLoading(false);
    }
  };

  const handleSerpCheck = async () => {
    if (!serpDomain.trim() || !serpKeyword.trim()) return;
    setSerpLoading(true);

    try {
      const res = await fetch('/api/tools/serp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: serpDomain,
          keyword: serpKeyword,
          country: serpCountry,
          device: serpDevice,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setSerpData(data);
      }
    } catch (err) {
      console.error('Failed to check SERP:', err);
    } finally {
      setSerpLoading(false);
    }
  };

  const downloadCsv = () => {
    if (kwResults.length === 0) return;
    const headers = ['Keyword', 'Monthly Search Volume', 'Top of Page Bid Low (USD)', 'Top of Page Bid High (USD)', 'Competition', 'Intent'];
    const rows = kwResults.map(k => [
      `"${k.keyword.replace(/"/g, '""')}"`,
      k.searchVolume,
      `$${k.cpcLow.toFixed(2)}`,
      `$${k.cpcHigh.toFixed(2)}`,
      k.competition,
      k.intent
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `digitaldot-keywords-${kwQuery.toLowerCase().replace(/\s+/g, '-')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKw(text);
    setTimeout(() => setCopiedKw(null), 2000);
  };

  // Filtered and sorted keyword results
  const filteredKeywords = kwResults
    .filter(k => k.keyword.toLowerCase().includes(kwTableFilter.toLowerCase()))
    .sort((a, b) => {
      let valA: number = a.searchVolume;
      let valB: number = b.searchVolume;

      if (kwSortBy === 'cpcHigh') {
        valA = a.cpcHigh;
        valB = b.cpcHigh;
      } else if (kwSortBy === 'competition') {
        valA = a.competitionScore;
        valB = b.competitionScore;
      }

      return kwSortAsc ? valA - valB : valB - valA;
    });

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Real-time Status Ribbon */}
      <AnnouncementBar />

      {/* 2. Header & Navigation */}
      <Header onOpenDeckModal={() => setDeckModalOpen(true)} />

      {/* Main Suite Container */}
      <main className="flex-grow">
        
        {/* ================= HERO INTEL HEADER ================= */}
        <section className="relative bg-[#070A1E] text-white pt-10 pb-16 lg:pb-20 overflow-hidden border-b border-white/10">
          
          {/* Background Ambient Glows & Grid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />
            <div 
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: WP_EASE }}
              className="inline-flex items-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300 tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.25)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="tracking-wider uppercase font-mono font-bold">
                  Proprietary Agency Intelligence &bull; 100% Free
                </span>
              </div>
            </motion.div>

            {/* Title & Subhead */}
            <div className="space-y-3 max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: WP_EASE }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.14]"
              >
                Free Keyword Volume &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                  Google SERP Rank
                </span>{' '}
                Suite
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: WP_EASE }}
                className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
              >
                One centralized intelligence suite to discover keyword search volumes, high-intent CPC bid ranges, and inspect where your website ranks on Google in real-time.
              </motion.p>
            </div>

            {/* TAB SELECTOR: Keyword Tool vs SERP Checker */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: WP_EASE }}
              className="pt-3 flex justify-center"
            >
              <div className="p-1.5 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/15 inline-flex gap-1.5 shadow-2xl">
                
                <button
                  onClick={() => setActiveTab('keywords')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeTab === 'keywords'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span>Free Keyword Volume Tool</span>
                </button>

                <button
                  onClick={() => setActiveTab('serp')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeTab === 'serp'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>Google SERP &amp; Rank Checker</span>
                </button>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ================= TOOLS INTERFACE SECTION ================= */}
        <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ================= TAB 1: KEYWORD SEARCH & DISCOVERY TOOL ================= */}
          {activeTab === 'keywords' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Tool Search Card (WordStream Elevated Style) */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-6">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Keyword Discovery &amp; Volume Estimator
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Query Google's real-time suggest network to extract monthly volume, low/high range bids, and competitive indexes.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE ENGINE
                  </span>
                </div>

                {/* Form Controls */}
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleKeywordSearch(); }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4"
                >
                  
                  {/* Keyword / URL Input */}
                  <div className="md:col-span-6 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      * Keyword or Website URL
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={kwQuery}
                        onChange={(e) => setKwQuery(e.target.value)}
                        placeholder="e.g. best digital marketing agency, white label ppc..."
                        className="w-full pl-10 pr-4 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner"
                        required
                      />
                    </div>
                  </div>

                  {/* Industry Select */}
                  <div className="md:col-span-3 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Industry Vertical
                    </label>
                    <select
                      value={kwIndustry}
                      onChange={(e) => setKwIndustry(e.target.value)}
                      className="w-full px-3.5 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="All Industries">All Industries</option>
                      <option value="Digital Marketing & Agency">Digital Marketing &amp; Agency</option>
                      <option value="B2B SaaS & Tech">B2B SaaS &amp; Tech</option>
                      <option value="Healthcare & Medical">Healthcare &amp; Medical</option>
                      <option value="E-commerce & Retail">E-commerce &amp; Retail</option>
                      <option value="Legal & Law">Legal &amp; Law Firms</option>
                      <option value="Finance & Crypto">Finance &amp; Crypto</option>
                      <option value="Real Estate">Real Estate &amp; Construction</option>
                    </select>
                  </div>

                  {/* Country Select */}
                  <div className="md:col-span-3 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Target Country
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={kwCountry}
                        onChange={(e) => setKwCountry(e.target.value)}
                        className="flex-1 px-3.5 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="US">United States (US)</option>
                        <option value="UK">United Kingdom (UK)</option>
                        <option value="CA">Canada (CA)</option>
                        <option value="AU">Australia (AU)</option>
                        <option value="IN">India (IN)</option>
                        <option value="Global">Global Search</option>
                      </select>

                      <button
                        type="submit"
                        disabled={kwLoading}
                        className="px-6 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg shadow-blue-600/25 flex items-center justify-center shrink-0 disabled:opacity-50"
                      >
                        {kwLoading ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <span>Search</span>
                        )}
                      </button>
                    </div>
                  </div>

                </form>

                {/* Quick Suggestion Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                  <span className="text-slate-400 font-medium">Quick suggestions:</span>
                  {SAMPLE_QUICK_KEYWORDS.map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setKwQuery(sample);
                        handleKeywordSearch(sample);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 border border-slate-200/60 transition-colors"
                    >
                      {sample}
                    </button>
                  ))}
                </div>

              </div>

              {/* Keyword Metrics Overview Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Total Keywords
                  </span>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {kwResults.length}
                    </span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      Discovered
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Total Monthly Searches
                  </span>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {kwTotalVolume.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Volume/mo
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Avg High-Range CPC
                  </span>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      ${kwAvgCpc.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      Top of Page
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Commercial Intent Rate
                  </span>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {kwCommercialRatio}%
                    </span>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                      High-Intent
                    </span>
                  </div>
                </div>

              </div>

              {/* Keyword Data Table (Exact WordStream Format Elevated) */}
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden">
                
                {/* Table Header Bar */}
                <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Keyword results for &ldquo;{kwQuery}&rdquo;
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Showing {filteredKeywords.length} of {kwResults.length} keywords
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Filter search input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={kwTableFilter}
                        onChange={(e) => setKwTableFilter(e.target.value)}
                        placeholder="Filter keywords..."
                        className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-900 w-44"
                      />
                    </div>

                    {/* CSV Download Button verbatim like Wordstream */}
                    <button
                      onClick={downloadCsv}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm hover:shadow"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download My Keywords (CSV)</span>
                    </button>
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                        <th className="py-3.5 px-4 sm:px-6">Keywords</th>
                        
                        <th 
                          onClick={() => {
                            if (kwSortBy === 'volume') setKwSortAsc(!kwSortAsc);
                            else { setKwSortBy('volume'); setKwSortAsc(false); }
                          }}
                          className="py-3.5 px-4 cursor-pointer hover:text-slate-900 select-none whitespace-nowrap"
                        >
                          <div className="flex items-center gap-1">
                            <span>Search Volume</span>
                            <span className="text-blue-600">▲</span>
                          </div>
                        </th>

                        <th 
                          onClick={() => {
                            if (kwSortBy === 'cpcHigh') setKwSortAsc(!kwSortAsc);
                            else { setKwSortBy('cpcHigh'); setKwSortAsc(false); }
                          }}
                          className="py-3.5 px-4 cursor-pointer hover:text-slate-900 select-none whitespace-nowrap"
                        >
                          <div className="flex items-center gap-1">
                            <span>Top of page bid (low)</span>
                          </div>
                        </th>

                        <th 
                          onClick={() => {
                            if (kwSortBy === 'cpcHigh') setKwSortAsc(!kwSortAsc);
                            else { setKwSortBy('cpcHigh'); setKwSortAsc(false); }
                          }}
                          className="py-3.5 px-4 cursor-pointer hover:text-slate-900 select-none whitespace-nowrap"
                        >
                          <div className="flex items-center gap-1">
                            <span>Top of page bid (high)</span>
                          </div>
                        </th>

                        <th 
                          onClick={() => {
                            if (kwSortBy === 'competition') setKwSortAsc(!kwSortAsc);
                            else { setKwSortBy('competition'); setKwSortAsc(false); }
                          }}
                          className="py-3.5 px-4 cursor-pointer hover:text-slate-900 select-none whitespace-nowrap"
                        >
                          <div className="flex items-center gap-1">
                            <span>Competition</span>
                            <span className="text-blue-600">▲</span>
                          </div>
                        </th>

                        <th className="py-3.5 px-4 text-right">Action</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                      {filteredKeywords.map((row, idx) => (
                        <tr 
                          key={idx}
                          className="hover:bg-blue-50/40 transition-colors group"
                        >
                          {/* Keyword name + Intent badge */}
                          <td className="py-3.5 px-4 sm:px-6">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {row.keyword}
                              </span>
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                                row.intent === 'Transactional' ? 'bg-emerald-100 text-emerald-800' :
                                row.intent === 'Commercial' ? 'bg-blue-100 text-blue-800' :
                                row.intent === 'Informational' ? 'bg-amber-100 text-amber-800' :
                                'bg-slate-100 text-slate-700'
                              }`}>
                                {row.intent.slice(0, 4)}
                              </span>
                            </div>
                          </td>

                          {/* Search Volume with Mini Bar */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">
                                {row.searchVolume.toLocaleString()}
                              </span>
                              <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                                <div 
                                  className="h-full bg-blue-600 rounded-full" 
                                  style={{ width: `${Math.min(100, Math.max(15, (row.searchVolume / (kwResults[0]?.searchVolume || 1)) * 100))}%` }}
                                />
                              </div>
                            </div>
                          </td>

                          {/* Top of page bid (low) */}
                          <td className="py-3.5 px-4 whitespace-nowrap font-mono text-slate-700">
                            ${row.cpcLow.toFixed(2)}
                          </td>

                          {/* Top of page bid (high) */}
                          <td className="py-3.5 px-4 whitespace-nowrap font-mono font-bold text-slate-900">
                            ${row.cpcHigh.toFixed(2)}
                          </td>

                          {/* Competition */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              row.competition === 'High' 
                                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                : row.competition === 'Medium'
                                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            }`}>
                              {row.competition}
                            </span>
                          </td>

                          {/* Copy / Action */}
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <button
                              onClick={() => copyToClipboard(row.keyword)}
                              title="Copy keyword"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              {copiedKw === row.keyword ? (
                                <Check className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}

                      {filteredKeywords.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-400 text-sm">
                            {kwLoading ? 'Analyzing search queries...' : 'No matching keywords found for this filter.'}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Bottom Agency Conversion Pitch */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="space-y-1.5 text-center md:text-left">
                  <span className="text-xs uppercase font-mono font-bold text-cyan-300 tracking-wider">
                    Target These Keywords At Scale
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display">
                    Need High-ROAS Google Ads or Page 1 SEO for These Queries?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    DigitalDot manages $1.15M+/mo in attributable client search spend. Let our certified specialists audit your target keywords and build a custom white-label proposal.
                  </p>
                </div>

                <button
                  onClick={() => setDeckModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-xl transition-all hover:-translate-y-0.5 shrink-0 whitespace-nowrap flex items-center gap-2"
                >
                  <span>Request White-Label Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* ================= TAB 2: GOOGLE SERP & RANK CHECKER ================= */}
          {activeTab === 'serp' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* SERP Check Form Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-6">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Google SERP Rank &amp; Position Checker
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Check exactly where your website ranks in Google organic search results for any keyword.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
                    <Target className="w-3.5 h-3.5" />
                    ACCURATE RANKING
                  </span>
                </div>

                <form
                  onSubmit={(e) => { e.preventDefault(); handleSerpCheck(); }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4"
                >
                  
                  {/* Website Domain */}
                  <div className="md:col-span-4 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      * Your Website Domain / URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={serpDomain}
                        onChange={(e) => setSerpDomain(e.target.value)}
                        placeholder="e.g. yourwebsite.com"
                        className="w-full pl-10 pr-4 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner"
                        required
                      />
                    </div>
                  </div>

                  {/* Target Keyword */}
                  <div className="md:col-span-4 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      * Target Keyword to Check
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={serpKeyword}
                        onChange={(e) => setSerpKeyword(e.target.value)}
                        placeholder="e.g. white label seo, b2b ppc agency..."
                        className="w-full pl-10 pr-4 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner"
                        required
                      />
                    </div>
                  </div>

                  {/* Country & Device */}
                  <div className="md:col-span-4 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Region &amp; Device
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={serpCountry}
                        onChange={(e) => setSerpCountry(e.target.value)}
                        className="flex-1 px-3 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="US">Google US (google.com)</option>
                        <option value="UK">Google UK (google.co.uk)</option>
                        <option value="CA">Google Canada (google.ca)</option>
                        <option value="AU">Google Australia (google.com.au)</option>
                        <option value="IN">Google India (google.co.in)</option>
                      </select>

                      <button
                        type="button"
                        onClick={() => setSerpDevice(serpDevice === 'desktop' ? 'mobile' : 'desktop')}
                        title={`Device: ${serpDevice}`}
                        className="px-3 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center border border-slate-200 transition-colors"
                      >
                        {serpDevice === 'desktop' ? <Laptop className="w-4 h-4" /> : <Smartphone className="w-4 h-4 text-blue-600" />}
                      </button>

                      <button
                        type="submit"
                        disabled={serpLoading}
                        className="px-5 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg shadow-blue-600/25 flex items-center justify-center shrink-0 disabled:opacity-50"
                      >
                        {serpLoading ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <span>Check Rank</span>
                        )}
                      </button>
                    </div>
                  </div>

                </form>

              </div>

              {/* SERP Diagnostic Results Display */}
              {serpData && (
                <div className="space-y-6">
                  
                  {/* Rank Status Hero Banner */}
                  <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 ${
                    serpData.isRanked && (serpData.rankPosition || 0) <= 3
                      ? 'bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-emerald-500/40 text-white'
                      : serpData.isRanked && (serpData.rankPosition || 0) <= 10
                      ? 'bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-blue-500/40 text-white'
                      : serpData.isRanked
                      ? 'bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 border-amber-500/40 text-white'
                      : 'bg-gradient-to-r from-slate-900 to-slate-950 border-white/20 text-white'
                  }`}>
                    
                    <div className="flex items-center gap-5 text-center md:text-left">
                      <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center border shadow-xl shrink-0 ${
                        serpData.isRanked && (serpData.rankPosition || 0) <= 3
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : serpData.isRanked && (serpData.rankPosition || 0) <= 10
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                          : serpData.isRanked
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-rose-500/20 border-rose-400 text-rose-300'
                      }`}>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">RANK</span>
                        <span className="text-3xl font-black tracking-tight leading-none mt-0.5">
                          {serpData.isRanked ? `#${serpData.rankPosition}` : 'N/A'}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <span className="text-xs uppercase font-mono font-bold text-slate-300 tracking-wider">
                            Google Search Status
                          </span>
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                            {serpData.isRanked ? `Page ${serpData.pageNumber}` : 'Not in Top 100'}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display">
                          {serpData.domain} for &ldquo;{serpData.keyword}&rdquo;
                        </h3>
                        <p className="text-xs text-slate-300">
                          Checked on Google {serpData.country} ({serpData.device === 'desktop' ? 'Desktop SERP' : 'Mobile SERP'})
                        </p>
                      </div>
                    </div>

                    <a
                      href={serpData.searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 shrink-0"
                    >
                      <span>Open Live Google Search</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>

                  {/* Google Snippet Preview & SERP Features */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Live SERP Card Simulation */}
                    <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                          Google Search Result Preview
                        </span>
                        <span className="text-xs text-slate-500">
                          {serpData.targetResult ? `Position #${serpData.targetResult.position}` : 'Unranked Snippet'}
                        </span>
                      </div>

                      {/* Google Style Snippet */}
                      {serpData.targetResult ? (
                        <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                          <div className="flex items-center gap-2 text-xs text-slate-600 font-sans truncate">
                            <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[9px] font-bold">
                              G
                            </div>
                            <span className="truncate">{serpData.targetResult.url}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                            {serpData.targetResult.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed">
                            {serpData.targetResult.snippet}
                          </p>
                          {serpData.targetResult.features && serpData.targetResult.features.length > 0 && (
                            <div className="flex gap-2 pt-2">
                              {serpData.targetResult.features.map((f, i) => (
                                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                                  {f}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-slate-500 text-sm bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-2">
                          <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                          <p className="font-semibold text-slate-800">
                            Website not currently found in Google's Top 100 for this keyword.
                          </p>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            The page may lack target entity optimization, schema metadata, or topical authority in this geographic region.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Detected SERP Features */}
                    <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                          SERP Features Detected
                        </span>
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {serpData.serpFeaturesDetected.map((feat, i) => (
                          <div 
                            key={i} 
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold"
                          >
                            <Check className="w-3.5 h-3.5 text-blue-600" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technical Recommendations */}
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                          Actionable SEO Recommendations
                        </span>
                        {serpData.seoRecommendations.map((rec, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>

                  {/* Competitor Leaderboard Table */}
                  <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                    <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Google Top 10 Competitor Leaderboard
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Websites dominating Google Page 1 for &ldquo;{serpData.keyword}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                            <th className="py-3.5 px-4 sm:px-6 w-20">Rank</th>
                            <th className="py-3.5 px-4">Domain &amp; Title</th>
                            <th className="py-3.5 px-4">URL</th>
                            <th className="py-3.5 px-4 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                          {serpData.competitors.map((c, i) => (
                            <tr 
                              key={i}
                              className={c.isTarget ? 'bg-blue-50/70 border-l-4 border-l-blue-600' : 'hover:bg-slate-50/60'}
                            >
                              <td className="py-3.5 px-4 sm:px-6">
                                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-black ${
                                  c.position <= 3 
                                    ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                                    : 'bg-slate-100 text-slate-700'
                                }`}>
                                  #{c.position}
                                </span>
                              </td>

                              <td className="py-3.5 px-4">
                                <div className="space-y-0.5">
                                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                    <span>{c.domain}</span>
                                    {c.isTarget && (
                                      <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                                        Your Website
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 truncate max-w-md">
                                    {c.title}
                                  </p>
                                </div>
                              </td>

                              <td className="py-3.5 px-4 text-slate-500 truncate max-w-xs font-mono text-xs">
                                <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                                  {c.url}
                                </a>
                              </td>

                              <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                {c.position <= 3 ? (
                                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                    Top 3
                                  </span>
                                ) : (
                                  <span className="text-xs text-slate-500 font-mono">
                                    Page 1
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>

                  {/* Conversion Proposal Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                    <div className="space-y-1.5 text-center md:text-left">
                      <span className="text-xs uppercase font-mono font-bold text-blue-400 tracking-wider">
                        Dominate Organic Search &amp; AI Citations
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display">
                        Ready to Take Rank #1 on Google for Your High-Value Keywords?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                        Our technical SEO and Generative Engine Optimization (GEO) infrastructure turns underperforming search rankings into revenue engines.
                      </p>
                    </div>

                    <button
                      onClick={() => setDeckModalOpen(true)}
                      className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 shrink-0 whitespace-nowrap flex items-center gap-2"
                    >
                      <span>Claim Free SEO Strategy Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

        </section>

      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Partner Deck Modal */}
      <PartnerDeckModal 
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
      />
    </div>
  );
}
