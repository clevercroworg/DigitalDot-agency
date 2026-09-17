'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

interface MarginCalculatorProps {
  onOpenDeckModal: () => void;
}

export const MarginCalculator: React.FC<MarginCalculatorProps> = ({ onOpenDeckModal }) => {
  const [clientCount, setClientCount] = useState<number>(4);
  const [monthlySpend, setMonthlySpend] = useState<number>(25000);

  const totalBilled = clientCount * 3500;
  const wholesaleCost = clientCount * 1400;
  const netAgencyProfit = totalBilled - wholesaleCost;
  const internalHiringSaved = clientCount >= 3 ? 12500 : 7500;

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 lg:p-14 shadow-soft-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>AGENCY MARGIN ARBITRAGE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                  Calculate Your White-Label Net Profit Lift
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  See how wholesaling your technical SEO, Google Ads, and Meta Ads backend through DigitalDot eliminates internal payroll overhead and expands agency net margins.
                </p>
              </div>

              {/* Slider 1 */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Client Accounts Under Fulfillment:</span>
                  <span className="text-blue-600 font-bold font-mono text-xs sm:text-sm">{clientCount} Accounts</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                  <span>1 Acc</span>
                  <span>5 Accs</span>
                  <span>10 Accs</span>
                  <span>15 Accs</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Total Monthly Ad Spend Managed:</span>
                  <span className="text-blue-600 font-bold font-mono text-xs sm:text-sm">${monthlySpend.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                  <span>$5k</span>
                  <span>$50k</span>
                  <span>$100k+</span>
                </div>
              </div>
            </div>

            {/* Right Column: Output Card */}
            <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  PROJECTED MONTHLY ARBITRAGE
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +60% NET MARGIN
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <span className="text-slate-600 font-sans font-medium text-xs">Gross Retainers Billed:</span>
                  <span className="text-slate-900 font-bold font-mono text-xs sm:text-sm">${totalBilled.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <span className="text-slate-600 font-sans font-medium text-xs">DigitalDot Wholesale Cost:</span>
                  <span className="text-blue-600 font-bold font-mono text-xs sm:text-sm">${wholesaleCost.toLocaleString()} / mo</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/90 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-emerald-900 font-sans text-xs sm:text-sm font-bold">
                    Retained Agency Net Profit:
                  </span>
                  <span className="text-emerald-800 text-lg sm:text-2xl font-mono font-extrabold whitespace-nowrap">
                    +${netAgencyProfit.toLocaleString()}{' '}
                    <span className="text-xs font-sans font-semibold text-emerald-700">/ mo</span>
                  </span>
                </div>
              </div>

              <div className="text-[11px] sm:text-xs text-slate-500 flex items-start gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Replaces ~${internalHiringSaved.toLocaleString()}/mo in internal media buyer &amp; SEO specialist payroll.</span>
              </div>

              <button
                onClick={onOpenDeckModal}
                className="w-full py-3.5 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 tracking-wide font-sans shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>LOCK IN WHOLESALE RATES FOR YOUR AGENCY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
