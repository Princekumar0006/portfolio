"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="relative w-full py-20 pt-10">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Heading */}

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="text-5xl font-semibold text-slate-900">About</h2>

            <div className="mx-auto mt-4 w-44 text-[#e87532]">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">Passionate frontend developer focused on building responsive, high-performance and user friendly experiences.</p>
          </motion.div>

          {/* Content */}

          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            {/* Left Image */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/5]">
                <Image src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/profile/profile-square-11.webp" alt="About Image" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Right Content */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="font-medium text-[#e87532]">About Me</span>

              <h3 className="text-4xl font-semibold leading-tight">Frontend Developer & UI Enthusiast</h3>

              <p className="leading-7 text-slate-600">I specialize in creating responsive interfaces using HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Shopify development.</p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-slate-600">Suresh Kumar</p>
                </div>

                <div>
                  <p className="font-semibold">Experience</p>
                  <p className="text-slate-600">4+ Years</p>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-600">sureshkumarrtu@gmail.com</p>
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-600">Kota, Rajasthan</p>
                </div>

                <a href="/Suresh-Kumar-Resume.pdf" download>
                  Download Resume
                </a>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
