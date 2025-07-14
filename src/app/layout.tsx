import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://beattycenter.com'),
  title: {
    default: "Beatty Center - Antalya Güzellik Merkezi",
    template: "%s | Beatty Center"
  },
  description: "Antalya'nın en modern güzellik merkezi. Profesyonel ekibimiz ve son teknoloji cihazlarımızla cilt bakımı, lazer epilasyon, medikal estetik ve daha fazlası için hizmetinizdeyiz.",
  keywords: ["güzellik merkezi", "antalya", "cilt bakımı", "lazer epilasyon", "medikal estetik", "hydrafacial", "anti aging"],
  authors: [{ name: "Beatty Center" }],
  creator: "Beatty Center",
  publisher: "Beatty Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    title: "Beatty Center - Antalya Güzellik Merkezi",
    description: "Antalya'nın en modern güzellik merkezi. Profesyonel ekibimiz ve son teknoloji cihazlarımızla hizmetinizdeyiz.",
    siteName: "Beatty Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beatty Center - Antalya Güzellik Merkezi",
    description: "Antalya'nın en modern güzellik merkezi. Profesyonel ekibimiz ve son teknoloji cihazlarımızla hizmetinizdeyiz.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
      <Header />
      <main className="flex-1">{children}</main>
      <WhatsAppButton />
      <Footer />
        <Toaster />
      </body>
    </html>
  );
}
