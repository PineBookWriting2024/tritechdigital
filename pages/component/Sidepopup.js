"use client";

import React, { useState } from "react";
import { ImCross } from "react-icons/im";


export default function Sidepopup() {


    const [isOpen, setIsOpen] = useState(false); // Initially Closed

    // Function to Toggle Sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    


    return (
        <div>
            `
            <div className={`fixed inset-y-0 right-0 flex z-[99] max-w-full transition-transform duration-300 ${isOpen ? "translate-x-full" : "translate-x-0"}`}>
                <div className="pointer-events-auto w-screen max-w-[38rem]" id="sidePopup">
                <form onSubmit={(e) => e.preventDefault()} className="flex h-full flex-col divide-y divide-gray-200 shadow-xl bg-black">
                <div className="h-0 flex-1 overflow-y-auto">
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="px-4 sm:px-6 pb-8 overflow-x-hidden">
                                    <div className="relative top-6 sm:left-[91%] left-[85%] rounded-full">
                                        <button type="button" className="flex justify-center items-center pointer rounded-full bg-white text-sm font-semibold text-gray-900 h-[40px] w-[40px] md:h-[50px] md:w-[50px] ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={toggleSidebar}>

                                        <ImCross />


                                        </button>
                                    </div>
                                    <div className="lg:overflow-hidden">
                                        <h2 className="font-bold 2xl:mt-4 xl:mt-8 mb-5 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                                            <span className="text-white">
                                                <span>Got a </span>
                                                <span className="text-theme">
                                                    <span>project?</span>
                                                </span>
                                                <span></span>
                                            </span>
                                        </h2>
                                    </div>
                                    <p className=" text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.</p>
                                    <div className="my-8">
                                        <p className=" text-[#7D8387] font-medium text-xs xl:text-sm 2xl:text-base">I'm interested in</p>
                                        <div className="mt-2">
                                            <button type="button" className="bg-transparent text-white   py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Custom Software</button>
                                            <button type="button" className="bg-transparent text-white   py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Mobile App</button>
                                            <button type="button" className="bg-transparent text-white   py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">UX/UI</button>
                                            <button type="button" className="bg-transparent text-white   py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Web Development</button>
                                        </div>
                                    </div>
                                    <div className="space-y-4 pb-5">
                                        <div>
                                            <input type="text" name="name" id="name" className="block w-full rounded-[23px] bg-[#26292D] font-semibold focus:outline-0 text-white focus:text-black placeholder:text-[#848484] placeholder:font-semibold focus:bg-white sm:text-sm sm:leading-6 px-5 py-2 " placeholder="Name" defaultValue="" />
                                        </div>
                                        <div className="flex justify-between sm:flex-row flex-col sm:space-y-0 space-y-4">
                                            <div className="flex flex-col sm:w-[49%] w-full">
                                                <input type="email" name="email" id="email" className="block rounded-[23px] bg-[#26292D] font-semibold focus:outline-0 text-white focus:text-black placeholder:text-[#848484] placeholder:font-semibold focus:bg-white sm:text-sm sm:leading-6 px-5 py-2 " placeholder="Email" defaultValue="" />
                                            </div>
                                            <div className="flex flex-col sm:w-[49%] w-full">
                                                <input type="number" name="number" id="number" className="block rounded-[23px] bg-[#26292D] font-semibold focus:outline-0 text-white focus:text-black placeholder:text-[#848484] placeholder:font-semibold focus:bg-white sm:text-sm sm:leading-6 px-5 py-2 " placeholder="Phone" defaultValue="" />
                                            </div>
                                        </div>
                                        <div>
                                            <textarea id="description" name="description" rows="1" className="block w-full rounded-[23px]  bg-[#26292D] font-semibold focus:outline-0 text-white focus:text-black placeholder:text-[#848484] placeholder:font-semibold focus:bg-white sm:text-sm sm:leading-6 py-2 px-5 resize-none " placeholder="Message"></textarea>
                                        </div>
                                        <button id="button_id57656" type="submit" className="header-module--buttonChange--18e23 w-full items-center px-6 md:px-11 h-[40px] border-transparent rounded-full text-sm font-semibold text-black bg-[#5dae45]">
                                            <span className="pb-[3px]"> Send Message</span>
                                        </button>
                                    </div>
                                    <div className="inline-flex items-start mb-5">
                                        <p className="text-[#7D8387] select-none text-sm tracking-wider cursor-text">We'll keep your information in our CRM to respond to your request. For more details, consult our <a className="inline-flex text-white hover:text-[#5dae45] cursor-pointer ps-1.5" href="/privacy-policy/">privacy policy.</a>
                                        </p>
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




