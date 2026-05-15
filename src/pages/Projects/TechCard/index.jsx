export default function TechCard() {
  const items = [
    "توسعه رابط کاربری مدرن با React و مدیریت وضعیت پیشرفته با Redux",
    "مسیر‌یابی حرفه‌ای صفحات با React Router و ساختار ماژولار",
    "طراحی responsive و زیبا با ترکیب HTML ،Sass، Tailwind ،CSS و Bootstrap",
    "پیاده‌سازی منطق سمت کلاینت با JavaScript و بهینه‌سازی عملکرد"
  ];

  return (
    <div className="w-full flex justify-center px-4 py-10 font-vazir">
      <div className="max-w-162 w-full bg-linear-to-b from-[#1b1034] to-[#120a24] sm:py-10 sm:px-13 py-8 px-10 rounded-3xl  border border-white/10 shadow-[0_0_5px_rgba(168,85,247,0.35)]">
        
        <h2 className="text-center text-white font-bold text-xl mb-6">
          تکنولوژی‌های مورد استفاده
        </h2>

        <div className="space-y-4">
          {items.map((text, index) => (
            <div
              key={index}
              className="bg-[#2a1f4d]/60 text-gray-300 px-4 py-3 rounded-xl shadow-sm border border-white/10 backdrop-blur-sm hover:bg-[#3a2b6d]/70 transition"
            >
              {text}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
