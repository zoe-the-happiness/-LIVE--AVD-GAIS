import { ShieldAlert, RefreshCw, XOctagon, CreditCard } from "lucide-react";

export function RefundPolicy() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-center mb-4">
          Refund, Cancellation &amp; Payment Policy
        </h1>
        <p className="text-slate-500 text-center text-sm mb-12">
          Effective Date: July 12, 2026 | Last Updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xs border border-slate-200/80 space-y-12">
          
          {/* Section 1: Refund Policy */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">1. Refund Policy for Products &amp; Services</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                At the <strong>Association of Veterinary Doctors, West Bengal (AVD WB)</strong>, we are committed to transparent operations. The refund terms vary by item and service type as detailed below:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Membership Registration Fees &amp; Subscriptions:</strong> All registration fees and annual subscription fees paid toward membership are one-time, final, and non-refundable. Since resources are allocated immediately upon registration approval, no refunds can be issued upon voluntary resignation, cessation, or expulsion.
                </li>
                <li>
                  <strong>Double / Accidental Payments:</strong> In cases of duplicate transactions, technical payment failures, or accidental multiple checkouts during portal usage, any excess amount collected will be fully refunded to the source account. 
                </li>
                <li>
                  <strong>Physical Publications &amp; Journals:</strong> Refund claims for physical subscriptions (e.g., printed copies of <em>Pashu-Pragati Journal</em> or <em>AVD Smaranika</em>) are eligible for a refund only if the print is proven defective, damaged during transit, or undelivered due to an administrative error on our part.
                </li>
              </ul>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs text-slate-500">
                <strong>Refund Claim Window:</strong> Any claim for accidental duplicate transactions or publication damage must be filed with our finance desk via email at <a href="mailto:treasurer@avdwb.com" className="text-blue-600 hover:underline">treasurer@avdwb.com</a> within 15 calendar days of the transaction. Approved refunds are processed directly back to the original source payment method within 7 to 10 working days.
              </div>
            </div>
          </section>

          {/* Section 2: Return and Replacement Policy */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">2. Return &amp; Replacement Policies</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                As a professional volunteer association, we do not engage in standard commercial retail. However, we do publish scientific papers, books, and souvenirs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Physical Souvenirs and Souvenir Print Copies:</strong> If a physical copy of the annual <em>AVD Smaranika</em> or the <em>Pashu-Pragati Journal</em> contains severe printing errors (e.g., misprinted pages, missing sections) or has been damaged in delivery, we will supply a replacement free of charge.
                </li>
                <li>
                  <strong>Verification Requirements:</strong> To initiate a replacement, members must send a photograph showing the physical defect or transit damage along with details of their order/subscription ID to our IT and support team at <a href="mailto:support@avdwb.com" className="text-blue-600 hover:underline">support@avdwb.com</a>.
                </li>
                <li>
                  <strong>Return Process:</strong> Upon confirmation of the claim, AVD WB will either dispatch a fresh copy or provide instructions for the retrieval of the damaged book. No return charges will be levied on the member.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Cancellation Policies */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-red-50 text-red-600 rounded-xl">
                <XOctagon className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">3. Cancellation Policies for Services</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                The cancellation guidelines for services provided through our central office and digital systems are as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Membership Application Cancellations:</strong> If you wish to cancel an active membership application before it is formally reviewed and admitted by the Central Executive Committee, please contact us immediately. If the application has not yet been processed, we may stop registration and cancel the draft invoice.
                </li>
                <li>
                  <strong>Subscribed Periodicals &amp; Journal Deliveries:</strong> You can cancel your annual recurring print delivery subscription for the <em>Pashu-Pragati Journal</em> at any point. Upon cancellation, physical shipments will be suspended starting from the next scheduled issue. No partial refunds will be provided for issues already shipped.
                </li>
                <li>
                  <strong>Event &amp; Seminar Registrations:</strong> Cancellation of registrations for state conferences, technical seminars, or continuing veterinary education (CVE) workshops must be requested at least 72 hours before the event commencement to be eligible for credits or fee adjustments towards future events.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Payment Terms */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">4. Payment &amp; Advance Terms</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                To maintain administrative sustainability and prevent computational backlogs, we enforce standard accounting routines:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Advance Payments:</strong> If we collect advance subscription dues or security/deposit contributions for custom programmatic partnerships (e.g. corporate research publishing sponsorships, private veterinary camps), these terms are governed strictly by separate bilateral MoUs.
                </li>
                <li>
                  <strong>Partial Payments:</strong> We do not accept partial or installment-based payments for registration or subscription fees. All membership fees must be paid in full during submission to guarantee system processing and verification.
                </li>
                <li>
                  <strong>Currency:</strong> All payments made on our platform must be processed in <strong>Indian Rupees (INR)</strong>. Prices, dues, and transaction details are clearly declared inclusive of all applicable statutory dues.
                </li>
              </ul>
            </div>
          </section>

          <div className="pt-8 border-t border-slate-100 text-xs text-slate-500 leading-relaxed space-y-2">
            <p>
              <strong>Contact Directory for Financial Inquiries:</strong>
            </p>
            <p>
              For any payment anomalies, receipt issues, or refund requests, please email our financial desk directly at <a href="mailto:treasurer@avdwb.com" className="text-blue-600 font-semibold hover:underline">treasurer@avdwb.com</a> or reach out to the Treasurer and Finance Head at <a href="tel:6289912112" className="text-slate-700 hover:text-blue-600 hover:underline">6289912112</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
