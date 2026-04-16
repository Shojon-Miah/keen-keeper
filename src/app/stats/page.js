"use client";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import timelineData from "@/data/timeline.json";

const COLORS = {
  Text: "#8b5cf6",
  Call: "#244d3f",
  Video: "#22c55e",
};

export default function StatsPage() {
  const callCount = timelineData.filter((e) => e.type === "Call").length;
  const textCount = timelineData.filter((e) => e.type === "Text").length;
  const videoCount = timelineData.filter((e) => e.type === "Video").length;

  const chartData = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f3] py-10 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#101727] mb-6">
          Friendship Analytics
        </h1>

        {/* Chart Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-[#244d3f] mb-6">By Interaction Type</p>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span className="text-sm text-[#4b5563]">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
}

