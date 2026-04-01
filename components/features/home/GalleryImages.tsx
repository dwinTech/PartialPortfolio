"use client";

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/features/home/SectionHeader";
import { images } from "@/constants/galleryImages";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const SLIDE_INTERVAL = 3000;

export function GalleryImages() {
  const [current, setCurrent] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  }, []);

  const goPrev = useCallback(() => {
    goTo(current === 0 ? images.length - 1 : current - 1);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo(current === images.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  // Auto-play — goNext is now stable via useCallback, no warning
  useEffect(() => {
    if (modalIndex !== null) return;
    const timer = setInterval(goNext, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, modalIndex]);

  return (
    <Section className="rounded-lg py-10">
      <div className="px-6 lg:px-20">
        <SectionHeading
          title="Gallery"
          description="A glimpse of my journey — conferences, events, and milestones."
        />

        {/* Slideshow */}
        <div className="relative mt-6 w-full aspect-[4/3] md:aspect-auto md:h-[70vh] overflow-hidden rounded-lg group">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2
              w-8 h-8 md:w-9 md:h-9 flex items-center justify-center
              rounded-full bg-black/40 text-white text-xl font-bold
              hover:bg-black/70 transition
              md:opacity-0 md:group-hover:opacity-100 opacity-100"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2
              w-8 h-8 md:w-9 md:h-9 flex items-center justify-center
              rounded-full bg-black/40 text-white text-xl font-bold
              hover:bg-black/70 transition
              md:opacity-0 md:group-hover:opacity-100 opacity-100"
          >
            ›
          </button>

          {/* View button */}
          <button
            onClick={() => setModalIndex(current)}
            className="absolute bottom-3 right-3 px-2.5 py-1 text-xs rounded
              bg-black/50 text-white hover:bg-black/80 transition
              md:opacity-0 md:group-hover:opacity-100 opacity-100"
          >
            View
          </button>

          {/* Counter */}
          <div className="absolute bottom-3 left-3 text-xs text-white bg-black/50 px-2 py-1 rounded">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 bg-blue-500"
                  : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={images[modalIndex].src}
                alt={images[modalIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400">
              {modalIndex + 1} / {images.length}
            </p>

            {/* Prev */}
            <button
              onClick={() =>
                setModalIndex((p) => (p !== null && p > 0 ? p - 1 : p))
              }
              disabled={modalIndex === 0}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2
                w-10 h-10 flex items-center justify-center
                rounded-full bg-white/10 border border-gray-600 text-white text-2xl font-bold
                hover:border-blue-500 hover:text-blue-400 transition
                disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setModalIndex((p) =>
                  p !== null && p < images.length - 1 ? p + 1 : p
                )
              }
              disabled={modalIndex === images.length - 1}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2
                w-10 h-10 flex items-center justify-center
                rounded-full bg-white/10 border border-gray-600 text-white text-2xl font-bold
                hover:border-blue-500 hover:text-blue-400 transition
                disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}