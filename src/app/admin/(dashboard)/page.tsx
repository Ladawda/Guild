import { createClient } from "@/lib/supabase/server";
import { StatCard } from "./components/stat-card";
import { SignupsChart } from "./components/signups-chart";
import { RecentSignupsTable } from "./components/recent-signups-table";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Parallel data fetching
  const [totalRes, adventurerRes, questGiverRes, bothRes, dailyRes, recentRes] =
    await Promise.all([
      supabase
        .from("waitlist_signups")
        .select("*", { count: "exact", head: true }),
      supabase
        .from("waitlist_signups")
        .select("*", { count: "exact", head: true })
        .eq("role", "adventurer"),
      supabase
        .from("waitlist_signups")
        .select("*", { count: "exact", head: true })
        .eq("role", "quest_giver"),
      supabase
        .from("waitlist_signups")
        .select("*", { count: "exact", head: true })
        .eq("role", "both"),
      // Daily signups — last 30 days
      supabase
        .from("waitlist_signups")
        .select("created_at")
        .gte(
          "created_at",
          new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
        )
        .order("created_at", { ascending: true }),
      // Recent 20 signups
      supabase
        .from("waitlist_signups")
        .select("email, role, zip_code, referral_source, created_at")
        .order("created_at", { ascending: false })
        .limit(20),
    ]);

  // Aggregate daily counts
  const dailyMap = new Map<string, number>();
  if (dailyRes.data) {
    for (const row of dailyRes.data) {
      const day = row.created_at.slice(0, 10); // YYYY-MM-DD
      dailyMap.set(day, (dailyMap.get(day) ?? 0) + 1);
    }
  }

  // Fill in missing days with 0
  const dailyData: { date: string; count: number }[] = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    dailyData.push({ date: key, count: dailyMap.get(key) ?? 0 });
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-gray-900">
        Waitlist Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Signups"
          value={totalRes.count ?? 0}
          color="blue"
          icon="📊"
        />
        <StatCard
          label="Adventurers"
          value={adventurerRes.count ?? 0}
          color="blue"
          icon="⚔️"
        />
        <StatCard
          label="Quest Givers"
          value={questGiverRes.count ?? 0}
          color="coral"
          icon="🏰"
        />
        <StatCard
          label="Both"
          value={bothRes.count ?? 0}
          color="teal"
          icon="⚔️🏰"
        />
      </div>

      {/* Chart */}
      <SignupsChart data={dailyData} />

      {/* Table */}
      <RecentSignupsTable signups={recentRes.data ?? []} />
    </div>
  );
}
