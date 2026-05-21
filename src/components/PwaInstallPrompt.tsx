import React, { useState, useEffect } from "react";
import { X, Share, PlusSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function PwaInstallPrompt() {
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);

  useEffect(() => {
    // Detect iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    // Detect if already installed / in standalone mode
    const isStandalone = () => {
      return (
        "standalone" in window.navigator && (window.navigator as any).standalone
      );
    };

    if (isIos() && !isStandalone()) {
      // Check if prompt was dismissed recently (e.g. valid for 1 day)
      const dismissed = localStorage.getItem("iosPwaPromptDismissed");
      if (!dismissed || Date.now() - parseInt(dismissed) > 86400000) {
        // Show after a slight delay
        setTimeout(() => setShowIOSPrompt(true), 3000);
      }
    }
  }, []);

  const dismissPrompt = () => {
    setShowIOSPrompt(false);
    localStorage.setItem("iosPwaPromptDismissed", Date.now().toString());
  };

  return (
    <AnimatePresence>
      {showIOSPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 bg-white rounded-2xl shadow-2xl p-5 z-[100] border border-gray-100"
        >
          <button
            onClick={dismissPrompt}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-6">
            <div className="w-12 h-12 flex-shrink-0 bg-saffron-100 rounded-xl flex items-center justify-center p-2">
              <img
                src="https://ik.imagekit.io/avdwb/Logo/20260517%20Logo_AVD.webp?tr=f-png,w-96,h-96"
                alt="AVD Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Install AVDWB App
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Add this app to your Home Screen for quick access!
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-xs font-semibold">
                    1
                  </span>
                  <span>
                    Tap on the{" "}
                    <Share className="w-4 h-4 inline-block text-blue-500 mx-1" />{" "}
                    icon below.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-xs font-semibold">
                    2
                  </span>
                  <span>
                    Select <strong>"Add to Home Screen"</strong>{" "}
                    <PlusSquare className="w-4 h-4 inline-block mx-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
