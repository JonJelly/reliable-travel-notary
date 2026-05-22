import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Reliable Travel Notary | Mobile Notary Los Angeles & San Fernando Valley",
  description: "Jonathan Geli — professional mobile notary serving all of Los Angeles & the San Fernando Valley. I come to you 7 days a week. Call 818-726-3039.",
};

const services = [
  { icon: "🔏", title: "General Notary", href: "/services", desc: "Document notarization for personal and business needs — I travel to your location anywhere in LA County." },
  { icon: "🌐", title: "Apostille Services", href: "/apostille-services", desc: "International document authentication for use in foreign countries, handled start to finish." },
  { icon: "📜", title: "Powers of Attorney", href: "/powers-of-attorney", desc: "Properly executed powers of attorney for healthcare, financial, and legal decisions." },
];

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "5,000+", label: "Documents Notarized" },
  { number: "7", label: "Days a Week Available" },
  { number: "50+", label: "Cities Served" },
];

const sfvAreas = [
  "Burbank", "Glendale", "North Hollywood", "Studio City", "Sherman Oaks",
  "Encino", "Van Nuys", "Reseda", "Northridge", "Chatsworth",
  "Woodland Hills", "Canoga Park", "Tarzana", "Granada Hills",
  "Panorama City", "Sun Valley", "Sylmar", "Mission Hills",
  "Arleta", "Pacoima",
];

const laAreas = [
  "Los Angeles", "Hollywood", "West Hollywood", "Beverly Hills",
  "Culver City", "Santa Monica", "Pasadena", "Alhambra",
  "Monterey Park", "Silver Lake", "Echo Park", "Koreatown",
  "Downtown LA", "East LA", "Boyle Heights", "Inglewood",
  "Hawthorne", "Torrance", "Compton", "Long Beach",
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--navy)", position: "relative", overflow: "hidden", padding: "100px 24px 90px" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)", pointerEvents: "none" }}></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 680 }}>
            <span className="section-tag fade-up">Mobile Notary · Los Angeles &amp; San Fernando Valley</span>
            <h1 className="fade-up delay-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.15, fontWeight: 700, marginBottom: 24 }}>
              Professional Notary<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>That Comes To You</em>
            </h1>
            <p className="fade-up delay-2" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 12, maxWidth: 560 }}>
              I'm Jonathan Geli, a certified mobile notary public serving all of Los Angeles County and the San Fernando Valley. I travel to your home, office, hospital, or anywhere you need — 7 days a week.
            </p>
            <div className="fade-up delay-2" style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 36, marginTop: 20 }}>
              <a href="tel:8187263039" style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.15rem", textDecoration: "none" }}>📞 818-726-3039</a>
              <a href="mailto:jgeli@reliabletravelnotary.com" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", textDecoration: "none", alignSelf: "center" }}>jgeli@reliabletravelnotary.com</a>
            </div>
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
            <span key={t} style={{ color: "var(--navy)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES GRID */}
      <section style={{ padding: "80px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-tag">What I Offer</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--navy)", marginBottom: 8, maxWidth: 480 }}>Complete Notary Services, Delivered to Your Door</h2>
          <div className="divider-gold"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 16 }}>
            {services.map(s => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
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
              When you book with Reliable Travel Notary, you're working directly with me — Jonathan Geli. Not a staffing agency, not a dispatcher, not a rotating roster of strangers. I personally handle every appointment and take full responsibility for every document.
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
            <p style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>Your Notary</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", marginBottom: 4, color: "#fff" }}>Jonathan Geli</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: 28 }}>California Notary Public · NNA Certified</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              <a href="tel:8187263039" style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.2rem", textDecoration: "none" }}>📞 818-726-3039</a>
              <a href="mailto:jgeli@reliabletravelnotary.com" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", textDecoration: "none" }}>✉️ jgeli@reliabletravelnotary.com</a>
            </div>
            <Link href="/book-appointment" className="btn-primary" style={{ marginBottom: 12, display: "block", textAlign: "center" }}>Book Appointment Online</Link>
            <Link href="/contact-us" className="btn-outline" style={{ display: "block", textAlign: "center" }}>Send a Message</Link>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(201,168,76,0.2)" }}>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>Available 7 days a week · Serving all of LA County</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "80px 24px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-tag">Coverage Area</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: 12 }}>Serving All of Los Angeles County</h2>
            <p style={{ color: "var(--slate)", fontSize: "0.95rem", maxWidth: 560, margin: "0 auto" }}>I travel throughout the San Fernando Valley, the greater LA area, and surrounding communities. If you don't see your city, just call — I'll come to you.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.2rem", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid var(--gold)" }}>San Fernando Valley</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                {sfvAreas.map(city => (
                  <span key={city} style={{ background: "var(--cream)", border: "1px solid rgba(10,22,40,0.1)", color: "var(--slate)", padding: "6px 14px", borderRadius: 2, fontSize: "0.85rem" }}>{city}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.2rem", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid var(--gold)" }}>Los Angeles City &amp; Surrounding</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                {laAreas.map(city => (
                  <span key={city} style={{ background: "var(--cream)", border: "1px solid rgba(10,22,40,0.1)", color: "var(--slate)", padding: "6px 14px", borderRadius: 2, fontSize: "0.85rem" }}>{city}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ color: "var(--slate)", fontSize: "0.9rem", marginBottom: 20 }}>Don't see your city? Call me — I travel throughout all of LA County.</p>
            <a href="tel:8187263039" className="btn-primary">📞 Call 818-726-3039</a>
          </div>
        </div>
      </section>


      {/* BLOG PREVIEW */}
      <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="section-tag">Blog & Resources</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--navy)" }}>Notary Tips & Insights</h2>
            </div>
            <Link href="/blog" style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>View All Articles →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="hover-card" style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.08)", borderRadius: 4, padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                    <span style={{ background: "var(--navy)", color: "var(--gold)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 2 }}>{post.category}</span>
                    <span style={{ color: "var(--slate)", fontSize: "0.78rem" }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.05rem", lineHeight: 1.4, marginBottom: 10, flex: 1 }}>{post.title}</h3>
                  <p style={{ color: "var(--slate)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
                  <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: "64px 24px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Get Your Documents Notarized?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 32, fontSize: "0.95rem" }}>Call or text Jonathan directly, or book online. I'll confirm quickly and come to you.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:8187263039" className="btn-primary">📞 818-726-3039</a>
            <Link href="/book-appointment" className="btn-outline">Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
