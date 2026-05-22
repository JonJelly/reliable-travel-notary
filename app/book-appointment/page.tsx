import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your mobile notary appointment online. I serve Los Angeles, Burbank, Pasadena, and surrounding areas — 7 days a week.",
};
export default function BookPage() {
  return (
    <>
      <PageHeader tag="Schedule Now" title="Book an Appointment" subtitle="Use the form below to request your mobile notary appointment. I'll confirm availability and pricing promptly." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40, alignItems: "start" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "40px 36px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--navy)", marginBottom: 24 }}>Appointment Request</h2>
              {[
                { label: "Full Name", type: "text", placeholder: "Your full name" },
                { label: "Phone Number", type: "tel", placeholder: "(818) 000-0000" },
                { label: "Email Address", type: "email", placeholder: "you@example.com" },
                { label: "Address / Location", type: "text", placeholder: "Where should I come?" },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Preferred Date & Time</label>
                <input type="datetime-local" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Service Needed</label>
                <select style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none", background: "#fff" }}>
                  <option>Select a service</option>
                  <option>General Notarization</option>
                  <option>Apostille Service</option>
                  <option>Certified Translation</option>
                  <option>Immigration / USCIS Notary</option>
                  <option>Live Scan Fingerprinting</option>
                  <option>Power of Attorney</option>
                  <option>Loan Signing</option>
                  <option>Wedding Officiant</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Additional Details</label>
                <textarea rows={3} placeholder="Number of documents, special requirements, etc." style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.15)", borderRadius: 2, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "vertical" }} />
              </div>
              <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>Request Appointment</button>
              <p style={{ color: "var(--slate)", fontSize: "0.8rem", marginTop: 12, textAlign: "center" }}>I'll respond within a few hours to confirm your appointment.</p>
            </div>
            <div>
              <div style={{ background: "var(--navy)", borderRadius: 4, padding: "28px 24px", marginBottom: 20 }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", marginBottom: 16 }}>Prefer to Call?</h4>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 12 }}>For urgent or same-day requests, calling or texting is the fastest option.</p>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>📞 (818) 555-0100</p>
              </div>
              <div style={{ background: "var(--cream)", borderRadius: 4, padding: "24px", border: "1px solid rgba(201,168,76,0.2)" }}>
                <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", marginBottom: 12 }}>What to Prepare</h5>
                {["Do NOT sign your documents in advance","Bring a valid, unexpired government-issued photo ID","All signers must be present","Have your document ready to review"].map(tip => (
                  <div key={tip} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.9rem", marginTop: 1 }}>→</span>
                    <p style={{ color: "var(--slate)", fontSize: "0.85rem", lineHeight: 1.5 }}>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
