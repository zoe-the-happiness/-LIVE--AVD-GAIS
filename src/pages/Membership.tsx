import React from "react";
import { useLanguage } from "../lib/i18n";
import { motion } from "motion/react";
import { Download, CreditCard, Users, ShieldCheck, HelpCircle, FileText } from "lucide-react";

export function Membership() {
  const { t, language } = useLanguage();

  const feesData = [
    {
      id: "inservice",
      classKey: "membership.val.general",
      subclassKey: "membership.val.inservice",
      joiningEn: "₹ 5,000",
      joiningBn: "৫,০০০ টাকা",
      renewalEn: "₹ 1,500",
      renewalBn: "১,৫০০ টাকা",
      popular: true,
    },
    {
      id: "retired",
      classKey: "membership.val.general",
      subclassKey: "membership.val.retired",
      joiningEn: "₹ 2,500",
      joiningBn: "২,৫০০ টাকা",
      renewalEn: "₹ 1,000",
      renewalBn: "১,০০০ টাকা",
      popular: false,
    },
    {
      id: "graduates",
      classKey: "membership.val.general",
      subclassKey: "membership.val.graduates",
      joiningEn: "₹ 500",
      joiningBn: "৫০০ টাকা",
      renewalEn: "₹ 300",
      renewalBn: "৩০০ টাকা",
      popular: false,
    },
    {
      id: "honorary",
      classKey: "membership.val.honorary",
      subclassKey: "membership.val.invitation",
      joiningEn: "Nil",
      joiningBn: "বিনামূল্যে (Nil)",
      renewalEn: "Nil",
      renewalBn: "বিনামূল্যে (Nil)",
      popular: false,
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-100/30 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-saffron-50 border border-saffron-200 rounded-full text-xs font-bold text-saffron-800 uppercase tracking-wider mb-4"
          >
            <Users className="w-3.5 h-3.5 text-saffron-600" />
            <span>{language === "bn" ? "অ্যাসোসিয়েশন সদস্যপদ" : "Association Membership"}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl mb-6 font-sans"
          >
            {t("membership.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-relaxed text-slate-600"
          >
            {t("membership.intro")}
          </motion.p>
        </div>

        {/* Content Section: Table & Apply Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Fee Structure Table (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-saffron-50 text-saffron-700 rounded-xl">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {t("membership.fee_structure")}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    {t("membership.fee_subtitle")}
                  </p>
                </div>
              </div>

              {/* Desktop & Tablet Table (Hidden on mobile) */}
              <div className="hidden sm:block overflow-hidden rounded-2xl border border-slate-100 mt-6 shadow-2xs">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50/70">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {t("membership.col.class")}
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {t("membership.col.subclass")}
                      </th>
                      <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {t("membership.col.joining")}
                      </th>
                      <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {t("membership.col.renewal")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {feesData.map((row, idx) => (
                      <tr 
                        key={row.id} 
                        className={`transition-colors hover:bg-slate-50/50 ${row.popular ? "bg-saffron-50/10" : ""}`}
                      >
                        <td className="px-6 py-4.5 whitespace-nowrap text-sm font-bold text-slate-900">
                          {t(row.classKey)}
                          {row.popular && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-saffron-100 text-saffron-800 uppercase tracking-wider">
                              {language === "bn" ? "সর্বাধিক সদস্য" : "Most Common"}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4.5 text-sm text-slate-600">
                          {t(row.subclassKey)}
                        </td>
                        <td className="px-6 py-4.5 whitespace-nowrap text-sm font-semibold text-slate-900 text-right">
                          {language === "bn" ? row.joiningBn : row.joiningEn}
                        </td>
                        <td className="px-6 py-4.5 whitespace-nowrap text-sm font-semibold text-slate-900 text-right">
                          {language === "bn" ? row.renewalBn : row.renewalEn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card-Based List (Hidden on Tablet/Desktop) */}
              <div className="block sm:hidden space-y-4 mt-6">
                {feesData.map((row) => (
                  <div 
                    key={row.id} 
                    className={`p-5 rounded-2xl border transition-all ${
                      row.popular 
                        ? "bg-gradient-to-br from-saffron-50/30 to-amber-50/20 border-saffron-200 shadow-2xs" 
                        : "bg-white border-slate-200/80"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {t(row.classKey)}
                        </span>
                        <h3 className="text-md font-bold text-slate-950 mt-0.5">
                          {t(row.subclassKey)}
                        </h3>
                      </div>
                      {row.popular && (
                        <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-saffron-100 text-saffron-800 uppercase tracking-wider">
                          {language === "bn" ? "জনপ্রিয়" : "Most Common"}
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100/80 text-sm">
                      <div>
                        <span className="text-slate-500 text-xs block mb-0.5">{t("membership.col.joining")}</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {language === "bn" ? row.joiningBn : row.joiningEn}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs block mb-0.5">{t("membership.col.renewal")}</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {language === "bn" ? row.renewalBn : row.renewalEn}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Informational Notes */}
              <div className="mt-6 flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500">
                <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {language === "bn"
                    ? "নোট: সদস্যপদের সকল অবদানের অর্থ অ্যাসোসিয়েশনের নিয়মানুযায়ী রসিদ এবং উপযুক্ত অডিট সাপেক্ষে পেশাদারী কল্যাণে ব্যবহৃত হয়ে থাকে। কোনো ফি সংশোধনের ক্ষেত্রে পূর্ববর্তী সদস্যদের অবহিত করা হবে।"
                    : "Note: All contributions are officially receipted and utilized strictly for the welfare of the veterinary profession and emergency support initiatives under AVD West Bengal audit standards."
                  }
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Application Download / Apply Info (1/3 width on desktop) */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-md relative overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-saffron-500 to-amber-500" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                  {t("membership.apply_title")}
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t("membership.apply_desc")}
              </p>

              {/* ONLINE METHOD */}
              <div className="bg-saffron-50/40 border border-saffron-100 rounded-2xl p-5 mb-6">
                <h3 className="text-xs font-extrabold text-saffron-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-saffron-500 animate-pulse"></span>
                  {language === "bn" ? "পদ্ধতি ১: অনলাইন আবেদন" : "Option 1: Apply Online"}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {language === "bn"
                    ? "সহজে এবং দ্রুততম উপায়ে আপনার সদস্যপদের আবেদনটি আমাদের গুগল ফর্মের মাধ্যমে অনলাইনে জমা দিন।"
                    : "The fastest way to join. Submit your details and documents securely using our online registration form."}
                </p>
                <a 
                  href="https://forms.gle/KyrKMJ2UesYeh6q7A" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl px-5 py-3 font-bold hover:from-saffron-600 hover:to-saffron-700 shadow-sm hover:shadow transition-all duration-200 w-full text-center group text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 transform group-hover:scale-105 transition-transform" />
                  <span>{t("membership.apply_online_btn")}</span>
                </a>
              </div>

              {/* OFFLINE METHOD */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                  {language === "bn" ? "পদ্ধতি ২: অফলাইন আবেদন" : "Option 2: Apply Offline"}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {language === "bn"
                    ? "শারীরিক আবেদনপত্রটি ডাউনলোড করুন, মুদ্রণ করুন এবং পূরণ করে আপনার জেলা ইউনিট প্রতিনিধি বা রাজ্য দপ্তরে জমা দিন।"
                    : "Prefer physical paperwork? Download the official form to print, fill out, and submit manually."}
                </p>
                <a 
                  href="https://drive.google.com/file/d/1obNZQjpL_1SXa41F9yfQNBEW792rezsM/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl px-5 py-3 font-bold shadow-2xs hover:shadow-xs transition-all duration-200 w-full text-center group text-xs sm:text-sm mb-5"
                >
                  <Download className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
                  <span>{t("membership.download_btn")}</span>
                </a>

                <div className="space-y-3.5 text-xs text-slate-500">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                    <p>{language === "bn" ? "আবেদনপত্রটি ডাউনলোড করুন এবং পূরণ করুন।" : "Download and print the application form."}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                    <p>{language === "bn" ? "প্রয়োজনীয় নথিপত্র এবং ফি সহ আপনার নিকটস্থ জেলা ইউনিট প্রতিনিধি অথবা রাজ্য দপ্তরে জমা দিন।" : "Submit the completed physical copy to your nearest District Unit leader or AVD central representatives with appropriate proof."}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                    <p>{language === "bn" ? "সদস্যপদ অনুমোদিত হলে আপনি আপনার অফিশিয়াল মেম্বারশিপ নম্বর এবং রসিদ সংগ্রহ করতে পারবেন।" : "Once processed, you will receive an official membership registration number and confirmation."}</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
