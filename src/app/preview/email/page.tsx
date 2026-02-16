import Link from "next/link";

export default function EmailPreviewIndex() {
  return (
    <div style={{ padding: 40, fontFamily: "system-ui, sans-serif" }}>
      <h1>Welcome Email Previews</h1>
      <ul style={{ fontSize: 18, lineHeight: 2 }}>
        <li>
          <Link href="/preview/email/adventurer">⚔️ Adventurer Version</Link>
        </li>
        <li>
          <Link href="/preview/email/quest-giver">🏰 Quest Giver Version</Link>
        </li>
        <li>
          <Link href="/preview/email/both">⚔️🏰 Both Version</Link>
        </li>
      </ul>
    </div>
  );
}
