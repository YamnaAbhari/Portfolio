export default function ShowcaseCard() {
  return (
    <>
      {/* outer glass */}
      <div
        className="relative w-full  sm:w-md sm:min-h-100  rounded-3xl border border-white/10 font-vazir shadow-2xl shadow-black/40 overflow-hidden bg-linear-to-br from-purple-400/20 via-purple-500/10 to-sky-500/10 "
      >
        {/* glowing background */}
        <div className="pointer-events-none absolute inset-0" />

        <div className="relative p-4 sm:p-6">
          {/* Live Badge */}
          <div className="flex justify-between items-center">
            <div
              className="flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 border border-white/10"
            >
              Live Layout
            </div>

            <div className="text-sm sm:text-base font-semibold text-white/70">
              Front-end Showcase
            </div>
          </div>

          {/* Title Right */}

          {/* FEATURE TILES */}
          <div className="mt-5 grid grid-cols-2 gap-5">
            {/* Tile 1 */}
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f23bc]/80 sm:p-6 p-3
                              shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="relative">
                <div className="text-sm text-white/60 mb-2">سبک کلی</div>
                <div className="text-xl sm:text-[22px] font-semibold text-white">
                  Glass + Glow
                </div>
                <div className="text-white/60 text-sm mt-2">
                 هماهنک با استايل هوم و درباره من
                </div>
              </div>
            </div>

            {/* Tile 2 */}
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f23bc]/80 sm:p-6 p-3
                              shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="relative">
                <div className="text-sm text-white/60 mb-2">تمرکز اصلی</div>
                <div className="text-xl sm:text-[22px] font-semibold text-white">
                  UI / UX
                </div>
                <div className="text-white/60 text-sm mt-2">
                  طراحی تمیز، تعامل نرم و ساختار قابل توسعه
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1f1734] p-4 mt-5 rounded-2xl">
            {/* SECTIONS HEADER */}
            <div className=" flex justify-between gap-5">
              <div className="text-white/60 font-semibold text-base">
                Reusable Cards
              </div>
              <div className="text-white/60 font-semibold text-base">
                Project Grid
              </div>
            </div>

            {/* PROJECT CARDS GRID */}
            <div className="mt-2 w-full  grid  grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border sm:h-32 h-30 border-white/10 
                                bg-white/2 sm:p-3 p-3"
                >
                  <div
                    className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 
                                  blur-2xl transition-all duration-300 group-hover:opacity-100 opacity-60"
                  />
                  <div className="relative">
                    <div className="h-13  sm:h-17 rounded-xl bg-white/5 border border-white/10" />
                    <div className="mt-2 space-y-2">
                      <div className="sm:h-2 h-2 rounded-full bg-white/10 w-11/12" />
                      <div className="sm:h-2 h-2 rounded-full bg-white/10 w-6/12" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* outer ring */}
      {/* <div className="pointer-events-none absolute -inset-3 rounded-[2.1rem] 
                        border border-white/10 opacity-40 blur-[1px]" />
      </div> */}
    </>
    //  </div>
  );
}
