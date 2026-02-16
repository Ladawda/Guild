type StatCardProps = {
  label: string;
  value: number;
  color: "blue" | "coral" | "teal";
  icon: string;
};

const colorMap = {
  blue: {
    bg: "bg-guild-blue-wash",
    text: "text-guild-blue",
    ring: "ring-guild-blue-soft",
  },
  coral: {
    bg: "bg-guild-coral-soft",
    text: "text-guild-coral",
    ring: "ring-guild-coral-soft",
  },
  teal: {
    bg: "bg-guild-teal-soft",
    text: "text-guild-teal",
    ring: "ring-guild-teal-soft",
  },
};

export function StatCard({ label, value, color, icon }: StatCardProps) {
  const c = colorMap[color];

  return (
    <div className="glass-strong rounded-2xl p-5 flex items-start gap-4">
      <div className={`w-10 h-10 rounded-xl ${c.bg} ring-1 ${c.ring} flex items-center justify-center text-lg shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-0.5">{label}</p>
        <p className={`text-2xl font-display font-bold ${c.text}`}>
          {value.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
