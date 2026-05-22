import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Reliable Travel Notary | Mobile Notary in Los Angeles & Burbank",
    template: "%s | Reliable Travel Notary"
  },
  description: "Reliable Travel Notary — professional mobile notary services in Los Angeles, Burbank & surrounding areas. Available 7 days a week for document notarization, apostille, live scan, powers of attorney, and more.",
  keywords: ["mobile notary", "notary public", "Los Angeles notary", "Burbank notary", "apostille services", "live scan fingerprinting", "powers of attorney", "immigration notary"],
  authors: [{ name: "Reliable Travel Notary" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reliabletravelnotary.com",
    siteName: "Reliable Travel Notary",
    title: "Reliable Travel Notary | Mobile Notary in Los Angeles",
    description: "Professional mobile notary services — I come to you. Serving Los Angeles, Burbank, Pasadena & surrounding areas, 7 days a week.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
