import React from 'react'
import Image from 'next/image'

export default function Video_Section() {
    return (
        <div>
            <section className="happy bg-[#293356] pt-96 relative">

                <div className="container mx-auto max-w-screen-xl">

                    <div className="vid col-span-12 mt-[-57%]">
                        <Image src={"/images/vid.png"} height={950} width={1280} alt="" />
                    </div>

                    <div className="grid grid-cols-2 items-center pt-20">
                        <h2 class="text-7xl font-bold text-white leading-normal">Happy Dental Statistic</h2>
                        <p className="text-white">Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
