import Link from "next/link";
import { LuHouse } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f0f4f3] flex flex-col items-center justify-center px-6 text-center">

      {/* 404 Number */}
      <h1 className="text-8xl font-bold text-[#244d3f] mb-4">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-[#101727] mb-2">
        Page Not Found
      </h2>
      <p className="text-sm text-[#4b5563] mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="flex items-center gap-2 bg-[#244d3f] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1a3830] transition-colors"
      >
        <LuHouse size={16} />
        Back to Home
      </Link>

    </div>
  );
}

