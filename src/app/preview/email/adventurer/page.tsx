import { buildPreviewHtml } from "../build-preview-html";

export default function AdventurerEmailPreview() {
  const html = buildPreviewHtml("adventurer");
  return (
    <div>
      <div style={{ background: "#111", color: "#fff", padding: "12px 24px", fontFamily: "system-ui", fontSize: 14, display: "flex", gap: 24, alignItems: "center" }}>
        <span style={{ fontWeight: 700 }}>⚔️ Adventurer Email Preview</span>
        <a href="/preview/email/quest-giver" style={{ color: "#F97316" }}>Quest Giver →</a>
        <a href="/preview/email/both" style={{ color: "#0D9488" }}>Both →</a>
        <a href="/preview/email" style={{ color: "#9ca3af" }}>← Back</a>
      </div>
      <iframe
        srcDoc={html}
        style={{ width: "100%", height: "calc(100vh - 48px)", border: "none" }}
        title="Adventurer Welcome Email Preview"
      />
    </div>
  );
}
