"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Finally, a platform that treats contractors like humans. I'm tired of being a lead in someone's database.",
    name: "Mike R.",
    role: "Electrician - Austin, TX",
    initials: "MR",
    gradient: "from-guild-blue to-guild-blue-dark",
  },
  {
    text: "I'm done paying $80 for leads that don't answer the phone. Can't wait for Guild to launch.",
    name: "Sarah K.",
    role: "Plumber - Denver, CO",
    initials: "SK",
    gradient: "from-guild-teal to-[#0f766e]",
  },
  {
    text: "Can't wait to post my first quest without the markup. This is what the industry needs.",
    name: "David L.",
    role: "Property Manager - Phoenix, AZ",
    initials: "DL",
    gradient: "from-guild-coral to-[#ea580c]",
  },
];

export function Testimonials() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)] bg-snow relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(37,99,235,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-guild-coral mb-4">
            <span className="w-6 h-0.5 bg-current rounded-full" />
            FROM THE GUILD
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 leading-tight tracking-wide mb-10">
            Early Believers
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 + i * 0.1}>
              <div className="p-7 glass-strong rounded-2xl transition-all duration-400 hover:shadow-elevated hover:-translate-y-1 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-guild-gold text-guild-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.9375rem] text-gray-500 leading-relaxed mb-6 italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold text-[0.8125rem] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
