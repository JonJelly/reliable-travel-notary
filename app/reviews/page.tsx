import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read real client reviews for Reliable Travel Notary. See why clients throughout Los Angeles trust me for their mobile notary needs.",
};
const reviews = [
  { name: "Maria T.", stars: 5, service: "Mobile Notarization", text: "Incredibly professional and prompt. I called in the morning and had a notary at my home within 2 hours. The process was smooth and efficient. Will absolutely use again!" },
  { name: "James R.", stars: 5, service: "Hospital Visit", text: "Needed a last-minute notary for my father's documents at the hospital. The response was immediate and the service was handled with such care and sensitivity. Can't thank you enough." },
  { name: "Ana L.", stars: 5, service: "Apostille Service", text: "Used the apostille service for documents going to Spain. Everything was handled quickly, I was kept informed at every step, and the turnaround was faster than I expected. Highly recommend." },
  { name: "Robert K.", stars: 5, service: "Loan Signing", text: "Professional, knowledgeable, and thorough during my refinance signing. Caught a couple of issues before we started — saved a lot of headache. Great experience." },
  { name: "Claudia M.", stars: 5, service: "Immigration Documents", text: "Helped me with USCIS documents and was so patient in explaining everything. I felt confident that everything was done correctly. Absolutely invaluable service for our family." },
  { name: "David S.", stars: 5, service: "Powers of Attorney", text: "We needed POA documents notarized for our elderly mother at her care facility. Came to the facility, was warm and professional with the whole family. Could not have been easier." },
];
export default function ReviewsPage() {
  return (
    <>
      <PageHeader tag="Client Testimonials" title="What My Clients Say" subtitle="I'm proud of the relationships I've built with clients throughout the Los Angeles area. Here's what they have to say." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginBottom: 56 }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "32px 28px" }}>
                <div style={{ color: "var(--gold)", fontSize: "1.2rem", marginBottom: 6 }}>{"★".repeat(r.stars)}</div>
                <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>{r.service}</span>
                <p style={{ color: "var(--slate)", lineHeight: 1.8, fontStyle: "italic", margin: "12px 0 20px", fontSize: "0.9rem" }}>"{r.text}"</p>
                <p style={{ fontWeight: 600, color: "var(--navy)", fontSize: "0.875rem" }}>— {r.name}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "40px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.4rem", marginBottom: 12 }}>Ready to Experience the Difference?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Join hundreds of satisfied clients across Los Angeles. Book your appointment today.</p>
            <Link href="/book-appointment" className="btn-primary">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
