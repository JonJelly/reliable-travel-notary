import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Powers of Attorney Notarization",
  description: "Professional notarization of powers of attorney documents in Los Angeles. I come to your home, hospital, or office for convenient, compassionate service.",
};
export default function PowersPage() {
  return (
    <>
      <PageHeader tag="Legal Documents" title="Powers of Attorney" subtitle="I provide professional notarization of power of attorney documents — at your home, hospital bedside, office, or wherever is most convenient for you." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
            A power of attorney (POA) is a legal document that grants someone you trust the authority to act on your behalf in legal, financial, or medical matters. Having your POA properly notarized is essential for it to be legally recognized by banks, government agencies, and courts.
          </p>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 40 }}>
            I understand that these documents are often needed during stressful or urgent circumstances. I approach every appointment with professionalism and sensitivity, and I come to you — wherever you are.
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 16 }}>Types of Powers of Attorney</h2>
          <div className="divider-gold" style={{ marginBottom: 24 }}></div>
          {[
            { title: "General Power of Attorney", desc: "Grants broad authority to handle financial and legal matters on your behalf." },
            { title: "Durable Power of Attorney", desc: "Remains in effect even if you become mentally incapacitated." },
            { title: "Healthcare Power of Attorney", desc: "Designates someone to make medical decisions on your behalf." },
            { title: "Limited / Special Power of Attorney", desc: "Grants authority for a specific transaction or period of time." },
          ].map(item => (
            <div key={item.title} style={{ padding: "24px", background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, marginBottom: 16 }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", marginBottom: 8 }}>{item.title}</h4>
              <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center", marginTop: 40 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Need a POA Notarized?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>I come to you — homes, hospitals, care facilities, offices. Book online or call me directly.</p>
            <Link href="/book-appointment" className="btn-primary">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
