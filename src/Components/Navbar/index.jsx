import React, { useEffect, useState } from 'react'
import { handleResize } from '../../Utils/HandleResize'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

export default function Navbar() {
  const [isMobile,setIsMobile]=useState(window.innerWidth<640)

  useEffect(()=>{
    handleResize(setIsMobile,640)
  },[])
  return (
    <>
    {isMobile?<MobileNavbar/>:<DesktopNavbar/>}
    </>
  )
}
