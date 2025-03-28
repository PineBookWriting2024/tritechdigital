import React from 'react'
import Image from 'next/image'
import Counter from './counter'

export default function Video_Section() {
    return (
        <div>
            <section className="happy bg-[#293356] pt-96 relative">

                <div className="container mx-auto max-w-screen-xl">

                    <div className="vid col-span-12 mt-[-55%]">
                        {/* <Image src={"/images/vid.png"} height={950} width={1280} alt="" /> */}
                        <div className='vid-wrap relative'>
                            <span className='w1 l-top-1 h-24 w-24 bg-white absolute top-0 z-24'></span>
                            <span className='g1 r-top-2 h-24 w-24 bg-[#5daf45] absolute top-24 z-20'></span>
                            <span className='w2 r-top-1 h-24 w-24 bg-white absolute top-0 right-0 z-24'></span>
                            <span className='g1 r-top-2 h-24 w-24 bg-[#5daf45] absolute -right-14 top-48 z-20'></span>


                            <video className="h-[50%] w-full mt-8 relative" controls>
                            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        </video>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 items-center pt-20">
                        <h2 class="text-7xl font-bold text-white leading-normal">Happy Dental Statistic</h2>
                        <p className="text-white">Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.</p>
                    </div>
                </div>
            </section>

            <Counter />
        </div>
    )
}
