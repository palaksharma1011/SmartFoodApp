import React from "react";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="border-t border-[#2B1B17]/10 px-6 py-10">
      <div className="font-body mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#2B1B17]/50 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF5252] text-white">
            <Flame className="h-4 w-4" />
          </span>
          <span className="font-display font-semibold text-[#2B1B17]">
            Yumloop
          </span>
        </div>
        <p>© 2026 Yumloop. Made for people who scroll before they eat.</p>
      </div>
    </footer>
  );
};

export default Footer;
