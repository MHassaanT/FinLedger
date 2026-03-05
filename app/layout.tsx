import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FinLedger | Precision in Every Entry",
  description:
    "Expert bookkeeping and financial forecasting designed for your business success. FinLedger delivers unmatched accuracy, time recovery, and growth-oriented financial insights.",
  keywords: "bookkeeping, financial forecasting, accounting, small business finance, FinLedger",
  openGraph: {
    title: "FinLedger | Precision in Every Entry",
    description:
      "Expert bookkeeping and financial forecasting designed for ambitious entrepreneurs and business owners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-montserrat antialiased bg-navy`}>
        {children}
      </body>
    </html>
  );
}
