"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function FAQServices() {
  const faqs = [
    {
      question: "Why should I choose Redvission to manage my investments?",
      answer:
        "At Redvission, we don’t just recommend products—we build portfolios aligned with your life goals...",
    },
    {
      question: "Is my money safe if I invest through Redvission?",
      answer:
        "Absolutely. Your investments are held with SEBI-registered mutual funds...",
    },
    {
      question: "Do I have to pay anything to get started?",
      answer:
        "No. We don’t charge you any upfront or advisory fees...",
    },
    {
      question: "What kind of investors do you work with?",
      answer:
        "Whether you're just starting your investment journey or managing a multi-crore portfolio...",
    },
    {
      question: "Will I get regular updates and personal support?",
      answer:
        "Yes! We provide timely portfolio reviews, performance insights...",
    },
    {
      question: "I’ve already invested elsewhere. Can you still help?",
      answer:
        "Of course. We offer portfolio reviews and restructuring...",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className=" main_section  overflow-hidden">
        <h2 className="text-3xl font-bold  mb-4">
    Frequently Asked Questions
  </h2>
      {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-2 border border-white rounded-2xl overflow-hidden"
              variants={childFade}
            >
              <button
                className="items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none hover:text-[var(--rv-primary)] focus-visible:ring-1 text-white focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow w-full flex justify-between text-left whitespace-normal p-5 bg-[var(--rv-secondary)]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[16px] md:text-lg font-bold text-white text-left break-words hover:text-[var(--rv-primary)]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5  " />
                ) : (
                  <PlusIcon className="w-5 h-5 " />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[var(--rv-secondary)] text-white border-t">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
    </section>
  );
}
