import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export const metadata: Metadata = {
  title: "What Is a Notary Public?",
  description: "Learn what a notary public is, what they do, and why notarization matters for legal documents. Serving Los Angeles, Burbank, and surrounding areas.",
};
export default function WhatIsNotaryPage() {
  return (
    <>
      <PageHeader tag="Notary Education" title="What Is a Notary Public?" subtitle="A clear explanation of the role, purpose, and importance of a Notary Public — and what to expect when using one." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem" }}>
          <p style={{ marginBottom: 20 }}>A Notary Public is a licensed official appointed by the state government to serve as an impartial witness during the signing of important documents. Notaries verify the identity of signers, confirm that they are signing voluntarily, and certify that the signing took place — helping prevent fraud and protecting everyone involved.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.5rem", margin: "36px 0 16px" }}>What Does a Notary Do?</h2>
          <p style={{ marginBottom: 16 }}>During a notarization, I verify that you are who you claim to be using a valid government-issued photo ID. I then watch you sign your document, confirm you are doing so willingly and understand what you're signing, and apply my official seal and signature to certify the notarization.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.5rem", margin: "36px 0 16px" }}>Why Is Notarization Important?</h2>
          <p style={{ marginBottom: 16 }}>Notarization provides a layer of trust and legitimacy to important documents. Banks, courts, government agencies, and real estate institutions often require notarized documents to confirm their authenticity. Without proper notarization, documents may be rejected or legally invalid.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.5rem", margin: "36px 0 16px" }}>What Is a Mobile Notary?</h2>
          <p style={{ marginBottom: 32 }}>A mobile notary does everything a traditional notary does — but comes to you. Instead of requiring you to visit an office or government building, I travel to your home, hospital, workplace, or any convenient location. This is especially valuable for urgent situations, those with mobility limitations, or anyone who simply prefers the convenience.</p>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Ready to Get Your Documents Notarized?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>I come to you anywhere in the greater Los Angeles area — 7 days a week.</p>
            <Link href="/book-appointment" className="btn-primary">Book Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
