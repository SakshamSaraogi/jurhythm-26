import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Configure Anton font with optimal settings
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

// Configure Inter font with multiple weights
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXGG6J3Q');`}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXGG6J3Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
