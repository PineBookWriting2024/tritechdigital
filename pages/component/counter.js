import CountUp from 'react-countup';
import { useRef, useState, useEffect } from 'react';

export default function Counter() {
    const counterRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounter(true);
                    observer.disconnect(); // Once started, no need to observe again
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={counterRef} className="happy bg-[#293356]">
            <div className="container mx-auto max-w-screen-xl">
                <div className="w-full mx-auto px-4 md:px-6 py-30 flex justify-between text-center overflow-hidden">
                    <article>
                        <h2 className='leading-1.5'>
                            <span className="flex text-[#5DAF45] text-center text-7xl pb-7 font-bold items-center">
                                <span className='text-7xl leading-1.5'>
                                    <CountUp start={0} end={750} duration={3} delay={0} startOnMount={false} redraw={true} preserveValue={true} useEasing={true}  />
                                </span>+
                            </span>
                            <span className="inline-flex font-semibold text-xl leading-1.5 text-white">
                                Happy Patient
                            </span>
                        </h2>
                    </article>

                    <article>
                        <h2 className='leading-1.5'>
                            <span className="flex text-[#5DAF45] text-center text-7xl pb-7 font-bold items-center">
                                <span className='text-7xl leading-1.5'>
                                    <CountUp start={0} end={560} duration={3} delay={0} startOnMount={false} redraw={true} preserveValue={true} useEasing={true}  />
                                </span>+
                            </span>
                            <span className="inline-flex font-semibold text-xl leading-1.5 text-white">
                                Online Appointment
                            </span>
                        </h2>
                    </article>

                    <article>
                        <h2 className='leading-1.5'>
                            <span className="flex text-[#5DAF45] text-center text-7xl pb-7 font-bold items-center">
                                <span className='text-7xl leading-1.5'>
                                    <CountUp start={0} end={340} duration={3} delay={0} startOnMount={false} redraw={true} preserveValue={true} useEasing={true}  />
                                </span>+
                            </span>
                            <span className="inline-flex font-semibold text-xl leading-1.5 text-white">
                                Winning Award
                            </span>
                        </h2>
                    </article>
                </div>
            </div>
        </section>
    );
}
