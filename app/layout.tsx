import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "./_provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteDental - AI-Driven Marketing for Dental Clinics",
  description: "Boost your dental practice with ByteDental's AI-powered marketing services. Reach more patients with automated, data-driven campaigns designed specifically for dentists.",
  keywords: "Dental Marketing, Marketing for Dentists, AI Marketing, Dental Advertising, Automated Campaigns",
  robots: "index, follow",
  openGraph: {
    title: "ByteDental - AI-Driven Marketing for Dental Clinics",
    description: "Boost your dental practice with ByteDental's AI-powered marketing services.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
