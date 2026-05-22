import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Notary Pricing",
  description: "Transparent pricing for mobile notary services in Los Angeles. No hidden fees. Contact me for a custom quote.",
};
export default function PricingPage() {
  const services = [
    { name: "Document Notarization (per signature)", price: "$15", note: "California state maximum" },
    { name: "Loan Signing (standard package)", price: "$150–$200", note: "Depends on document complexity" },
    { name: "Mobile Travel Fee", price: "Varies", note: "Based on distance from service area" },
    { name: "Apostille Facilitation", price: "Call for quote", note: "Includes state filing fees" },
    { name: "Certified Translation", price: "Call for quote", note: "Priced per page" },
    { name: "Live Scan Fingerprinting", price: "$25 (rolling fee)", note: "Plus applicable DOJ/FBI fees" },
    { name: "Power of Attorney Package", price: "Call for quote", note: "Includes preparation assistance" },
    { name: "Wedding Officiant", price: "Starting at $200", note: "Includes ceremony customization" },
  ];
  return (
    <>
      <PageHeader tag="Transparent Pricing" title="Service Pricing" subtitle="Straightforward pricing with no hidden fees. California law caps notary fees at $15 per notarized signature. Contact me for a custom quote on any service." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ background: "var(--navy)", padding: "20px 28px", display: "grid", gridTemplateColumns: "1fr auto auto", gap: 20 }}>
              <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Service</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Price</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Notes</span>
            </div>
            {services.map((s, i) => (
              <div key={s.name} style={{ padding: "20px 28px", display: "grid", gridTemplateColumns: "1fr auto auto", gap: 20, alignItems: "center", borderBottom: i < services.length - 1 ? "1px solid rgba(10,22,40,0.06)" : "none", background: i % 2 === 0 ? "transparent" : "rgba(248,244,238,0.5)" }}>
                <span style={{ color: "var(--navy)", fontSize: "0.9rem", fontWeight: 500 }}>{s.name}</span>
                <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.95rem", whiteSpace: "nowrap" }}>{s.price}</span>
                <span style={{ color: "var(--slate)", fontSize: "0.8rem", whiteSpace: "nowrap" }}>{s.note}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--cream)", borderRadius: 4, padding: "28px", border: "1px solid rgba(201,168,76,0.2)", marginTop: 28, marginBottom: 40 }}>
            <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.75 }}>
              <strong style={{ color: "var(--navy)" }}>Note:</strong> California Notary Public fees are regulated by state law at a maximum of $15 per notarized signature. Travel fees are separate and depend on your location relative to my service base in Burbank/North Hollywood. I'll always provide a clear total before your appointment.
            </p>
          </div>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "40px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.4rem", marginBottom: 12 }}>Get an Exact Quote</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Contact me with the details of your service need and I'll provide a transparent, upfront quote.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn-primary">Contact Me</Link>
              <Link href="/book-appointment" className="btn-outline">Book Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
