import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about mobile notary services, apostilles, live scan fingerprinting, and what to expect when booking with Reliable Travel Notary.",
  alternates: { canonical: "https://reliabletravelnotary.com/faq/" },
  robots: { index: true, follow: true },
};
const faqs = [
  { q: "What is a mobile notary?", a: "A mobile notary is a licensed Notary Public who travels to clients rather than requiring them to come to an office. I come to your home, hospital, workplace, or any other convenient location to notarize your documents." },
  { q: "What documents do I need to bring to my appointment?", a: "Please bring the documents you need notarized (unsigned — you must sign in my presence), a valid government-issued photo ID (driver's license, passport, or state ID), and any additional signers who need to be present. Do not sign your documents before I arrive." },
  { q: "What areas do you serve?", a: "I serve the greater Los Angeles area including Burbank, Pasadena, Glendale, Studio City, Sherman Oaks, North Hollywood, Encino, Van Nuys, Santa Monica, Culver City, and surrounding communities. Contact me if you're unsure whether your location is within my service area." },
  { q: "How quickly can you come to my location?", a: "I offer same-day and sometimes within-the-hour service depending on my schedule and your location. For the fastest service, call or text me directly. You can also book online for a scheduled appointment." },
  { q: "How much does a mobile notary cost?", a: "California law sets the maximum notary fee at $15 per notarized signature. In addition, I charge a travel fee based on your distance from my base area. I always provide a transparent quote before your appointment — no surprises." },
  { q: "What is an apostille and do I need one?", a: "An apostille is an official certificate that authenticates the origin of a public document for use in another country that is party to the Hague Convention. If you need your document recognized in a foreign country (for example, to get married abroad, adopt a child internationally, or work overseas), you likely need an apostille." },
  { q: "Can you notarize documents in a hospital or nursing home?", a: "Absolutely. I regularly visit hospitals, nursing homes, and care facilities to notarize important documents like powers of attorney and advance healthcare directives. I approach these visits with sensitivity and care." },
  { q: "What forms of ID are acceptable for notarization?", a: "Acceptable IDs include a valid driver's license, state-issued ID card, U.S. passport, military ID, or another government-issued photo ID. The ID must be current (not expired) and include a photo and physical description." },
  { q: "Can you notarize documents in a language other than English?", a: "I can notarize documents written in any language, as long as I can communicate with the signer and confirm they understand what they're signing. I also offer certified translation services for many common languages." },
  { q: "Do you offer evening and weekend appointments?", a: "Yes! I'm available 7 days a week, including evenings and weekends, to accommodate your schedule." },
];
export default function FAQPage() {
  return (
    <>
      <PageHeader tag="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before booking your mobile notary appointment." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: 24, background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", borderLeft: "3px solid var(--gold)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.05rem", marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            </div>
          ))}
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center", marginTop: 40 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Still Have Questions?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>I'm happy to answer any questions before you book. Contact me anytime.</p>
            <Link href="/contact-us" className="btn-primary">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
