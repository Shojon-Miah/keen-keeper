"use client";
import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import SummaryCard from "../ui/SummaryCard";
import friendsData from "@/data/friends.json";

export default function Banner() {
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    const loadInteractionCount = () => {
      let totalInteractions = 0;
      for (let i = 1; i <= 10; i++) {
        const saved = localStorage.getItem(`timeline_${i}`);
        if (saved) {
          const entries = JSON.parse(saved);
          totalInteractions += entries.length;
        }
      }
      
      setInteractionCount(totalInteractions);
    };

    loadInteractionCount();
  }, []);

  const totalFriends = friendsData.length;
  const onTrack = friendsData.filter((f) => f.status === "on-track").length;
  const needAttention = friendsData.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  const summaryData = [
    { number: totalFriends, label: "Total Friends" },
    { number: onTrack, label: "On Track" },
    { number: needAttention, label: "Need Attention" },
    { number: interactionCount, label: "Interactions This Month" },
  ];

  return (
    <section className="bg-[#f0f4f3] py-16 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#101727] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[#4b5563] text-base mb-8 max-w-lg mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="flex items-center gap-2 bg-[#244d3f] text-white px-6 py-3 rounded-lg text-sm font-medium mx-auto hover:bg-[#1a3830] transition-colors mb-12">
          <HiPlus size={18} />
          Add a Friend
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryData.map((item) => (
            <SummaryCard key={item.label} number={item.number} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}


