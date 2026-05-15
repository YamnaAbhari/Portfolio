import { Outlet, useLocation, useMatch } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard.jsx";
import { motion } from "framer-motion";
import ShowcaseCard from "./ShowCaseCard/index.jsx";
import { BiDesktop } from "react-icons/bi";
import TechCard from "./TechCard/index.jsx";

const Projects = () => {
  const isRoot = useMatch("/projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isRoot ? (
        <div>
          <div className="md:mt-40 mt-30  lg:mx-35 md:mx-10 sm:px-8 px-5 flex lg:flex-row lg:justify-center lg:items-center flex-col-reverse items-center lg:gap-8 gap-15  font-vazir">
            <div className=" ">
              <div className="inline-flex gap-1.5 rounded-full px-3 py-2  bg-[#331f51]/60 border border-purple-400/30 mb-8">
                <BiDesktop className="text-2xl text-white" />
                <span className="text-gray-200">
                  ویترین پروژه های فرانت اند
                </span>
              </div>

              <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold leading-tight text-white mb-3">
                پروژه‌هایی که{" "}
                <span className="block text-purple-700">
                  رابط کاربری را به تجربه تبدیل می‌کنند
                </span>
              </h1>
              <p className="sm:text-xl text-[18px] text-gray-400">
                این صفحه برای نمایش پروژه‌های فرانت‌اند طراحی شده؛ از داشبوردهای
                کاربردی گرفته تا لندینگ‌پیج‌های مدرن و تجربه‌های تعاملی. ساختار
                کارت‌ها طوری چیده شده که هم برای نمایش نمونه‌کار فعلی مناسب باشد
                و هم بعدا بتوانی لینک، تصویر و جزئیات واقعی هر پروژه را خیلی
                راحت به آن اضافه کنی.
              </p>
            </div>
            <div className="flex-1">
              <ShowcaseCard />
            </div>
          </div>

          {/* projects card */}
          <div className="bg-[#0b1120]  text-white mt-25 rounded-2xl mb-10">
            <h2 className="sm:text-4xl text-3xl text-center pt-10 font-vazir">پروژه‌های منتخب</h2>
            <div className=" py-10  sm:px-10 px-4 lg:mx-30 md:mx-10   grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>

          <TechCard />
        </div>
      ) : (
        <Outlet />
      )}
    </motion.div>
  );
};

export default Projects;