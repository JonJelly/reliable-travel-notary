import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mobile Notary Services",
  description: "Complete mobile notary services in Los Angeles and Burbank. I come to you for document notarization, loan signings, apostille, live scan, and more.",
};

const services = [
  { icon: "📜", title: "General Notary Services", href: "/services", desc: "I notarize a wide range of personal and business documents including affidavits, contracts, deeds, trust documents, and more. I bring everything needed directly to your location." },
  { icon: "🌐", title: "Apostille Services", href: "/apostille-services", desc: "Need a document authenticated for international use? I handle the full apostille process for California documents, navigating the Secretary of State requirements on your behalf." },
  { icon: "📝", title: "Certified Translations", href: "/certified-translations", desc: "Accurate certified translations for immigration documents, birth certificates, marriage certificates, diplomas, and legal papers — accepted by USCIS and government agencies." },
  { icon: "🏛️", title: "Immigration & USCIS Notary", href: "/immigration-uscis-notary", desc: "Specialized notarization for immigration documents, DACA renewals, naturalization, and USCIS forms. I understand the specific requirements for immigration-related notarization." },
  { icon: "🖐️", title: "Live Scan Fingerprinting", href: "/live-scan-fingerprinting", desc: "Fast and accurate electronic fingerprinting for employment, licensing, and background checks. Results transmitted directly to the DOJ and FBI as required." },
  { icon: "⚖️", title: "Powers of Attorney", href: "/powers-of-attorney", desc: "Properly notarized powers of attorney for healthcare decisions, financial management, real estate transactions, and more." },
  { icon: "💍", title: "Wedding Officiant", href: "/wedding-officiant", desc: "As a licensed wedding officiant, I perform personalized ceremonies tailored to your vision — from intimate elopements to formal ceremonies." },
  { icon: "🏠", title: "Real Estate Loan Signings", href: "/services", desc: "Certified signing agent for mortgage and refinance loan packages. I ensure all documents are signed correctly, reducing delays in your closing process." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader tag="What I Offer" title="Professional Mobile Notary Services" subtitle="From notarizing a single document to managing complex loan signings, I provide reliable, accurate notary services delivered directly to your preferred location." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
            {services.map(s => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div className="hover-card" style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "36px 30px", height: "100%" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--navy)", marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56, padding: "48px", background: "var(--navy)", borderRadius: 4 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.6rem", marginBottom: 12 }}>Need a Service Not Listed Here?</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>Contact me directly and I'll do my best to accommodate your needs or point you in the right direction.</p>
            <Link href="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
