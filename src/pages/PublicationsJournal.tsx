import { Link } from "react-router-dom";
import { BookOpen, ExternalLink, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../lib/i18n";
import { motion } from "motion/react";
import { CONFIG } from "../lib/config";

export function PublicationsJournal() {
  const { t, language } = useLanguage();

  const journalUrl = CONFIG.PASHU_PRAGATI_JOURNAL_URL || "http://pashupragatijournal.com/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "Pashu-Pragati Journal",
    "publisher": {
      "@type": "Organization",
      "name": "Association of Veterinary Doctors, West Bengal",
      "url": "https://www.avdwb.com"
    },
    "description": t("journal.description"),
    "inLanguage": ["en", "hi", "bn"]
  };

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{t("seo.journal.title")}</title>
        <meta name="description" content={t("seo.journal.desc")} />
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

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-1.5 bg-white border border-slate-200/85 rounded-3xl mb-6 shadow-md overflow-hidden w-28 h-28 items-center justify-center"
          >
            <img
              src="https://ik.imagekit.io/avdwb/PPJ/LOGO%20PPJ/20260706%20Logo_PPJ.webp"
              alt="Pashu Pragati Journal Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl mb-6"
          >
            {t("publications.journal.title")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-10 text-left"
          >
            <p className="text-slate-700 text-lg leading-relaxed mb-10 text-center">
              {t("journal.description")}
            </p>

            <div className="flex justify-center">
              <a
                href={journalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-base font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{t("journal.visitButton")}</span>
                <ExternalLink className="w-5 h-5 ml-2.5 shrink-0" />
              </a>
            </div>
          </motion.div>

          <p className="text-xs text-slate-500 font-medium">
            Note: Clicking the button above will securely redirect you to the official standalone website of Pashu-Pragati Journal.
          </p>
        </div>
      </div>
    </div>
  );
}
