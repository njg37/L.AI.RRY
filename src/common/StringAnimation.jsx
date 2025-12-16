import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const StringAnimation = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const string = stringRef.current;
    const path = pathRef.current;

    if (!string || !path) return;

    const initialPath = "M 10 100 Q 500 100 990 100";

    const handleMouseMove = (e) => {
      const bounds = string.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const newPath = `M 10 100 Q ${x} ${y} 990 100`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    string.addEventListener("mousemove", handleMouseMove);
    string.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      string.removeEventListener("mousemove", handleMouseMove);
      string.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
  <div
  ref={stringRef}
  className="bg-white w-[100%] h-[10px] flex items-center justify-start mt-15"
>
<svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none">
  <path
    ref={pathRef}
    d="M 0 100 Q 500 100 1000 100"
    stroke="green"
    fill="transparent"
  />
</svg>

</div>

  );
};

export default StringAnimation;