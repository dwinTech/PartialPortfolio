"use client";


import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-background/80 backdrop-blur-md 
        ${scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-sm text-foreground">Edwin Angoring</span>
          <span className="text-xs text-muted-foreground">IT Student</span>
        </div>

         {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors duration-200 px-3 py-1 rounded-md
                ${pathname === link.href
                  ? "bg-blue-600 text-white"           // 👈 active
                  : "text-muted-foreground hover:text-foreground" // 👈 inactive
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="h-9 w-9 flex items-center justify-center rounded-md border border-border
              bg-background hover:bg-muted transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark
           
             ? <Moon className="h-4 w-4 text-muted-foreground" />
              : <Sun className="h-4 w-4 text-yellow-400" />
              
            }
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-md border border-border
              bg-background hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    
          
      

    </header>
  );
}