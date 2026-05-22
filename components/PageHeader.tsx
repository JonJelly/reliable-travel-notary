interface PageHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ tag, title, subtitle }: PageHeaderProps) {
  return (
    <section style={{ background: "var(--navy)", padding: "80px 24px 72px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }}></div>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {tag && <span className="section-tag">{tag}</span>}
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, maxWidth: 680, lineHeight: 1.2 }}>{title}</h1>
        {subtitle && <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 16, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 580 }}>{subtitle}</p>}
        <div style={{ width: 48, height: 2, background: "var(--gold)", marginTop: 24 }}></div>
      </div>
    </section>
  );
}
