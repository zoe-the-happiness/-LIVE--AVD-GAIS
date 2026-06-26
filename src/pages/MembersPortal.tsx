import { Key, ShieldAlert, BookOpen, Receipt, UserCheck, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

export function MembersPortal() {
  const portalFeatures = [
    {
      icon: <Receipt className="w-5 h-5 text-saffron-600" />,
      title: "Billing & Receipts",
      description: "View payment history, download invoices, and manage subscription receipts."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-saffron-600" />,
      title: "Profile Management",
      description: "Keep your membership details, contact info, and registration status up to date."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-saffron-600" />,
      title: "Account Statements",
      description: "Track outstanding contributions, current active status, and association ledger."
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen flex flex-col justify-center">
      <Helmet>
        <title>Members Portal | AVD West Bengal</title>
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
            Members Portal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-8 text-slate-600"
          >
            Welcome to the secure Member Portal for the Association of Veterinary Doctors, West Bengal.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
        >
          {/* Top Banner Accent */}
          <div className="h-2 bg-gradient-to-r from-saffron-500 to-amber-600" />
          
          <div className="p-8 sm:p-10">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              Secure Account Access
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Our integrated accounts portal allows members to easily track membership status, view billing details, and retrieve official payment receipts securely. Click the button below to sign in or access your account profile.
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
                    <p className="text-sm text-slate-500 mt-1">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Portal Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-500 leading-normal">
                  <span className="font-semibold text-slate-700">Official Portal Access</span>
                  <p>You will be redirected to our secure financial portal hosted on Zoho.</p>
                </div>
              </div>
              <a 
                href="https://books.zohosecure.in/portal/associationofveterinarydoctors"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm text-white bg-saffron-600 hover:bg-saffron-700 active:bg-saffron-800 px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2 shrink-0 group"
              >
                Member Account Portal
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
