import { HiPlus } from "react-icons/hi";
import SummaryCard from "@/components/ui/SummaryCard";

const summaryData = [
  { number: 10, label: "Total Friends" },
  { number: 3, label: "On Track" },
  { number: 6, label: "Need Attention" },
  { number: 12, label: "Interactions This Month" },
];

export default function Banner() {
  return (
    <section className="bg-[#f0f4f3] py-16 px-6 text-center">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#101727] mb-4">
          Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="text-[#4b5563] text-base mb-8 max-w-lg mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Add a Friend Button */}
        <button className="flex items-center gap-2 bg-[#244d3f] text-white px-6 py-3 rounded-lg text-sm font-medium mx-auto hover:bg-[#1a3830] transition-colors mb-12">
          <HiPlus size={18} />
          Add a Friend
        </button>

        {/* Summary Cards - 4 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryData.map((item) => (
            <SummaryCard
              key={item.label}
              number={item.number}
              label={item.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
