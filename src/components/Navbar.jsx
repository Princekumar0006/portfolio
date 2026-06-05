"use client";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 text-black bg-white py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-6xl w-full mx-auto rounded-full bg-white shadow-lg px-6 py-3">
        <div className="flex flex-col items-start justify-center gap-0.5">
          <span className="text-lg tracking-wider font-semibold">SK</span>
          {/* <span className="text-muted-foreground text-xs font-normal">Frontend Developer</span> */}
        </div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          <Link className={pathname === "/" ? "text-orange-500" : "transition-colors duration-300 hover:text-orange-500"} href="/">
            Home
          </Link>
          <Link className={pathname === "/about" ? "text-orange-500" : "transition-colors duration-300 hover:text-orange-500"} href="/about">
            About
          </Link>
          <Link className={pathname === "/resume" ? "text-orange-500" : "transition-colors duration-300 hover:text-orange-500"} href="/resume">
            Resume
          </Link>
          <Link className={pathname === "/portfolio" ? "text-orange-500" : "transition-colors duration-300 hover:text-orange-500"} href="/portfolio">
            Portfolio
          </Link>
          <Link className={pathname === "/contact" ? "text-orange-500" : "transition-colors duration-300 hover:text-orange-500"} href="/contact">
            Contact
          </Link>
        </div>
        <div className="text-muted-foreground flex items-center justify-end gap-3">
          <a className="hidden transition-transform duration-300 hover:scale-110 md:block" href="https://github.com/Princekumar0006" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a className="hidden transition-transform duration-300 hover:scale-110 md:block" href="www.linkedin.com/in/suresh-kumar-b29490225" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          {/* <a className="hidden transition-transform duration-300 hover:scale-110 md:block" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a> */}

          {/* Mobile Menu */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={22} />
              </Button>
            </SheetTrigger>

            {/* <SheetContent side="right">
              <div className="mt-12 flex flex-col gap-6">
                <Link href="/">Home</Link>

                <Link href="/about">About</Link>

                <Link href="/resume">Resume</Link>

                <Link href="/portfolio">Portfolio</Link>

                <Link href="/contact">Contact</Link>

                <div className="mt-6 flex gap-5">
                  <FaGithub />

                  <FaLinkedin />

                  <FaInstagram />
                </div>
              </div>
            </SheetContent> */}

            <SheetContent side="right" className="w-[280px] px-6">
              <div className="mt-10 flex flex-col gap-8">
                <div>
                  <p className="text-lg font-semibold text-slate-900">Suresh Kumar</p>
                  <p className="text-sm text-slate-500">Frontend Developer</p>
                </div>

                <div className="flex flex-col gap-5">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Resume", href: "/resume" },
                    { label: "Portfolio", href: "/portfolio" },
                    { label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link href={item.href} className={pathname === item.href ? "text-[#e87532] font-semibold" : "text-slate-700 transition-colors hover:text-[#e87532]"}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
