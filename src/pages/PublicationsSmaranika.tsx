import { Link } from "react-router-dom";
import { FileText, ExternalLink, ArrowLeft, Mail, ShieldAlert, Heart, Sparkles, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../lib/i18n";
import { motion } from "motion/react";
import { CONFIG } from "../lib/config";

export function PublicationsSmaranika() {
  const { t, language } = useLanguage();

  const smaranikaFormUrl = CONFIG.SMARANIKA_FORM_URL || "https://forms.gle/AQkD7bE8W2UJkTR37";
  const contactEmail = CONFIG.AVD_EMAIL || "contact@avdwb.com";

  const submissionTypes = [
    { name: language === "bn" ? "স্মৃতিকথা ও গল্প" : "Memoirs & Stories", icon: "✍️" },
    { name: language === "bn" ? "কবিতা ও সাহিত্য" : "Poems & Literature", icon: "📜" },
    { name: language === "bn" ? "ভ্রমণকাহিনী" : "Travelogues", icon: "🗺️" },
    { name: language === "bn" ? "বিজ্ঞান ও পেশাভিত্তিক প্রবন্ধ" : "Science & Professional Articles", icon: "🔬" },
    { name: language === "bn" ? "শিল্পকর্ম ও কার্টুন" : "Artwork & Cartoons", icon: "🎨" },
    { name: language === "bn" ? "আলোকচিত্র" : "Photographs", icon: "📷" },
    { name: language === "bn" ? "শ্রদ্ধাঞ্জলি (প্রয়াত প্রাণীচিকিৎসকদের উদ্দেশ্যে)" : "In-Memoriam Tributes", icon: "🕯️" },
    { name: language === "bn" ? "ছোটদের কোণ (শিশুদের লেখা/আঁকা)" : "Children's Corner", icon: "🎈" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "AVD Smaranika",
    "publisher": {
      "@type": "Organization",
      "name": "Association of Veterinary Doctors, West Bengal",
      "url": "https://www.avdwb.com"
    },
    "description": t("smaranika.description"),
    "inLanguage": ["en", "bn"]
  };

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{t("seo.smaranika.title")}</title>
        <meta name="description" content={t("seo.smaranika.desc")} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-full mb-4 shadow-sm"
            >
              <FileText className="w-8 h-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl mb-3"
            >
              {language === "bn" ? "AVD স্মরণিকা" : "AVD Smaranika"}
            </motion.h1>
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 uppercase tracking-wider mb-6 shadow-2xs"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t("publications.smaranika.title")}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              {t("smaranika.description")}
            </motion.p>
          </div>

          {/* Message from the General Secretary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 bg-gradient-to-r from-amber-50/60 via-orange-50/40 to-amber-50/40 border border-amber-200/60 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
          >
            {/* Quote watermark */}
            <div className="absolute -top-4 -right-2 text-amber-100/50 select-none text-9xl font-serif leading-none pointer-events-none">
              “
            </div>

            <div className="relative">
              <h2 className="text-xs font-extrabold text-amber-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                <span>
                  {language === "bn" ? "সাধারণ সম্পাদকের বার্তা" : "Message from the General Secretary"}
                </span>
              </h2>

              <div className="text-slate-800 text-base md:text-lg leading-relaxed font-medium mb-6 space-y-4">
                <p className="font-bold text-slate-950">
                  {language === "bn" ? "প্রিয় সদস্যবৃন্দ," : "Dear Members,"}
                </p>
                <p className="whitespace-pre-line text-slate-900 font-semibold leading-relaxed">
                  {language === "bn"
                    ? "বার্ষিক স্মারক গ্রন্থ AVD Smaranika-র জন্য লেখা ও ছবি আহ্বান করা হচ্ছে।"
                    : "Submissions and contributions of articles and photographs are cordially invited for the annual flagship souvenir, AVD Smaranika."}
                </p>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  {language === "bn"
                    ? "আপনি ও আপনার পরিবার পাঠাতে পারেন: স্মৃতিকথা, গল্প, কবিতা, প্রবন্ধ, প্রয়াত সহকর্মীদের স্মরণ, সাফল্যের কাহিনি, ছবি, চিত্রকলা।"
                    : "You and your family are welcome to submit: memoirs, stories, poems, articles, in-memoriam tributes to departed colleagues, success stories, photographs, and drawings/paintings."}
                </p>
                <div className="p-3 bg-white border border-amber-200/50 rounded-xl inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-amber-950 mt-2 shadow-2xs">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span>
                    {language === "bn"
                      ? "জমা দিন: www.avdwb.com - Smaranika ফর্ম"
                      : "Submit via: www.avdwb.com - Smaranika Form"}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-amber-200/30 pt-4 mt-6">
                <div></div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 text-base">
                    {language === "bn" ? "ডাঃ প্রশান্ত কুমার বেরা" : "Dr. Prasanta Kumar Bera"}
                  </p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    {language === "bn" ? "সাধারণ সম্পাদক, AVD" : "General Secretary, AVD"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Accepted Submissions Section */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                  <span>{t("smaranika.accepted")}</span>
                </h2>
                <p className="text-slate-500 text-xs mb-6 font-medium">
                  {t("smaranika.acceptedDesc")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {submissionTypes.map((type, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-semibold"
                    >
                      <span className="text-lg">{type.icon}</span>
                      <span>{type.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submission Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={smaranikaFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-base font-bold transition-all shadow-md hover:shadow-lg"
                >
                  <span>{t("smaranika.submitButton")}</span>
                  <ExternalLink className="w-5 h-5 ml-2.5 shrink-0" />
                </a>
              </div>
            </motion.div>

            {/* Sidebar Guidelines & Queries */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 flex flex-col gap-6"
            >
              {/* Declaration Note */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 p-6 shadow-xs">
                <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4.5 h-4.5 text-emerald-600" />
                  <span>{t("smaranika.declarationTitle")}</span>
                </h3>
                <p className="text-emerald-950 text-sm leading-relaxed font-medium">
                  {t("smaranika.declarationNote")}
                </p>
              </div>

              {/* Queries Block */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-slate-500" />
                  <span>{t("smaranika.queries")}</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t("smaranika.queryEmail")}
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>{contactEmail}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
