export function GET() {
  const baseUrl = "https://reliabletravelnotary.com";
  const pages = [
    { url: "/", priority: "1.00" },
    { url: "/services/", priority: "0.90" },
    { url: "/apostille-services/", priority: "0.90" },
    { url: "/certified-translations/", priority: "0.90" },
    { url: "/immigration-uscis-notary/", priority: "0.90" },
    { url: "/live-scan-fingerprinting/", priority: "0.90" },
    { url: "/powers-of-attorney/", priority: "0.90" },
    { url: "/wedding-officiant/", priority: "0.80" },
    { url: "/book-appointment/", priority: "0.90" },
    { url: "/pricing/", priority: "0.80" },
    { url: "/faq/", priority: "0.80" },
    { url: "/reviews/", priority: "0.80" },
    { url: "/about-us/", priority: "0.75" },
    { url: "/contact-us/", priority: "0.80" },
  ];
  const lastmod = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url>\n    <loc>${baseUrl}${p.url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
