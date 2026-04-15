export default function SummaryCard({ number, label }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 text-center">
      <p className="text-4xl font-semibold text-[#101727] mb-2">{number}</p>
      <p className="text-sm text-[#4b5563]">{label}</p>
    </div>
  );
}

