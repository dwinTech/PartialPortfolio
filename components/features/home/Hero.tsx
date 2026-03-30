"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail} from "lucide-react";
import { Section } from "@/components/common/Section";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  
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
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-25">

                {/* Image Left */}
                <div className="flex justify-center items-center ">
                    <Image
                        src="/Edwin.jpg"
                        alt="Edwin Angoring Jr"
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-2xl object-cover w-full max-w-[400px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                </div>

                
                <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                    <div className="space-y-4">

                      
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl min-h-[1.2em]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                {displayed}
                            </span>
                            
                            {!done && (
                                <span className="inline-block w-[3px] h-[0.85em] ml-1 bg-foreground align-middle animate-pulse" />
                            )}
                        </h1>

                       
                        <div className={`space-y-2 transition-all duration-700 ${
                            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}>
                            <h2 className="text-xl text-muted-foreground font-medium">
                                Cordova Cebu, Philippines
                            </h2>
                            <p className="text-muted-foreground max-w-md">
                                IT Student specializing in building simple, beautiful, and intuitive interfaces.
                            </p>
                        </div>
                    </div>

                    
                    <div className={`flex gap-4 flex-col lg:flex-row transition-all duration-700 delay-150 ${
                        done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}>
                            <Link href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app">
                            <Button size="lg" className="group w-full lg:w-auto">
                                <Mail className="mr-2 h-4 w-4" />
                                Send Email
                            </Button>
                        </Link>

                        <Link href="/blog">
                            <Button variant="outline" size="lg" className="group w-full lg:w-auto">
                                View My Blog
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>

               
                    <div className={`flex items-center gap-4 text-muted-foreground transition-all duration-700 delay-300 ${
                        done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer"
                            className="hover:text-foreground hover:scale-110 transform transition-all duration-200">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>

                        <Link href="https://www.linkedin.com/in/angoring-jr-edwin-g-22043a3b9/" target="_blank" rel="noopener noreferrer"
                            className="hover:text-foreground hover:scale-110 transform transition-all duration-200">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>

                        <Link href=""
                            className="hover:text-foreground hover:scale-110 transform transition-all duration-200">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                        
                    </div>
                </div>

            </div>
        </Section>
    );
}
