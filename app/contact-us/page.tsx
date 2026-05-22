import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Jonathan Geli | Reliable Travel Notary",
  description: "Contact Jonathan Geli at Reliable Travel Notary. Call 818-726-3039 or email jgeli@reliabletravelnotary.com. Available 7 days a week throughout Los Angeles.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader tag="Get in Touch" title="Contact Jonathan Geli" subtitle="I'm available 7 days a week. Call, text, or send a message and I'll respond promptly." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 16 }}>Contact Information</h2>
            <div className="divider-gold"></div>

            {/* Name card */}
            <div style={{ background: "var(--navy)", borderRadius: 4, padding: "28px", marginBottom: 24 }}>
              <p style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>Your Notary</p>
              <p style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}>Jonathan Geli</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: 4 }}>California Notary Public · NNA Certified Signing Agent</p>
            </div>

            {[
              { icon: "📞", label: "Phone / Text", value: "818-726-3039", href: "tel:8187263039", note: "Call or text — 7 days a week" },
              { icon: "✉️", label: "Email", value: "jgeli@reliabletravelnotary.com", href: "mailto:jgeli@reliabletravelnotary.com", note: "I'll respond within a few hours" },
              { icon: "📍", label: "Service Area", value: "Los Angeles County", href: null, note: "San Fernando Valley & all LA City areas" },
              { icon: "🕐", label: "Hours", value: "7 Days a Week", href: null, note: "Including evenings & weekends by appointment" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                <span style={{ fontSize: "1.5rem", marginTop: 4 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ color: "var(--navy)", fontWeight: 600, fontSize: "1rem", margin: "2px 0 4px", display: "block", textDecoration: "none" }}>{item.value}</a>
                  ) : (
                    <p style={{ color: "var(--navy)", fontWeight: 600, fontSize: "1rem", margin: "2px 0 4px" }}>{item.value}</p>
                  )}
                  <p style={{ color: "var(--slate)", fontSize: "0.85rem" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "36px 32px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--navy)", marginBottom: 24 }}>Send a Message</h3>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Full Name</label>
              <input type="text" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} placeholder="Your name" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Email</label>
              <input type="email" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} placeholder="you@example.com" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Phone</label>
              <input type="tel" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} placeholder="(818) 000-0000" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Service Needed</label>
              <select style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none", background: "#fff" }}>
                <option>Select a service</option>
                <option>General Notarization</option>
                <option>Apostille Service</option>
                <option>Power of Attorney</option>
                <option>Loan Signing</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Message</label>
              <textarea rows={4} style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "vertical" }} placeholder="Tell me about your notary needs..." />
            </div>
            <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>Send Message</button>
            <p style={{ color: "var(--slate)", fontSize: "0.8rem", marginTop: 12, textAlign: "center" }}>Or call/text directly: <a href="tel:8187263039" style={{ color: "var(--navy)", fontWeight: 600, textDecoration: "none" }}>818-726-3039</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
