import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  MessageSquare, 
  Phone, 
  Mail, 
  ArrowUp,
  Sparkles 
} from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Positioning (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 font-display">
                Digital<span className="text-blue-600">Dot</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              The silent white-label growth engine for digital marketing agencies and premier performance marketing partner for enterprise brands.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a 
                href="https://wa.me/15550192834" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 shadow-soft-sm transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a 
                href="tel:+15550192834" 
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 shadow-soft-sm transition-colors"
                title="Phone Consultation"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:partnerships@digitaldot.agency" 
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 shadow-soft-sm transition-colors"
                title="Email Partnerships"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Capabilities
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.services.map((item, idx) => (
                <li key={idx}>
                  <a href="#capabilities" className="hover:text-slate-900 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Case Studies
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.work.map((item, idx) => (
                <li key={idx}>
                  <a href="#case-studies" className="hover:text-slate-900 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faqs" className="hover:text-slate-900 transition-colors">
                  Strategic FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Standards */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Standards
            </div>
            <div className="space-y-2.5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>100% Non-Circumvention NDA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>LegitScript Ad Governance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>HIPAA-Compliant Server Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>4.9★ Rating (48 Verified Reviews)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-soft-sm">
          <p>
            <strong>Confidentiality Notice:</strong> DigitalDot guarantees absolute brand anonymity for agency fulfillment clients under bilateral non-circumvention agreements. Direct client case studies (Healthcare networks, Marine charter groups) are published with written corporate consent. All healthcare campaigns utilize HIPAA-compliant data masking pipelines and adhere strictly to LegitScript certification standards.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DigitalDot Agency. All rights reserved. Worldwide White-Label &amp; Performance Operations.
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact-consultation" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact-consultation" className="hover:text-slate-800 transition-colors">
              Non-Circumvention Agreement Terms
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
