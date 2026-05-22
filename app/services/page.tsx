import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mobile Notary Services | Jonathan Geli",
  description: "Professional mobile notary services in Los Angeles and the San Fernando Valley. Jonathan Geli comes to you for notarizations, apostilles, loan signings, immigration documents, and powers of attorney.",
};

const services = [
  { icon: "📜", title: "General Notary Services", href: "/services", desc: "I notarize a wide range of personal and business documents including affidavits, contracts, deeds, trust documents, wills, and more. I bring everything needed directly to your location." },
  { icon: "🌐", title: "Apostille Services", href: "/apostille-services", desc: "Need a document authenticated for international use? I handle the full apostille process for California-issued documents, navigating the Secretary of State requirements on your behalf." },
  { icon: "⚖️", title: "Powers of Attorney", href: "/powers-of-attorney", desc: "Properly notarized powers of attorney for healthcare decisions, financial management, real estate transactions, and more. I come to you — including hospitals and care facilities." },
  { icon: "🏠", title: "Real Estate Loan Signings", href: "/services", desc: "NNA Certified Signing Agent for mortgage and refinance loan packages. I ensure all documents are signed correctly, reducing delays in your closing process." },
  { icon: "🏥", title: "Hospital & Care Facility Visits", href: "/services", desc: "I regularly visit hospitals, nursing homes, and care facilities to notarize powers of attorney, advance directives, and other urgent documents. Handled with care and sensitivity." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader tag="What I Offer" title="Professional Mobile Notary Services" subtitle="From notarizing a single document to managing complex loan signings, I provide reliable, accurate notary services delivered directly to your preferred location throughout LA County." />
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
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.6rem", marginBottom: 12 }}>Need a Service Not Listed? Just Call.</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>Contact Jonathan directly and he'll do his best to accommodate your needs.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:8187263039" className="btn-primary">📞 818-726-3039</a>
              <Link href="/contact-us" className="btn-outline">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
