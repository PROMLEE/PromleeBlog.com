import type { Metadata } from "next";
import "../config/globals.css";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PromleeBlog by Nextjs",
  description: "Generated by PROMLEE",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={"bg-black text-white w-full"}>
        <div className={"topbar"}>
          <Link href={"/"} className={"m-5 hover:text-amber-700"}>
            PromleeBlog
          </Link>
          <Link href={"/blog"} className={"text-2xl hover:text-amber-700"}>
            Categories
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
