"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
  business: string;
  location: string;
  image?: string;
  initials?: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "GrowByMasters completely transformed our online presence. We started getting consistent leads within 3 months and stopped wasting budget on vanity clicks.",
    author: "Mike R.",
    business: "Apex Mechanical Services",
    location: "Texas, USA",
    image: "/images/testimonials/mike.jpg",
  },
  {
    quote:
      "Professional, strategic, and results-driven. Highly recommend GrowByMasters for any practice looking to dominate high-value local patient bookings.",
    author: "Dr. Sarah L.",
    business: "Unity Dental & Aesthetics",
    location: "Toronto, Canada",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    quote:
      "Our website conversion rate and organic search traffic have more than doubled. Their tracking setup finally showed us our true acquisition costs.",
    author: "James T.",
    business: "Aura Essentials DTC",
    location: "Melbourne, Australia",
    initials: "JT",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-2">
            Client Perspectives
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal">
            Real Feedback from Active Partners
          </h2>
        </div>

        {/* Carousel controls for mobile/tablet */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#D0C8B8] bg-white flex items-center justify-center text-[#1D2732] hover:bg-[#101A24] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#D0C8B8] bg-white flex items-center justify-center text-[#1D2732] hover:bg-[#101A24] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={t.author}
            className={`bg-white rounded-2xl p-7 border border-[#EAE6DC] shadow-sm flex flex-col justify-between transition-all duration-300 ${
              idx === currentIndex ? "ring-2 ring-[#D8B477]/40" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-1 text-[#D8B477] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D8B477]" />
                ))}
              </div>

              <p className="text-sm text-[#1D2732] italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3.5 pt-4 border-t border-[#F0ECE2]">
              {t.image ? (
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-[#E8E4DA] bg-[#E8E4DA]">
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm bg-gradient-to-br from-[#101A24] to-[#253748] text-[#D8B477] border border-[#D8B477]/40 shadow-sm shrink-0">
                  {t.initials}
                </div>
              )}
              <div>
                <div className="text-sm font-semibold text-[#1D2732]">{t.author}</div>
                <div className="text-xs text-[#626B73]">
                  {t.business}, {t.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
