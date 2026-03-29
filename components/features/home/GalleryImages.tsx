"use client";

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/features/home/SectionHeader";
import { images } from "@/constants/galleryImages"
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";



export function GalleryImages() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const visibleCount = 4;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < images.length;
  const handlePrev = () => canPrev && setStartIndex((p) => p - 1);
  const handleNext = () => canNext && setStartIndex((p) => p + 1);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const modalPrev = () =>
    setModalIndex((p) => (p !== null && p > 0 ? p - 1 : p));
  const modalNext = () =>
    setModalIndex((p) =>
      p !== null && p < images.length - 1 ? p + 1 : p
    );

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <Section className="rounded-lg py-10">
      <div className="px-6 lg:px-20">
        <SectionHeading
          title="Gallery"
          description="A glimpse of my journey — conferences, events, and milestones."
        />

        {/* Carousel */}
        <div className="relative flex items-center gap-3 mt-6">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className="p-1.5 rounded-full border border-gray-300 dark:border-gray-600
              hover:border-blue-500 hover:text-blue-500 transition
              disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-3 flex-1">
            {visibleImages.map((img, i) => (
              <button
                key={startIndex + i}
                onClick={() => openModal(startIndex + i)}
                className="flex-1 aspect-[3/4] overflow-hidden rounded-sm border
                  border-gray-200 dark:border-gray-700 cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105
                    transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!canNext}
            className="p-1.5 rounded-full border border-gray-300 dark:border-gray-600
              hover:border-blue-500 hover:text-blue-500 transition
              disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                setStartIndex(Math.min(i, images.length - visibleCount))
              }
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i >= startIndex && i < startIndex + visibleCount
                  ? "w-4 bg-blue-500"
                  : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center
            justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-blue-400 transition"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-sm"
            />

            <p className="text-center text-xs text-gray-400 mt-2">
              {modalIndex + 1} / {images.length}
            </p>

            <button
              onClick={modalPrev}
              disabled={modalIndex === 0}
              className="absolute left-[-3rem] top-1/2 -translate-y-1/2 p-2 rounded-full
                border border-gray-600 text-white hover:border-blue-500 hover:text-blue-400
                transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={modalNext}
              disabled={modalIndex === images.length - 1}
              className="absolute right-[-3rem] top-1/2 -translate-y-1/2 p-2 rounded-full
                border border-gray-600 text-white hover:border-blue-500 hover:text-blue-400
                transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}