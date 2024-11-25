import { Earth, Github } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 backdrop-blur-lg flex w-full justify-center border-b shadow-sm h-12">
      <div className="mx-auto flex items-center justify-between w-full md:max-w-5xl p-2">
        <Link href="/">
          <Earth className="h-8 w-8" />
        </Link>
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
