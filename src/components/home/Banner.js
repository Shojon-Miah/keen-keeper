import { HiPlus } from "react-icons/hi";
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
        <button className="flex items-center gap-2 bg-[#244d3f] text-white px-6 py-3 rounded-lg text-sm font-medium mx-auto hover:bg-[#1a3830] transition-colors">
          <HiPlus size={18} />
          Add a Friend
        </button>

      </div>
    </section>
  );
}

