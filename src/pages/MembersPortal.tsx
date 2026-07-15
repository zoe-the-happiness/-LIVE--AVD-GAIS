import { Key, ShieldAlert, BookOpen, Receipt, UserCheck, ExternalLink, Download, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { useLanguage } from "../lib/i18n";

export function MembersPortal() {
  const { language } = useLanguage();

  const portalFeatures = [
    {
      icon: <Receipt className="w-5 h-5 text-saffron-600" />,
      title: language === "bn" ? "বিলিং এবং রসিদ" : "Billing & Receipts",
      description: language === "bn" 
        ? "অর্থপ্রদানের ইতিহাস দেখুন, চালান ডাউনলোড করুন এবং সাবস্ক্রিপশন রসিদ পরিচালনা করুন।" 
        : "View payment history, download invoices, and manage subscription receipts."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-saffron-600" />,
      title: language === "bn" ? "প্রোফাইল পরিচালনা" : "Profile Management",
      description: language === "bn"
        ? "আপনার সদস্যপদ বিবরণ, যোগাযোগের তথ্য এবং রেজিস্ট্রেশন অবস্থা আপ টু ডেট রাখুন।"
        : "Keep your membership details, contact info, and registration status up to date."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-saffron-600" />,
      title: language === "bn" ? "অ্যাকাউন্ট স্টেটমেন্ট" : "Account Statements",
      description: language === "bn"
        ? "বাকি অবদান, বর্তমান সক্রিয় অবস্থা এবং অ্যাসোসিয়েশনের লেজার ট্র্যাক করুন।"
        : "Track outstanding contributions, current active status, and association ledger."
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen flex flex-col justify-center">
      <Helmet>
        <title>{language === "bn" ? "সদস্য পোর্টাল | AVD West Bengal" : "Members Portal | AVD West Bengal"}</title>
        <meta name="description" content="Access your AVD West Bengal Member Account Portal to manage dues, billing, subscriptions and download receipts." />
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-3 bg-saffron-100 rounded-full text-saffron-600 mb-4"
          >
            <Key className="h-6 w-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
          >
            {language === "bn" ? "সদস্য পোর্টাল" : "Members Portal"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-8 text-slate-600"
          >
            {language === "bn" 
              ? "অ্যাসোসিয়েশন অফ ভেটেরিনারি ডক্টরস, ওয়েস্ট বেঙ্গলের সুরক্ষিত সদস্য পোর্টালে আপনাকে স্বাগত।"
              : "Welcome to the secure Member Portal for the Association of Veterinary Doctors, West Bengal."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1: Secure Account Access */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Top Banner Accent */}
              <div className="h-2 bg-gradient-to-r from-saffron-500 to-amber-600" />
              
              <div className="p-8 sm:p-10">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  {language === "bn" ? "সুরক্ষিত অ্যাকাউন্ট অ্যাক্সেস" : "Secure Account Access"}
                </h2>

                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  {language === "bn"
                    ? "আমাদের সমন্বিত অ্যাকাউন্ট পোর্টাল সদস্যদের সহজেই সদস্যপদের স্থিতি ট্র্যাক করতে, বিলিং বিবরণ দেখতে এবং সুরক্ষিতভাবে অফিশিয়াল পেমেন্ট রসিদ সংগ্রহ করতে দেয়। সাইন ইন করতে নীচের বোতামটি ক্লিক করুন।"
                    : "Our integrated accounts portal allows members to easily track membership status, view billing details, and retrieve official payment receipts securely. Click the button below to sign in or access your account profile."}
                </p>

                {/* Portal Features / What can you do */}
                <div className="space-y-6 mb-10">
                  {portalFeatures.map((feat, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 p-2 bg-saffron-50 rounded-lg">
                        {feat.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">{feat.title}</h3>
                        <p className="text-xs text-slate-500 mt-1">{feat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 sm:px-10 sm:pb-10">
              {/* CTA Portal Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-slate-500 leading-normal">
                    <span className="font-semibold text-slate-700">{language === "bn" ? "অফিশিয়াল পোর্টাল অ্যাক্সেস" : "Official Portal Access"}</span>
                    <p>{language === "bn" ? "আপনাকে জোহো (Zoho)-তে হোস্ট করা আমাদের সুরক্ষিত পোর্টালে নিয়ে যাওয়া হবে।" : "You will be redirected to our secure financial portal hosted on Zoho."}</p>
                  </div>
                </div>
                <a 
                  href="https://books.zohosecure.in/portal/avdwb"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm text-white bg-saffron-600 hover:bg-saffron-700 active:bg-saffron-800 px-5 py-3 rounded-xl transition-all shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2 shrink-0 group"
                >
                  {language === "bn" ? "সদস্য অ্যাকাউন্ট পোর্টাল" : "Member Account Portal"}
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Expense Reimbursement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Top Banner Accent */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
              
              <div className="p-8 sm:p-10">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-blue-600" />
                  {language === "bn" ? "খরচ প্রতিপূরণ" : "Expense Reimbursement"}
                </h2>

                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  {language === "bn"
                    ? "অ্যাসোসিয়েশনের কাজের জন্য অনুমোদিত খরচের প্রতিপূরণ দাবি করতে নীচের অনলাইন ফর্মটি পূরণ করুন অথবা অফলাইন ফর্মটি ডাউনলোড করে জমা দিন।"
                    : "Submit claims for authorized expenses incurred on behalf of the Association. Choose between online submission or offline form download."}
                </p>

                {/* ONLINE CLAIMS */}
                <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-5 mb-5">
                  <h3 className="text-xs font-extrabold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    {language === "bn" ? "পদ্ধতি ১: অনলাইনে আবেদন করুন" : "Option 1: Submit Claim Online"}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {language === "bn"
                      ? "আপনার বিল ও রসিদ আপলোড করে দ্রুততম উপায়ে অনলাইনে প্রতিপূরণের দাবি জানান।"
                      : "The quickest way to get reimbursed. Upload your bills and submit your expense details online."}
                  </p>
                  <a 
                    href="https://forms.gle/Ev7boZTnFK99tRch7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-5 py-3 font-bold hover:from-blue-700 hover:to-indigo-700 shadow-sm hover:shadow transition-all duration-200 w-full text-center group text-xs sm:text-sm"
                  >
                    <FileText className="w-4 h-4 transform group-hover:scale-105 transition-transform" />
                    <span>{language === "bn" ? "অনলাইনে দাবি জানান" : "Submit Claim Online"}</span>
                  </a>
                </div>

                {/* OFFLINE CLAIMS */}
                <div className="border-t border-slate-100 pt-5">
                  <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                    {language === "bn" ? "পদ্ধতি ২: অফলাইনে আবেদন করুন" : "Option 2: Apply Offline"}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {language === "bn"
                      ? "প্রতিপূরণ দাবি ফর্মের হার্ড কপি ডাউনলোড করুন এবং পূরণ করে রসিদ সহ কোষাধ্যক্ষের কাছে জমা দিন।"
                      : "Download the hardcopy reimbursement claim form to fill out and submit manually with physical receipts."}
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/12MhqbjnQI44yIx9f5dCAT5MVVz2QGRI9/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl px-5 py-3 font-bold shadow-2xs hover:shadow-xs transition-all duration-200 w-full text-center group text-xs sm:text-sm"
                  >
                    <Download className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
                    <span>{language === "bn" ? "দাবি ফর্ম ডাউনলোড করুন" : "Download Claim Form"}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
