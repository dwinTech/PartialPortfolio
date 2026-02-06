import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-700 py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="font-bold">Portfolio</h1>
          </div>
          {/* Navigations */}
          <nav>
            <ul className="flex items-center gap-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </nav>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button>Contact</Button>
          </div>
        </div>
      </div>
    </header>
  )
}