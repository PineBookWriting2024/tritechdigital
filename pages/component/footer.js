import React from 'react'
import Image from "next/image";

import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <div>
            <footer className="footer bg-[#293356] py-20">
                <div className="container mx-auto max-w-screen-xl grid grid-cols-12">

                    <div className="logo-text col-span-4">
                        <Image src={"/images/logo.png"} height={80} width={200} alt="" />
                        <p className="text-lg text-white py-3">Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor blandit eget nibh ac lacus vitae purus. Sagittis tortor fermentum.</p>
                        <ul className="socialMedia flex gap-3 mt-3 flex-1/3">
                            <li className="bg-[#5dae45] p-3"><a href="/"><FaTwitter /></a></li>
                            <li className="bg-[#5dae45] p-3"><a href="/"><FaInstagram /></a></li>
                            <li className="bg-[#5dae45] p-3"><a href="/"><FaYoutube /></a></li>
                        </ul>
                    </div>

                    <div className="col-span-2"></div>

                    <div className="Navigation col-span-2">
                        <h2 className="text-2xl text-white font-extrabold mb-3.5 leading-normal">Navigation</h2>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-white leading-normal text-lg">Home</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">About</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Contact Us</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Service</a></li>
                        </ul>
                    </div>

                    <div className="Navigation col-span-2">
                        <h2 className="text-2xl text-white font-extrabold mb-3.5 leading-normal">Services</h2>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-white leading-normal text-lg">Teeth Whitening</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Dental Filling</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Teeth Checkup</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Teeth Implants</a></li>
                        </ul>
                    </div>

                    <div className="Navigation col-span-2">
                        <h2 className="text-2xl text-white font-extrabold mb-3.5 leading-normal">Resources</h2>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-white leading-normal text-lg">Customer Stories</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Help Center</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Documentation</a></li>
                            <li><a href="/" className="text-white leading-normal text-lg">Blog & Guide</a></li>
                        </ul>
                    </div>


                </div>
            </footer>


            <div className="main-topbar py-4 bg-[#5dae45]">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="topbar flex flex-1/2 justify-between items-center">

                        <div className="addrs">
                            <span className="address text-lg text-white flex items-center gap-2">
                            Copyrigt © 2024 Smile Star Dental</span>
                        </div>

                        <div className="contact flex gap-2 items-center">
                            <a href="tel:84848484848484" className="mr-2.5 text-lg text-white flex items-center gap-2">
                            Terms of Use |  </a>
                            <a href="mailto:company@domain.com" className="text-lg text-white flex items-center gap-2" >Privacy Policy </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
