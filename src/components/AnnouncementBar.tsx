import React from 'react';
import { Sparkles, Lock } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-slate-50/95 border-b border-slate-200/70 h-9 sm:h-10 flex items-center px-3 sm:px-4 text-xs font-sans text-slate-600 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Mobile View: Clean single-line centered pill & NDA guarantee */}
        <div className="sm:hidden flex items-center justify-center gap-2 text-[11px] font-medium text-slate-700 w-full whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200/70 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            Active Capacity
          </span>
          <span className="text-slate-300">&bull;</span>
          <span className="flex items-center gap-1 text-slate-700 font-medium">
            <Lock className="w-3 h-3 text-amber-600 shrink-0" />
            <span>100% Non-Circumvention NDA</span>
          </span>
        </div>

        {/* Desktop View: Full single-line dual-side status */}
        <div className="hidden sm:flex items-center justify-between text-xs whitespace-nowrap">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200/70 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              Active Capacity
            </span>
            <span className="font-medium text-slate-700 truncate">
              Silent White-Label Partner for Agencies &bull; Direct Performance Engine for High-Growth Brands
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>100% Non-Circumvention NDA</span>
            </div>
            <span className="text-slate-300">&bull;</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Generative AI (GEO/AEO) Citations</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
