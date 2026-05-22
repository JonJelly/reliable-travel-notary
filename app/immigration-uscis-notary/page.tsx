import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Immigration & USCIS Notary Services",
  description: "Specialized notary services for immigration and USCIS documents in Los Angeles. I understand the specific notarization requirements for immigration paperwork.",
};
export default function ImmigrationPage() {
  return (
    <>
      <PageHeader tag="Immigration Services" title="Immigration & USCIS Notary Services" subtitle="I specialize in notarizing immigration-related documents with an understanding of USCIS requirements and the sensitivity these situations require." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
            Immigration paperwork is among the most important — and sensitive — documents a person will ever handle. As a mobile notary who understands USCIS requirements, I can help ensure your documents are properly notarized, reducing the risk of rejection or delay.
          </p>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 40 }}>
            I come to you, making the process more comfortable and private. Whether you're applying for a green card, citizenship, or DACA renewal, I'm here to help.
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 20 }}>Services Include</h2>
          <div className="divider-gold" style={{ marginBottom: 24 }}></div>
          {["USCIS Form Notarization","Affidavits of Support","Sworn Statements","Naturalization Document Assistance","DACA Renewal Support","Sponsor Letters","Financial Affidavits","Certified Translations for Immigration"].map(item => (
            <div key={item} style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(10,22,40,0.06)" }}>
              <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem" }}>→</span>
              <span style={{ color: "var(--slate)", fontSize: "0.925rem" }}>{item}</span>
            </div>
          ))}
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center", marginTop: 48 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Book a Mobile Immigration Notary</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>I'll come to your home or office — no need to travel. Call or book online today.</p>
            <Link href="/book-appointment" className="btn-primary">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
