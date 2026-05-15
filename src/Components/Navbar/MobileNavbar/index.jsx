import React, { useEffect, useState } from "react";
import { BiCloset } from "react-icons/bi";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating,setIsAnimating]=useState(false)
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsAnimating(true)
    setIsMenuOpen(true)
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

   const handleClose=()=>{
    setIsAnimating(false)
    setTimeout(()=>{
      setIsMenuOpen(false)
    },400)
   }

 

  return (
    <div className="relative ">
      <div
        className="fixed top-0 w-full z-65 flex justify-between items-center px-4  backdrop-blur-xl border-b border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.35)] h-20"
      >
        <div className="font-rezvan">
          <h2 className="font-medium text-[30px] text-white">یمنا ابحری</h2>
        </div>

        <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-2xl border border-purple-400/30 shadow-[0_0_5px_rgba(168,85,247,0.35)]">
          {isAnimating ? (
            <CgClose onClick={handleClose} className="text-2xl text-white stroke-[0.5px] stroke-white" />
          ) : (
            <CgMenuLeft onClick={handleOpen} className="text-3xl text-white" />
          )}
        </div>
      </div>
      
      {isMenuOpen && 
      <>
      {isAnimating &&   <div
      onClick={handleClose}
      className="fixed top-20 inset-0 backdrop-blur-sm bg-black/40 z-50"
    ></div>}
     

      <div className={`fixed top-20 w-full px-4 z-60  ${isAnimating?"menu-open":"menu-close"}`}>
        <div className=" flex flex-col gap-3 px-4 py-5 rounded-2xl  bg-[#131727] font-vazir text-gray-300">
          <div
            onClick={() =>{navigate("/");handleClose()}}
            className="py-2 px-3 rounded-lg bg-[#321353]/60 "
          >
            خانه
          </div>
          <div
            onClick={() =>{navigate("/projects");handleClose()}}
            className="py-2 px-3 rounded-lg bg-[#321353]/60"
          >
            پروژه‌ها
          </div>
          <div
            onClick={() =>{navigate("/about");handleClose()}}
            className="py-2 px-3 rounded-lg bg-[#321353]/60"
          >
            درباره من
          </div>
        </div>
      </div>
      </>
      }
      
    </div>
  );
}
