import type { Metadata } from "next";
import { New_Amsterdam, Delius } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const newAmsterdam = New_Amsterdam({
  weight: "400",
  variable: "--font-new-amsterdam",
  subsets: ["latin"],
});

const delius = Delius({
  weight: "400",
  variable: "--font-delius",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JU Rhythm | Annual Cultural & Sports Fest",
  description: "Join JU Rhythm, the ultimate cultural and sports fest featuring music, dance, sports competitions, technical challenges, and media events celebrating talent and creativity.",
  keywords: ["cultural fest", "sports", "technical", "JU Rhythm", "college fest", "cultural event", "media"],
  authors: [{ name: "JU Rhythm Team" }],
  creator: "JU Rhythm",
  publisher: "JU Rhythm",
  openGraph: {
    title: "JU Rhythm | Annual Cultural & Sports Fest",
    description: "Join JU Rhythm, the ultimate cultural and sports fest featuring music, dance, sports competitions, technical challenges, and media events celebrating talent and creativity.",
    type: "website",
    locale: "en_US",
    siteName: "JU Rhythm",
  },
  twitter: {
    card: "summary_large_image",
    title: "JU Rhythm | Annual Cultural & Sports Fest",
    description: "Join JU Rhythm, the ultimate cultural and sports fest featuring music, dance, sports competitions, technical challenges, and media events celebrating talent and creativity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newAmsterdam.variable} ${delius.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-0JYGXDHYMM" />
    </html>
  );
}
