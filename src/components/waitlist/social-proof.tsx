"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Users } from "lucide-react";

const firstNames = [
  "James", "Maria", "Robert", "Jennifer", "Michael", "Linda", "David", "Sarah",
  "Carlos", "Ashley", "Marcus", "Jessica", "Brandon", "Amanda", "Tyler", "Nicole",
  "Derek", "Stephanie", "Kevin", "Rachel", "Jason", "Megan", "Chris", "Lauren",
  "Alex", "Emily", "Jordan", "Brittany", "Ryan", "Samantha", "Daniel", "Heather",
];

const cities = [
  "Austin, TX", "Denver, CO", "Phoenix, AZ", "Nashville, TN", "Charlotte, NC",
  "Tampa, FL", "Portland, OR", "San Diego, CA", "Atlanta, GA", "Dallas, TX",
  "Orlando, FL", "Raleigh, NC", "Salt Lake City, UT", "Columbus, OH", "Jacksonville, FL",
  "Sacramento, CA", "Las Vegas, NV", "Kansas City, MO", "Milwaukee, WI", "Tucson, AZ",
];

const roles = ["Quest Giver", "Adventurer", "Adventurer", "Adventurer", "Quest Giver"];

const timeAgo = ["just now", "1 min ago", "2 min ago", "4 min ago", "7 min ago", "12 min ago"];

// Seeded shuffle to get varied but deterministic-looking results
function shuffle<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 0) % 2147483647;
    const j = seed % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateSignup() {
  return {
    name: firstNames[Math.floor(Math.random() * firstNames.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    role: roles[Math.floor(Math.random() * roles.length)],
    time: timeAgo[Math.floor(Math.random() * timeAgo.length)],
  };
}

/* ── Bottom-left toast notification ── */
export function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [signup, setSignup] = useState<ReturnType<typeof generateSignup> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const showToast = useCallback(() => {
    setSignup(generateSignup());
    setVisible(true);
    timeoutRef.current = setTimeout(() => setVisible(false), 4000);
  }, []);

  useEffect(() => {
    const initial = setTimeout(showToast, 6000);

    const scheduleNext = () => {
      return setTimeout(() => {
        showToast();
        intervalRef.current = scheduleNext();
      }, 8000 + Math.random() * 6000);
    };

    const intervalRef = { current: setTimeout(() => {
      showToast();
      intervalRef.current = scheduleNext();
    }, 12000 + Math.random() * 4000) };

    return () => {
      clearTimeout(initial);
      clearTimeout(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showToast]);

  if (!signup) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 max-w-[320px] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="glass-strong rounded-2xl p-4 shadow-elevated border border-silver/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-guild-blue to-guild-teal flex items-center justify-center text-white font-bold text-sm shrink-0">
            {signup.name[0]}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {signup.name} from {signup.city}
            </p>
            <p className="text-xs text-gray-400">
              Joined as {signup.role} · {signup.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Top scrolling social proof bar ── */
export function SocialProofBar() {
  const [mounted, setMounted] = useState(false);
  const [tickerItems, setTickerItems] = useState<string[]>([]);
  const [count, setCount] = useState(150);

  useEffect(() => {
    // Generate everything client-side to avoid hydration mismatch
    setCount(127 + Math.floor(Math.random() * 50));

    const shuffledNames = shuffle(firstNames, Date.now() % 10000);
    const shuffledCities = shuffle(cities, (Date.now() + 7) % 10000);

    const items = Array.from({ length: 20 }, (_, i) => {
      const name = shuffledNames[i % shuffledNames.length];
      const city = shuffledCities[i % shuffledCities.length];
      return `${name} from ${city}`;
    });

    setTickerItems(items);
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-guild-blue to-guild-teal text-white text-[0.6875rem] font-medium overflow-hidden whitespace-nowrap">
      <div className="py-1.5 flex items-center">
        {/* Static left section */}
        <div className="shrink-0 flex items-center gap-2 pl-5 md:pl-8 pr-4 z-10">
          <Users className="w-3 h-3 opacity-80" />
          <span className="opacity-90">
            <strong className="font-bold">{mounted ? count : 150}+ people</strong> joined the waitlist
          </span>
          <span className="opacity-40">|</span>
        </div>

        {/* Scrolling ticker */}
        {mounted && tickerItems.length > 0 && (
          <div className="relative overflow-hidden flex-1 mask-fade">
            <div className="flex animate-ticker">
              {/* Duplicate for seamless loop */}
              {[0, 1].map((set) => (
                <div key={set} className="flex shrink-0">
                  {tickerItems.map((item, i) => (
                    <span key={`${set}-${i}`} className="shrink-0 px-3 opacity-70">
                      {item}
                      <span className="ml-3 opacity-40">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
