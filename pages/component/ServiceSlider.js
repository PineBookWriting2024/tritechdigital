import React from 'react'
import Image from "next/image";
import Marquee from "react-fast-marquee";  

export default function ServiceSlider(){
  return (
    <div>
        <Marquee pauseOnHover='true'>
        <ul className="serslider flex space-x-3 gap-2 bg-[#293356] pr-4 pt-16">

          <li className='transition-all duration-750 hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-1.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>

          <li className='transition-all duration-750  hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-2.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>

          <li className='transition-all duration-750  hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-3.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>

          <li className='transition-all duration-750  hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-4.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>

          <li className='transition-all duration-750 hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-5.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>

          <li className='transition-all duration-750  hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-6.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>

          <li className='transition-all duration-750  hover:-mt-3'>
            <a href="#">
              <div className="ser-box relative">
              {/* <h3 className="p-2 mt-2.5 text-white absolute text-3xl left-[8%] font-extrabold w-full">AI-Enhanced <span className="font-extralight italic">Creative </span></h3> */}
                <Image className='rounded-xl' src="/images/ser-7.png" width={500} height={300} alt="service1" />
                <div className="ser-items">
                  <ul className="ser-list flex flex-wrap absolute gap-2.5 left-[5%]">
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">HTML</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">CSS</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Key art & concept</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">3D GenAI</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Static+</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Rapid branding</li>
                    <li className="text-white font-light text-[10px] space-x-1 rounded-full border-[1px] p-1.5">Copy & concept</li>
                  </ul>
                </div>
                
              </div>
            </a>
          </li>



        </ul>
      </Marquee>
    </div>
  )
}
