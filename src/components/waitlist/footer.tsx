export function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-silver/50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-guild-blue to-guild-teal rounded-[7px] flex items-center justify-center font-display font-black text-sm text-white">
              G
            </div>
            <span className="font-display font-bold text-base text-gray-400 tracking-[0.06em]">
              GUILD
            </span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: "Why Guild", href: "#problem" },
              { label: "How It Works", href: "#how" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "mailto:hello@joinguild.app" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.8125rem] text-gray-400 transition-colors duration-300 hover:text-gray-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <span className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Guild. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
