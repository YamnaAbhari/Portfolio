import React from 'react'
import { BiPalette } from 'react-icons/bi'
import { CgCodeSlash } from 'react-icons/cg'
import { CiMobile3 } from 'react-icons/ci'

const designQuality=[
    {id:1,title:"كاملا responsive",icon:<CiMobile3/>,description:"تمام بخش ها براى موبايل، تبلت و دسكتاپ از ابتدا طراحى مى شوند. تا تجربه كاربر در هر صفحه ثابت بماند."},
    {id:2,title:"توسعه فرانت اند مدرن",icon:<CgCodeSlash/>,description:"تمرکز من روی نوشتن کدهای بهینه و ساختارمند است که هم سرعت بارگذاری رو به حداکثر می‌رسونه و هم نگهداری و توسعه پروژه رو در دراز مدت برای تیم‌ها آسان می‌کنه."},
    {id:3,title:"طراحى رابط كاربرى دقيق",icon:<BiPalette/>,description:" ساخت لايه بندى تميز، سلسله مراتب بصرى درست وكامپوننت هايى كه حس حرفه اى بودن را منتقل میكنند."}
]

export default function DesignQualitySection() {
  return (
    <section className="w-full bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8 font-vazir">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-wrap gap-6">
          {designQuality.map((item) => (
            <div
              key={item.id}
              className="flex-1 min-w-70 rounded-2xl bg-purple-950/8  border border-purple-400/30 shadow-[0_0_5px_rgba(168,85,247,0.35)] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1  hover:bg-purple-950/20 cursor-pointer"
            >
              <div className="mb-4 flex items-center gap-3 text-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/50 text-2xl text-purple-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
