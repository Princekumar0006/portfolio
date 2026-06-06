"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <section className="relative w-full py-20 pt-10">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Heading */}

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="text-5xl font-semibold text-slate-900 dark:text-white">About</h2>

            <div className="mx-auto mt-4 w-44 text-[#e87532]">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-900 dark:text-slate-400">Passionate frontend developer focused on building responsive, high-performance and user friendly experiences.</p>
          </motion.div>

          {/* Content */}

          <div className="grid grid-cols-1 items-center gap-14">
            {/* Left Image */}

            {/* <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-square">
                <Image src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/profile/profile-square-11.webp" alt="About Image" fill className="object-cover" />
              </div>
            </motion.div> */}

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

              <h3 className="text-4xl font-semibold leading-tight">Frontend Developer</h3>

              <p className="leading-7 text-slate-900 dark:text-slate-400">I specialize in creating responsive interfaces using HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Shopify development.</p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-slate-900 dark:text-slate-400">Suresh Kumar</p>
                </div>

                <div>
                  <p className="font-semibold">Experience</p>
                  <p className="text-slate-900 dark:text-slate-400">4+ Years</p>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-900 dark:text-slate-400">sureshkumarrtu@gmail.com</p>
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-900 dark:text-slate-400">Kota, Rajasthan</p>
                </div>

                <Button asChild>
                  <a href="/suresh-kumar-resume.pdf" download="Suresh-Kumar-Resume.pdf" className="w-fit px-4 py-2 h-auto">
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Skills Cards */}

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "HTML",
                desc: "Semantic and accessible markup structure.",
                percent: "90%",
              },
              {
                title: "CSS",
                desc: "Responsive layouts and modern styling.",
                percent: "90%",
              },
              {
                title: "JavaScript",
                desc: "Interactive frontend functionality.",
                percent: "80%",
              },
              {
                title: "Bootstrap",
                desc: "Modern CSS Framework for web apps.",
                percent: "70%",
              },
              {
                title: "Tailwind CSS",
                desc: "Interactive Framework for web apps.",
                percent: "80%",
              },
              {
                title: "Next.js",
                desc: "Modern React framework for web apps.",
                percent: "70%",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.title}</h4>

                <p className="mt-3 text-sm leading-6 text-slate-900 dark:text-slate-400">{skill.desc}</p>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Skill Level</span>

                  <span className="font-semibold text-slate-900 dark:text-white">{skill.percent}</span>
                </div>

                {/* Progress Bar */}

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e87532]/15">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: skill.percent,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                    }}
                    className="h-full rounded-full bg-[#e87532]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
