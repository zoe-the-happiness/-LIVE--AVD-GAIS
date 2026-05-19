import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Users, Image as ImageIcon, X } from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { Helmet } from "react-helmet-async";
import { Carousel } from "../components/Carousel";
import { allPhotos, heroPhotos } from "../data/photos";
import { AnimatePresence, motion } from "motion/react";

export function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <meta name="title" content="AVD West Bengal - Association of Veterinary Doctors" />
        <meta name="description" content="A premier professional body representing veterinarians across West Bengal, dedicated to excellence in animal healthcare and professional welfare." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AVD West Bengal - Association of Veterinary Doctors" />
        <meta property="og:description" content="A premier professional body representing veterinarians across West Bengal." />
        <meta property="og:image" content="https://ik.imagekit.io/dgevdmg7em/AVD/20260519%20AVD%20Photos%20(8).webp?updatedAt=1779185033992" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="AVD West Bengal - Association of Veterinary Doctors" />
        <meta property="twitter:description" content="A premier professional body representing veterinarians across West Bengal." />
        <meta property="twitter:image" content="https://ik.imagekit.io/dgevdmg7em/AVD/20260519%20AVD%20Photos%20(8).webp?updatedAt=1779185033992" />
        <script type="application/ld+json">
          {JSON.stringify(ldJson)}
        </script>
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative px-6 py-20 lg:py-28 lg:px-12 bg-slate-950 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Abstract Glows */}
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-saffron-900/20 blur-[120px] mix-blend-screen"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-900/20 blur-[100px] mix-blend-screen"></div>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 opacity-[0.03]">
            <path d="M0 100 L100 0 L100 100 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-saffron-500/10 border border-saffron-500/20 rounded-full text-xs font-semibold mb-6 tracking-wide text-saffron-300 shadow-inner">
             <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse"></span>
             ESTABLISHED 1961
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Association of</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-saffron-600">Veterinary Doctors</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light mb-10 leading-relaxed max-w-lg">
            A premier professional body representing veterinarians across West Bengal, dedicated to excellence in animal healthcare and professional welfare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/membership" className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-3.5 rounded-lg font-bold text-sm shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_25px_rgba(255,153,51,0.4)] hover:from-saffron-400 hover:to-saffron-500 text-center flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5">
              Become a Member <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-white/10 text-center backdrop-blur-md transition-all transform hover:-translate-y-0.5">
              About AVD
            </Link>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:flex items-center justify-end pr-12 lg:pr-20 pointer-events-none">
          <div className="relative w-[500px] h-[360px] xl:w-[600px] xl:h-[420px] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500 pointer-events-auto">
            <Carousel images={heroPhotos} interval={4000} />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Premium Overlapping Facts Section */}
      <section className="relative z-20 max-w-7xl mx-auto -mt-12 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 bg-saffron-50 rounded-xl flex items-center justify-center text-saffron-600 ring-1 ring-saffron-100 shadow-inner">
            <Shield className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg tracking-tight">Registered Society</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Officially registered under the WB Societies Registration Act, 1961 (Reg. No. 34784).</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 bg-saffron-50 rounded-xl flex items-center justify-center text-saffron-600 ring-1 ring-saffron-100 shadow-inner">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg tracking-tight">Statewide Network</h3>
            <p className="text-sm text-slate-500 leading-relaxed">A strong and growing network connecting veterinary professionals across all districts of West Bengal.</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 bg-saffron-50 rounded-xl flex items-center justify-center text-saffron-600 ring-1 ring-saffron-100 shadow-inner">
            <Users className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg tracking-tight">Open to Veterinarians</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Welcoming serving professionals, retired experts, and veterinary students.</p>
          </div>
        </div>
      </section>

      {/* About & FAQ Section */}
      <section className="flex-1 px-6 py-12 lg:px-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-white max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-saffron-500"></span>
            <h4 className="text-xs font-bold text-saffron-600 uppercase tracking-widest">About the Association</h4>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Driving Excellence in Veterinary Science</h2>
          <p className="text-base leading-relaxed text-slate-600">
            AVD is a professional association of veterinarians, registered as a society under the West Bengal Societies Registration Act, 1961. We are dedicated to advancing the veterinary profession, advocating for member welfare, and supporting the livestock development of the state through scientific advancement and public policy engagement.
          </p>
          <div className="pt-6 flex gap-6">
            <div className="flex flex-col px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-extrabold text-slate-800 mb-1">5,000<span className="text-saffron-500">+</span></span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Members</span>
            </div>
            <div className="flex flex-col px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-extrabold text-slate-800 mb-1">23</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">District Units</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-saffron-500"></span>
            <h4 className="text-xs font-bold text-saffron-600 uppercase tracking-widest">Help & Support</h4>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* Gallery Section with Lightbox */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-6 lg:px-12 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col items-center text-center gap-3">
             <div className="p-3 bg-saffron-100 rounded-full text-saffron-600 mb-2">
                <ImageIcon className="h-6 w-6" />
             </div>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">AVD Moments & Gallery</h2>
            <p className="text-slate-500 max-w-2xl">A glimpse into our state-wide activities, meetings, and veterinary milestones across West Bengal.</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {allPhotos.map((photo, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(photo)}
                className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm border border-slate-200 cursor-pointer bg-white"
              >
                <img 
                  src={photo} 
                  alt={`AVD Event preview ${i + 1}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="bg-white/95 text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-xl backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Photo
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex justify-center items-center p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors focus:outline-none"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage} 
              alt="Expanded view"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl ring-1 ring-white/20 cursor-default object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
