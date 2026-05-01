import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(56,189,178,0.25) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(168,85,247,0.18) 0%, transparent 60%), #0d0d0f",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 4,
            color: "#38bdb2",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span style={{ width: 50, height: 2, background: "#38bdb2" }} />
          {SITE.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 130,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: 24,
            }}
          >
            Hamza Hussain
            <br />
            <span style={{ color: "#38bdb2" }}>Shah.</span>
          </div>
          <div style={{ fontSize: 32, color: "#9a9aaa", maxWidth: 900 }}>
            Building beautiful mobile experiences with Flutter, React & Firebase.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#7a7a8c",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <span>HHS<span style={{ color: "#38bdb2" }}>.</span></span>
          <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
