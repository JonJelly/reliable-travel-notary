"use client";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

export default function ServiceCard({ icon, title, desc, href }: ServiceCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div className="service-card">
        <div style={{ fontSize: "2rem", marginBottom: 16 }}>{icon}</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--navy)", marginBottom: 10 }}>{title}</h3>
        <p style={{ fontSize: "0.875rem", color: "var(--slate)", lineHeight: 1.7 }}>{desc}</p>
        <span style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 16, display: "block" }}>Learn More →</span>
      </div>
      <style>{`
        .service-card {
          background: #fff;
          border: 1px solid rgba(10,22,40,0.08);
          border-radius: 4px;
          padding: 32px 28px;
          height: 100%;
          transition: all 0.25s;
          cursor: pointer;
        }
        .service-card:hover {
          box-shadow: 0 12px 40px rgba(10,22,40,0.12);
          transform: translateY(-4px);
          border-color: var(--gold);
        }
      `}</style>
    </Link>
  );
}
