import { buildPreviewHtml } from "../build-preview-html";

export default function QuestGiverEmailPreview() {
  const html = buildPreviewHtml("quest_giver");
  return (
    <div>
      <div style={{ background: "#111", color: "#fff", padding: "12px 24px", fontFamily: "system-ui", fontSize: 14, display: "flex", gap: 24, alignItems: "center" }}>
        <span style={{ fontWeight: 700 }}>🏰 Quest Giver Email Preview</span>
        <a href="/preview/email/adventurer" style={{ color: "#2563EB" }}>Adventurer →</a>
        <a href="/preview/email/both" style={{ color: "#0D9488" }}>Both →</a>
        <a href="/preview/email" style={{ color: "#9ca3af" }}>← Back</a>
      </div>
      <iframe
        srcDoc={html}
        style={{ width: "100%", height: "calc(100vh - 48px)", border: "none" }}
        title="Quest Giver Welcome Email Preview"
      />
    </div>
  );
}
