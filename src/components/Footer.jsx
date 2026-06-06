import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-black py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-slate-700 dark:text-slate-400">
          © Copyright <span className="font-semibold">Suresh Kumar</span>. All Rights Reserved
        </p>

        <div className="mt-5 flex justify-center gap-3">
          <a href="https://github.com/Princekumar0006" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border text-slate-500 transition-all hover:border-[#e87532] hover:text-[#e87532]">
            <FaGithub />
          </a>

          <a href="www.linkedin.com/in/suresh-kumar-b29490225" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border text-slate-500 transition-all hover:border-[#e87532] hover:text-[#e87532]">
            <FaLinkedin />
          </a>

          {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border text-slate-500 transition-all hover:border-[#e87532] hover:text-[#e87532]">
            <FaInstagram />
          </a> */}
        </div>

        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          Designed & Built by <span className="font-medium text-[#e87532]">Suresh Kumar</span>
        </p>
      </div>
    </footer>
  );
}
