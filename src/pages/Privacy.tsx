import { Shield, Lock, Eye, Mail, Phone, Calendar } from "lucide-react";

export function Privacy() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-center text-sm mb-12">
          Effective Date: July 12, 2026 | Last Updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xs border border-slate-200/80 space-y-12">
          
          {/* Section 1: Introduction */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">1. Introduction &amp; Commitment</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                The <strong>Association of Veterinary Doctors, West Bengal (AVD WB)</strong> respects your privacy and is dedicated to guarding your personal, contact, and professional details. 
                This Privacy Policy outlines how we collect, store, verify, and utilize your particulars when you interact with our web portal, apply for membership, make financial subscription payments, or request publications.
              </p>
              <p>
                By using our systems, you agree to the collection and use of information in accordance with this policy. Under no circumstances do we sell, rent, lease, or distribute your private database records to third-party commercial marketing networks.
              </p>
            </div>
          </section>

          {/* Section 2: Data We Collect */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">2. The Personal &amp; Professional Data We Collect</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                To comply with statutory association requirements and ensure only certified veterinary doctors access portal privileges, we collect and store:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Identity Details:</strong> Full name, father's/spouse's name, date of birth, gender, and photograph.
                </li>
                <li>
                  <strong>Contact Particulars:</strong> Home address, clinical/hospital posting address, active mobile numbers, and email addresses.
                </li>
                <li>
                  <strong>Regulatory Credentials:</strong> State Veterinary Council Registration Numbers, VCI registration particulars, qualification degrees, year of graduation, and veterinary college details.
                </li>
                <li>
                  <strong>Financial &amp; Transaction Logs:</strong> Transaction references, payment dates, subscription status, amount paid, and invoice details. We do <em>not</em> store actual debit/credit card pin codes, netbanking passwords, or full credit cards on our servers (all payments are routed via certified, PCI-DSS compliant third-party gateways).
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Data Security */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">3. Data Security, Protection &amp; Retention</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                To secure our databases and prevent unauthorized access:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>All network communications with our servers are encrypted using high-grade Secure Socket Layer (SSL/TLS) technology.</li>
                <li>We restrict access to membership databases strictly to authorized Central Executive Committee members, designated administrators, and accredited IT officers.</li>
                <li>Information is retained as long as you maintain an active membership status with AVD WB or to satisfy statutory accounting, legal audit, or tax requirements in India.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Contact & Grievance Directory */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">4. Central Communications Directory</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                In compliance with administrative clarity, you may contact our specific departmental desks for inquiries, security audits, or personal detail updates:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                
                {/* Emails */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" /> Departmental Emails
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">General Public Queries</span>
                      <a href="mailto:contact@avdwb.com" className="text-blue-600 hover:underline">contact@avdwb.com</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Central Administration Desk</span>
                      <a href="mailto:admin@avdwb.com" className="text-blue-600 hover:underline">admin@avdwb.com</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Membership Support Helpdesk</span>
                      <a href="mailto:support@avdwb.com" className="text-blue-600 hover:underline">support@avdwb.com</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Finance, Audit &amp; accounts</span>
                      <a href="mailto:treasurer@avdwb.com" className="text-blue-600 hover:underline">treasurer@avdwb.com</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Outreach &amp; CSR Projects</span>
                      <a href="mailto:csr@avdwb.com" className="text-blue-600 hover:underline">csr@avdwb.com</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">IT, Web Portal &amp; Tech Systems</span>
                      <a href="mailto:it@avdwb.com" className="text-blue-600 hover:underline">it@avdwb.com</a>
                    </li>
                  </ul>
                </div>

                {/* Phones */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" /> Direct Official Contact Numbers
                    </h4>
                    <ul className="space-y-4 text-xs sm:text-sm">
                      <li className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">General Secretary</span>
                        <a href="tel:9434306504" className="text-emerald-700 hover:underline font-semibold mt-0.5">9434306504</a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Treasurer, Finance &amp; Accounts Head</span>
                        <a href="tel:6289912112" className="text-emerald-700 hover:underline font-semibold mt-0.5">6289912112</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-slate-200/60 pt-4 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5" /> Grid updated for compliance year 2026-27
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
