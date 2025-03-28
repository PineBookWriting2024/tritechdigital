import React from 'react'
import Image from 'next/image'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";



export default function TeamSection() {
    return (
        <div>
            <section className="team py-28 bg-[#293356]">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="team-text grid sm:grid-cols-2">
                        <div>
                            <h2 className="text-xl font-bold leading-normal text-white">Our Team</h2>
                            <h3 className="text-6xl font-bold leading-normal text-white">Meet Our Expert Dental Team</h3>
                            <p className="text-neutral-300 py-10">Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum.</p>
                        </div>

                    </div>


                    <div className="team-member flex flex-1/3 gap-6">

                        <div className="emp bg-white">
                            <div className='members relative'>
                                <Image src={"/images/m1.png"} height={475} width={460} alt="" />
                                <ul className="socialMedia absolute bottom-0 flex flex-1/3">
                                    <li className="bg-[#5dae45] p-5 text-2xl"><a href="/" className='text-white'><FiFacebook /></a></li>
                                    <li className="bg-[#5dae45] p-5 text-2xl"><a href="/" className='text-white'><FiLinkedin /></a></li>
                                </ul>
                            </div>

                            <div className="team-txt py-8 px-10">
                                <h2 className="text-2xl font-bold mb-2 leading-normal">Dr. Caroly</h2>
                                <h3 className="text-[#5dae45] text-lg mb-2 leading-normal">Deantal speacialist</h3>
                            </div>
                        </div>

                        <div className="emp bg-white">
                            <div className='members relative'>
                                <Image src={"/images/m2.png"} height={475} width={460} alt="" />
                                <ul className="socialMedia absolute bottom-0 flex flex-1/3">
                                    <li className="bg-[#5dae45] p-5 text-2xl"><a href="/" className='text-white'><FiFacebook /></a></li>
                                    <li className="bg-[#5dae45] p-5 text-2xl"><a href="/" className='text-white'><FiLinkedin /></a></li>
                                </ul>
                            </div>

                            <div className="team-txt py-8 px-10">
                                <h2 className="text-2xl font-bold mb-2 leading-normal">Dr. Culpepper</h2>
                                <h3 className="text-[#5dae45] text-lg mb-2 leading-normal">Deantal speacialist</h3>
                            </div>
                        </div>

                        <div className="emp bg-white">
                            <div className='members relative'>
                                <Image src={"/images/m3.png"} height={475} width={460} alt="" />
                                <ul className="socialMedia absolute bottom-0 flex flex-1/3">
                                    <li className="bg-[#5dae45] p-5 text-2xl"><a href="/" className='text-white'><FiFacebook /></a></li>
                                    <li className="bg-[#5dae45] p-5 text-2xl"><a href="/" className='text-white'><FiLinkedin /></a></li>
                                </ul>
                            </div>
                            <div className="team-txt py-8 px-10">
                                <h2 className="text-2xl font-bold mb-2 leading-normal">Dr. Alanna</h2>
                                <h3 className="text-[#5dae45] text-lg mb-2 leading-normal">Deantal speacialist</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
