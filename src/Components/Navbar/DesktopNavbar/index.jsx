import React from "react";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  return (
    <div className="py-5 w-full  xl:px-25 lg:px-15 md:px-13 px-8 fixed top-0 right-0 z-50">
      <div
        className=" w-full h-18 px-10 flex justify-between items-center
bg-purple-800/15
backdrop-blur-xl
border border-purple-400/30
shadow-[0_0_10px_rgba(168,85,247,0.35)]
rounded-full"
      >
        <div className="font-rezvan">
          <h2 className="font-medium text-[30px] text-white">یمنا ابحری</h2>
        </div>

        <div className="flex items-center gap-3 font-vazir">
          <Link
            className="font-semibold text-[16px] text-white/90 hover:text-white transition"
            to="/"
          >
            خانه
          </Link>
          <Link
            className="font-semibold text-[16px] text-white/90 hover:text-white transition"
            to="/projects"
          >
            پروژه‌ها
          </Link>
          <Link
            className="font-semibold text-[16px] text-white/90 hover:text-white transition"
            to="/about"
          >
            درباره من
          </Link>
        </div>
      </div>
    </div>
  );
}
