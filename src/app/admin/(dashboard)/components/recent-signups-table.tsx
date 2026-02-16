type Signup = {
  email: string;
  role: string;
  zip_code: string | null;
  referral_source: string | null;
  created_at: string;
};

const roleBadge: Record<string, { label: string; className: string }> = {
  adventurer: {
    label: "Adventurer",
    className: "bg-guild-blue-wash text-guild-blue",
  },
  quest_giver: {
    label: "Quest Giver",
    className: "bg-guild-coral-soft text-guild-coral",
  },
  both: {
    label: "Both",
    className: "bg-guild-teal-soft text-guild-teal",
  },
};

export function RecentSignupsTable({ signups }: { signups: Signup[] }) {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <h2 className="font-display font-bold text-gray-900 mb-4">
        Recent Signups
      </h2>

      {signups.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-8">No signups yet</p>
      ) : (
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-silver/50">
                <th className="text-left py-2 pr-4 font-medium text-gray-500">Email</th>
                <th className="text-left py-2 pr-4 font-medium text-gray-500">Role</th>
                <th className="text-left py-2 pr-4 font-medium text-gray-500">ZIP</th>
                <th className="text-left py-2 pr-4 font-medium text-gray-500">Source</th>
                <th className="text-left py-2 font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {signups.map((s) => {
                const badge = roleBadge[s.role] ?? {
                  label: s.role,
                  className: "bg-gray-100 text-gray-600",
                };
                const date = new Date(s.created_at);
                const formatted = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <tr key={s.email} className="border-b border-silver/30 last:border-0">
                    <td className="py-2.5 pr-4 text-gray-900 truncate max-w-[200px]">
                      {s.email}
                    </td>
                    <td className="py-2.5 pr-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    </td>
                    <td className="py-2.5 pr-4 text-gray-600">
                      {s.zip_code || "—"}
                    </td>
                    <td className="py-2.5 pr-4 text-gray-600 truncate max-w-[140px]">
                      {s.referral_source || "—"}
                    </td>
                    <td className="py-2.5 text-gray-500 whitespace-nowrap">
                      {formatted}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
