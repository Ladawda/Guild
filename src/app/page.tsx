import { Nav } from "@/components/waitlist/nav";
import { Hero } from "@/components/waitlist/hero";
import { StatsBar } from "@/components/waitlist/stats-bar";
import { ProblemSection } from "@/components/waitlist/problem-section";
import { SolutionSection } from "@/components/waitlist/solution-section";
import { HowItWorks } from "@/components/waitlist/how-it-works";
import { FaqSection } from "@/components/waitlist/faq-section";
import { FinalCta } from "@/components/waitlist/final-cta";
import { Footer } from "@/components/waitlist/footer";
import { SocialProofBar, SocialProofToast } from "@/components/waitlist/social-proof";

export default function WaitlistPage() {
  return (
    <>
      <SocialProofBar />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <SocialProofToast />
    </>
  );
}
