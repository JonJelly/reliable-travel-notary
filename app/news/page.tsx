import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export const metadata: Metadata = { title: "Notary News & Tips", description: "Helpful tips, notary news, and information about mobile notary services in Los Angeles." };
const posts = [
  { title: "What Is an Apostille and When Do You Need One?", date: "October 15, 2025", excerpt: "If you're planning to use a California-issued document in another country, you may need an apostille. Here's everything you need to know about the process.", href: "/what-is-an-apostille-and-where-do-i-get-one" },
  { title: "What Is a Notary Public? A Plain-Language Explanation", date: "September 20, 2025", excerpt: "Many people need notary services without fully understanding what a notary does or why it matters. Here's a clear explanation of the role and purpose of a Notary Public.", href: "/what-is-a-notary" },
  { title: "How to Prepare for Your Mobile Notary Appointment", date: "August 5, 2025", excerpt: "A little preparation before your mobile notary arrives can make everything go faster and smoother. Here's a simple checklist to get ready.", href: "/faq" },
];
export default function NewsPage() {
  return (
    <>
      <PageHeader tag="Blog & Resources" title="Notary News & Tips" subtitle="Helpful information about notary services, apostilles, and document authentication." />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {posts.map(post => (
            <div key={post.title} style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "36px", marginBottom: 24 }}>
              <span style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>{post.date}</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", margin: "8px 0 12px" }}>{post.title}</h2>
              <p style={{ color: "var(--slate)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 20 }}>{post.excerpt}</p>
              <Link href={post.href} style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>Read More →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
