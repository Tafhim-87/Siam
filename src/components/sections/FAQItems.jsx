"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What Service do you Provide?",
    answer:
      "I provide UI/UX design, website design, landing pages, SaaS dashboards, mobile app design, and design systems.",
  },
  {
    question: "What design tools do you use?",
    answer:
      "Project timelines depend on the scope and complexity of the work. Most projects are completed within 2–6 weeks, including design, development, and revisions.",
  },
  {
    question: "Do you work with developer?",
    answer:
      "Yes. I collaborate closely with developers to ensure pixel-perfect implementation and smooth handoff.",
  },
  {
    question: "Do you create a design system?",
    answer:
      "Yes. I create scalable design systems including components, typography, spacing, color tokens, and documentation.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Absolutely. Revision rounds are included depending on the selected package.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing varies based on project complexity, deliverables, timeline, and requirements.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can redesign existing websites to improve aesthetics, usability, accessibility, and conversions.",
  },
];

const FAQItem = ({ item, active, setActive, index }) => {
  const isOpen = active === index;

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#ECECEC]
        bg-cover
        bg-center
        bg-no-repeat
        relative
      "
      style={{
        backgroundImage: "url('/images/service/serviceBG.jpg')",
      }}
    >
      {/* Overlay to reduce opacity of background image without affecting content */}
      <div className="absolute inset-0 bg-white/70 rounded-2xl pointer-events-none" />

      <button
        onClick={() => setActive(isOpen ? null : index)}
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-6
          py-6
          text-left
        "
      >
        <div className="flex items-center gap-4">
          <span className="text-black text-lg">•</span>

          <h3
            className="
              font-semibold
              text-[#141414]
              text-base
              md:text-lg
              lg:text-2xl
            "
          >
            {item.question}
          </h3>
        </div>

        {/* Animated Plus */}
        <div className="relative flex h-8 w-8 items-center justify-center shrink-0">
  <Image
    src="/images/FAQ/circle.png"
    alt="Circle"
    fill
    className="object-contain"
  />

  {isOpen ? (
    <Minus className="absolute h-4 w-4 text-[#686868]" />
  ) : (
    <Plus className="absolute h-4 w-4 text-[#686868]" />
  )}
</div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <p
              className="
                relative
                z-10
                px-6
                pb-6
                text-[#686868]
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQItems() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#F8F8F8] relative">
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/FAQ/faqImg.jpg')",
          opacity: "2%", 
          filter: "grayscale(100%)",
        }}
      />
      {/* Overlay on section background to reduce opacity */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <div
        className="
          relative
          container
          mx-auto
          px-5
          md:px-10
          lg:px-16
          xl:px-20
          py-20
          lg:py-28
        "
      >
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1fr_1.1fr]
            gap-16
            xl:gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div className="space-y-16">
            {/* Badge */}
            <div className="space-y-6">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#F1F1F1]
                  bg-white
                  px-3
                  py-2
                  shadow-lg
                "
              >
                <div className="h-4 w-4 rounded bg-orange-500" />

                <span className="text-xs font-semibold text-[#686868]">
                  FAQ's
                </span>
              </div>

              <h2
                className="
                  max-w-xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-[clamp(2.5rem,5vw,3.75rem)] 
                  text-[#141414]
                "
              >
                Do you have any
                <br />
                questions? I am{" "}
                <span className="italic text-[#F4511E] font-subtitle">
                  ready to answer.
                </span>
              </h2>
            </div>

            {/* Stats - Fully responsive with flex wrap */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-6 sm:gap-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#141414]">50+</h3>
                  <p className="text-[#868686] text-sm sm:text-base">• Project Done</p>
                </div>
                <div className="h-8 w-px bg-[#D1D5DB] hidden sm:block" />
              </div>

              <div className="flex items-center gap-6 sm:gap-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#141414]">3y</h3>
                  <p className="text-[#868686] text-sm sm:text-base">• My Experience</p>
                </div>
                <div className="h-8 w-px bg-[#D1D5DB] hidden sm:block" />
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#141414]">20+</h3>
                <p className="text-[#868686] text-sm sm:text-base">• Happy Clients</p>
              </div>
            </div>
          </div>

          {/* FAQS */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                item={faq}
                active={active}
                setActive={setActive}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}