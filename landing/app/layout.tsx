import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rock Solid Soft Skills – Erasmus+ Training in Krakow | 13–19 Dec 2026",
  description:
    "7-day Erasmus+ training in Krakow for young leaders (19–30): communication, team dynamics and conflict management. Accommodation and meals covered. Only 26 spots.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
