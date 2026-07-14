import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight, Globe, ExternalLink, Phone } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { CONFIG } from "../lib/config";

export function Footer() {
  const { t, language } = useLanguage();

  const journalUrl = CONFIG.PASHU_PRAGATI_JOURNAL_URL || "https://www.pashupragatijournal.com";

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-6 lg:px-12 border-t-4 border-saffron-500 mt-auto shrink-0 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-900/10 blur-[100px] pointer-events-none rounded-full mix-blend-screen -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-16 relative z-10">
        <div className="flex flex-col gap-5 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="https://ik.imagekit.io/avdwb/Logo/20260517%20Logo_AVD_trans.webp" alt="AVD Logo" className="w-12 h-12 object-contain brightness-0 invert" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-tight tracking-tight">AVD West Bengal</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            A premier professional body representing veterinarians across West Bengal, dedicated to excellence in animal healthcare and professional welfare.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span> Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> About Us</Link></li>
            <li><Link to="/membership" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Membership</Link></li>
            <li><Link to="/about#units" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Units</Link></li>
            <li><Link to="/notices" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Notices & Updates</Link></li>
            <li><Link to="/gallery" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Photo Gallery</Link></li>
            <li><Link to="/members-portal" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Members Portal</Link></li>
          </ul>
        </div>

        {/* Publications Column */}
        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span> {t("footer.publications")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/publications/newsletter" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors" />
                <span>Pashu Sewa Samvad</span>
              </Link>
            </li>
            <li>
              <a href={journalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-center justify-between gap-2 group">
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors" />
                  <span>Pashu-Pragati Journal</span>
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors" />
              </a>
            </li>
            <li>
              <Link to="/publications/smaranika" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors" />
                <span>AVD Smaranika</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span> Important Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="https://wb.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> Govt. of West Bengal</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
            <li><a href="https://finance.wb.gov.in/Fin_New/HomePage.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> Finance Department</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
            <li><a href="https://ard.wb.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> ARD Department</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
            <li><a href="https://www.darahwb.org/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> DAR&AH WB</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
            <li><a href="https://wbuafscl.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> WBUAFS</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
            <li><a href="https://wb.gov.in/government-directories.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> Govt. Directories</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
            <li><a href="https://wb.gov.in/government-departments-page.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition-colors flex items-start justify-between gap-2 group"><span className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors shrink-0 mt-0.5"/> Govt. Departments</span><ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-saffron-400 opacity-60 transition-colors shrink-0 mt-0.5"/></a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span>
            <Link to="/contact" className="hover:text-saffron-400 transition-colors">
              Contact Details
            </Link>
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/contact" className="inline-flex items-center gap-2 text-saffron-500 hover:text-saffron-400 font-semibold transition-colors text-xs uppercase tracking-wider">
                Contact Us / Support Form &rarr;
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-saffron-500 shrink-0 transform mt-0.5" />
              <span className="text-slate-400">F-1, Tribeni Complex<br/>36A Sahitya Parishad Street<br/>Kolkata - 700006</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-saffron-500 shrink-0" />
              <a href="https://www.avdwb.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">www.avdwb.com</a>
            </li>
            <li className="border-t border-slate-800/60 pt-3 flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-saffron-500" /> Helplines
              </span>
              <div className="flex flex-col text-xs text-slate-400 gap-1">
                <span>Secy: <a href="tel:9434306504" className="hover:text-white transition-colors font-medium">9434306504</a></span>
              </div>
            </li>
            <li className="border-t border-slate-800/60 pt-3 flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-saffron-500" /> Emails
              </span>
              <div className="flex flex-col text-xs text-slate-400 gap-1.5">
                <a href="mailto:contact@avdwb.com" className="hover:text-white transition-colors truncate">contact@avdwb.com</a>
                <a href="mailto:support@avdwb.com" className="hover:text-white transition-colors truncate">support@avdwb.com</a>
                <a href="mailto:treasurer@avdwb.com" className="hover:text-white transition-colors truncate">treasurer@avdwb.com</a>
                <span className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Other Desks</span>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  <a href="mailto:admin@avdwb.com" className="hover:text-white transition-colors" title="admin@avdwb.com">admin@</a>
                  <a href="mailto:csr@avdwb.com" className="hover:text-white transition-colors" title="csr@avdwb.com">csr@</a>
                  <a href="mailto:it@avdwb.com" className="hover:text-white transition-colors" title="it@avdwb.com">it@</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 relative z-10 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} AVD West Bengal (Reg. No. 34784). All Rights Reserved.</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-4 gap-y-2 items-center">
          <Link to="/privacy" className="hover:text-saffron-400 transition-colors py-1">Privacy Policy</Link>
          <span className="text-slate-800 hidden sm:inline">•</span>
          <Link to="/terms" className="hover:text-saffron-400 transition-colors py-1">Terms of Service</Link>
          <span className="text-slate-800 hidden sm:inline">•</span>
          <Link to="/refund-policy" className="hover:text-saffron-400 transition-colors py-1">Refund &amp; Cancellation</Link>
          <span className="text-slate-800 hidden sm:inline">•</span>
          <Link to="/shipping-policy" className="hover:text-saffron-400 transition-colors py-1">Shipping &amp; Export</Link>
          <span className="text-slate-800 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 py-1">
            <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse shadow-[0_0_8px_rgba(255,153,51,0.5)]"></span>
            <span className="font-medium tracking-wide">Portal v2.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
