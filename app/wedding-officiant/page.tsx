import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Wedding Officiant Services Los Angeles",
  description: "Licensed wedding officiant in Los Angeles. I perform personalized wedding ceremonies — from intimate elopements to formal ceremonies — with warmth and professionalism.",
};
export default function WeddingPage() {
  return (
    <>
      <PageHeader tag="Wedding Officiant" title="Personalized Wedding Ceremonies" subtitle="As a licensed wedding officiant, I create meaningful, personalized ceremonies that reflect who you are as a couple — your story, your values, your moment." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
            Your wedding ceremony should be as unique as your love story. I work with couples to craft a ceremony that feels authentic and personal — whether you're planning a formal celebration, a backyard gathering, an elopement, or a courthouse ceremony.
          </p>
          <p style={{ color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 40 }}>
            I handle all legal requirements and ensure your marriage license is properly signed and filed. Officiating services are available throughout greater Los Angeles.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              { icon: "💍", title: "Ceremony Customization", desc: "I meet with you to learn your story and craft a ceremony that feels truly yours." },
              { icon: "📋", title: "Marriage License Assistance", desc: "Guidance on obtaining your California marriage license and all legal requirements." },
              { icon: "📍", title: "Flexible Locations", desc: "I come to you — parks, backyards, beaches, venues, or anywhere meaningful to you." },
              { icon: "❤️", title: "Vow Writing Support", desc: "Optional assistance writing personal vows that express exactly how you feel." },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "28px 24px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Let's Celebrate Your Love Story</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Contact me to check availability and discuss your vision for the perfect ceremony.</p>
            <Link href="/contact-us" className="btn-primary">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
