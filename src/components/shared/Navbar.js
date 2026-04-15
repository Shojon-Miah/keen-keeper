"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { LuChartLine } from "react-icons/lu";

const navLinks = [
  { href: "/", label: "Home", icon: <HiHome size={18} /> },
  { href: "/timeline", label: "Timeline", icon: <LuClock3 size={16} /> },
  { href: "/stats", label: "Stats", icon: <LuChartLine size={16} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo - Left Side */}
        <Link href="/">
          <Image
            src="https://raw.githubusercontent.com/ProgrammingHero1/B13-A7-keen-keeper/main/assets/logo.png"
            alt="KeenKeeper Logo"
            width={140}
            height={36}
            priority
          />
        </Link>

        {/* Nav Links - Right Side */}
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? "bg-[#244d3f] text-white"
                      : "text-[#4b5563] hover:bg-gray-100"
                    }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
}