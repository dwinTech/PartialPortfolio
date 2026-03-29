"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AboutHero() {
  const fullName = "Edwin G. Angoring Jr.";
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (charIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + fullName[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const doneTimeout = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(doneTimeout);
    }
  }, [charIndex]);

  return (
    <Section className="relative min-h-screen flex items-center justify-center px-4 py-12">

      {/* ── TWO COLUMN WRAPPER ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 w-full max-w-5xl">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col items-center gap-5">

          {/* Profile Image — smaller on mobile */}
          <Image
            src="/Edwin.jpg"
            alt="Profile"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-xl
                       hover:scale-105 transition-transform duration-500 object-cover
                       w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52"
          />

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3 w-full">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">
              Social Links
            </h3>

            <div className="flex gap-4 sm:gap-6">
              <Link href="https://linkedin.com" target="_blank"
                className="flex flex-col items-center hover:text-blue-400 transition">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">LinkedIn</span>
              </Link>

              <Link href="https://github.com" target="_blank"
                className="flex flex-col items-center hover:text-gray-400 transition">
                <Github className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">GitHub</span>
              </Link>

              <Link href="https://instagram.com" target="_blank"
                className="flex flex-col items-center hover:text-pink-400 transition">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Instagram</span>
              </Link>

              <Link href="https://facebook.com" target="_blank"
                className="flex flex-col items-center hover:text-blue-600 transition">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-left">

          {/* Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter min-h-[1.2em]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {displayed}
            </span>
            {!done && (
              <span className="inline-block w-[3px] h-[0.85em] ml-1 bg-foreground animate-pulse" />
            )}
          </h1>

          {/* Location + Bio */}
          <div className={`space-y-2 transition-all duration-700 ${
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}>
            <h2 className="text-base sm:text-lg text-muted-foreground">
              Cordova Cebu, Philippines
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              I am passionate about Information Technology, especially in fields like
              technical support, hardware/software troubleshooting, and web development.
              I enjoy learning how systems work and solving technical problems. I&#39;ve
              practiced setting up basic websites using HTML, CSS, and JavaScript, and
              I&#39;m actively improving my skills through self-learning and small personal
              projects.
            </p>
          </div>

          {/* Resume Button */}
          <div className={`flex justify-center lg:justify-start transition-all duration-700 ${
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}>
            <Button size="lg" asChild>
              <Link href="/My-Resume.png" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </Section>
  );
}