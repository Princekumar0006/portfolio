"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center px-4 m-auto min-h-[50vh]">

      <motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}} className="text-center max-w-xl">

        <h1 className="text-7xl font-bold text-[#e87532]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-900 dark:text-slate-400">
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>

        <div className="mt-8">

          <Button asChild className="rounded-sm px-6 py-2 h-auto">

            <Link href="/">
              Back To Home
            </Link>

          </Button>

        </div>

      </motion.div>

    </section>
  );
}