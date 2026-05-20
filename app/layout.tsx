import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import { UiClickSound } from "@/components/ui-click-sound";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark scrollbar-themed scroll-smooth ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="scrollbar-themed flex min-h-full flex-col bg-background text-foreground"
      >
        {process.env.NODE_ENV === "development" ? (
          <Script id="dev-perf-measure-guard" strategy="beforeInteractive">
            {`(()=>{const m=performance.measure.bind(performance);performance.measure=function(...a){try{return m(...a)}catch(e){if(e instanceof TypeError&&String(e.message).includes("negative time stamp"))return;throw e}}})();`}
          </Script>
        ) : null}
        <UiClickSound />
        {children}
      </body>
    </html>
  );
}
