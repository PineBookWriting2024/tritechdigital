"use client"; 

import { useEffect, useRef } from "react";
import gsap from "gsap";

const PreLoader = () => {
    const counter1Ref = useRef(null);
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        const animate = (counter, duration, delay = 0) => {
            if (!counter) return;

            const numElement = counter.querySelector(".num");
            if (!numElement) return;

            const numHeight = numElement.clientHeight;
            const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

            gsap.to(counter, {
                y: -totalDistance,
                duration: duration,
                delay: delay,
                ease: "power2.inOut",
            });
        };

        setTimeout(() => {
            animate(counter1Ref.current, 5);
        }, 100);

        gsap.to(".digit", {
            top: "-150px",
            stagger: { amount: 0.25 },
            delay: 6,
            duration: 1,
            ease: "power4.inOut"
        });

        gsap.from(".loader-1", { width: 0, duration: 6, ease: "power2.inOut" });
        // gsap.from(".loader-2", { width: 0, duration: 6, delay: 1.9, ease: "power2.inOut" });
        gsap.to(".loader", { background: "none", delay: 6, duration: 0.1 });

        gsap.to(".loader-1", {width: 600, rotate: 90, y: -50, duration: 0.5, delay: 6 });
        // gsap.to(".loader-2", { x: -75, y: 75, duration: 0.5 });

        gsap.to(".loader", { scale: 1000, duration: 1, delay: 7, ease: "power2.inOut" });
        gsap.to(".loader", { rotate: 45, y: 100, x: 0, duration: 1, delay: 7, ease: "power2.inOut" });



        gsap.to(loadingScreenRef.current, { opacity: 0, duration: 0.5, delay: 7.5, ease: "power1.inOut" });

    }, []);

    return (
        <div ref={loadingScreenRef} className="loading-screen z-99">
            <div className="loader">
                <div className="loader-1 bar"></div>
                {/* <div className="loader-2 bar"></div> */}
            </div>

            <div className="counter">

    {/* Counter 3: 0 - 100 */}
    <div ref={counter1Ref} className="counter-3 digit">
        {[...Array(101)].map((_, i) => (
            <div key={i} className="num">{String(i).padStart(2, "0")}</div>
        ))}
    </div>
</div>

        </div>
    );
};

export default PreLoader;
