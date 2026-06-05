"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tabs = ["All", "React", "Next", "Shopify", "HTML"];

const projects = [
  {
    id: 1,
    title: "GTG Perfumes",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    preview: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Meme Website",
    category: "Next",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    preview: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "React",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    preview: "#",
    github: "#",
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="relative py-20 pt-10">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-semibold text-slate-900">Portfolio</h2>

          <div className="mx-auto mt-4 w-44 text-[#e87532]">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            Recent projects and frontend work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#e87532] text-white shadow-lg"
                  : "border bg-white hover:border-[#e87532] hover:text-[#e87532]"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} className="h-full w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </motion.div>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#e87532]">{item.category}</p>

                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

                <div className="mt-6 flex gap-3">
                  <Button asChild>
                    <Link href={item.preview}>
                      <FaLinkedin />
                      Preview
                    </Link>
                  </Button>

                  <Button variant="outline" asChild>
                    <Link href={item.github}>
                      <FaGithub />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}