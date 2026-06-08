"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import AnimatedCounters from "@/components/AnimatedCounters";
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center py-20 pt-10">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="space-y-5 text-center lg:text-left"
            >
              <p className="text-[#e87532] font-medium">Hello, I'm</p>
              <h1 className="text-6xl lg:text-7xl font-semibold tracking-tight">Suresh Kumar</h1>

              <h2 className="text-2xl text-[#e87532] font-medium">Frontend Developer</h2>

              <p className="max-w-md max-lg:mx-auto text-base leading-7 text-slate-900 dark:text-slate-400">I build responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, Next.js, Bootstrap and Tailwind CSS.</p>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                {/* <Button asChild className="rounded-sm px-4 py-2 h-auto">
                  <Link href="/portfolio">View my work</Link>
                </Button> */}
                <Button asChild className="rounded-sm px-4 py-2 h-auto">
                  <Link href="/contact">Let&apos;s connect</Link>
                </Button>
              </div>
              <AnimatedCounters />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative flex items-center justify-center">
       
                <div className="absolute h-[320px] w-[320px] rounded-[35%_65%_70%_30%/30%_30%_70%_70%] bg-[#e87532]/12 md:h-[420px] md:w-[420px]" />

             
                <div className="relative z-10 h-[300px] w-[300px] overflow-hidden rounded-[35%_65%_70%_30%/30%_30%_70%_70%] bg-[#fbe6da] shadow-xl md:h-[400px] md:w-[400px]">
                  <Image src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/profile/profile-square-11.webp" alt="Suresh Kumar" fill priority className="object-cover transition-opacity duration-500" />
                </div>

             

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-10 left-6 z-20 rounded-full bg-white dark:bg-black px-5 py-3 shadow-lg hidden lg:flex flex-col"
                >
                  <p className="text-sm font-semibold">4+ Years</p>

                  <p className="text-xs text-slate-500">Experience</p>
                </motion.div>

             

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute top-10 right-6 z-20 rounded-full bg-white dark:bg-black px-5 py-3 shadow-lg hidden lg:flex"
                >
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <FaCode />
                    Code
                  </p>
                </motion.div>

        

                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-[65%] right-[10%] z-20 rounded-full bg-white dark:bg-black px-5 py-3 shadow-lg hidden lg:flex"
                >
                  <p className="text-sm font-semibold">Ideas</p>
                </motion.div>
              </div>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{
                opacity: 1,
                x: mousePosition.x * 0.03,
                y: mousePosition.y * 0.03,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                setMousePosition({ x, y });
              }}
              onMouseLeave={() => {
                setMousePosition({ x: 0, y: 0 });
              }}
              className="relative"
            >
              <div className="rounded-3xl border bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-sm text-slate-500">portfolio.js</span>
                </div>

                <pre className="overflow-x-auto text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {`const developer = {
  name: "Suresh Kumar",
  role: "Frontend Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS"
  ],
  experience: "4+ Years",
  location: "Kota, Rajasthan"
};`}
                </pre>
              </div>

              <motion.div
                animate={{
                  x: mousePosition.x * -0.06,
                  y: mousePosition.y * -0.06,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -right-3 -top-4 rounded-2xl bg-[#e87532] px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                Clean Code
              </motion.div>

              <motion.div
                animate={{
                  x: mousePosition.x * -0.08,
                  y: mousePosition.y * -0.08,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 text-sm font-semibold shadow-lg dark:bg-zinc-800"
              >
                Responsive UI
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
