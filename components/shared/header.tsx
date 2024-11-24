"use client";

import { usePathname } from "next/navigation";
import { Earth, Github } from "lucide-react";
import Link from "next/link";
import Search from "@/components/home/search";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 backdrop-blur-lg flex w-full justify-center border-b shadow-sm h-12">
      <div className="mx-auto flex items-center justify-between w-full md:max-w-5xl p-2">
        <div className="flex gap-2">
          <Link href="/">
            <Earth className="h-8 w-8" />
          </Link>
          {pathname === "/" && (
            <Search />
          )}
        </div>
        <a
          className="bg-primary p-1.5 rounded-full"
          href="https://github.com/leomosley/elanco"
          target="_blank"
        >
          <Github className="h-6 w-6 text-background" />
        </a>
      </div>
    </header>
  );
}
