import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://psbuilding.sk'),
  title: {
    default: "PS Building - Profesionálne stavebné služby",
    template: "%s | PS Building"
  },
  description: "Mladá ambiciózna stavebná spoločnosť so skúsenosťami zo zahraničia. Špecializujeme sa na dokončovacie stavebné práce v interiéri a exteriéri: zatepľovanie, obklady, dlažby a rekonštrukcie.",
  keywords: "stavebné práce, zatepľovanie, sadrokarton, obklady, dlažby, maliarske práce, murárske práce, kamenná dlažba, PS Building, Nová Lesná, Poprad, Tatry, rekonštrukcia bytu",
  authors: [{ name: "PS Building s.r.o." }],
  creator: "PS Building",
  publisher: "PS Building",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://psbuilding.sk",
    siteName: "PS Building",
    title: "PS Building - Profesionálne stavebné služby",
    description: "Špecialisti na dokončovacie stavebné práce, zatepľovanie a rekonštrukcie.",
    images: [
      {
        url: "/sources/og-image.jpg", // Suggested image path
        width: 1200,
        height: 630,
        alt: "PS Building - Profesionálne stavebné služby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PS Building - Profesionálne stavebné služby",
    description: "Špecialisti na dokončovacie stavebné práce, zatepľovanie a rekonštrukcie.",
    images: ["/sources/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}