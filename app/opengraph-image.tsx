import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rodi Digital — AI, Mobile & Web Development Agency";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0046 0%, #4730C6 60%, #6b5cf0 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#cdd0ff", marginBottom: 28, letterSpacing: 2 }}>
          <span>RODI DIGITAL</span>
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1.02, maxWidth: 980 }}>
          <span>Apps, AI, and Websites&nbsp;</span>
          <span style={{ fontStyle: "italic", color: "#cdd0ff" }}>Built with You</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#c9ccf2", marginTop: 36, maxWidth: 820, lineHeight: 1.4 }}>
          <span>AI chatbots, cross-platform mobile apps, and high-conversion websites. Based in the Netherlands, serving clients worldwide.</span>
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 24, color: "#a89dff", gap: 24, letterSpacing: 1 }}>
          <span>rodi-digital.com</span>
          <span>·</span>
          <span>&apos;s-Hertogenbosch, NL</span>
        </div>
      </div>
    ),
    size,
  );
}
