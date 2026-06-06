"use client";

import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
        if(window.scrollY > 300){
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    window.addEventListener('scroll', handleScrollY);
    return () => {
        window.removeEventListener('scroll', handleScrollY)
    }
    
  }, [])

  return (
    <div>
        <Button variant="outline" onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }}
         className={`cursor-pointer fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-sm bg-[#e87532] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 ${ showButton ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ArrowUpFromDot />
        </Button>
    </div>
  );
}