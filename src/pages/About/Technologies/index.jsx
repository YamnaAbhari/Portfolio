import React from 'react'
import { technologies } from '../../../data/contact'

export default function Technologies() {
  return (
    <div className='flex flex-col  font-vazir px-3'>
         <h2 className='text-center text-4xl text-gray-300 font-bold'>فناوری ها و ابزار ها</h2>
         <div className='mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4'>
            {technologies.map((item,index)=>{
                return <span key={index} className='skill-tag rounded-full border border-purple-400/30 shadow-[0_0_3px_rgba(168,85,247,0.35)] bg-white/5 px-4 py-2 text-sm text-gray-200  backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-700 hover:text-white sm:px-5 sm:text-base'>{item}</span>
            })}
         </div>
    </div>
  )
}
