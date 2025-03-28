import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext"; // ✅ Context Import کریں






export default function Header() {
  const { openPopup } = usePopup(); // ✅ Context سے open function لیں

  return (
    <div>
      <header className="header absolute w-full z-50">
        <div className="main-topbar py-4 bg-[#5dae45]">
          <div className="container mx-auto max-w-screen-xl">
            <div className="topbar sm:flex sm:flex-1/2 justify-between items-center">

              <div className="addrs">
                <span className="address text-lg text-white flex items-center gap-2"><IoLocationOutline />
                  46C, Lane Number 10, Bukhari Commercial Area, Phase 6, DHA, Karachi, 75500, Pakistan</span>
              </div>

              <div className="contact sm:flex  gap-2 items-center">
                <a href="tel:847-847-6197" className="mr-2.5 text-lg text-white flex items-center gap-2"><FiPhone />
                  +92 324 8391945</a>
                <a href="mailto:info@domain.com" className="text-lg text-white flex items-center gap-2" ><MdOutlineMailOutline /> info@tritechdigital.org </a>
              </div>

            </div>
          </div>
        </div>
        <div className='bg-white py-4'>
          <div className="container mx-auto max-w-screen-xl ">


            <div className="grid-cols-12 flex justify-between">
              <div className="gird-span-8 flex gap-20 items-center">
                <div className="logo">
                  <a href="/">
                    <Image src={"/images/logo-h.png"} height={50} width={200} alt="logo" />
                  </a>
                </div>

                {/* <ul className="flex space-x-8">
                  <li><a href="#" className='font-[#010C0D] text-lg'>Home</a></li>
                  <li><a href="#" className='font-[#010C0D] text-lg'>About Us</a></li>
                  <li><a href="#" className='font-[#010C0D] text-lg'>Service</a></li>
                  <li><a href="#" className='font-[#010C0D] text-lg'>Blog</a></li>
                  <li><a href="#" className='font-[#010C0D] text-lg'>Contact Us</a></li>
                </ul> */}
              </div>

              <div className="gird-span-4">
                <button
                  className="bg-[#304690] text-xl font-medium text-white px-12 py-2.5 flex items-center gap-8"
                  onClick={openPopup} // <-- Open Sidebar
                >
                  Get Started <FaArrowRight />
                </button>

              </div>
            </div>

          </div>
        </div>
      </header>
      
    </div>
  )
}
