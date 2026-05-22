import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export const metadata: Metadata = {
  title: "What Is an Apostille and Where Do I Get One?",
  description: "Everything you need to know about apostilles in California — what they are, when you need one, and how to get your documents authenticated for international use.",
};
export default function ApostillePage() {
  return (
    <>
      <PageHeader tag="Apostille Guide" title="What Is an Apostille and Where Do I Get One?" subtitle="A complete guide to apostilles in California — what they are, when you need one, and how I can help." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", color: "var(--slate)", lineHeight: 1.85, fontSize: "0.95rem" }}>
          <p style={{ marginBottom: 20 }}>An apostille (pronounced ah-poh-STEEL) is an official certificate that authenticates the origin of a public document for use in countries that are part of the Hague Convention of 1961. It's essentially an international stamp of legitimacy that tells foreign governments your document is genuine.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.5rem", margin: "36px 0 16px" }}>When Do You Need an Apostille?</h2>
          <p style={{ marginBottom: 16 }}>You'll need an apostille whenever a California-issued document needs to be recognized in another country. Common situations include getting married abroad, international adoption, working or studying overseas, foreign business transactions, and dual citizenship applications.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.5rem", margin: "36px 0 16px" }}>How Do I Get an Apostille in California?</h2>
          <p style={{ marginBottom: 16 }}>In California, apostilles are issued by the California Secretary of State. The process typically involves having the document notarized (if it's a private document), then submitting it to the Secretary of State's office with the required fee. Processing times vary from same-day (in-person) to several weeks (by mail).</p>
          <p style={{ marginBottom: 32 }}>I handle this entire process for you — from notarizing your document to submitting to the Secretary of State and returning the authenticated document. This saves you the time and complexity of navigating the process yourself.</p>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.3rem", marginBottom: 12 }}>Need an Apostille? I Can Help.</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Contact me today and I'll walk you through exactly what's needed for your specific document and destination country.</p>
            <Link href="/apostille-services" className="btn-primary">Apostille Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
