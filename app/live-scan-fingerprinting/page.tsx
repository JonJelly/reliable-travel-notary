import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Live Scan Fingerprinting Los Angeles",
  description: "Fast and accurate Live Scan fingerprinting services in Los Angeles and Burbank. Results transmitted directly to the DOJ and FBI for background checks and licensing.",
};
export default function LiveScanPage() {
  return (
    <>
      <PageHeader tag="Fingerprinting Services" title="Live Scan Fingerprinting" subtitle="Electronic fingerprinting for employment background checks, professional licensing, volunteering, and more — with direct submission to the DOJ and FBI." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
            Live Scan is the electronic fingerprinting system used in California to process background checks through the Department of Justice (DOJ) and FBI. Unlike traditional ink fingerprinting, Live Scan captures your fingerprints digitally and transmits them instantly to the appropriate agencies.
          </p>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 40 }}>
            As a certified Live Scan operator, I provide this service quickly and professionally. You'll receive a copy of your completed form for your records.
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 16 }}>Who Needs Live Scan?</h2>
          <div className="divider-gold" style={{ marginBottom: 24 }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 48 }}>
            {["Teachers & School Employees","Healthcare Workers","Real Estate Agents","Insurance Professionals","Child Care Workers","Foster & Adoptive Parents","Government Employees","Security Guards","Contractors & Vendors","Volunteers Working with Minors"].map(item => (
              <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", padding: "12px 16px", background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4 }}>
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span>
                <span style={{ color: "var(--slate)", fontSize: "0.875rem" }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--cream)", borderRadius: 4, padding: "28px", border: "1px solid rgba(201,168,76,0.3)", marginBottom: 32 }}>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", marginBottom: 8 }}>What to Bring</h4>
            <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.75 }}>Please bring your completed Request for Live Scan Service form (provided by your requesting agency), a valid government-issued photo ID, and payment. Contact me if you need help locating the correct form.</p>
          </div>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Schedule Your Live Scan</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>I offer flexible scheduling and can often accommodate same-day requests.</p>
            <Link href="/book-appointment" className="btn-primary">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
