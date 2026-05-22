import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms and conditions for Reliable Travel Notary services." };
export default function TermsPage() {
  return (
    <>
      <PageHeader tag="Legal" title="Terms & Conditions" />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem" }}>
          <p style={{ marginBottom: 20 }}><strong style={{ color: "var(--navy)" }}>Last updated: January 1, 2025</strong></p>
          <p style={{ marginBottom: 20 }}>By scheduling and using Reliable Travel Notary's services, you agree to the following terms and conditions.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>Appointments & Cancellations</h2>
          <p style={{ marginBottom: 16 }}>Please provide at least 2 hours notice for cancellations. Same-day cancellations may incur a travel fee if I am already en route to your location.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>Document Requirements</h2>
          <p style={{ marginBottom: 16 }}>All signers must present valid, unexpired government-issued photo identification. Documents must not be signed prior to the appointment. I reserve the right to refuse notarization if legal requirements are not met.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>Payment</h2>
          <p style={{ marginBottom: 16 }}>Payment is due at the time of service. Accepted forms of payment include cash, check, Venmo, Zelle, and credit/debit card. Fees are disclosed prior to the appointment.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "32px 0 16px" }}>Limitation of Liability</h2>
          <p>I perform notarizations in accordance with California law. I do not provide legal advice. For questions about the legal effect of your documents, please consult a licensed attorney.</p>
        </div>
      </section>
    </>
  );
}
