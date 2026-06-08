"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseCursor);

    return () => {
      window.removeEventListener("mousemove", mouseCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[99999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#e87532] transition-transform duration-100 md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
