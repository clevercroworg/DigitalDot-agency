import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  Building, 
  Lock
} from 'lucide-react';

interface PartnerDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerDeckModal: React.FC<PartnerDeckModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
        onClose();
      }, 1800);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>CONFIDENTIAL PARTNER DOCUMENTATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            DigitalDot Partner Access Package
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Protected deliverables package including wholesale margin rate cards and mutual NDA coverage.
          </p>
        </div>

        {/* Package Contents Breakdown */}
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0 mt-0.5">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">2026 Wholesale Rate Card &amp; Pricing Tiers</div>
              <div className="text-xs text-slate-600 mt-0.5">Structured monthly retainers and ad-spend management margins (PPC, Technical SEO, Web Dev).</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Mutual Non-Circumvention &amp; NDA Template</div>
              <div className="text-xs text-slate-600 mt-0.5">Legally binding 100% client protection agreement guaranteeing zero direct contact.</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-600 shrink-0 mt-0.5">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Unbranded White-Label Client Decks &amp; Dashboards</div>
              <div className="text-xs text-slate-600 mt-0.5">Sample Looker Studio dashboards and executive reporting decks formatted for your agency logo.</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Encrypted 256-bit Secure Download</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading || downloadSuccess}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm font-mono tracking-wide disabled:opacity-50"
            >
              {downloading ? (
                <span>Compiling Package...</span>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Download Initiated!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Access Package</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
