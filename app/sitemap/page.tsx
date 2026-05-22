import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "Site Map", description: "Complete site map for Reliable Travel Notary." };
const links = [
  { section: "Main Pages", items: [{ label: "Home", href: "/" }, { label: "About Me", href: "/about-us" }, { label: "Reviews", href: "/reviews" }, { label: "Pricing", href: "/pricing" }, { label: "FAQ", href: "/faq" }] },
  { section: "Services", items: [{ label: "All Services", href: "/services" }, { label: "Apostille Services", href: "/apostille-services" }, { label: "Certified Translations", href: "/certified-translations" }, { label: "Immigration / USCIS Notary", href: "/immigration-uscis-notary" }, { label: "Live Scan Fingerprinting", href: "/live-scan-fingerprinting" }, { label: "Powers of Attorney", href: "/powers-of-attorney" }, { label: "Wedding Officiant", href: "/wedding-officiant" }] },
  { section: "Connect", items: [{ label: "Contact Us", href: "/contact-us" }, { label: "Book Appointment", href: "/book-appointment" }, { label: "Make a Payment", href: "/make-a-web-payment" }] },
  { section: "Legal", items: [{ label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms & Conditions", href: "/terms-and-conditions" }] },
];
export default function SitemapPage() {
  return (
    <>
      <PageHeader tag="Navigation" title="Site Map" />
      <section style={{ padding: "72px 24px", background: "var(--warm-white)" }}>
        <style>{`.sitemap-link { color: var(--slate); text-decoration: none; display: block; margin-bottom: 10px; font-size: 0.9rem; transition: color 0.2s; } .sitemap-link:hover { color: var(--gold); }`}</style>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 40 }}>
          {links.map(s => (
            <div key={s.section}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem", marginBottom: 16 }}>{s.section}</h3>
              <div className="divider-gold" style={{ marginBottom: 16, width: 32 }}></div>
              {s.items.map(item => (
                <Link key={item.href} href={item.href} className="sitemap-link">{item.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
