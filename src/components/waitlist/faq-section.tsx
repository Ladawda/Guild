"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is Guild different from Angi or Thumbtack?",
    answer:
      "They sell the same lead to 3-5 contractors and take a 20% commission on every job. Guild charges a flat fee and you keep 100% of what you earn. No lead selling, no commission, no middleman controlling the conversation.",
  },
  {
    question: "Is it really free for quest posters during launch?",
    answer:
      "Yes. During our grand opening month, quest givers can post as many quests as they want for free. After that, it's $10 per quest post. No hidden fees, no surprises.",
  },
  {
    question: "Is the $25/month adventurer pricing real?",
    answer:
      "For the first 100 adventurers - yes, that's 50% off the regular $49/month price, locked in forever. Once those 100 spots are claimed, it goes to full price. Your founding rate never changes.",
  },
  {
    question: "How do you make money without commissions?",
    answer:
      "Flat fees only. Quest givers pay $10 per quest post, adventurers pay $25-49/month for access. No commissions, no lead selling, no hidden charges. Simple, transparent, sustainable.",
  },
  {
    question: "What if no one responds to my quest?",
    answer:
      "If no adventurer applies to your quest within 7 days, you get a credit for another free quest post. We don't take your money for nothing.",
  },
  {
    question: "How are adventurers verified?",
    answer:
      "Every license is verified directly against state contractor board databases. We confirm insurance is current and review past work. No unlicensed workers make it through.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[clamp(4rem,8vw,7rem)] bg-pearl">
      <div className="max-w-[800px] mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-guild-blue justify-center mb-4">
            <span className="w-6 h-0.5 bg-current rounded-full" />
            FAQ
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 leading-tight tracking-wide mb-10 text-center">
            Questions?
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div
                className={`glass-strong rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "border border-guild-blue/20 shadow-elevated"
                    : "border border-silver/50 hover:border-silver hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer bg-transparent text-gray-900 text-[0.9375rem] font-semibold transition-colors duration-300 hover:text-guild-blue"
                >
                  {faq.question}
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 text-gray-300 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-guild-blue" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0px",
                  }}
                >
                  <p className="px-6 pb-6 text-[0.9375rem] text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
