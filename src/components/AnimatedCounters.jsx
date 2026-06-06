"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 5,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedication",
  },
];

function CounterBox({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div className="rounded-2xl bg-white p-4 text-center shadow-lg dark:bg-zinc-900 dark:border dark:border-zinc-800">
      <h3 className="text-4xl font-bold text-[#e87532]">
        {count}
        {suffix}
      </h3>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </motion.div>
  );
}

export default function AnimatedCounters() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-0 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
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
          >
            <CounterBox value={item.value} suffix={item.suffix} label={item.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
