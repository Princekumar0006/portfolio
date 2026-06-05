"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function Home() {
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

              <p className="max-w-md max-lg:mx-auto text-base leading-7 text-slate-600">I build responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, Next.js, Bootstrap and Tailwind CSS.</p>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Button asChild className="rounded-full px-4 py-2.5 h-auto">
                  <Link href="/portfolio">View my work</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-4 py-2.5 h-auto">
                  <Link href="/contact">Let&apos;s connect</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Orange Shape */}
                <div className="absolute h-[320px] w-[320px] rounded-[35%_65%_70%_30%/30%_30%_70%_70%] bg-[#e87532]/12 md:h-[420px] md:w-[420px]" />

                {/* Image */}
                <div className="relative z-10 h-[300px] w-[300px] overflow-hidden rounded-[35%_65%_70%_30%/30%_30%_70%_70%] bg-[#fbe6da] shadow-xl md:h-[400px] md:w-[400px]">
                  <Image src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/profile/profile-square-11.webp" alt="Suresh Kumar" fill priority className="object-cover transition-opacity duration-500" />
                </div>

                {/* Badge */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-10 left-6 z-20 rounded-full bg-white px-5 py-3 shadow-lg hidden lg:flex flex-col"
                >
                  <p className="text-sm font-semibold">4+ Years</p>

                  <p className="text-xs text-slate-500">Experience</p>
                </motion.div>

                {/* Code Card */}

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute top-10 right-6 z-20 rounded-full bg-white px-5 py-3 shadow-lg hidden lg:flex"
                >
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <FaCode />
                    Code
                  </p>
                </motion.div>

                {/* Ideas Card */}

                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-[65%] right-[10%] z-20 rounded-full bg-white px-5 py-3 shadow-lg hidden lg:flex"
                >
                  <p className="text-sm font-semibold">Ideas</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
