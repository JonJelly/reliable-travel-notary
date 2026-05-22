import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for Reliable Travel Notary." };
export default function PrivacyPage() {
  return (
    <>
      <PageHeader tag="Legal" title="Privacy Policy" />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem" }}>
          <p style={{ marginBottom: 20 }}><strong style={{ color: "var(--navy)" }}>Last updated: January 1, 2025</strong></p>
          <p style={{ marginBottom: 20 }}>Reliable Travel Notary ("I", "me", or "my") respects your privacy. This policy explains what information I collect, how I use it, and your rights regarding that information.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>Information I Collect</h2>
          <p style={{ marginBottom: 16 }}>I collect information you provide when booking appointments or contacting me, including name, phone number, email address, and location. I do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>How I Use Your Information</h2>
          <p style={{ marginBottom: 16 }}>Your information is used solely to schedule and provide notary services, communicate with you about appointments, and comply with legal obligations. Document details and personal information shared during notarizations are kept strictly confidential.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>Contact</h2>
          <p>If you have questions about this privacy policy, contact me at jgeli@reliabletravelnotary.com or 818-726-3039.</p>
        </div>
      </section>
    </>
  );
}
