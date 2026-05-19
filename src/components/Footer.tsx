import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="h-24 md:h-12 py-4 bg-slate-900 flex flex-col md:flex-row items-center justify-between px-10 text-[10px] text-slate-400 shrink-0 mt-auto">
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <span>&copy; {new Date().getFullYear()} AVD West Bengal. All Rights Reserved.</span>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-white">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-saffron-500"></span>
        <span className="font-medium">Portal v2.1 (Stable Build)</span>
      </div>
    </footer>
  );
}
