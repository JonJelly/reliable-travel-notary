import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Apostille Services Los Angeles",
  description: "Professional apostille services in Los Angeles. I authenticate California-issued documents for international use. Fast, accurate, and handled personally from start to finish.",
  alternates: { canonical: "https://reliabletravelnotary.com/apostille-services/" },
  robots: { index: true, follow: true },
};

export default function ApostillePage() {
  return (
    <>
      <PageHeader tag="Document Authentication" title="Apostille Services in Los Angeles" subtitle="I help you get your California documents properly authenticated for use in foreign countries — fast and stress-free." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--navy)", marginBottom: 16 }}>What Is an Apostille?</h2>
          <div className="divider-gold"></div>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, marginBottom: 20, fontSize: "0.95rem" }}>
            An apostille is a form of authentication recognized by countries that are members of the Hague Convention of 1961. It certifies that a document issued in one member country is legitimate and can be legally recognized in another member country. Common uses include international adoption, marriage abroad, employment overseas, and foreign business transactions.
          </p>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, marginBottom: 40, fontSize: "0.95rem" }}>
            In California, apostilles are issued by the California Secretary of State. I handle the full process — from notarizing your document to submitting it to the Secretary of State and returning the authenticated document to you.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 24 }}>Documents I Can Apostille</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
            {["Birth Certificates", "Marriage Certificates", "Divorce Decrees", "Death Certificates", "Academic Diplomas & Transcripts", "Powers of Attorney", "Notarized Affidavits", "Corporate Documents", "FBI Background Checks", "Court Documents"].map(doc => (
              <div key={doc} style={{ display: "flex", gap: 10, alignItems: "center", padding: "14px 18px", background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4 }}>
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span>
                <span style={{ color: "var(--slate)", fontSize: "0.9rem" }}>{doc}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "40px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.4rem", marginBottom: 12 }}>Ready to Get Your Document Apostilled?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Contact me today and I'll walk you through exactly what's needed and how quickly it can be done.</p>
            <Link href="/book-appointment" className="btn-primary">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
