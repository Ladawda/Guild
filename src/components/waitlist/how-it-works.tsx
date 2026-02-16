"use client";

import { ScrollReveal } from "./scroll-reveal";

const steps = [
  {
    number: "I",
    title: "Post Your Quest",
    description:
      "Quest giver describes what they need, where, and when. Takes 2 minutes. Free during launch month.",
  },
  {
    number: "II",
    title: "Form Your Party",
    description:
      "Verified adventurers in your area apply. Review their profiles, past work, and ratings. You pick the best fit.",
  },
  {
    number: "III",
    title: "Complete the Quest",
    description:
      "Connect directly. Agree on terms. Get the work done. No middleman, no markup, no nonsense.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-[clamp(4rem,8vw,7rem)] bg-pearl text-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_30%,rgba(37,99,235,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-guild-blue justify-center mb-4">
            <span className="w-6 h-0.5 bg-current rounded-full" />
            HOW IT WORKS
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 leading-tight tracking-wide mb-5">
            Simple as 1-2-3
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg text-gray-500 max-w-[500px] mx-auto leading-relaxed mb-14">
            No complicated process. No downloads. No app to install.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 + i * 0.12}>
              <div className="relative p-8 glass-strong rounded-2xl transition-all duration-400 hover:shadow-elevated hover:-translate-y-1.5">
                {/* Step number */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-guild-blue to-guild-teal flex items-center justify-center font-display font-black text-xl text-white relative shadow-[0_4px_16px_rgba(37,99,235,0.2)]">
                  {step.number}
                </div>

                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] text-gray-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (desktop only, not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-6 w-6 h-0.5 bg-gradient-to-r from-guild-blue/20 to-guild-teal/20" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
