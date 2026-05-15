import React from "react";
import { BsGithub} from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import {  FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center lg:gap-3 gap-10 lg:px-25 md:px-5 px-10 py-15  border-t border-gray-700 font-vazir">
      <div className="felx flex-col gap-2.5  md:text-right text-center">
        <h2 className="lg:text-2xl text-xl text-white font-bold">یمنا ابحری</h2>
        <p className="lg:text-xl text-lg text-gray-300 font-medium lg:w-80 md:w-50 ">
          توسعه‌دهنده فرانت‌اند، ساخت رابط‌های کاربری مدرن، سریع و واکنش‌گرا.
        </p>
      </div>

      <div className="flex flex-col  gap-2.5">
        <h2 className="text-xl font-medium text-purple-400/80">دسترسی سریع</h2>
        <ul className="text-white/80 flex flex-col lg:items-start items-center">
          <li
            className="hover:text-white cursor-pointer transition-all"
            onClick={() => {
              navigate("/");
            }}
          >
            خانه
          </li>
          <li
            className="hover:text-white cursor-pointer transition-all"
            onClick={() => {
              navigate("/projects");
            }}
          >
            پروژه‌ها
          </li>
          <li
            className="hover:text-white cursor-pointer transition-all"
            onClick={() => {
              navigate("/about");
            }}
          >
            درباره من
          </li>
        </ul>
      </div>

      <div className="flex flex-col lg:text-right text-center gap-2.5">
        <h2 className="text-xl font-medium text-purple-400/80">
          شبکه های اجتماعی
        </h2>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/YamnaAbhari"
            target="_blank"
            className="w-12 h-12 bg-purple-700/20 flex items-center justify-center rounded-3xl hover:bg-purple-900 transition-all"
          >
            <BsGithub className="text-2xl text-white" />
          </a>
          <a
            href="https://t.me/yamna-abhari"
            target="_blank"
            className="w-12 h-12 bg-purple-700/20 flex items-center justify-center rounded-3xl hover:bg-purple-900 transition-all"
          >
            <FaTelegramPlane className="text-2xl text-white " />
          </a>
          <a
            href="https://web.bale.ai/yamnaabhari"
            target="_blank"
            className="w-12 h-12 bg-purple-700/20 flex items-center justify-center rounded-3xl hover:bg-purple-900 transition-all"
          >
            <div className="w-5 h-5 bg-amber-50 rounded-full flex items-center">
              <CgCheck className="text-2xl text-black " />
            </div>
          </a>
          <a
            href="mailto:yamnaabhari@gmail.com"
            target="_blank"
            className="w-12 h-12 bg-purple-700/20 flex items-center justify-center rounded-3xl hover:bg-purple-900 transition-all"
          >
            <MdEmail className="text-2xl text-white " />
          </a>
        </div>
      </div>
    </div>
  );
}


