import digitalLandVideo from "../assets/video/digital-land.mp4"; 
import CrateBarrelVideo from "../assets/video/crate-barrel.mp4"; 
import BookingHotelVideo from "../assets/video/booking-hotel.mp4"; 


// src/data/projects.js
export const projects = [
  {
    id: 1,
    enTitle: "E-commerce",
    title: "دیجیتال لند، فروشگاه آنلاین محصولات دیجیتال",
    tags: [
      "Responsive UI",
      "React",
      "Redux Toolkit",
      "Router",
      "Auth",
      "Tailwind CSS",
      "REST API"
    ],
    description:
      "دیجیتال لند، یک فروشگاه آنلاین محصولات دیجیتال شامل گوشی، لپ‌تاپ، تبلت، ساعت، اسپیکر و ایرپاد است که با الهام از رابط کاربری و تجربه کاربری دیجی‌کالا طراحی و پیاده‌سازی شده است. این پروژه با استفاده از ری‌اکت برای فرانت‌اند و یک سیستم بک‌اند اختصاصی، امکاناتی نظیر سبد خرید، جستجو، فیلتر محصولات، نمایش جزئیات محصول، ورود و ثبت نام کاربران را فراهم می‌کند.",
    media: digitalLandVideo,
    mediaType: "video",
    navigate: "digital-land-website",
    href: "https://github.com/YamnaAbhari/digital-land-website",
    highlights:[
      "دسته‌بندی کامل محصولات دیجیتال از برندهای معتبر.",
      " قابلیت جستجوی محصولات",
      " امکان فیلتر کردن محصولات",
      "نمایش کامل اطلاعات، مشخصات فنی، تصاویر و نظرات کاربران برای هر محصول.",
      " سیستمی کارآمد برای مدیریت محصولات انتخابی و نهایی کردن خرید.",
      "فرآیند ورود و ثبت نام امن برای مدیریت حساب کاربری و سفارش‌ها",
      " پیاده‌سازی منطق سمت سرور و مدیریت داده‌ها برای پشتیبانی کامل از عملکردهای فروشگاه.",
    ],
    preview:"Home + Products + Product Details + Auth + Cart + Search"
  },
  {
    id: 2,
    enTitle: "Crate&Barrel.com clone",
    title: "کلون وبسایت Crate & Barrel",
    tags: ["Html", "Css", "JavaScript", "Responsive UI"],
    description:
      "ین پروژه یک بازطراحی و پیاده‌سازی از صفحه Home وب‌سایت Crate & Barrel است که با استفاده از HTML, CSS, JavaScript ساخته شده. در این پروژه تلاش شده تا ساختار بصری، چیدمان محتوا و حس و حال یک وب‌سایت فروشگاهی مدرن بازسازی شود. همچنین قابلیت Login با استفاده از Fake Store API به پروژه اضافه شده تا فرایند احراز هویت کاربر به‌صورت شبیه‌سازی‌شده انجام شود.",
    media: CrateBarrelVideo,
    mediaType: "video",
    navigate: "crate-barrel-website",
    href: "https://github.com/YamnaAbhari/Crate-Barrel-website-clone",
    highlights:[
      "طراحی صفحه Home الهام‌گرفته از Crate & Barrel",
      "پیاده‌سازی با HTML, CSS, JavaScript",
      "UI مدرن و تمیز با تمرکز بر جزئیات بصری",
      "Responsive Design برای نمایش بهتر در دستگاه‌های مختلف",
      "اتصال به Fake Store API برای قابلیت Login",
      "تجربه کاربری روان و ساختار فروشگاهی واقعی",
    ],
    preview:"Clone Website"
  },

  {
    id: 3,
    enTitle: "Personal Brand",
    title: "وبسایت با Sass",
    tags: ["Html", "Sass", "JavaScript", "Scroll Reveal", "Responsive UI"],
    description:
      "یک وب‌سایت رزرو هتل واکنش‌گرا که با HTML، Sass و JavaScript طراحی شده است. در این پروژه از CSS Grid برای ایجاد چیدمان منظم و انعطاف‌پذیر استفاده شده و با ScrollReveal انیمیشن‌های جذابی برای بهبود تجربه کاربری اضافه شده است.",
    media: BookingHotelVideo,
    mediaType: "video",
    navigate: "booking-hotel-website",
    href: "https://github.com/YamnaAbhari/Booking-hotel-website-sass",
    highlights:[
      "کاملاً سازگار با موبایل، تبلت و دسکتاپ",
      "استفاده از گرید برای ساختاردهی بهتر و چیدمان حرفه‌ای",
      " نمایش نرم و جذاب عناصر هنگام اسکرول",
      "طراحی تمیز، مینیمال و کاربرپسند",
      ": استفاده از تکنولوژی‌های پایه و کاربردی فرانت‌اند",
      " تمرکز بر تجربه کاربری روان و بصری جذاب",
    ],
    preview:"Booking Hotel Home Page"
  },
  
];
