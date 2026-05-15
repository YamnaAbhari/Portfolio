import React from "react";
import { projects } from "../../data/projects";
import { BsGithub, BsStack } from "react-icons/bs";
import { BiDesktop } from "react-icons/bi";
import { motion } from "framer-motion";

export default function DigitalWebsite() {
 return (
     <motion.div
        initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
     >
       {projects.map(
         (p) =>
           p.id === 2 && (
             <section
               key={p?.id}
               className="md:mt-40 sm:mt-30 mt-20 w-full min-h-screen flex flex-col items-center px-6 py-10 font-vazir"
             >
               {/* ===== HEADER + MEDIA ===== */}
               <div className="w-full max-w-7xl grid lg:grid-cols-2 items-center gap-10">
                 {/* TEXT SECTION */}
                 <div className="flex flex-col justify-between">
                   {/* HEADER */}
                   <div>
                     <div className="flex justify-between items-center mb-4">
                       <div className="px-4 py-2 text-[16px] bg-purple-950/50 border border-white/10 rounded-full text-white hover:bg-white/10 transition">
                         {p?.enTitle}
                       </div>
                     </div>
 
                     <h1 className="max-w-3xl sm:text-5xl text-4xl font-extrabold text-white mb-4 leading-snug">
                       {p?.title}
                     </h1>
 
                     <p className="max-w-3xl text-white/60 leading-7 text-lg">
                       {p?.description}
                     </p>
 
                     {/* STACK INFO */}
                     <div className="grid sm:grid-cols-3 gap-4 mt-8">
                       <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-purple-950/30 transition-all">
                         <div className="text-sm text-white/60 mb-2 flex flex-row gap-1.5">
                           <h2>Stack</h2>
                           <span>
                             <BsStack />
                           </span>
                         </div>
                         <div className="text-white text-lg font-bold">
                           {p?.tags.length} تکنولوژی
                         </div>
                       </div>
 
                       <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-purple-950/30 transition-all">
                         <div className="text-sm text-white/60 mb-2 flex flex-row gap-1.5">
                           <span>Preview</span>
                           <BiDesktop />
                         </div>
                         <div className="text-white text-sm font-bold">
                           {p.preview}
                         </div>
                       </div>
                     </div>
 
                     {/* GITHUB BUTTON */}
                     <a
                       href={p.href}
                       target="_blank"
                       className="mt-6 inline-flex flex-row-reverse items-center gap-2 px-5 py-3 bg-white/10 border border-purple-400/30 text-white rounded-xl hover:bg-white/10 transition hover:shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                     >
                       <span>کد پروژه</span>
                       <span>
                         <BsGithub />
                       </span>
                     </a>
                   </div>
                 </div>
 
                 {/* MEDIA */}
                 <div className="lg:mt-0 mt-10 relative bg-linear-to-b from-[#4a2572] to-[#21013c] rounded-3xl lg:p-8 sm:p-4 p-6 border border-white/5 shadow-xl lg:w-full md:w-[70%] w-full lg:mx-0 mx-auto">
                   <div className="relative lg:h-90 md:h-80 h-70 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                     {p.mediaType === "video" ? (
                       <video
                         src={p?.media}
                         autoPlay
                         muted
                         loop
                         playsInline
                         className="w-full h-full object-cover"
                       />
                     ) : (
                       <img
                         src={p?.media}
                         className="w-full h-full object-cover"
                       />
                     )}
                   </div>
                 </div>
               </div>
 
               {/* ===== HIGHLIGHTS + TAGS (SEPARATE BLOCK) ===== */}
               <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-6 mt-12">
                 {/* HIGHLIGHTS */}
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                   <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                     نکات برجسته پروژه
                   </h3>
                   <ul className="space-y-3">
                     {p?.highlights?.map((h, idx) => (
                       <li
                         key={idx}
                         className="flex items-start gap-2 text-white/70 text-[16px]"
                       >
                         <span className="text-purple-400 text-lg">•</span>
                         {h}
                       </li>
                     ))}
                   </ul>
                 </div>
 
                 {/* TAGS */}
                 <div className="bg-white/5 p-5 rounded-2xl border border-white/10 self-start">
                   <h3 className="font-bold text-white mb-4">
                     تکنولوژی‌های استفاده‌شده
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {p?.tags?.map((t, i) => (
                       <div
                         key={i}
                         className="px-5 py-1.5 bg-[#1b0e2f] text-white/80 text-sm border border-white/10 rounded-full"
                       >
                         {t}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             </section>
           ),
       )}
     </motion.div>
   );
}
