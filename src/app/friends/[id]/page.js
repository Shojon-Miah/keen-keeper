import friends from "@/data/friends.json";
import Image from "next/image";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPhone, LuMessageSquare, LuVideo } from "react-icons/lu";

export default async function FriendDetailPage({ params }) {
  const { id } = await params;
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="min-h-screen bg-[#f0f4f3] flex items-center justify-center">
        <p className="text-[#101727] text-xl font-semibold">Friend not found.</p>
      </div>
    );
  }

  const statusStyles = {
    "overdue": "bg-[#ef4444] text-white",
    "almost due": "bg-[#efad44] text-white",
    "on-track": "bg-[#244d3f] text-white",
  };

  const statusLabels = {
    "overdue": "Overdue",
    "almost due": "Almost Due",
    "on-track": "On-Track",
  };

  return (
    <div className="min-h-screen bg-[#f0f4f3] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">

        {/* ===== Left Column ===== */}
        <div className="flex flex-col gap-4">

          {/* Friend Info Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-lg font-bold text-[#101727] mb-2">{friend.name}</h2>
            <span className={`text-xs px-3 py-1 rounded-full font-medium mb-2 ${statusStyles[friend.status]}`}>
              {statusLabels[friend.status]}
            </span>
            <span className="bg-[#e8f5e9] text-[#244d3f] text-xs px-3 py-1 rounded-full font-medium uppercase mb-3">
              {friend.tags[0]}
            </span>
            <p className="text-sm text-[#4b5563] italic mb-1">{`"${friend.bio}"`}</p>
            <p className="text-sm text-[#4b5563]">Preferred: email</p>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm text-[#101727] hover:bg-gray-50 border-b border-gray-200 transition-colors">
              <LuAlarmClock size={16} />
              Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm text-[#101727] hover:bg-gray-50 border-b border-gray-200 transition-colors">
              <MdOutlineArchive size={16} />
              Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm text-[#ef4444] hover:bg-gray-50 transition-colors">
              <RiDeleteBin6Line size={16} />
              Delete
            </button>
          </div>

        </div>

        {/* ===== Right Column ===== */}
        <div className="flex flex-col gap-4">

          {/* Stats Cards - 3 column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-2xl font-semibold text-[#101727] mb-2">{friend.days_since_contact}</p>
              <p className="text-sm text-[#4b5563]">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-2xl font-semibold text-[#101727] mb-2">{friend.goal}</p>
              <p className="text-sm text-[#4b5563]">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-2xl font-semibold text-[#244d3f] mb-2">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm text-[#4b5563]">Next Due</p>
            </div>

          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-[#101727]">Relationship Goal</h3>
              <button className="text-sm border border-gray-200 px-3 py-1 rounded-lg text-[#101727] hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-[#4b5563]">
              Connect every <span className="font-bold text-[#101727]">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-base font-semibold text-[#101727] mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">

              <button className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm text-[#101727] hover:bg-gray-50 transition-colors">
                <LuPhone size={20} />
                Call
              </button>
              <button className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm text-[#101727] hover:bg-gray-50 transition-colors">
                <LuMessageSquare size={20} />
                Text
              </button>
              <button className="flex flex-col items-center justify-center    gap-2 border border-gray-200 rounded-xl py-3 text-sm text-[#101727] hover:bg-gray-50 transition-colors">
                <LuVideo size={20} />
                Video
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

