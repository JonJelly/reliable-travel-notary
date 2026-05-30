import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://reliabletravelnotary.com"),
  title: {
    default: "Reliable Travel Notary | Mobile Notary Los Angeles & San Fernando Valley",
    template: "%s | Reliable Travel Notary",
  },
  description: "Jonathan Geli — certified mobile notary public serving Los Angeles & the San Fernando Valley. I come to you 7 days a week. Call 818-726-3039 for same-day service.",
  keywords: [
    "mobile notary Los Angeles",
    "mobile notary San Fernando Valley",
    "mobile notary Burbank",
    "notary public near me",
    "mobile notary near me",
    "apostille services Los Angeles",
    "power of attorney notary",
    "loan signing agent Los Angeles",
    "Jonathan Geli notary",
    "Reliable Travel Notary",
  ],
  authors: [{ name: "Jonathan Geli", url: "https://reliabletravelnotary.com/about-us" }],
  creator: "Jonathan Geli",
  publisher: "Reliable Travel Notary",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://reliabletravelnotary.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reliabletravelnotary.com",
    siteName: "Reliable Travel Notary",
    title: "Reliable Travel Notary | Mobile Notary Los Angeles & San Fernando Valley",
    description: "Jonathan Geli — certified mobile notary public serving Los Angeles & the San Fernando Valley. I come to you 7 days a week. Call 818-726-3039.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reliable Travel Notary — Jonathan Geli, Mobile Notary Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Travel Notary | Mobile Notary Los Angeles",
    description: "Jonathan Geli — certified mobile notary public. I come to you 7 days a week. Call 818-726-3039.",
  },
  verification: {
    google: "",  // paste your Google Search Console verification code here
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://reliabletravelnotary.com",
  name: "Reliable Travel Notary",
  description: "Professional mobile notary public serving Los Angeles and the San Fernando Valley 7 days a week.",
  url: "https://reliabletravelnotary.com",
  telephone: "+18187263039",
  email: "jgeli@reliabletravelnotary.com",
  founder: {
    "@type": "Person",
    name: "Jonathan Geli",
    jobTitle: "Notary Public",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burbank",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1808,
    longitude: -118.3090,
  },
  areaServed: [
    "Los Angeles", "Burbank", "Glendale", "Pasadena", "North Hollywood",
    "Studio City", "Sherman Oaks", "Encino", "Van Nuys", "Reseda",
    "Northridge", "Chatsworth", "Woodland Hills", "Canoga Park", "Tarzana",
    "Granada Hills", "Panorama City", "Sun Valley", "Santa Monica",
    "West Hollywood", "Beverly Hills", "Culver City", "Inglewood",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Notary Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Notary Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apostille Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power of Attorney Notarization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Loan Signing" } },
    ],
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Venmo, Zelle, Check",
  currenciesAccepted: "USD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://reliabletravelnotary.com" />
      </head>
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
