import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import { ImCross } from "react-icons/im";





export default function Header() {

  const [isOpen, setIsOpen] = useState(false); // Initially Closed

  // Function to Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };




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
                {/* ✅ "Get Started" Button to Open Sidebar */}
                <button
                  className="bg-[#304690] text-xl font-medium text-white px-12 py-2.5 flex items-center gap-8"
                  onClick={toggleSidebar} // <-- Open Sidebar
                >
                  Get Started <FaArrowRight />
                </button>

                {/* ✅ Side Popup */}
              </div>
            </div>

          </div>
        </div>
      </header>

      <div className={`fixed inset-y-0 right-0 flex z-[99] max-w-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className="pointer-events-auto w-screen max-w-[38rem]" id="sidePopup">
          <form onSubmit={(e) => e.preventDefault()} className="flex h-full flex-col divide-y divide-gray-200 shadow-xl bg-black">
            <div className="h-0 flex-1 overflow-y-auto">
              <div className="flex flex-1 flex-col justify-between">

                <div className="px-4 sm:px-6 pb-8 overflow-x-hidden">

                  {/* ✅ Close Button */}
                  <div className="relative top-6 sm:left-[91%] left-[85%] rounded-full">
                    <button
                      type="button"
                      className="flex justify-center items-center rounded-full bg-white text-sm font-semibold text-gray-900 h-[40px] w-[40px] md:h-[50px] md:w-[50px] ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={toggleSidebar} >
                      <ImCross />
                    </button>
                  </div>

                  {/* ✅ Popup Content */}
                  <h2 className="font-bold 2xl:mt-4 xl:mt-8 mb-5 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] text-white">
                    Got a <span className="text-theme">project?</span>
                  </h2>
                  <p className="text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Share the details of your project – like scope, timeframes, or business challenges.
                  </p>

                  <p className="text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Our team will thoroughly review the materials and respond to you promptly.
                  </p>
                  <div className="my-8">
                    <p className="text-[#7D8387] font-medium text-xs xl:text-sm 2xl:text-base">I'm interested in</p>
                    <div className="mt-2">
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Custom Software</button>
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Mobile App</button>
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">UX/UI</button>
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Web Development</button>
                    </div>
                  </div>

                  {/* ✅ Input Fields */}
                  <div className="my-8 space-y-4">
                    <input type="text" placeholder="Name" className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2" />
                    <input type="email" placeholder="Email" className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2" />
                    <textarea placeholder="Message" className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2 resize-none" />

                    {/* ✅ Submit Button */}
                    <button type="submit" className="w-full px-6 h-[40px] text-black bg-[#5dae45] rounded-full">
                      Send Message
                    </button>

                    <div className="inline-flex items-start mb-5">
                      <p className="text-[#7D8387] select-none text-sm tracking-wider cursor-text">We'll keep your information in our CRM to respond to your request. For more details, consult our <a className="inline-flex text-white hover:text-[#5dae45] cursor-pointer ps-1.5" href="/privacy-policy/">privacy policy.</a>
                      </p>
                    </div>

                  </div>

                </div>
                  
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
