import Image from "next/image";
import Link from "next/link";

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

export default function FriendCard({ friend }) {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">

        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name */}
        <h3 className="text-base font-semibold text-[#101727] mb-1">
          {friend.name}
        </h3>

        {/* Days Since Contact */}
        <p className="text-sm text-[#4b5563] mb-3">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-3">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#e8f5e9] text-[#244d3f] text-xs px-3 py-1 rounded-full font-medium uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[friend.status]}`}>
          {statusLabels[friend.status]}
        </span>

      </div>
    </Link>
  );
}

