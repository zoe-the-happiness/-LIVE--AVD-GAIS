import { Shield, BookOpen, AlertCircle, Coins, Globe, Landmark } from "lucide-react";

export function Terms() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-center mb-4">
          Terms &amp; Conditions of Service
        </h1>
        <p className="text-slate-500 text-center text-sm mb-12">
          Effective Date: July 12, 2026 | Last Updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xs border border-slate-200/80 space-y-12">
          
          {/* Intro */}
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="leading-relaxed">
              Welcome to the official web portal of the <strong>Association of Veterinary Doctors, West Bengal (AVD WB)</strong>. 
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and the Association of Veterinary Doctors (“AVD”, “we”, “us”, or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.
            </p>
            <p className="leading-relaxed">
              By accessing the Site, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
          </div>

          {/* Section 1: Business Profile & Services */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">1. Service Details &amp; Business Scope</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                AVD WB is a professional, non-political, and voluntary registered body representing veterinary professionals across West Bengal, India. The services and facilities offered via this portal include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>Online membership enrollment, registry administration, and annual subscription renewals.</li>
                <li>Access to the central notice board, local district unit announcements, and member directories.</li>
                <li>Digital downloads and physical delivery subscriptions of scientific periodicals, newsletters, and annual souvenirs (such as <em>Pashu-Pragati Journal</em>, <em>Pashu Sewa Samvad</em>, and <em>AVD Smaranika</em>).</li>
                <li>Continuing Veterinary Education (CVE) event registrations, administrative circular tracking, and welfare support claims.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Membership Eligibility & Legal Restrictions */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">2. Eligibility, Registration &amp; Industry-Specific Regulations</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                In compliance with local rules and medical regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Professional Registration Constraint:</strong> To qualify for general membership and portal access, the applicant must be a certified veterinary doctor holding a valid registration certificate issued by a State Veterinary Council in India or the Veterinary Council of India (VCI).
                </li>
                <li>
                  <strong>Age and Citizenship:</strong> You represent and warrant that you are an Indian citizen, aged 18 or above, and possess the legal capacity to enter into binding agreements.
                </li>
                <li>
                  <strong>Verification Authority:</strong> The Central Executive Committee of AVD retains full power to verify credentials, request supporting paperwork, and refuse portal registration or membership admission without assigning any reason.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Payment Terms & Currency */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Coins className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">3. Payment Terms &amp; Transaction Currency</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                To provide absolute pricing clarity on transactions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Transaction Currency:</strong> All fees, dues, subscriptions, and publication charges listed on our website are settled in <strong>Indian Rupees (INR)</strong>. 
                </li>
                <li>
                  <strong>Advance and Partial Payments:</strong> We do not accept partial, installment-based, or fragmented payments for standard memberships. Any corporate sponsorship or advanced research publication allocations are subject to specific MoUs.
                </li>
                <li>
                  <strong>Tax &amp; Surcharges:</strong> All payments are shown inclusive of any applicable bank processing gateways or statutory taxes where required.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Cancellation & Refund Summary */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">4. Cancellations &amp; Refund Policies</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                All financial contributions, registration fees, and membership subscription renewals are final and non-refundable. 
              </p>
              <p className="text-sm">
                For detailed rules regarding accidental duplicate transactions, defective/damaged publication prints, and cancellations of periodic deliveries, please consult our full <a href="/refund-policy" className="text-blue-600 hover:underline font-semibold">Refund &amp; Cancellation Policy</a>.
              </p>
            </div>
          </section>

          {/* Section 5: Return & Shipping Summary */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-sky-50 text-sky-600 rounded-xl">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">5. Shipping, Returns &amp; Export Controls</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                We distribute educational journals, bulletins, and event souvenirs to registered addresses.
              </p>
              <p className="text-sm">
                Please review our <a href="/shipping-policy" className="text-blue-600 hover:underline font-semibold">Shipping, Delivery &amp; Export Policy</a> to understand tracking routines, replacement processes for misprinted material, local delivery exceptions across West Bengal, and export licensing guidelines for international institutional dispatches.
              </p>
            </div>
          </section>

          {/* Section 6: Governance */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">6. Intellectual Property &amp; User Conduct</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                All source code, design blueprints, website layouts, visual logos, scientific articles, and content are the sole property of AVD West Bengal. You agree to utilize this portal only for professional, legal, and non-partisan purposes. Commercial exploitation of membership databases, automated data extraction, and partisan/political campaign advertisements are strictly prohibited on our systems.
              </p>
            </div>
          </section>

          {/* Bottom Footer Directory */}
          <div className="pt-8 border-t border-slate-100 text-xs text-slate-500 leading-relaxed space-y-3">
            <p className="font-semibold text-slate-700">Contact &amp; Administrative Directory:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p><strong>Central Administration Desk:</strong></p>
                <p>Email: <a href="mailto:admin@avdwb.com" className="text-blue-600 hover:underline">admin@avdwb.com</a></p>
                <p>Phone (General Secretary): <a href="tel:9434306504" className="text-slate-700 hover:underline">9434306504</a></p>
              </div>
              <div>
                <p><strong>Accounts &amp; Payment Desk:</strong></p>
                <p>Email: <a href="mailto:treasurer@avdwb.com" className="text-blue-600 hover:underline">treasurer@avdwb.com</a></p>
                <p>Phone (Treasurer): <a href="tel:6289912112" className="text-slate-700 hover:underline">6289912112</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
