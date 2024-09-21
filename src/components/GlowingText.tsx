import gsap from "gsap";
import React, { ReactNode, useEffect, useRef } from "react";

interface GlowingTextProps {
  children: ReactNode;
  triggerAnimation?: boolean;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, triggerAnimation = false }) => {
  const spanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(triggerAnimation);
    const flickerTimeline = gsap.timeline({ repeat: 2, repeatDelay: 0.1 });
    if (spanRef.current && triggerAnimation) {
      flickerTimeline
        .to(spanRef.current, { opacity: 0.1, duration: 0.1 })
        .to(spanRef.current, { opacity: 0.7, duration: 0.05 })
        .to(spanRef.current, { opacity: 0.5, duration: 0.1 })
        .to(spanRef.current, { opacity: 1, duration: 0.05 })
        
      // Optional: Once flickering is done, apply a glow effect
      gsap.to(spanRef.current, {
        textShadow: "0 0 15px rgb(254 215 170, 1)",
        duration: 1,
        // delay: 1,
      });
    }
  }, [triggerAnimation]);
  return (
    <div ref={spanRef} className="opacity-0 items-center flex justify-center">
      <span
        className="absolute mx-auto py-4 flex border w-fit blur-xl bg-orange-200 bg-clip-text text-4xl box-content font-thin text-transparent text-center select-none"
      >
        {children}
      </span>
      <h1 className="relative top-0 w-fit h-auto py-4 font-sans font-thin justify-center flex bg-orange-200 bg-clip-text text-4xl text-transparent text-center select-auto">
        {children}
      </h1>
    </div>
  );
};

export default GlowingText;
