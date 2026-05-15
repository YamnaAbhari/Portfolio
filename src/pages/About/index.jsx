import React, { useEffect } from 'react'
import ContactCard from './Contact'
import { motion } from "framer-motion";
import TyperWriter from '../../Components/TyperWriter';
import Technologies from './Technologies';

export default function About() {
 
  return (
    <motion.div className='md:mt-60 mt-45' 
    initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col gap-4 font-vazir xl:w-[70%] sm:w-[90%] w-full lg:px-45 sm:px-20 px-10 mb-20'>
        <div>
             <h3 className="text-white font-vazir font-bold lg:text-5xl text-4xl  mt-2">
            من{" "}
            <span className="font-rezvan text-purple-600 ">
              یمنا ابحری{" "}
            </span>{" "}
            هستم
          </h3>
        </div>
        <TyperWriter/>
        <p className='sm:text-2xl text-xl text-gray-400'>توسعه‌دهنده فرانت‌اندی که به ساخت تجربه‌های کاربری شفاف، سریع و خوش‌ساخت علاقه دارد. دوست دارم ایده‌های پیچیده را به رابط‌هایی تبدیل کنم که کاربر با آن‌ها احساس راحتی، سرعت و اعتماد داشته باشد.</p>    
      </div>

       <div className='mb-20'>
        <Technologies/>
       </div>
       
     <ContactCard/>

    </motion.div>
  )
}
