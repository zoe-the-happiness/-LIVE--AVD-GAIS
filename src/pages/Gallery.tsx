import { useState, MouseEvent } from "react";
import { allPhotos } from "../data/photos";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === null || prevIndex === 0 ? allPhotos.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === null || prevIndex === allPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Moment Gallery | AVD West Bengal</title>
        <meta name="description" content="A glimpse of state-wide activities, veterinary actions, and clinical events of the Association of Veterinary Doctors West Bengal." />
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center gap-3">
          <div className="p-3 bg-saffron-100 rounded-full text-saffron-600 mb-2">
            <ImageIcon className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">AVD Moments Gallery</h1>
          <p className="text-slate-600 max-w-2xl">
            Explore photos of our state-wide activities, meetings, events, and milestones across West Bengal.
          </p>
        </div>

        {/* Dynamic Responsive Columns Grid for Photos */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {allPhotos.map((photo, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.3) }}
              key={i} 
              onClick={() => setSelectedImageIndex(i)}
              className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm border border-slate-200 cursor-pointer bg-white"
            >
              <img 
                src={photo} 
                alt={`AVD Event Moment ${i + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/95 text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-xl backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Photo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive Lightbox with Nav Controls */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex justify-center items-center p-4 sm:p-8 cursor-zoom-out select-none"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors focus:outline-none z-10"
              onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Prev button */}
            <button 
              className="absolute left-4 sm:left-8 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors focus:outline-none z-10"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative max-w-full max-h-[85vh] flex flex-col items-center">
              <motion.img 
                key={selectedImageIndex}
                initial={{ scale: 0.95, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.95, opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={allPhotos[selectedImageIndex]} 
                alt={`AVD Event Moment ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[80vh] rounded-xl shadow-2xl ring-1 ring-white/20 cursor-default object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-3 text-white/70 text-sm font-medium tracking-wide">
                Photo {selectedImageIndex + 1} of {allPhotos.length}
              </div>
            </div>

            {/* Right Next button */}
            <button 
              className="absolute right-4 sm:right-8 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors focus:outline-none z-10"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
