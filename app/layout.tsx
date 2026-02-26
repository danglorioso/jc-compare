import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JumboCode Team Compare",
  description:
    "Compare the number of commits between JumboCode teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-gray-950 min-h-screen flex flex-col">
          {/* Gradient background */}
          <div className="absolute inset-0 h-[85vh] bg-gradient-to-b from-brand/25 to-gray-950 -z-10" />
          <div className="flex-1 max-w-screen-lg mx-auto w-full px-8 sm:px-12 pt-4 sm:pt-8 pb-8">
            <header className="flex justify-between items-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="JumboCode"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </header>
            <main>{children}</main>
          </div>
          <Footer />
       </body>
       <Analytics />
    </html>
  );
}
