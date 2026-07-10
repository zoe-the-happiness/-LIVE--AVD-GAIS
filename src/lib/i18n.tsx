import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.publications": "Publications / প্রকাশনা",
    "nav.newsletter": "Pashu Sewa Samvad",
    "nav.journal": "Pashu-Pragati Journal",
    "nav.smaranika": "AVD Smaranika",

    // Publications Parent Page
    "publications.title": "Publications",
    "publications.intro": "The Association of Veterinary Doctors, West Bengal, is proud to manage and publish three major publications, keeping our members, professionals, and the rural community informed, educated, and united.",
    "publications.newsletter.title": "Under Construction",
    "publications.newsletter.purpose": "The monthly Pashu Sewa Samvad newsletter portal is currently under development. The complete digital archive of past issues will be available soon.",
    "publications.newsletter.button": "Coming Soon",
    "publications.journal.title": "Pashu-Pragati Journal",
    "publications.journal.purpose": "National, peer-reviewed, half-yearly multidisciplinary veterinary journal.",
    "publications.journal.button": "Visit journal site",
    "publications.smaranika.title": "Open for matter submission",
    "publications.smaranika.purpose": "The annual flagship Smaranika souvenir portal is now open. Submit your articles, stories, poems, travelogues, drawings and photographs online.",
    "publications.smaranika.button": "Submit Online",

    // Newsletter (Pashu Sewa Samvad)
    "newsletter.tagline": "Dedicated to Animal Welfare and Rural Development",
    "newsletter.latest": "Latest Issue",
    "newsletter.readDownload": "Read / Download",
    "newsletter.archive": "Archive of Past Issues",
    "newsletter.noIssues": "No newsletters found in the archive.",
    "newsletter.back": "Back to Publications",
    "newsletter.publishedOn": "Published on",

    // Journal (Pashu-Pragati)
    "journal.title": "Pashu-Pragati Journal",
    "journal.description": "Pashu-Pragati is a premier national, peer-reviewed, half-yearly veterinary journal published by the Association of Veterinary Doctors, West Bengal. Serving as a key multidisciplinary platform, it features high-quality papers in English, Hindi, and Bengali covering advanced research, reviews, and clinical veterinary practices.",
    "journal.visitButton": "Visit Pashu-Pragati Journal / পশু-প্রগতি জার্নাল দেখুন",

    // Smaranika
    "smaranika.title": "AVD Smaranika",
    "smaranika.description": "AVD Smaranika is our annual flagship volume capturing the year in review across the profession, members, Units, science, and culture. We invite veterinary doctors and their families to contribute to this flagship souvenir.",
    "smaranika.accepted": "Accepted Submissions",
    "smaranika.acceptedDesc": "We welcome memoirs, short stories, poems, in-memoriam tributes to departed veterinarians, success stories, travelogues, artwork, photographs, cartoons, hobby pieces, and children's corner submissions from members and their families.",
    "smaranika.submitButton": "Submit to Smaranika / স্মারিকায় জমা দিন",
    "smaranika.declarationTitle": "Publishing Declaration",
    "smaranika.declarationNote": "Please note that submission implies acceptance of the publishing declaration, affirming that your work is original and does not violate copyright laws.",
    "smaranika.queries": "Queries",
    "smaranika.queryEmail": "For any queries or assistance, please contact us at contact@avdwb.com",

    // General
    "footer.publications": "Publications",
    "seo.publications.title": "Publications | Association of Veterinary Doctors",
    "seo.publications.desc": "Explore official publications of AVD West Bengal, including Pashu Sewa Samvad newsletter, Pashu-Pragati Journal, and the annual flagship Smaranika souvenir.",
    "seo.newsletter.title": "Pashu Sewa Samvad Newsletter | AVD West Bengal",
    "seo.newsletter.desc": "Read and download Pashu Sewa Samvad, the monthly official newsletter of AVD West Bengal, dedicated to animal welfare and rural development.",
    "seo.journal.title": "Pashu-Pragati Journal | AVD West Bengal",
    "seo.journal.desc": "Visit Pashu-Pragati Journal, a national, peer-reviewed veterinary journal published by AVD West Bengal featuring advanced clinical research.",
    "seo.smaranika.title": "AVD Smaranika | AVD West Bengal",
    "seo.smaranika.desc": "Submit your articles, poems, and stories to AVD Smaranika, the annual flagship souvenir of the Association of Veterinary Doctors, West Bengal.",

    // Membership
    "membership.title": "Membership & Fees",
    "membership.intro": "Join the premier professional network of veterinary doctors in West Bengal. We represent our professionals and support their career journey with multiple membership levels designed for every stage of your career.",
    "membership.apply_title": "Apply for Membership",
    "membership.apply_desc": "Choose between our quick online registration process or download the physical application form to apply offline.",
    "membership.apply_online_btn": "Apply Online",
    "membership.apply_offline_title": "Apply Offline (Hard Copy)",
    "membership.download_btn": "Download Application Form",
    "membership.fee_structure": "Membership Fee Structure",
    "membership.fee_subtitle": "Below are the official contribution guidelines and renewal rates introduced with effect from the financial year 2026-27.",
    "membership.col.class": "Class of Member",
    "membership.col.subclass": "Sub-class",
    "membership.col.joining": "Joining Fee",
    "membership.col.renewal": "Annual Renewal",
    "membership.val.general": "General Member",
    "membership.val.inservice": "In-Service Veterinarian",
    "membership.val.mvcmvu": "MVC & MVU Members",
    "membership.val.retired": "Retired Veterinarian",
    "membership.val.graduates": "Veterinary Graduate Awaiting Employment",
    "membership.val.honorary": "Honorary Member",
    "membership.val.invitation": "By invitation (including Advisors)",
    "membership.val.nil": "Nil",
  },
  bn: {
    // Nav
    "nav.publications": "Publications / প্রকাশনা",
    "nav.newsletter": "পশু সেবা সংবাদ",
    "nav.journal": "পশু-প্রগতি",
    "nav.smaranika": "AVD Smaranika",

    // Publications Parent Page
    "publications.title": "প্রকাশনা",
    "publications.intro": "Association of Veterinary Doctors, West Bengal গর্বের সাথে তিনটি প্রধান প্রকাশনা পরিচালনা এবং প্রকাশ করে, যা আমাদের সদস্য, পেশাদার এবং গ্রামীণ সম্প্রদায়কে অবহিত, শিক্ষিত এবং ঐক্যবদ্ধ রাখে।",
    "publications.newsletter.title": "নির্মাণাধীন",
    "publications.newsletter.purpose": "মাসিক 'পশু সেবা সংবাদ' নিউজলেটার পোর্টালটি বর্তমানে নির্মাণাধীন রয়েছে। পূর্ববর্তী সমস্ত সংখ্যার সম্পূর্ণ ডিজিটাল আর্কাইভ খুব শীঘ্রই এখানে উপলব্ধ করা হবে।",
    "publications.newsletter.button": "শীঘ্রই আসছে",
    "publications.journal.title": "পশু-প্রগতি",
    "publications.journal.purpose": "জাতীয়, সমকক্ষ-পর্যালোচিত, ষাণ্মাসিক বহুমুখী প্রাণীচিকিৎসা জার্নাল।",
    "publications.journal.button": "পশু-প্রগতি জার্নাল দেখুন",
    "publications.smaranika.title": "লেখা ও ছবি আহ্বান",
    "publications.smaranika.purpose": "বার্ষিক ফ্ল্যাগশিপ স্মরণিকা স্মারকগ্রন্থের লেখা ও ছবি জমা দেওয়ার পোর্টাল এখন উন্মুক্ত। আপনার স্মৃতিকথা, গল্প, কবিতা, প্রবন্ধ, আলোকচিত্র বা আঁকা ছবি অনলাইনে জমা দিন।",
    "publications.smaranika.button": "অনলাইনে জমা দিন",

    // Newsletter (Pashu Sewa Samvad)
    "newsletter.tagline": "প্রাণী কল্যাণ এবং গ্রামীণ উন্নয়নে উৎসর্গীকৃত",
    "newsletter.latest": "সাম্প্রতিক সংখ্যা",
    "newsletter.readDownload": "পড়ুন / ডাউনলোড করুন",
    "newsletter.archive": "পূর্ববর্তী সংখ্যাসমূহের আর্কাইভ",
    "newsletter.noIssues": "আর্কাইভে কোনো নিউজলেটার পাওয়া যায়নি।",
    "newsletter.back": "প্রকাশনা তালিকায় ফিরে যান",
    "newsletter.publishedOn": "প্রকাশের তারিখ",

    // Journal (Pashu-Pragati)
    "journal.title": "পশু-প্রগতি",
    "journal.description": "পশু-প্রগতি হল Association of Veterinary Doctors, West Bengal দ্বারা প্রকাশিত একটি প্রধান জাতীয়, সমকক্ষ-পর্যালোচিত, ষাণ্মাসিক প্রাণীচিকিৎসা জার্নাল। এটি একটি নির্ভরযোগ্য প্ল্যাটফর্ম যা ইংরেজি, হিন্দি এবং বাংলা ভাষায় উচ্চমানের উন্নত গবেষণা প্রবন্ধ, পর্যালোচনা এবং ক্লিনিকাল কেস কভার করে।",
    "journal.visitButton": "Visit Pashu-Pragati Journal / পশু-প্রগতি জার্নাল দেখুন",

    // Smaranika
    "smaranika.title": "AVD Smaranika",
    "smaranika.description": "AVD Smaranika হল আমাদের বার্ষিক ফ্ল্যাগশিপ স্মারকগ্রন্থ যা প্রাণীচিকিৎসা পেশা, সদস্য, ইউনিট, বিজ্ঞান এবং সংস্কৃতির সারা বছরের পর্যালোচনামূলক রূপ তুলে ধরে। আমরা প্রাণীচিকিৎসক এবং তাঁদের পরিবারকে এই বার্ষিক সংকলনে অবদান রাখার জন্য আন্তরিকভাবে আমন্ত্রণ জানাই।",
    "smaranika.accepted": "মনোনীত রচনা ও শিল্পকর্মসমূহ",
    "smaranika.acceptedDesc": "আমরা সদস্য এবং তাঁদের পরিবারের কাছ থেকে স্মৃতিকথা, ছোটগল্প, কবিতা, প্রয়াত প্রাণীচিকিৎসকদের প্রতি শ্রদ্ধাঞ্জলি, সাফল্যের গল্প, ভ্রমণকাহিনী, শিল্পকর্ম, আলোকচিত্র, কার্টুন, শখের টুকরো এবং ছোটদের কোণ গ্রহণ করি।",
    "smaranika.submitButton": "Submit to Smaranika / স্মারিকায় জমা দিন",
    "smaranika.declarationTitle": "প্রকাশনা ঘোষণা",
    "smaranika.declarationNote": "অনুগ্ৰহ করে মনে রাখবেন যে লেখা বা শিল্পকর্ম জমা দেওয়ার অর্থ হল প্রকাশনা ঘোষণা মেনে নেওয়া, যা নিশ্চিত করে যে আপনার কাজটি মৌলিক এবং কপিরাইট আইন লঙ্ঘন করে না।",
    "smaranika.queries": "জিজ্ঞাসা",
    "smaranika.queryEmail": "যেকোনো জিজ্ঞাসা বা সহায়তার জন্য অনুগ্রহ করে contact@avdwb.com ঠিকানায় যোগাযোগ করুন",

    // General
    "footer.publications": "প্রকাশনা",
    "seo.publications.title": "প্রকাশনা সমূহ | Association of Veterinary Doctors",
    "seo.publications.desc": "AVD West Bengal-এর অফিশিয়াল প্রকাশনাসমূহ যেমন পশু সেবা সংবাদ, পশু-প্রগতি এবং বার্ষিক স্মরণিকা (AVD Smaranika) অন্বেষণ করুন।",
    "seo.newsletter.title": "পশু সেবা সংবাদ নিউজলেটার | AVD West Bengal",
    "seo.newsletter.desc": "AVD West Bengal-এর অফিশিয়াল মাসিক নিউজলেটার পশু সেবা সংবাদ পড়ুন এবং ডাউনলোড করুন, যা প্রাণী কল্যাণ এবং গ্রামীণ উন্নয়নে উৎসর্গীকৃত।",
    "seo.journal.title": "পশু-প্রগতি জার্নাল | AVD West Bengal",
    "seo.journal.desc": "উন্নত প্রাণীচিকিৎসা গবেষণা সংবলিত AVD West Bengal-এর জাতীয় সমকক্ষ-পর্যালোচিত ষাণ্মাসিক জার্নাল পশু-প্রগতি দেখুন।",
    "seo.smaranika.title": "AVD Smaranika স্মরণিকা | AVD West Bengal",
    "seo.smaranika.desc": "Association of Veterinary Doctors, West Bengal-এর বার্ষিক স্মরণিকাতে আপনার কবিতা, গল্প বা স্মৃতিকথা জমা দিন।",

    // Membership
    "membership.title": "সদস্যপদ এবং ফি",
    "membership.intro": "পশ্চিমবঙ্গের প্রাণীচিকিৎসকদের শীর্ষস্থানীয় পেশাদার নেটওয়ার্কে যোগ দিন। আমরা আমাদের পেশাদারদের প্রতিনিধিত্ব করি এবং ক্যারিয়ারের প্রতিটি পর্যায়ের জন্য ডিজাইন করা একাধিক স্তরের সদস্যপদের মাধ্যমে তাদের যাত্রাকে সমর্থন করি।",
    "membership.apply_title": "সদস্যপদের জন্য আবেদন করুন",
    "membership.apply_desc": "আমাদের দ্রুত অনলাইন রেজিস্ট্রেশন প্রক্রিয়ার মাধ্যমে অনলাইনে আবেদন করুন অথবা অফলাইনে আবেদন করতে শারীরিক আবেদনপত্রটি ডাউনলোড করুন।",
    "membership.apply_online_btn": "অনলাইনে আবেদন করুন",
    "membership.apply_offline_title": "অফলাইনে আবেদন করুন (হার্ড কপি)",
    "membership.download_btn": "সদস্যপদের আবেদনপত্র ডাউনলোড করুন",
    "membership.fee_structure": "সদস্যপদ ফি কাঠামো",
    "membership.fee_subtitle": "২০২৬-২৭ অর্থবছর থেকে প্রবর্তিত বিভিন্ন শ্রেণীর সদস্যদের জন্য ওয়ান-টাইম রেজিস্ট্রেশন ফি এবং বার্ষিক সদস্যপদ চাঁদার তালিকা নীচে দেওয়া হল।",
    "membership.col.class": "সদস্যের শ্রেণী",
    "membership.col.subclass": "উপ-শ্রেণী",
    "membership.col.joining": "যোগদান ফি",
    "membership.col.renewal": "বার্ষিক নবায়ন",
    "membership.val.general": "সাধারণ সদস্য (General)",
    "membership.val.inservice": "কর্মরত প্রাণীচিকিৎসক (In-Service)",
    "membership.val.mvcmvu": "এমভিসি এবং এমভিউ সদস্য (MVC & MVU)",
    "membership.val.retired": "অবসরপ্রাপ্ত প্রাণীচিকিৎসক (Retired)",
    "membership.val.graduates": "নিয়োগের অপেক্ষায় থাকা ভেটেরিনারি গ্র্যাজুয়েটগণ",
    "membership.val.honorary": "সম্মানসূচক সদস্য (Honorary)",
    "membership.val.invitation": "আমন্ত্রণ সাপেক্ষে (উপদেষ্টাদের সহ)",
    "membership.val.nil": "বিনামূল্যে (Nil)",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("avd_lang");
    return (saved === "bn" || saved === "en") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("avd_lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <React.Fragment>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </React.Fragment>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
