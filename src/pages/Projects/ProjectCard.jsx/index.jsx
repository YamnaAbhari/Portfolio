import React from "react";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#20173B] border border-purple-400/10 shadow-[0_0_10px_rgba(168,85,247,0.35)] min-h-180 rounded-2xl  overflow-hidden transition-all duration-500 hover:-translate-y-1.5  ">
      <div className=" bg-linear-to-br from-purple-800 via-purple-500 to-sky-500  pt-3 px-5 pb-10 w-full overflow-hidden">
        <div className="my-3">
          <span className="text-xs text-white font-bold tracking-widest px-3 py-1.5 backdrop-blur-3xl bg-white/20 rounded-2xl border-2 border-white/20">
            {project.enTitle}
          </span>
        </div>

        {/* Media → Video or Image */}
        <div className="mt-5 rounded-xl  overflow-hidden border border-slate-60 ">
          {project.mediaType === "video" ? (
            <video
              src={project.media}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-80 object-cover"
            />
          ) : (
            <img
              src={project.media}
              className="w-full h-80 object-cover"
              alt={project.title}
            />
          )}
        </div>
      </div>

      <div className="px-5 py-3 font-vazir ">
        <h2 className="text-xl text-white font-semibold mt-4">
          {project.title}
        </h2>

        <p className="text-slate-300 text-sm mt-2">{project.description}</p>

        <div className="flex flex-wrap mt-4 gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-slate-600/80 border border-purple-400/30 shadow-[0_0_3px_rgba(168,85,247,0.35)] text-slate-300 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className=" mt-10 sm:mb-3 mb-3 flex justify-end gap-3 ">
          <button
            className="text-white bg-purple-800 px-3 py-2 rounded-lg text-sm cursor-pointer"
            onClick={() => navigate(project.navigate)}
          >
            جزئیات پروژه
          </button>
          <a href={project.href} target="_blank" className="text-white bg-[#34365D] px-4 py-2 text-sm border border-purple-400/30 rounded-lg cursor-pointer flex flex-row-reverse items-center gap-1.5">
            <span>کد پروژه</span>
            <span><BsGithub/></span>
          </a>
        </div>
      </div>
    </div>
  );
}
