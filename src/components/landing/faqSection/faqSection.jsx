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

export function FAQ() {
  const faqs = [
    {
      question: " Why should I choose Ant Invest for my mutual fund investments?",
      answer:
        "Ant Invest offers expert-curated portfolios, personalized plans, and a secure, easy-to-use platform designed to help you grow your wealth efficiently and confidently.",
    },
    {
      question: "Is my investment safe with Ant Invest?",
      answer:
        " Yes. We prioritize security and transparency. Your investments are managed through regulated mutual fund providers, and our platform uses top-level encryption to protect your data.",
    },
    {
      question: " Are there any fees to start investing?",
      answer:
        "You can start with no hidden charges. Our platform is transparent about all applicable fees, and we provide clear information upfront.",
    },
    {
      question: "What types of investors do you cater to?",
      answer:
        "Whether you are a beginner or an experienced investor, we provide tailored investment plans suited for various risk appetites and financial goals.",
    },
    {
      question: " Will I receive regular updates and support?",
      answer:
        "Absolutely. You get real-time portfolio tracking, market insights, and access to our expert support team whenever you need assistance.",
    },
    {
      question: "Can I transfer or track investments made outside Ant Invest?",
      answer:
        "Yes, you can consolidate your mutual fund portfolio by adding investments made through other platforms for a comprehensive view of your wealth.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[var(--rv-secondary)] main_section text-center items-center overflow-hidden">
      <div className="mx-auto  max-w-screen-xl px-2 lg:px-0">
        <div className="section-title dark-section">
  <h3 className="wow fadeInUp">FAQ</h3>
  <h2 className="text-anime-style-2" data-cursor="-opaque">
    Frequently Asked <span>Questions</span>
  </h2>
  <p data-aos="fade-up" data-aos-anchor-placement="bottom">
    Find quick answers to common questions about our mutual fund investments, financial planning, credit support, and platform features. We’re here to help you make informed financial decisions with confidence.
  </p>
</div>

      <div className=" text-left flex flex-col lg:flex-row items-center gap-6 mt-10 px-3 md:px-5 lg:px-10">
        {/* Left Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[400px] lg:h-[530px]"
          variants={fadeFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/images/faq.png"
            alt="FAQ"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Right FAQ Section */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
  <motion.div
    key={index}
    className="mb-2 border border-white rounded-2xl overflow-hidden text-white group hover:text-[var(--rv-primary)]"
    variants={childFade}
  >
    <button
      className="items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow w-full flex justify-between text-left whitespace-normal p-5 bg-[var(--rv-secondary)] group-hover:text-[var(--rv-primary)]"
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      <span className="text-[16px] md:text-lg font-bold text-left break-words transition-colors group-hover:text-[var(--rv-primary)]">
        {faq.question}
      </span>
      {openIndex === index ? (
        <MinusIcon className="w-5 h-5 transition-colors group-hover:text-[var(--rv-primary)]" />
      ) : (
        <PlusIcon className="w-5 h-5 transition-colors group-hover:text-[var(--rv-primary)]" />
      )}
    </button>
    {openIndex === index && (
      <div className="p-4 bg-[var(--rv-secondary)] text-white border-t">
        {faq.answer}
      </div>
    )}
  </motion.div>
))}

        </motion.div>
      </div>
      </div>
    </section>
  );
}
