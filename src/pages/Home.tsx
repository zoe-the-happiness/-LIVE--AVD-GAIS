import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Users, Image as ImageIcon } from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { Helmet } from "react-helmet-async";
import { Carousel } from "../components/Carousel";
import { allPhotos, heroPhotos } from "../data/photos";

export function Home() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who can become a member?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Membership is open to all veterinarians, including serving, retired, and student categories, provided they meet the basic requirement of holding a recognized veterinary qualification."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for membership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can apply for membership online through our 'Become a Member' page or by contacting your district representative. You will need to submit proof of qualification and the required fee."
        }
      },
      {
        "@type": "Question",
        "name": "Are there membership fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, there is an annual or lifetime subscription fee depending on the membership category chosen. Student and retired members often qualify for reduced rates. Please check the membership page for current fees."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>AVD West Bengal - Association of Veterinary Doctors</title>
        <meta name="description" content="A professional association of veterinarians in West Bengal." />
        <script type="application/ld+json">
          {JSON.stringify(ldJson)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-6 py-16 lg:px-12 bg-saffron-900 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-block px-3 py-1 bg-saffron-800/50 border border-saffron-600/50 rounded-md text-xs font-semibold mb-4 tracking-wide text-saffron-200 uppercase">
             Established 1961
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Association of Veterinary Doctors
          </h1>
          <p className="text-lg sm:text-xl text-saffron-100/90 font-light mb-8 leading-relaxed max-w-lg">
            A professional association of veterinarians in West Bengal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/membership" className="bg-white text-saffron-900 px-8 py-3 rounded-md font-bold text-sm shadow-lg hover:bg-slate-100 text-center flex items-center justify-center gap-2">
              Become a Member <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="bg-transparent border border-white/40 text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-white/10 text-center">
              About AVD
            </Link>
          </div>
        </div>
        <div className="absolute right-12 bottom-12 w-[400px] h-[300px] xl:w-[500px] xl:h-[360px] hidden lg:block rounded-2xl shadow-2xl overflow-hidden ring-4 ring-white/20 transform rotate-2">
          <Carousel images={heroPhotos} interval={4000} />
        </div>
      </section>

      {/* Facts Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-slate-200 bg-white shadow-sm shrink-0">
        <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 flex gap-4">
          <div className="mt-1">
            <Shield className="h-6 w-6 text-saffron-600" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-1">Registered Society</h3>
            <p className="text-sm text-slate-500 leading-snug">Officially registered under the WB Societies Registration Act, 1961 (Reg. No. 34784).</p>
          </div>
        </div>
        <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 flex gap-4 bg-slate-50/50">
          <div className="mt-1">
            <CheckCircle2 className="h-6 w-6 text-saffron-600" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-1">Statewide Network</h3>
            <p className="text-sm text-slate-500 leading-snug">A strong and growing network connecting veterinary professionals across all districts of West Bengal.</p>
          </div>
        </div>
        <div className="p-8 flex gap-4">
          <div className="mt-1">
            <Users className="h-6 w-6 text-saffron-600" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-1">Open to Veterinarians</h3>
            <p className="text-sm text-slate-500 leading-snug">Welcoming serving professionals, retired experts, and veterinary students.</p>
          </div>
        </div>
      </section>

      {/* About & FAQ Section */}
      <section className="flex-1 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white">
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-saffron-700 uppercase tracking-widest">About the Association</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            AVD is a professional association of veterinarians, registered as a society under the West Bengal Societies Registration Act, 1961. We are dedicated to advancing the veterinary profession and supporting our members across the state.
          </p>
          <div className="pt-4 flex gap-4">
            <div className="flex flex-col px-4 py-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-2xl font-bold text-saffron-800">5,000+</span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Active Members</span>
            </div>
            <div className="flex flex-col px-4 py-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-2xl font-bold text-saffron-800">23</span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">District Units</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-saffron-700 uppercase tracking-widest">Frequently Asked Questions</h4>
          <FaqAccordion />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-slate-50 border-t border-slate-200 p-8 lg:p-12 shrink-0">
        <div className="mb-8 flex items-center gap-3">
          <ImageIcon className="h-6 w-6 text-saffron-600" />
          <h2 className="text-2xl font-bold text-slate-800">Photo Gallery</h2>
        </div>
        <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {allPhotos.map((photo, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-sm border border-slate-200">
              <img 
                src={photo} 
                alt={`AVD Event preview ${i + 1}`} 
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-saffron-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-white/90 text-saffron-900 px-3 py-1 rounded-full text-xs font-semibold shadow backdrop-blur-sm shadow-black/20">
                    View
                 </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
