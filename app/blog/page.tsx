import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notary Blog & Tips | Jonathan Geli",
  description: "Helpful articles about notary services, apostilles, powers of attorney, and more — from Jonathan Geli, mobile notary serving Los Angeles and the San Fernando Valley.",
  alternates: { canonical: "https://reliabletravelnotary.com/blog/" },
  robots: { index: true, follow: true },
};

const categoryColors: Record<string, string> = {
  "Notary Tips": "#c9a84c",
  "Apostille": "#1a3a5c",
  "Real Estate": "#2d6a4f",
  "Powers of Attorney": "#6b3fa0",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader tag="Blog & Resources" title="Notary Tips & Insights" subtitle="Practical information to help you navigate notary services, apostilles, powers of attorney, and more." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {["All", ...Array.from(new Set(posts.map((p) => p.category)))].map((cat) => (
              <span key={cat} style={{ background: cat === "All" ? "var(--navy)" : "var(--cream)", color: cat === "All" ? "#fff" : "var(--slate)", padding: "6px 18px", borderRadius: 2, fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em", border: "1px solid rgba(10,22,40,0.1)" }}>
                {cat}
              </span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="hover-card" style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <span style={{ background: categoryColors[post.category] ?? "var(--navy)", color: "#fff", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 2 }}>
                      {post.category}
                    </span>
                    <span style={{ color: "var(--slate)", fontSize: "0.78rem" }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.15rem", lineHeight: 1.4, marginBottom: 12, flex: 1 }}>{post.title}</h2>
                  <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
                  <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 64, background: "var(--navy)", borderRadius: 4, padding: "40px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.4rem", marginBottom: 12 }}>Have a Question Not Covered Here?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Call or text Jonathan directly — happy to help before you even book.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:8187263039" className="btn-primary">📞 818-726-3039</a>
              <Link href="/contact-us" className="btn-outline">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
