import { Building2, Mail, Globe, Phone, Users, Shield } from "lucide-react";

export function Contact() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-6">Contact Us</h1>
        <p className="text-lg leading-8 text-gray-600 mx-auto text-center mb-16">
          Have questions or need assistance? Reach out to our central office or find your district representative.
        </p>
        
        <div className="flex flex-col gap-12">
          {/* Section 1: Head Office */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-saffron-100 text-saffron-600 rounded-xl">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Head Office</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-600">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="font-semibold text-slate-900 mb-2 flex items-center gap-2">Address</div>
                <p className="text-sm leading-relaxed">
                  F-1, Tribeni Complex,<br />
                  36A Sahitya Parishad Street,<br />
                  Kolkata - 700006
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400" /> Email</div>
                <p className="text-sm">
                  <a href="mailto:contact@avdwb.com" className="text-blue-600 hover:text-blue-700 hover:underline">contact@avdwb.com</a>
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400" /> Website</div>
                <p className="text-sm">
                  <a href="https://www.avdwb.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">www.avdwb.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* New Section: Central Contact Directory & Helplines */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Central Contact Directory &amp; Helplines</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Helplines Block */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Users className="w-4 h-4 text-emerald-600" /> Administrative &amp; Support Helplines
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-xs">GS</div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">General Secretary</h4>
                      <a href="tel:9434306504" className="text-sm text-emerald-700 hover:underline font-bold">+91 9434306504</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-xs">TR</div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">Treasurer (Finance &amp; Accounts Head)</h4>
                      <a href="tel:6289912112" className="text-sm text-emerald-700 hover:underline font-bold">+91 6289912112</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emails Block */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Mail className="w-4 h-4 text-blue-600" /> Specific Departmental Emails
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">General Inquiries</span>
                    <a href="mailto:contact@avdwb.com" className="text-xs font-bold text-blue-600 hover:underline">contact@avdwb.com</a>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Central Admin Desk</span>
                    <a href="mailto:admin@avdwb.com" className="text-xs font-bold text-blue-600 hover:underline">admin@avdwb.com</a>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Member Helpdesk</span>
                    <a href="mailto:support@avdwb.com" className="text-xs font-bold text-blue-600 hover:underline">support@avdwb.com</a>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Finance &amp; Dues Desk</span>
                    <a href="mailto:treasurer@avdwb.com" className="text-xs font-bold text-blue-600 hover:underline">treasurer@avdwb.com</a>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Outreach &amp; CSR</span>
                    <a href="mailto:csr@avdwb.com" className="text-xs font-bold text-blue-600 hover:underline">csr@avdwb.com</a>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">IT &amp; Tech Systems</span>
                    <a href="mailto:it@avdwb.com" className="text-xs font-bold text-blue-600 hover:underline">it@avdwb.com</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Contact Form */}
          <section className="bg-white p-0 md:p-4 rounded-3xl border border-slate-200 shadow-sm flex justify-center overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1v4oku2-RFLYtuBfiyDLqvzOZV2GR2t7WU35KYFl5dkvDDw/viewform?embedded=true" 
              width="100%" 
              height="934" 
              frameBorder={0} 
              marginHeight={0} 
              marginWidth={0}
              className="max-w-full"
            >
              Loading…
            </iframe>
          </section>
        </div>
      </div>
    </div>
  );
}
