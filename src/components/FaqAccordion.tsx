import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface IFaqItem {
  question: string;
  answer: string;
}

const faqs: IFaqItem[] = [
  {
    question: "Who can become a member?",
    answer: "Membership is open to all veterinarians, including serving, retired, and student categories, provided they meet the basic requirement of holding a recognized veterinary qualification.",
  },
  {
    question: "How do I apply for membership?",
    answer: "You can apply for membership online through our 'Become a Member' page or by contacting your district representative. You will need to submit proof of qualification and the required fee.",
  },
  {
    question: "Are there membership fees?",
    answer: "Yes, there is an annual or lifetime subscription fee depending on the membership category chosen. Student and retired members often qualify for reduced rates. Please check the membership page for current fees.",
  },
  {
    question: "What is the registration number of AVD?",
    answer: "AVD is a professional association of veterinarians, registered as a society under the West Bengal Societies Registration Act, 1961. The registration number is 34784.",
  }
];

export function FaqAccordion() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-col space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}

const FaqItem: React.FC<{ faq: IFaqItem }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "border rounded-lg p-3 flex justify-between items-center cursor-pointer transition-colors",
          isOpen ? "bg-slate-50 border-saffron-100" : "bg-white border-slate-200"
        )}
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-sm font-semibold text-left",
          isOpen ? "text-slate-800" : "text-slate-700"
        )}>
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200", 
            isOpen ? "text-saffron-600 -rotate-180" : "text-slate-400"
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-2 text-xs text-slate-500 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
