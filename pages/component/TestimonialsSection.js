import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Testimonials(){
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
          <div
            className="absolute bg-[#5dae45] p-3 top-1/2 right-[0%] transform -translate-y-1/2 cursor-pointer text-white text-5xl z-40"
            onClick={onClick}
          >
            <IoIosArrowForward />
          </div>
        );
      };
    
      const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div
            className="absolute bg-[#5dae45] p-3 top-1/2 left-[0%] transform -translate-y-1/2 cursor-pointer text-white text-5xl z-40"
            onClick={onClick}
          >
            <IoIosArrowBack />
          </div>
        );
      };
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
      };
  return (
    <div>
              <section className="testimonials py-28">
        <div className="container mx-auto max-w-screen-xl">
     
          <Slider {...settings}>

            <div className="silpent">
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="testi-text ">
                <h2 className="text-xl font-bold leading-normal text-black">Testimonials</h2>
                <h3 className="text-6xl font-bold leading-normal text-black">What Our Patients Say About Us</h3>
                <Image src={"/images/coma.png"} height={60} width={60} alt="" />
                <p className="text-black py-10">Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada.</p>

                <div className="flex gap-3 items-center">
                  <Image src={"/images/client.png"} height={60} width={60} alt="" />
                  <div className="client-name">
                    <h4>JOSE TURNER</h4>
                    <span>Customer</span>
                  </div>
                </div>
              </div>

              <div className="testi-img">
                <Image src={"/images/testimonials.png"} height={690} width={575} alt="" />
              </div>
            </div>
            </div>

            <div className="silpent">
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="testi-text ">
                <h2 className="text-xl font-bold leading-normal text-black">Testimonials</h2>
                <h3 className="text-6xl font-bold leading-normal text-black">Build your next idea</h3>
                <Image src={"/images/coma.png"} height={60} width={60} alt="" />
                <p className="text-black py-10">Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>

                <div className="flex gap-3 items-center">
                  <Image src={"/images/client.png"} height={60} width={60} alt="" />
                  <div className="client-name">
                    <h4>JOSE TURNER</h4>
                    <span>Customer</span>
                  </div>
                </div>
              </div>

              <div className="testi-img">
                <Image src={"/images/testimonials.png"} height={690} width={575} alt="" />
              </div>
            </div>
            </div>

            <div className="silpent">
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="testi-text ">
                <h2 className="text-xl font-bold leading-normal text-black">Testimonials</h2>
                <h3 className="text-6xl font-bold leading-normal text-black">Build your next idea</h3>
                <Image src={"/images/coma.png"} height={60} width={60} alt="" />
                <p className="text-black py-10">Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>

                <div className="flex gap-3 items-center">
                  <Image src={"/images/client.png"} height={60} width={60} alt="" />
                  <div className="client-name">
                    <h4>JOSE TURNER</h4>
                    <span>Customer</span>
                  </div>
                </div>
              </div>

              <div className="testi-img">
                <Image src={"/images/testimonials.png"} height={690} width={575} alt="" />
              </div>
            </div>
            </div>
          </Slider>

        </div>
      </section>
    </div>
  )
}
