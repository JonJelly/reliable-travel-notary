"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Apostille", href: "/apostille-services" },
  { label: "Powers of Attorney", href: "/powers-of-attorney" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--navy)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.02em" }}>Reliable Travel Notary</span>
            <div style={{ height: 1, background: "var(--gold)", marginTop: 3, opacity: 0.8 }}></div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.04em", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}>
              {l.label}
            </Link>
          ))}
          <Link href="/book-appointment" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.8rem" }}>Book Now</Link>
        </nav>

        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5 }} className="mobile-menu-btn" aria-label="Menu">
          <span style={{ width: 24, height: 2, background: "var(--gold)", display: "block", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }}></span>
          <span style={{ width: 24, height: 2, background: "var(--gold)", display: "block", opacity: open ? 0 : 1 }}></span>
          <span style={{ width: 24, height: 2, background: "var(--gold)", display: "block", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }}></span>
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--navy)", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "16px 24px 24px" }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "12px 0", fontSize: "0.95rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{l.label}</Link>
          ))}
          <Link href="/book-appointment" className="btn-primary" style={{ marginTop: 16, display: "block", textAlign: "center" }}>Book Appointment</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
