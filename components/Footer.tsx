import Link from "next/link";

const services = [
  { label: "General Notary Services", href: "/services" },
  { label: "Apostille Services", href: "/apostille-services" },
  { label: "Certified Translations", href: "/certified-translations" },
  { label: "Immigration / USCIS Notary", href: "/immigration-uscis-notary" },
  { label: "Live Scan Fingerprinting", href: "/live-scan-fingerprinting" },
  { label: "Powers of Attorney", href: "/powers-of-attorney" },
  { label: "Wedding Officiant", href: "/wedding-officiant" },
];
const info = [
  { label: "About Me", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact-us" },
  { label: "Book Appointment", href: "/book-appointment" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .footer-link { color: rgba(255,255,255,0.65); text-decoration: none; display: block; margin-bottom: 10px; font-size: 0.875rem; transition: color 0.2s; }
        .footer-link:hover { color: var(--gold); }
        .footer-legal-link { color: rgba(255,255,255,0.4); text-decoration: none; }
        .footer-legal-link:hover { color: rgba(255,255,255,0.7); }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.3rem", marginBottom: 8 }}>Reliable Travel Notary</h3>
          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: 16 }}></div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
            Professional mobile notary serving Los Angeles, Burbank, Pasadena & surrounding communities — 7 days a week.
          </p>
          <div style={{ marginTop: 20, fontSize: "0.9rem" }}>
            <p style={{ color: "var(--gold)", fontWeight: 500 }}>📞 (818) 555-0100</p>
            <p style={{ marginTop: 6, color: "rgba(255,255,255,0.65)" }}>info@reliabletravelnotary.com</p>
          </div>
        </div>
        <div>
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Services</h4>
          {services.map(s => (
            <Link key={s.href} href={s.href} className="footer-link">{s.label}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Information</h4>
          {info.map(s => (
            <Link key={s.href} href={s.href} className="footer-link">{s.label}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Areas Served</h4>
          {["Los Angeles", "Burbank", "Pasadena", "Glendale", "Studio City", "Sherman Oaks", "North Hollywood", "Encino", "Van Nuys", "Santa Monica"].map(area => (
            <p key={area} style={{ color: "rgba(255,255,255,0.65)", marginBottom: 8, fontSize: "0.875rem" }}>{area}</p>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", maxWidth: 1200, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: "0.8rem" }}>
        <p style={{ color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} Reliable Travel Notary. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="footer-legal-link">Terms</Link>
          <Link href="/sitemap" className="footer-legal-link">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
