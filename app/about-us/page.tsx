import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "About Me | Reliable Travel Notary",
  description: "Learn about the professional behind Reliable Travel Notary. A certified mobile notary public serving Los Angeles, Burbank, and surrounding areas with dedication and integrity.",
};
export default function AboutPage() {
  return (
    <>
      <PageHeader tag="About Me" title="Your Dedicated Mobile Notary" subtitle="I built Reliable Travel Notary on a simple belief: notary services should be convenient, professional, and personal." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--navy)", marginBottom: 16 }}>Who I Am</h2>
              <div className="divider-gold"></div>
              <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
                I'm a California-commissioned Notary Public and NNA Certified Signing Agent based in the Los Angeles area. Over the past decade, I've had the privilege of helping thousands of individuals, families, and businesses with their notarization needs.
              </p>
              <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
                I started Reliable Travel Notary because I saw how inconvenient and stressful it could be for people to find a reliable notary — especially during urgent situations like hospital visits, real estate closings, or immigration deadlines. I wanted to change that by offering a service that genuinely puts the client first.
              </p>
              <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 40 }}>
                When you work with me, you're working directly with me — not a call center, not a third-party dispatcher. I'm personally responsible for every appointment and every document, and I take that responsibility seriously.
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--navy)", marginBottom: 16 }}>Credentials & Certifications</h3>
              {["California Commissioned Notary Public","NNA Certified Signing Agent","Bonded & E&O Insured","Background Screened","Certified Live Scan Operator","Licensed Wedding Officiant"].map(c => (
                <div key={c} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(10,22,40,0.06)" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span>
                  <span style={{ color: "var(--slate)", fontSize: "0.9rem" }}>{c}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px 28px", textAlign: "center" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(201,168,76,0.2)", border: "2px solid var(--gold)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>👤</div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.2rem", marginBottom: 4 }}>Reliable Travel Notary</h4>
                <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Mobile Notary Public</p>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: 20 }}>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.7 }}>Serving Los Angeles, Burbank, Pasadena & surrounding areas since 2014</p>
                </div>
              </div>
              <div style={{ background: "var(--cream)", borderRadius: 4, padding: "24px", border: "1px solid rgba(201,168,76,0.2)", marginTop: 20 }}>
                <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", marginBottom: 12 }}>Availability</h5>
                <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 16 }}>Monday – Sunday<br />Available 7 days a week<br />Including evenings & weekends</p>
                <Link href="/book-appointment" className="btn-primary" style={{ display: "block", textAlign: "center", fontSize: "0.8rem", padding: "12px 20px" }}>Book an Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
