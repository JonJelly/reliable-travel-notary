import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Reliable Travel Notary. Available 7 days a week in Los Angeles, Burbank, and surrounding areas. Call, text, or send a message.",
};
export default function ContactPage() {
  return (
    <>
      <PageHeader tag="Get in Touch" title="Contact Reliable Travel Notary" subtitle="I'm available 7 days a week. Reach out by phone, text, or the form below and I'll respond promptly." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 16 }}>Contact Information</h2>
            <div className="divider-gold"></div>
            {[
              { icon: "📞", label: "Phone / Text", value: "(818) 555-0100", note: "Call or text — available 7 days a week" },
              { icon: "📧", label: "Email", value: "info@reliabletravelnotary.com", note: "I'll respond within a few hours" },
              { icon: "📍", label: "Service Area", value: "Greater Los Angeles", note: "Burbank, Pasadena, Glendale & more" },
              { icon: "🕐", label: "Hours", value: "7 Days a Week", note: "Including evenings & weekends by appointment" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                <span style={{ fontSize: "1.5rem", marginTop: 4 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</p>
                  <p style={{ color: "var(--navy)", fontWeight: 600, fontSize: "1rem", margin: "2px 0 4px" }}>{item.value}</p>
                  <p style={{ color: "var(--slate)", fontSize: "0.85rem" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "36px 32px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--navy)", marginBottom: 24 }}>Send a Message</h3>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Full Name</label>
              <input type="text" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} placeholder="Your name" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Email</label>
              <input type="email" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} placeholder="you@example.com" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Phone</label>
              <input type="tel" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} placeholder="(818) 000-0000" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Service Needed</label>
              <select style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none", background: "#fff" }}>
                <option>Select a service</option>
                <option>General Notarization</option>
                <option>Apostille Service</option>
                <option>Certified Translation</option>
                <option>Immigration / USCIS Notary</option>
                <option>Live Scan Fingerprinting</option>
                <option>Power of Attorney</option>
                <option>Wedding Officiant</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Message</label>
              <textarea rows={4} style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "vertical" }} placeholder="Tell me about your notary needs..." />
            </div>
            <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>Send Message</button>
          </div>
        </div>
      </section>
    </>
  );
}
