import friends from "@/data/friends.json";
import FriendCard from "@/components/ui/FriendCard";

export default function FriendsSection() {
  return (
    <section className="bg-[#f0f4f3] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-[#101727] mb-6">
          Your Friends
        </h2>

        {/* Friends Grid - 4 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </section>
  );
}

