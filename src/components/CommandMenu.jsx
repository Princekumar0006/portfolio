"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command";

export default function CommandMenu({ open, setOpen }) {
//   const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e) => {
      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-3">
        <DialogHeader className="p-0">
          <DialogTitle>Search</DialogTitle>
          {/* <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription> */}
        </DialogHeader>
        <Command className="p-0">
          <CommandInput className="p-0 mb-4" placeholder="Search pages..." />

          <CommandList>
            <CommandItem
              onSelect={() => {
                router.push("/");

                setOpen(false);
              }}
            >
              Home
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/about");

                setOpen(false);
              }}
            >
              About
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/resume");

                setOpen(false);
              }}
            >
              Resume
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/portfolio");

                setOpen(false);
              }}
            >
              Portfolio
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/contact");

                setOpen(false);
              }}
            >
              Contact
            </CommandItem>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
