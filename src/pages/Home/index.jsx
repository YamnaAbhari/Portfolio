import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import MySkills from "./MySkills";
import DesignQualitySection from "./DesignQualitySection";
import WorkingMethod from "./WorkingMethod";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" lg:mt-55 sm:mt-35 mt-37  flex lg:flex-row lg:justify-between lg:px-25 xl:px-40 px-4  flex-col-reverse gap-20 items-center ">
        <div className="text-right ">
          <h3 className=" text-white font-vazir font-bold text-5xl ">
            سلام
            <span className="inline-block mr-3 animate-waveHandSmooth text-6xl">
              👋🏻
            </span>
          </h3>
          <h3 className="text-white font-vazir font-bold text-4xl mt-2">
            من{" "}
            <span className="font-rezvan text-purple-600 text-4xl">
              یمنا ابحری{" "}
            </span>{" "}
            هستم
          </h3>
          <h3 className="font-rezvan text-white opacity-80 md:text-2xl text-xl mt-3">
            𝗙𝗿𝗼𝗻𝘁-𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 / 𝗨𝗶 𝗗𝗲𝘀𝗶𝗴𝗻𝗲𝗿
          </h3>

          <div className="sm:hidden mt-3 mb-4 flex gap-3 font-vazir">
              <button onClick={()=>{navigate('/projects')}} className="px-5 py-3 rounded-2xl bg-purple-900 text-white text-[16px]">مشاهده پروژه‌ها</button>
              <button onClick={()=>{navigate('/about')}} className="px-5 py-3 rounded-2xl bg-white/5 text-white text-[16px]  border border-purple-400/30 shadow-[0_0_5px_rgba(168,85,247,0.35)]">درباره من</button>
          </div>

          <div className="flex gap-2 mt-3 justify-start ">
            <a
              href="https://github.com/YamnaAbhari"
              target="_blank"
              className="bg-white/80 rounded-lg py-2 px-2  hover:bg-purple-700/80"
            >
              <BsGithub className="text-2xl text-purple-700/80 hover:text-white/80" />
            </a>
            <a
              href="mailto:yamnaabhari@gmail.com"
              target="_blank"
              className="bg-white/80 rounded-lg py-2 px-2  hover:bg-purple-700/80"
            >
              <FiAtSign className="text-2xl text-purple-700/80 hover:text-white/80 " />
            </a>
          </div>
        </div>

        <div className="px-15 py-15 mx-7 lg:mx-0 bg-purple-950/8 backdrop-blur-xl border border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.35)] rounded-3xl">
          <img
            src="src\assets\image\logo.png"
            className="animate-floatUpDown"
          ></img>
        </div>
      </div>

      <div className="mt-20 pb-10 ">
        <MySkills />
      </div>

      <DesignQualitySection />

      <div className="lg:px-15 md:px-10 px-8 pb-25">
        <WorkingMethod />
      </div>
    </motion.div>
  );
}
