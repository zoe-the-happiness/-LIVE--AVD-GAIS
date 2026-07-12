import { Truck, Globe2, AlertTriangle, ShieldCheck } from "lucide-react";

export function ShippingPolicy() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-center mb-4">
          Shipping, Delivery &amp; Export Policy
        </h1>
        <p className="text-slate-500 text-center text-sm mb-12">
          Effective Date: July 12, 2026 | Last Updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xs border border-slate-200/80 space-y-12">
          
          {/* Section 1: Shipping and Delivery */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Truck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">1. Shipping &amp; Delivery of Physical Material</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                As part of its organizational mandate, the <strong>Association of Veterinary Doctors, West Bengal (AVD WB)</strong> distributes physical veterinary publications, journals, and souvenirs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Dispatch Schedule:</strong> Physical journals like <em>Pashu-Pragati Journal</em> and newsletters like <em>Pashu Sewa Samvad</em> are dispatched to members' registered residential or clinic addresses quarterly or bi-annually according to the publishing calendar.
                </li>
                <li>
                  <strong>Smaranika Souvenir Dispatch:</strong> The annual <em>AVD Smaranika</em> is sent to members via registered post or reliable courier services within 30 days of release.
                </li>
                <li>
                  <strong>Tracking:</strong> Tracking IDs for parcel dispatches are sent to members via email or SMS once packages are handed over to the postal/courier authorities.
                </li>
                <li>
                  <strong>Delivery Partners:</strong> We primarily partner with India Post (Registered Post / Speed Post) and regional premium couriers to ensure dependable delivery to remote veterinary block locations across West Bengal.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Transaction Currency */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">2. Transaction Currency</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                All dues, membership subscriptions, registrations, and publication acquisition options listed on our website are denominated and must be processed in <strong>Indian Rupees (INR)</strong>. 
              </p>
              <p className="text-sm">
                If international institutional subscriptions are requested, payments must be processed using approved international wire systems or card channels that settle automatically in Indian Rupees (INR) based on daily conversion values.
              </p>
            </div>
          </section>

          {/* Section 3: Export & Customs Restrictions */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">3. Export &amp; International Delivery Restrictions</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Any delivery of physical journals, publications, or books to institutional addresses outside India is subject to the following regulatory framework:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Export Controls &amp; Licenses:</strong> Delivery of academic material is made in full compliance with Indian export policies. We do not ship to countries, entities, or individuals restricted under sovereign trade sanctions.
                </li>
                <li>
                  <strong>Customs &amp; Duties:</strong> For international dispatches, recipients are solely responsible for clearing customs and paying any local import duties, levies, or administrative charges that may apply at the port of destination.
                </li>
                <li>
                  <strong>Delivery Timelines:</strong> International deliveries are made via reliable international express couriers or registered international airmail. Delivery timelines vary depending on carrier logistics and destination customs processing (typically 15 to 25 business days).
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: General Disclaimer & Safety */}
          <section className="relative">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <div className="p-2 bg-red-50 text-red-600 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">4. Address Validity &amp; Delivery Failures</h2>
            </div>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Members are responsible for keeping their profiles up-to-date in our central membership registry. AVD WB is not liable for non-delivery or shipping delays arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>Incorrect, incomplete, or out-of-date addresses entered on registration.</li>
                <li>Absence of recipient at the designated shipping address upon delivery attempts.</li>
                <li>Localized regional postal disruptions, weather hazards, or political blockades.</li>
              </ul>
              <p className="text-sm">
                In cases of undelivered parcels returned to our headquarters, our support desk will contact the member to verify their credentials. A secondary delivery charge may apply to re-ship the material.
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-slate-100 text-xs text-slate-500 leading-relaxed space-y-2">
            <p>
              <strong>Contact Directory for Shipping &amp; Logistics:</strong>
            </p>
            <p>
              For any tracking inquiries or address correction updates, please email our IT Support desk at <a href="mailto:it@avdwb.com" className="text-blue-600 font-semibold hover:underline">it@avdwb.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
