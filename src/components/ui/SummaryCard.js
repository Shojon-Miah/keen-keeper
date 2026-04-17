// src/app/components/ui/SummaryCard.js
export default function SummaryCard({ number, label }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
      <p className="text-3xl font-bold text-[#101727] mb-1">{number}</p>
      <p className="text-sm text-[#4b5563]">{label}</p>
    </div>
  );
}
