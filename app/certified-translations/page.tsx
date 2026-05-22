import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Certified Translation Services",
  description: "Accurate certified translations accepted by USCIS, courts, and government agencies. Serving Los Angeles and Burbank.",
};
export default function TranslationsPage() {
  return (
    <>
      <PageHeader tag="Language Services" title="Certified Translation Services" subtitle="Precise, certified translations for immigration documents, legal papers, diplomas, and personal records — accepted by USCIS and government agencies." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 24 }}>
            When official documents need to be submitted to government agencies, courts, or institutions in another language, a certified translation is required. A certified translation includes a signed statement from the translator attesting to the accuracy and completeness of the translation.
          </p>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 40 }}>
            I provide certified translations that meet USCIS standards and are accepted by schools, courts, employers, and government bodies throughout the United States.
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 20 }}>Documents I Translate</h2>
          <div className="divider-gold"></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 16, marginBottom: 40 }}>
            {["Birth Certificates","Marriage Certificates","Divorce Decrees","Academic Records & Diplomas","Driver's Licenses","Immigration Documents","Medical Records","Legal Contracts","Court Documents","Personal Statements"].map(d => (
              <div key={d} style={{ display: "flex", gap: 10, alignItems: "center", padding: "12px 16px", background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4 }}>
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span>
                <span style={{ color: "var(--slate)", fontSize: "0.875rem" }}>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Need a Document Translated?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Contact me with your document details and I'll provide a quick quote and turnaround estimate.</p>
            <Link href="/contact-us" className="btn-primary">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
