// components/Testimonial.tsx
import { H5, H6 } from "@/components/basic/heading";
import { CLIENT_REVIEW } from "@/constants/main";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useAppStore from "@/store/app";

const Testimonial = () => {
    const { isFinishedOnboarding, setOpenTestimonialDrawer, isOpenTestimonialDrawer, } = useAppStore();
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (isFinishedOnboarding) {
            animateTestimonial();
        }
    }, [isFinishedOnboarding]);

    const animateTestimonial = () => {
        gsap.from(sectionRef.current, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power3.out",
        });

        gsap.from([headingRef.current, imageRef.current, contentRef.current], {
            duration: 1,
            y: 20,
            opacity: 0,
            stagger: 0.3,
            ease: "power3.out",
            delay: 0.5
        });
    };

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
            rotate: -10,
            duration: 0.6,
            yoyo: true,
        });
    };

    const handleMouseLeave = () => {
        gsap.killTweensOf(imageRef.current); // Stop the animation on mouse leave
        gsap.to(imageRef.current, {
            rotate: 0, // Reset scale
            duration: 0.6,
        });
    };

    return (
        <div
            ref={sectionRef}
            className="flex flex-col items-center bg-card p-4 flex-1 rounded-xl cursor-pointer transition-transform duration-500 hover:!scale-105"
            onClick={() => setOpenTestimonialDrawer(!isOpenTestimonialDrawer)}
            onMouseEnter={handleMouseEnter} // Trigger pulse animation
            onMouseLeave={handleMouseLeave} // Stop pulse animation
        >
            <H6 className="mb-5" ref={headingRef}>
                {CLIENT_REVIEW?.title}
            </H6>
            <Image ref={imageRef} src={CLIENT_REVIEW?.imageSrc} alt={CLIENT_REVIEW?.imageAlt} width={150} height={150} />
            <div className="flex flex-col items-center pt-5" ref={contentRef}>
                <H5>{CLIENT_REVIEW?.countOfReviews}</H5>
                <span className="font-mont">{CLIENT_REVIEW?.description}</span>
            </div>
        </div>
    );
};

export default Testimonial;