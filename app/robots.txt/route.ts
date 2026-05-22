export function GET() {
  const content = "User-agent: *\nAllow: /\nSitemap: https://reliabletravelnotary.com/sitemap.xml";
  return new Response(content, { headers: { "Content-Type": "text/plain" } });
}
