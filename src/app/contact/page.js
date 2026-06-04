"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="relative w-full bg-slate-50 py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#e87532]">
            Contact
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Let&apos;s build something great together
          </h1>

          <p className="max-w-lg leading-7 text-slate-600">
            Have a project, job opportunity, or freelance work? Feel free to
            contact me. I&apos;ll get back to you as soon as possible.
          </p>

          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-4">
              <Mail className="text-[#e87532]" size={20} />
              <span>sureshkumarrtu@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#e87532]" size={20} />
              <span>+91 8505082835</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#e87532]" size={20} />
              <span>Kota, Rajasthan, India</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/Kota,+Rajasthan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-900 transition-colors hover:text-[#e87532]"
          >
            Open Map <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-lg"
        >
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-[#e87532]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-[#e87532]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-[#e87532]"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-[#e87532]"
            />

            <Button className="h-auto w-full rounded-lg bg-[#e87532] py-3 hover:bg-[#d96524]">
              Submit Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}