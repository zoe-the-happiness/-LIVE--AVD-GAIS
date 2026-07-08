import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../lib/i18n";

interface NavItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Units", href: "/districts" },
  { 
    name: "Publications / প্রকাশনা", 
    href: "/publications",
    dropdown: [
      { name: "Pashu Sewa Samvad", href: "/publications/newsletter" },
      { name: "Pashu-Pragati Journal", href: "/publications/journal" },
      { name: "AVD Smaranika", href: "/publications/smaranika" }
    ]
  },
  { name: "Notices", href: "/notices" },
  { name: "Gallery", href: "/gallery" },
  { name: "Members Portal", href: "/members-portal" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 flex items-center justify-between px-6 lg:px-10 shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <nav className="flex w-full items-center justify-between" aria-label="Global">
        <div className="flex items-center gap-3">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Association of Veterinary Doctors</span>
            <img src="https://ik.imagekit.io/avdwb/Logo/20260517%20Logo_AVD_trans.webp" alt="AVD Logo" className="w-12 h-12 object-contain" />
            <div className="flex-col hidden sm:flex">
              <span className="font-bold text-slate-800 leading-tight">AVD West Bengal</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Association of Veterinary Doctors</span>
            </div>
          </Link>
        </div>
        
        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-7 items-center">
          {navigation.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
            
            if (hasDropdown) {
              return (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm transition-colors flex items-center gap-1 py-2",
                      isActive ? "font-semibold text-saffron-600 border-b-2 border-saffron-600 py-1" : "font-medium text-slate-600 hover:text-saffron-600"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", desktopDropdownOpen ? "transform rotate-180" : "")} />
                  </Link>

                  <AnimatePresence>
                    {desktopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-1 w-56 rounded-2xl bg-white border border-slate-200/60 shadow-xl py-2 z-50 overflow-hidden"
                      >
                        {item.dropdown?.map((sub) => {
                          const isSubActive = location.pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className={cn(
                                "block px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-saffron-50 hover:text-saffron-700 transition-colors",
                                isSubActive ? "text-saffron-600 bg-saffron-50/50 font-bold" : ""
                              )}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm transition-colors",
                  isActive ? "font-semibold text-saffron-600 border-b-2 border-saffron-600 py-1" : "font-medium text-slate-600 hover:text-saffron-600"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Language selector & CTA button desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="bg-saffron-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-saffron-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 bg-white px-4 py-4 sm:ring-1 sm:ring-gray-900/10 h-screen overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <img src="https://ik.imagekit.io/avdwb/Logo/20260517%20Logo_AVD_trans.webp" alt="AVD Logo" className="w-10 h-10 object-contain" />
                <div className="flex-col flex">
                  <span className="font-bold text-slate-800 leading-tight">AVD West Bengal</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Association of Veterinary</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const hasDropdown = !!item.dropdown;
                    if (hasDropdown) {
                      return (
                        <div key={item.name} className="space-y-1">
                          <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={cn("w-5 h-5 transition-transform", mobileDropdownOpen ? "transform rotate-180" : "")} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-6 space-y-1 border-l-2 border-saffron-100/60 ml-3"
                              >
                                <Link
                                  to={item.href}
                                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-gray-50"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileDropdownOpen(false);
                                  }}
                                >
                                  View All Publications
                                </Link>
                                {item.dropdown?.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileDropdownOpen(false);
                                    }}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="py-6 space-y-2">
                  <Link
                    to="/membership"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
