"use client";
import { motion } from "motion/react";

export default function Resume() {
  return (
    <>
      <section className="relative w-full py-24">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="text-5xl font-semibold text-slate-900">Resume</h2>

            <div className="mx-auto mt-4 w-44 text-[#e87532]">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">My professional journey, work experience and education background.</p>
          </motion.div>

          {/* Work Experience */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="mb-20">
            <h3 className="mb-4 text-3xl font-semibold text-slate-900">Work Experience</h3>

            <p className="mb-10 max-w-3xl text-slate-600">Practical experience in frontend development, responsive web design, Shopify customization and modern UI development.</p>

            <div className="space-y-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
                <div>
                  <h4 className="font-semibold">Spicetech IT Solution</h4>
                  <p className="text-sm text-[#e87532]">Dec 2021 - Present</p>
                </div>

                <div className="relative border-l border-[#e87532]/30 pl-8">
                  <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-[#e87532]" />
                  <h4 className="text-xl font-semibold">Frontend Developer</h4>
                  <p className="mt-3 leading-7 text-slate-600">Working on responsive websites, Shopify stores, custom UI sections, JavaScript functionality and modern frontend development using React, Next.js and Tailwind CSS.</p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                    <li>Developed responsive and cross-browser compatible UI.</li>
                    <li>Worked on Shopify theme customization and app UI.</li>
                    <li>Implemented JavaScript based interactive features.</li>
                    <li>Collaborated with designers and backend developers.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
                <div>
                  <h4 className="font-semibold">Rajasthan Technical University</h4>
                  <p className="text-sm text-[#e87532]">5 Years</p>
                </div>

                <div className="relative border-l border-[#e87532]/30 pl-8">
                  <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-[#e87532]" />
                  <h4 className="text-xl font-semibold">Computer Operator</h4>
                  <p className="mt-3 leading-7 text-slate-600">Worked in University Teaching Department, Mechanical, Rajasthan Technical University, Kota.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="mb-4 text-3xl font-semibold text-slate-900">My Education</h3>

            <p className="mb-10 max-w-3xl text-slate-600">My academic background in computer science and technical education.</p>

            <div className="space-y-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
                <div>
                  <h4 className="font-semibold">Computer Science</h4>
                  <p className="text-sm text-[#e87532]">B.Tech</p>
                </div>

                <div className="relative border-l border-[#e87532]/30 pl-8">
                  <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-[#e87532]" />
                  <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
                  <p className="mt-3 leading-7 text-slate-600">Completed Bachelor of Technology in Computer Science.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
                <div>
                  <h4 className="font-semibold">Board of Technical Education</h4>
                  <p className="text-sm text-[#e87532]">Diploma</p>
                </div>

                <div className="relative border-l border-[#e87532]/30 pl-8">
                  <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-[#e87532]" />
                  <h4 className="text-xl font-semibold">Diploma in Computer Science</h4>
                  <p className="mt-3 leading-7 text-slate-600">Completed Diploma in Computer Science from Board of Technical Education.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
