import { Link } from "react-router-dom";
import { BookOpen, Newspaper, FileText, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../lib/i18n";
import { motion } from "motion/react";

export function Publications() {
  const { t, language } = useLanguage();

  const publicationsList = [
    {
      id: "newsletter",
      titleKey: "publications.newsletter.title",
      purposeKey: "publications.newsletter.purpose",
      buttonKey: "publications.newsletter.button",
      path: "/publications/newsletter",
      icon: <Newspaper className="w-8 h-8 text-saffron-600" />,
      tag: "Newsletter",
      colorClass: "from-saffron-50 to-amber-50 border-saffron-100 hover:border-saffron-300",
      iconBg: "bg-saffron-100 text-saffron-700",
      isUnderConstruction: true,
    },
    {
      id: "journal",
      titleKey: "publications.journal.title",
      purposeKey: "publications.journal.purpose",
      buttonKey: "publications.journal.button",
      path: "/publications/journal",
      icon: (
        <img
          src="https://ik.imagekit.io/avdwb/PPJ/LOGO%20PPJ/20260706%20Logo_PPJ.webp"
          alt="Pashu Pragati Journal Logo"
          className="w-8 h-8 object-contain rounded-md"
          referrerPolicy="no-referrer"
        />
      ),
      tag: "Journal",
      colorClass: "from-blue-50 to-indigo-50 border-blue-100 hover:border-blue-300",
      iconBg: "bg-white border border-slate-100",
    },
    {
      id: "smaranika",
      titleKey: "publications.smaranika.title",
      purposeKey: "publications.smaranika.purpose",
      buttonKey: "publications.smaranika.button",
      path: "/publications/smaranika",
      icon: <FileText className="w-8 h-8 text-amber-600" />,
      tag: "Smaranika",
      colorClass: "from-amber-50/40 to-slate-50/50 border-amber-200/50",
      iconBg: "bg-amber-100 text-amber-700",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.avdwb.com/#organization",
        "name": "Association of Veterinary Doctors, West Bengal",
        "url": "https://www.avdwb.com",
        "logo": "https://ik.imagekit.io/avdwb/Logo/20260517%20Logo_AVD_trans.webp",
        "description": "A professional association representing veterinary doctors across West Bengal, India."
      },
      {
        "@type": "Periodical",
        "@id": "https://www.avdwb.com/publications/newsletter/#periodical",
        "name": "Pashu Sewa Samvad",
        "publisher": { "@id": "https://www.avdwb.com/#organization" },
        "description": "Monthly newsletter of the Association of Veterinary Doctors, West Bengal.",
        "inLanguage": ["en", "bn"]
      },
      {
        "@type": "Periodical",
        "@id": "https://www.pashupragatijournal.com/#periodical",
        "name": "Pashu-Pragati Journal",
        "publisher": { "@id": "https://www.avdwb.com/#organization" },
        "description": "National, peer-reviewed, half-yearly multidisciplinary veterinary journal published by AVD.",
        "inLanguage": ["en", "hi", "bn"]
      },
      {
        "@type": "CreativeWork",
        "@id": "https://www.avdwb.com/publications/smaranika/#creativework",
        "name": "AVD Smaranika",
        "publisher": { "@id": "https://www.avdwb.com/#organization" },
        "description": "Annual flagship souvenir of AVD West Bengal, capturing key veterinary issues, science, and cultural contributions."
      }
    ]
  };

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{t("seo.publications.title")}</title>
        <meta name="description" content={t("seo.publications.desc")} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl mb-6 drop-shadow-sm"
          >
            {t("publications.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            {t("publications.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {publicationsList.map((pub, idx) => {
            if (pub.isUnderConstruction) {
              return (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-b from-amber-50/20 to-slate-50/40 p-8 rounded-3xl border-2 border-dashed border-amber-200/60 shadow-xs flex flex-col justify-between items-center text-center group h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />
                  
                  <div className="flex flex-col items-center my-auto py-4">
                    <div className="p-4 bg-amber-100/60 text-amber-700 rounded-2xl mb-5 shadow-xs group-hover:scale-105 transition-transform">
                      {pub.icon}
                    </div>
                    
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100/60 px-2.5 py-1 rounded-full border border-amber-200/70 mb-4">
                      {language === "bn" ? "নির্মাণাধীন" : "Under Construction"}
                    </span>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-600 transition-colors">
                      {t(pub.titleKey)}
                    </h2>
                    
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t(pub.purposeKey)}
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-100/80 mt-6">
                    <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-100 text-slate-400 border border-slate-200 rounded-2xl text-sm font-semibold cursor-not-allowed select-none">
                      <span>{t(pub.buttonKey)}</span>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-gradient-to-b ${pub.colorClass} p-8 rounded-3xl border shadow-sm transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-3 rounded-2xl ${pub.iconBg} shadow-sm ${pub.isUnderConstruction ? "" : "group-hover:scale-105"} transition-transform`}>
                      {pub.icon}
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      pub.isUnderConstruction
                        ? "text-amber-800 bg-amber-50/80 border-amber-200"
                        : "text-slate-400 bg-white/60 border-slate-100"
                    }`}>
                      {pub.isUnderConstruction ? (language === "bn" ? "নির্মাণাধীন" : "Under Construction") : pub.tag}
                    </span>
                  </div>

                  <h2 className={`text-2xl font-bold text-slate-900 mb-3 tracking-tight transition-colors ${
                    pub.isUnderConstruction ? "group-hover:text-amber-600" : "group-hover:text-saffron-600"
                  }`}>
                    {t(pub.titleKey)}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {t(pub.purposeKey)}
                  </p>
                </div>

                {pub.isUnderConstruction ? (
                  <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-100/80 text-slate-400 border border-slate-200 rounded-2xl text-sm font-semibold cursor-not-allowed select-none">
                    <span className="mr-2">{t(pub.buttonKey)}</span>
                  </div>
                ) : (
                  <Link
                    to={pub.path}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 rounded-2xl text-sm font-semibold transition-all duration-250 shadow-xs group-hover:shadow-sm"
                  >
                    <span className="mr-2">{t(pub.buttonKey)}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
