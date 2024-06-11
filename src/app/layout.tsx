import type { Metadata } from "next";
import "../config/globals.css";
import React from "react";
import { Gothic_A1 } from "next/font/google";
import { Theme } from "@/components/Theme";
import AutoRefresh from "./AutoRefresh";
import { Navbar } from "@/components/bars/Navbar";
import { Footer } from "@/components/bars/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/components/bars/Progressbar";
import GoogleAnalytics from "@/lib/gtag";

export const metadata: Metadata = {
  title: "PromleeBlog",
  description: "Generated by PROMLEE",
  icons: {
    icon: "/icons/apple-touch-icon.png",
  },
};
const noto = Gothic_A1({
  weight: ["100", "500", "900"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AutoRefresh>
      <html className={`${noto.className} `} suppressHydrationWarning>
        <body>
          <Theme>
            <Navbar />
            <div
              className={
                "min-h-[100vh] w-full scroll-smooth bg-background px-10 focus:scroll-auto md:w-5/6 xl:w-3/5"
              }
            >
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </Theme>
          <SpeedInsights />
          <Analytics />
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        </body>
      </html>
    </AutoRefresh>
  );
}
