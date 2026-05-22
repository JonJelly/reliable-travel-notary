import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reliable Travel Notary | Mobile Notary Los Angeles & Burbank",
  description: "Reliable Travel Notary is a professional mobile notary serving Los Angeles, Burbank, Pasadena & surrounding areas. I come to you — homes, hospitals, offices — 7 days a week.",
};

const services = [
  { icon: "🔏", title: "General Notary", href: "/services", desc: "Document notarization for personal and business needs — I travel to your location." },
  { icon: "🌐", title: "Apostille Services", href: "/apostille-services", desc: "International document authentication for use in foreign countries." },
  { icon: "📝", title: "Certified Translations", href: "/certified-translations", desc: "Accurate certified translations for immigration, legal, and personal documents." },
  { icon: "🏛️", title: "Immigration / USCIS", href: "/immigration-uscis-notary", desc: "Notarization and support for immigration and USCIS document needs." },
  { icon: "🖐️", title: "Live Scan Fingerprinting", href: "/live-scan-fingerprinting", desc: "Fast, accurate Live Scan fingerprinting for background checks and licensing." },
  { icon: "📜", title: "Powers of Attorney", href: "/powers-of-attorney", desc: "Properly executed powers of attorney for healthcare, financial, and legal decisions." },
  { icon: "💍", title: "Wedding Officiant", href: "/wedding-officiant", desc: "Beautiful, personalized wedding ceremonies performed with care and professionalism." },
];

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "5,000+", label: "Documents Notarized" },
  { number: "7", label: "Days a Week Available" },
  { number: "20+", label: "Cities Served" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--navy)", position: "relative", overflow: "hidden", padding: "100px 24px 90px" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)", pointerEvents: "none" }}></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 680 }}>
            <span className="section-tag fade-up">Mobile Notary · Los Angeles &amp; Burbank</span>
            <h1 className="fade-up delay-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.15, fontWeight: 700, marginBottom: 24 }}>
              Professional Notary<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>That Comes To You</em>
            </h1>
            <p className="fade-up delay-2" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 560 }}>
              I'm a certified mobile notary public serving the greater Los Angeles area. Whether you're at home, the hospital, your office, or anywhere in between — I travel to you, 7 days a week.
            </p>
            <div className="fade-up delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/book-appointment" className="btn-primary">Book an Appointment</Link>
              <Link href="/services" className="btn-outline">View All Services</Link>
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 40, flexWrap: "wrap" }}>
              {stats.map(s => (
                <div key={s.number} className="fade-up">
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--gold)" }}>{s.number}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "var(--gold)", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", alignItems: "center" }}>
          {["✓ State Certified Notary Public", "✓ NNA Certified Signing Agent", "✓ Bonded & E&O Insured", "✓ Available 7 Days a Week"].map(t => (
            <span key={t} style={{ color: "var(--navy)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em", fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES GRID */}
      <section style={{ padding: "80px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-tag">What I Offer</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--navy)", marginBottom: 8, maxWidth: 480 }}>Complete Notary Services, Delivered to Your Door</h2>
          <div className="divider-gold"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 16 }}>
            {services.map(s => (
              <Link key={s.href + s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div className="hover-card" style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "32px 28px", height: "100%" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--navy)", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--slate)", lineHeight: 1.7 }}>{s.desc}</p>
                  <span style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 16, display: "block" }}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <span className="section-tag">Why Choose Me</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--navy)", marginBottom: 24, lineHeight: 1.3 }}>Reliable, Discreet &amp; Always On Time</h2>
            <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
              As a solo mobile notary, you're working directly with me — not a staffing agency or rotating roster. I take personal responsibility for every appointment, every document, and every client interaction.
            </p>
            <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 32, fontSize: "0.95rem" }}>
              I handle sensitive documents with the utmost discretion. From loan signings to end-of-life documents, I bring professionalism and compassion to every situation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["🕐", "Same-day & last-minute appointments available"],
                ["📍", "I travel to homes, hospitals, offices & more"],
                ["🔒", "All documents handled with strict confidentiality"],
                ["📱", "Easy scheduling — call, text, or book online"],
              ].map(([icon, text]) => (
                <div key={text as string} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.3rem", marginTop: 2 }}>{icon}</span>
                  <span style={{ color: "var(--slate)", fontSize: "0.95rem", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--navy)", borderRadius: 4, padding: "48px 40px", color: "#fff", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.15)" }}></div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: 24, color: "var(--gold)" }}>Ready to Get Started?</h3>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 28, fontSize: "0.9rem" }}>
              Book your mobile notary appointment online in minutes. I'll confirm quickly and come to your preferred location at your chosen time.
            </p>
            <Link href="/book-appointment" className="btn-primary" style={{ marginBottom: 16, display: "block", textAlign: "center" }}>Book Appointment Online</Link>
            <Link href="/contact-us" className="btn-outline" style={{ display: "block", textAlign: "center" }}>Contact Me Directly</Link>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(201,168,76,0.2)" }}>
              <p style={{ color: "var(--gold)", fontWeight: 600, fontSize: "1.1rem" }}>📞 (818) 555-0100</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginTop: 6 }}>Available 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SNIPPET */}
      <section style={{ padding: "80px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="section-tag">Client Reviews</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--navy)", marginBottom: 8 }}>What Clients Say</h2>
          <div className="divider-gold" style={{ margin: "16px auto 40px" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { stars: 5, name: "Maria T.", text: "Incredibly professional and prompt. Came to my home within 2 hours — I couldn't believe how easy the whole process was!" },
              { stars: 5, name: "James R.", text: "Needed a last-minute notary for hospital documents. So thankful — arrived quickly, handled everything with great sensitivity." },
              { stars: 5, name: "Ana L.", text: "Used the apostille service for documents going to Spain. Fast, accurate, and walked me through every step. Highly recommend!" },
            ].map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.07)", borderRadius: 4, padding: "28px 24px", textAlign: "left" }}>
                <div style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: 12 }}>{"★".repeat(r.stars)}</div>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: 16 }}>"{r.text}"</p>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy)" }}>— {r.name}</p>
              </div>
            ))}
          </div>
          <Link href="/reviews" className="btn-primary" style={{ marginTop: 40, display: "inline-block" }}>Read All Reviews</Link>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "64px 24px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="section-tag">Coverage Area</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 32 }}>Serving Greater Los Angeles</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {["Los Angeles", "Burbank", "Pasadena", "Glendale", "Studio City", "Sherman Oaks", "North Hollywood", "Encino", "Van Nuys", "Santa Monica", "Culver City", "Woodland Hills", "Chatsworth", "West Hollywood", "Beverly Hills"].map(city => (
              <span key={city} style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "rgba(255,255,255,0.85)", padding: "8px 20px", borderRadius: 2, fontSize: "0.875rem" }}>{city}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
