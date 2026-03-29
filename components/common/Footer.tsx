import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-blue-600 dark:border-blue-700 py-10">
      <div className="container mx-auto px-6">

        {/* ── 4 COLUMN GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* ── COL 1: Brand ── */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-base">Edwin Angoring</h2>
            <p className="text-sm text-muted-foreground">IT Support</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Cebu, Philippines
            </p>
          </div>

          {/* ── COL 2: Pages ── */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Pages</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ── COL 3: Resources ── */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Resources</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link href="https://github.com/trending" target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  GitHub Boilerplates
                </Link>
              </li>
              <li>
                <Link href="https://codepen.io" target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  CodePen Examples
                </Link>
              </li>
              <li>
                <Link href="https://developer.mozilla.org" target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition">
                  MDN Web Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* ── COL 4: Connect ── */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Connect</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link href="https://linkedin.com" target="_blank"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com" target="_blank"
                  className="text-sm text-muted-foreground hover:text-gray-400 transition">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank"
                  className="text-sm text-muted-foreground hover:text-pink-400 transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank"
                  className="text-sm text-muted-foreground hover:text-blue-600 transition">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── COPYRIGHT ── */}
        <div className="mt-10 border-t border-blue-600 dark:border-blue-700 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Edwin Angoring. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}