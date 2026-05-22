import Link from "next/link";

const services = [
  { label: "General Notary Services", href: "/services" },
  { label: "Apostille Services", href: "/apostille-services" },
  { label: "Powers of Attorney", href: "/powers-of-attorney" },
];
const info = [
  { label: "About Me", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
  { label: "Book Appointment", href: "/book-appointment" },
];

const sfvAreas = [
  "Burbank", "Glendale", "North Hollywood", "Studio City",
  "Sherman Oaks", "Encino", "Van Nuys", "Reseda",
  "Northridge", "Chatsworth", "Woodland Hills", "Canoga Park",
  "Tarzana", "Granada Hills", "Panorama City", "Sun Valley",
];

const laAreas = [
  "Los Angeles", "Hollywood", "West Hollywood", "Beverly Hills",
  "Culver City", "Santa Monica", "Pasadena", "Alhambra",
  "Monterey Park", "Silver Lake", "Echo Park", "Koreatown",
  "Downtown LA", "East LA", "Boyle Heights",
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
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.3rem", marginBottom: 8 }}>Reliable Travel Notary</h3>
          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: 16 }}></div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 20 }}>
            Professional mobile notary serving all of Los Angeles County & the San Fernando Valley — 7 days a week.
          </p>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>Jonathan Geli</p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>Notary Public</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.875rem" }}>
            <a href="tel:8187263039" style={{ color: "var(--gold)", fontWeight: 500, textDecoration: "none" }}>📞 818-726-3039</a>
            <a href="mailto:jgeli@reliabletravelnotary.com" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", wordBreak: "break-all" }}>✉️ jgeli@reliabletravelnotary.com</a>
          </div>
        </div>

        <div>
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>Services</h4>
          {services.map(s => <Link key={s.href} href={s.href} className="footer-link">{s.label}</Link>)}
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, marginTop: 24, fontWeight: 500 }}>Information</h4>
          {info.map(s => <Link key={s.href} href={s.href} className="footer-link">{s.label}</Link>)}
        </div>

        <div>
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>San Fernando Valley</h4>
          {sfvAreas.map(area => <p key={area} style={{ color: "rgba(255,255,255,0.55)", marginBottom: 6, fontSize: "0.825rem" }}>{area}</p>)}
        </div>

        <div>
          <h4 style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>Los Angeles</h4>
          {laAreas.map(area => <p key={area} style={{ color: "rgba(255,255,255,0.55)", marginBottom: 6, fontSize: "0.825rem" }}>{area}</p>)}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", maxWidth: 1200, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: "0.8rem" }}>
        <p style={{ color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} Reliable Travel Notary · Jonathan Geli. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="footer-legal-link">Terms</Link>
          <Link href="/sitemap" className="footer-legal-link">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
