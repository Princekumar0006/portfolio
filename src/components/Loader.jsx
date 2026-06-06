"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="
      fixed
      inset-0
      z-[99999]

      flex
      flex-col
      items-center
      justify-center

      bg-white
      dark:bg-black
      "
        >
          {/* Circle */}

          <div
            className="
        relative
        flex
        items-center
        justify-center
        "
          >
            <div
              className="
          absolute

          h-24
          w-24

          rounded-full

          bg-[#e87532]/20

          animate-ping
          "
            />

            <div
              className="
          relative

          flex

          h-20
          w-20

          items-center
          justify-center

          rounded-full

          bg-[#e87532]

          text-2xl
          font-bold

          text-white
          "
            >
              SK
            </div>
          </div>

          <p
            className="
        mt-8

        text-sm

        text-slate-500

        dark:text-slate-300
        "
          >
            Loading...
          </p>
        </div>
      ) : (
        children
      )}
    </>
  );
}
