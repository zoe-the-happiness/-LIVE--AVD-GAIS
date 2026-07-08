import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Newspaper, ArrowLeft, Hammer, Mail, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../lib/i18n";
import { motion } from "motion/react";

export function PublicationsNewsletter() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pashu Sewa Samvad - Under Construction",
    "publisher": {
      "@type": "Organization",
      "name": "Association of Veterinary Doctors, West Bengal",
      "url": "https://www.avdwb.com"
    },
    "description": "The official newsletter portal 'Pashu Sewa Samvad' is currently under construction.",
    "inLanguage": ["en", "bn"]
  };

  const highlights = [
    {
      titleEn: "Complete Digital Archive",
      titleEnBn: "সম্পূর্ণ ডিজিটাল আর্কাইভ",
      descEn: "Access and download PDF editions of Pashu Sewa Samvad spanning several years.",
      descBn: "কয়েক বছরের 'পশু সেবা সংবাদ'-এর সমস্ত পিডিএফ সংস্করণ ডাউনলোড করার সুবিধা।",
    },
    {
      titleEn: "Representation Updates",
      titleEnBn: "প্রতিনিধিত্বমূলক আপডেট",
      descEn: "Track AVD's official submissions, meeting details, and professional updates.",
      descBn: "AVD-এর অফিসিয়াল স্মারকলিপি, বৈঠকের বিবরণ এবং পেশাদার আপডেটগুলি ট্র্যাক করুন।",
    },
    {
      titleEn: "Field Case Reports",
      titleEnBn: "মাঠ পর্যায়ের কেস রিপোর্ট",
      descEn: "Read veterinary breakthroughs, case studies, and field notes from doctors across West Bengal.",
      descBn: "পশ্চিমবঙ্গজুড়ে কর্মরত ডাক্তারদের প্রাণীচিকিৎসার সাফল্য এবং কেস স্টাডি পড়ুন।",
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen relative overflow-hidden">
      <Helmet>
        <title>{language === "bn" ? "পশু সেবা সংবাদ | নির্মাণাধীন" : "Pashu Sewa Samvad | Under Construction"}</title>
        <meta name="description" content="The official newsletter portal 'Pashu Sewa Samvad' is currently under construction." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-500/10 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-saffron-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("newsletter.back")}</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border-2 border-dashed border-slate-200/80 p-8 sm:p-12 shadow-md relative overflow-hidden"
          >
            {/* Top stripe decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-saffron-500 via-amber-400 to-yellow-500" />

            <div className="text-center mb-10">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
                className="inline-flex p-4 bg-amber-100 text-amber-600 rounded-3xl mb-6 shadow-sm"
              >
                <Hammer className="w-12 h-12" />
              </motion.div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>{language === "bn" ? "নির্মাণাধীন" : "Under Construction"}</span>
              </div>

              <h1 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl mb-4 font-sans">
                {language === "bn" ? "পশু সেবা সংবাদ" : "Pashu Sewa Samvad"}
              </h1>
              
              <p className="text-md font-medium text-saffron-600 tracking-wide max-w-xl mx-auto mb-6">
                {language === "bn" ? "প্রাণী কল্যাণ এবং গ্রামীণ উন্নয়নে উৎসর্গীকৃত" : "Dedicated to Animal Welfare and Rural Development"}
              </p>

              <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
                {language === "bn" 
                  ? "আমরা বর্তমানে পশ্চিমবঙ্গ অ্যাসোসিয়েশন অফ ভেটেরিনারি ডক্টরস-এর মাসিক মুখপত্র 'পশু সেবা সংবাদ'-এর বিগত বছরগুলির সম্পূর্ণ পেপার সংস্করণগুলিকে ডিজিটালাইজড করার কাজ করছি। সমস্ত সংখ্যা সহজে খোঁজা এবং পিডিএফ ডাউনলোড করার সুবিধা সহ এই পোর্টালটি খুব শীঘ্রই চালু করা হবে।"
                  : "We are currently digitizing the complete past archive of 'Pashu Sewa Samvad' (the official monthly newsletter of AVD West Bengal). The portal, complete with PDF download links, search tools, and circular archives, is under active construction and will go live shortly."
                }
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-t border-b border-slate-100 py-10">
              {highlights.map((item, index) => (
                <div key={index} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-saffron-500" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      {language === "bn" ? item.titleEnBn : item.titleEn}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {language === "bn" ? item.descBn : item.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Email notification */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 max-w-2xl mx-auto text-center">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                {language === "bn" ? "লঞ্চের আপডেট পেতে চান?" : "Want to get notified on launch?"}
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                {language === "bn" 
                  ? "নিউজলেটার পোর্টালটি চালু হওয়া মাত্রই ইমেইলে নোটিফিকেশন পেতে আপনার ইমেইল আইডিটি নথিভুক্ত করুন।" 
                  : "Subscribe to receive an email notification as soon as the Pashu Sewa Samvad digital portal becomes online."
                }
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold">
                    {language === "bn" ? "ধন্যবাদ! আপনার ইমেইলটি সফলভাবে তালিকাভুক্ত করা হয়েছে।" : "Thank you! We've added you to our notification list."}
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder={language === "bn" ? "আপনার ইমেইল আইডি লিখুন" : "Enter your email address"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-slate-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-saffron-600 hover:bg-saffron-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-xs"
                  >
                    {language === "bn" ? "আমাকে জানান" : "Notify Me"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
