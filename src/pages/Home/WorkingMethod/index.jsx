// import React from 'react'

// export default function WorkingMethod() {
//   return (
//     <div>WorkingMethod</div>
//   )
// }

export default function WorkingMethod() {
  const workingMethod = [
    {
      title: "تمرکز اصلی من",
      text: "طراحی رابط‌های React و Next.js، توسعه پروژه‌ها و ساخت کامپوننت‌هایی که هم زیبا باشند و هم responsive...",
    },
    {
      title: "شیوه کاری من",
      text: "سعی می‌کنم در هر پروژه بین ظاهر حرفه‌ای، تجربه کاربر، ساختار تمیز کد و آمادگی برای توسعه‌های بعدی تعادل برقرار کنم.",
    },
  ];

  const importantItems = [
    "طراحی رابط کاربری با جزئیات دقیق و ظاهر حرفه‌ای",
    "تجربه کاربری روان در موبایل، تبلت و دسکتاپ",
    "کدنویسی تمیز و ساختار مناسب برای رشد پروژه",
  ];

  return (
    <div className=" bg-[#0b0f23bc] text-white flex justify-center px-8 py-10 rounded-2xl">
      <div className=" w-full flex lg:flex-row-reverse lg:gap-10 lg:items-center flex-col font-vazir">
        <div>
          {/* main title */}
          <h1 className="text-[36px] md:text-[40px] font-extrabold leading-[1.3] mb-6 text-right">
            استک من برای ساخت رابط‌های مدرن
          </h1>

          <p className="text-gray-300 text-right mb-10 max-w-2xl text-xl">
            با استفاده از ابزارهای به‌روز فرانت‌اند، رابط‌هایی طراحی و
            پیاده‌سازی می‌کنم که هم از نظر بصری قوی باشند و هم از نظر
            توسعه‌پذیری، عملکرد و تجربه کاربری استاندارد باقی بمانند.
          </p>
        </div>

        <div className="lg:w-[70%] w-full">
          {/* about me */}
          <div className="w-full bg-[#20173B]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-400/30 shadow-[0_0_1px_rgba(168,85,247,0.35)] mb-5">
            <h2 className="text-purple-400/80 font-bold lg:text-[20px] md:text-lg mb-2 text-right">
              درباره من
            </h2>

            <p className="text-gray-300 text-right leading-7">
              من یک توسعه‌دهنده فرانت‌اند هستم که تمرکزم روی ساخت پروژه‌های
              Next.js و React با معماری تمیز و مقیاس‌پذیره. هدف من اینه که نه
              تنها سایت‌هایی سریع و زیبا بسازم، بلکه کدهایی بنویسم که در آینده
              برای تیم توسعه‌دهنده قابل نگهداری و توسعه باشه. با استفاده از
              ساختار ماژولار و استانداردهای روز، مطمئن می‌شم که پروژه‌ها هم از
              نظر عملکرد عالی هستن و هم به راحتی می‌تونن در آینده رشد کنن.
            </p>
          </div>

          {/* my working method */}
          <div className="grid md:grid-cols-2 gap-6">
            {workingMethod.map((item, i) => (
              <div
                key={i}
                className="bg-[#20173B]/60 border border-purple-400/30 shadow-[0_0_1px_rgba(168,85,247,0.35)] backdrop-blur-md p-6 rounded-2xl"
              >
                <h2 className="text-purple-400/80 font-bold lg:text-[20px] md:text-lg mb-2 text-right">
                  {item.title}
                </h2>

                <p className="text-gray-300 text-right leading-7">
                  {item.text}
                </p>
              </div>
            ))}

            {/* important in my job */}
            <div className="bg-[#20173B]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-400/30 shadow-[0_0_1px_rgba(168,85,247,0.35)]  col-span-1 md:col-span-2">
              <h2 className="text-purple-400/80 font-bold lg:text-[20px] md:text-lg mb-4 text-right">
                چیزی که در کار من مهم است
              </h2>

              <div className="space-y-3">
                {importantItems.map((text, i) => (
                  <div
                    key={i}
                    className="w-full bg-white/5 py-3 px-4 rounded-xl text-right text-gray-200"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
