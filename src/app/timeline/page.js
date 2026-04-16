import timelineData from "@/data/timeline.json";
import { LuPhone, LuMessageSquare, LuVideo } from "react-icons/lu";

function getIcon(type) {
  if (type === "Call") return <LuPhone size={20} className="text-[#101727]" />;
  if (type === "Text") return <LuMessageSquare size={20} className="text-[#101727]" />;
  if (type === "Video") return <LuVideo size={20} className="text-[#101727]" />;
}

function formatDate(dateStr) {
  if (!dateStr) return "No date";
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#f0f4f3] py-10 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#101727] mb-6">Timeline</h1>

        {/* Filter Dropdown */}
        <div className="mb-6">
          <select className="bg-white border border-gray-200 text-sm text-[#4b5563] px-4 py-2.5 rounded-lg w-56 focus:outline-none">
            <option value="">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* Timeline Entries */}
        <div className="flex flex-col gap-3">
          {timelineData.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-xl border border-gray-200 px-6 py-4 flex items-center gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center">
                {getIcon(entry.type)}
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-[#101727]">
                  <span className="font-bold">{entry.type}</span>{" "}
                  <span className="text-[#4b5563]">with {entry.friendName}</span>
                </p>
                <p className="text-xs text-[#4b5563] mt-0.5">
                  {formatDate(entry.date)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

