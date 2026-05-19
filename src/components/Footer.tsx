import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-6 lg:px-12 border-t-4 border-saffron-500 mt-auto shrink-0 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-900/10 blur-[100px] pointer-events-none rounded-full mix-blend-screen -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src="https://ik.imagekit.io/dgevdmg7em/AVD/20260517%20Logo_AVD_trans.webp" alt="AVD Logo" className="w-12 h-12 object-contain brightness-0 invert" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-tight tracking-tight">AVD West Bengal</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            A premier professional body representing veterinarians across West Bengal, dedicated to excellence in animal healthcare and professional welfare.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span> Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> About Us</Link></li>
            <li><Link to="/membership" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Membership</Link></li>
            <li><Link to="/districts" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Districts</Link></li>
            <li><Link to="/notices" className="hover:text-saffron-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-saffron-500 transition-colors"/> Notices & Updates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span> Contact Details
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-saffron-500 shrink-0 transform mt-0.5" />
              <span className="text-slate-400">Association of Veterinary Doctors<br/>Kolkata, West Bengal</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-saffron-500 shrink-0" />
              <a href="mailto:info@avdwb.org" className="text-slate-400 hover:text-white transition-colors">info@avdwb.org</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-saffron-500 shrink-0" />
              <a href="tel:+910000000000" className="text-slate-400 hover:text-white transition-colors">+91 000 000 0000</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full"></span> Subscriptions
          </h4>
          <p className="text-sm text-slate-400 mb-4">Stay updated with association circulars.</p>
          <form className="flex shadow-lg" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-700/50 text-white px-4 py-2.5 rounded-l-lg w-full focus:outline-none focus:border-saffron-500/50 focus:ring-1 focus:ring-saffron-500/50 text-sm transition-all placeholder:text-slate-600" />
            <button type="submit" className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-400 hover:to-saffron-500 text-white px-5 py-2.5 rounded-r-lg transition-all border border-transparent shadow-inner">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 relative z-10 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} AVD West Bengal (Reg. No. 34784). All Rights Reserved.</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-4 items-center">
          <Link to="/privacy" className="hover:text-saffron-400 transition-colors py-2 sm:py-0">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-saffron-400 transition-colors py-2 sm:py-0">Terms of Service</Link>
          <div className="flex items-center gap-2 py-2 sm:py-0">
            <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse shadow-[0_0_8px_rgba(255,153,51,0.5)]"></span>
            <span className="font-medium tracking-wide">Portal v2.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
