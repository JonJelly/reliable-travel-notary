import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Reliable Travel Notary — Jonathan Geli, Mobile Notary Los Angeles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          padding: "60px",
        }}
      >
        <div style={{ color: "#c9a84c", fontSize: 24, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>
          Mobile Notary · Los Angeles &amp; San Fernando Valley
        </div>
        <div style={{ color: "#ffffff", fontSize: 64, fontWeight: 700, textAlign: "center", lineHeight: 1.2, marginBottom: 24 }}>
          Reliable Travel Notary
        </div>
        <div style={{ width: 80, height: 3, background: "#c9a84c", marginBottom: 32 }} />
        <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 32, textAlign: "center" }}>
          Jonathan Geli · 818-726-3039
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 24, marginTop: 16 }}>
          Available 7 Days a Week · I Come to You
        </div>
      </div>
    ),
    { ...size }
  );
}
