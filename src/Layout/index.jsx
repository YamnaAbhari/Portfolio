import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

export default function Layout() {
  return (
    <div>
      <ScrollToTop/>
    <Navbar />
      <main className="min-h-[100svh] ">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}