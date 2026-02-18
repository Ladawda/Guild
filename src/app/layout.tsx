import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PHProvider } from "@/lib/posthog/provider";
import { PostHogPageView } from "@/lib/posthog/pageview";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Guild | Join the Guild — Find Verified Contractors",
  description:
    "Join the Guild — find verified, licensed contractors. No spam, no commissions. Post your quest free, get matched with qualified adventurers.",
  openGraph: {
    title: "Guild — Join the Guild",
    description:
      "Post a quest. Find your party. Get it done. No lead fees. No commissions. No BS.",
    type: "website",
    url: "https://joinguild.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CWPHNGS1WT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CWPHNGS1WT');
        `}
      </Script>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-body antialiased`}
      >
        <PHProvider>
          <PostHogPageView />
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
