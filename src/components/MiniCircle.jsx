import { useEffect, useMemo, useRef } from "react";

export default function MiniCircle() {
  const circleRef = useRef(null);

  const mouseHandler = useMemo(() => {
    return (e) => {
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
      }
    };
  }, []); 

  useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);
    return () => window.removeEventListener("mousemove", mouseHandler);
  }, [mouseHandler]);

  return (
    <div
      id="minicircle"
      ref={circleRef}
      className="fixed top-0 left-0 h-[15px] w-[15px] rounded-full bg-white pointer-events-none 
      z-9999 transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] mix-blend-difference"
    ></div>
  );
}
