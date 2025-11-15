import { instagram, youtube } from "@/constant";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-gray-400 border-t border-neutral-800 py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* LEFT — Name */}
        <div className="text-sm text-gray-500 mb-3 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            United Martial Arts Academy
          </span>
          . All rights reserved.
        </div>

        {/* RIGHT — Social Links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href={instagram}
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Instagram size={16} /> Instagram
          </a>
          <a
            href={youtube}
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Youtube size={16} /> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
