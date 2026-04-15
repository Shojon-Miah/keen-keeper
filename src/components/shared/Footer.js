import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#244d3f] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">

        {/* Logo Text */}
        <h2 className="text-4xl font-bold">KeenKeeper</h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-300 max-w-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="text-sm font-medium mt-2">Social Links</p>
        <div className="flex items-center gap-3">
          <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
            <FaXTwitter size={20} />
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mt-10 pt-6 border-t border-[#3a6b5a] text-sm text-gray-300">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>

    </footer>
  );
}

