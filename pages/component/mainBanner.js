import React from 'react'

export default function MainBanner(){
  return (
    <div>
           <section className="main-banner flex items-center sm:h-[116vh] h-[80vh] bg-[url('/images/banner.png')] bg-cover">
                <div className="container mx-auto max-w-screen-xl">
        
                  <div className="grid sm:grid-cols-2">
                    <div >
                      <h1 className="sm:text-2xl text-white leading-normal">Happy Dental</h1>
        
                      <h2 className="sm:text-7xl font-bold text-white leading-normal">Your Smile, Our Priority.</h2>
        
                      <p className="text-lg font-medium text-[#fff] leading-normal my-2.5 ">Mauris risus adipiscing cursus consequat. Sit duis lobortis diam non. In in suspendisse quam in vestibulum diam scelerisque vulputate id. In tellus nibh volutpat dignissim.</p>
        
                      <a href="#" className="text-lg font-medium text-[#fff] bg-[#5dae45] p-4 leading-normal inline-block">Make Appointment</a>
                    </div>
                    <div>
        
                    </div>
        
        
                  </div>
        
                </div>
              </section>
        
    </div>
  )
}
