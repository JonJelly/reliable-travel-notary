import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getPost, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Reliable Travel Notary`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "72px 24px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>← All Articles</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
            <span style={{ background: "var(--gold)", color: "var(--navy)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 12px", borderRadius: 2 }}>{post.category}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: 16, fontWeight: 700 }}>{post.title}</h1>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ color: "var(--gold)", fontSize: "0.85rem", fontWeight: 500 }}>By Jonathan Geli</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "64px 24px 80px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 280px", gap: 56, alignItems: "start" }}>
          {/* Article content */}
          <article>
            <div
              className="blog-body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            {/* Author card */}
            <div style={{ marginTop: 56, background: "var(--cream)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 4, padding: "28px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--navy)", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>👤</div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Jonathan Geli</p>
                <p style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>California Notary Public · NNA Certified</p>
                <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.6 }}>Mobile notary serving all of Los Angeles County and the San Fernando Valley — 7 days a week.</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: 90 }}>
            <div style={{ background: "var(--navy)", borderRadius: 4, padding: "28px 24px", marginBottom: 24 }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", fontSize: "1.1rem", marginBottom: 16 }}>Book Jonathan</h4>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 20 }}>Available 7 days a week throughout LA County & the San Fernando Valley.</p>
              <a href="tel:8187263039" style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "block", marginBottom: 12 }}>📞 818-726-3039</a>
              <Link href="/book-appointment" className="btn-primary" style={{ display: "block", textAlign: "center", fontSize: "0.85rem", padding: "12px" }}>Book Appointment</Link>
            </div>
            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "24px" }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1rem", marginBottom: 16 }}>More Articles</h4>
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(10,22,40,0.06)" }}>
                    <p style={{ color: "var(--gold)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{p.category}</p>
                    <p style={{ color: "var(--navy)", fontSize: "0.875rem", lineHeight: 1.4, fontWeight: 500 }}>{p.title}</p>
                  </Link>
                ))}
                <Link href="/blog" style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>All Articles →</Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      <style>{`
        .blog-body p { color: var(--slate); line-height: 1.875; margin-bottom: 20px; font-size: 0.975rem; }
        .blog-body h2 { font-family: 'Playfair Display', serif; color: var(--navy); font-size: 1.5rem; margin: 40px 0 16px; padding-bottom: 10px; border-bottom: 2px solid var(--gold); }
        .blog-body h3 { font-family: 'Playfair Display', serif; color: var(--navy); font-size: 1.2rem; margin: 28px 0 12px; }
        .blog-body ul { margin: 0 0 20px 0; padding-left: 0; list-style: none; }
        .blog-body ul li { color: var(--slate); font-size: 0.975rem; line-height: 1.75; padding: 6px 0 6px 24px; position: relative; }
        .blog-body ul li::before { content: "→"; color: var(--gold); font-weight: 700; position: absolute; left: 0; }
        .blog-body strong { color: var(--navy); font-weight: 600; }
        .blog-body em { font-style: italic; }
        @media (max-width: 720px) {
          article + aside { display: none; }
        }
      `}</style>
    </>
  );
}
