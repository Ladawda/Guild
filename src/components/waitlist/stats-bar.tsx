"use client";

import { ScrollReveal } from "./scroll-reveal";

const stats = [
  { value: "$0", accent: "text-guild-coral", label: "Commission on quests" },
  { value: "100%", accent: "text-guild-blue", label: "Earnings kept by adventurers" },
  { value: "$10", accent: "text-guild-teal", label: "Flat fee per quest post" },
  { value: "$0", accent: "text-gray-900", label: "Hidden fees" },
];

export function StatsBar() {
  return (
    <section className="glass-strong border-t border-b border-silver/50 py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center relative">
                <div className={`font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-1 ${stat.accent}`}>
                  {stat.value}
                </div>
                <div className="text-[0.8125rem] text-gray-500 tracking-wide">
                  {stat.label}
                </div>
                {/* Divider */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-[15%] h-[70%] w-px bg-silver" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
