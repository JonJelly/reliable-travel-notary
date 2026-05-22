import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "Make a Payment", description: "Pay for your mobile notary services online." };
export default function PaymentPage() {
  return (
    <>
      <PageHeader tag="Payments" title="Make a Payment" subtitle="Pay securely for your notary services online. Contact me if you have any questions about your invoice." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "48px" }}>
            <div style={{ fontSize: "3rem", marginBottom: 20 }}>💳</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.4rem", marginBottom: 16 }}>Payment Options</h3>
            <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 32 }}>I accept the following payment methods. Please contact me with your invoice number or appointment details when sending payment.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left" }}>
              {["💵 Cash", "💳 Credit / Debit Card", "📱 Venmo", "📲 Zelle", "✉️ Check", "🏦 Bank Transfer"].map(m => (
                <div key={m} style={{ padding: "12px 16px", background: "var(--cream)", borderRadius: 4, color: "var(--navy)", fontSize: "0.9rem", fontWeight: 500 }}>{m}</div>
              ))}
            </div>
            <p style={{ color: "var(--slate)", fontSize: "0.875rem", marginTop: 28 }}>Questions about your bill? Call or text me at <strong style={{ color: "var(--navy)" }}>(818) 555-0100</strong></p>
          </div>
        </div>
      </section>
    </>
  );
}
