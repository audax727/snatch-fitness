"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Joining Snatch Fitness completely shifted my mindset. The trainers ensure your form is 100% correct on every set, helping me add 25kg to my deadlift safely.",
    author: "Harish Verma",
    role: "Member · 6 Months Transformation",
    company: "Google Review ★★★★★",
  },
  {
    quote: "The best gym atmosphere in Sangareddy! High-energy environment, top-tier free weights, and personal attention from coach Satish that you won't find anywhere else.",
    author: "Aravind Reddy",
    role: "Member · Strength & Conditioning",
    company: "Google Review ★★★★★",
  },
  {
    quote: "Spacious, ultra-clean facility with incredible equipment. The community pushes you every single day to break your personal records and stay consistent.",
    author: "Mounika Pilli",
    role: "Member · Fitness & Cardio",
    company: "Google Review ★★★★★",
  },
  {
    quote: "I lost 12kg in 3 months thanks to the customized nutrition plan and disciplined strength programming. Truly a world-class training center in Sangareddy.",
    author: "Sudeep Sagar",
    role: "Member · Weight Loss & Fat Loss",
    company: "Google Review ★★★★★",
  },
  {
    quote: "The equipment range is top notch — heavy dumbbells, solid power racks, and smooth cable machines. Perfect for serious lifters and beginners alike.",
    author: "Krishnakant Kishlay",
    role: "Member · Hypertrophy Training",
    company: "Google Review ★★★★★",
  },
  {
    quote: "Professional trainers who genuinely care about your goals. They track your progress weekly and adjust your workout routines to keep you making real gains.",
    author: "Srinivas Sallawar",
    role: "Member · Athletic Conditioning",
    company: "Google Review ★★★★★",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gmapsPlaceUrl = "https://www.google.com/maps/place/SNATCH+FITNESS/@17.6254512,78.0696993,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbf9005dec1b9b:0x89aa50b76e1d229e!8m2!3d17.6254461!4d78.0722742!16s%2Fg%2F11nq8vv3vb?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative bg-[#000000] text-[#fffef7] py-24 sm:py-32 overflow-hidden border-t border-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto" onMouseMove={handleMouseMove}>
          {/* Oversized index number - positioned to bleed off left edge */}
          <motion.div
            className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] md:text-[28rem] font-headline font-bold text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content - asymmetric layout */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            {/* Left column - vertical text */}
            <div className="flex md:flex-col items-center justify-between md:justify-center pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0">
              <motion.span
                className="text-xs font-headline font-bold text-[#aaaaaa] tracking-[0.3em] uppercase md:[writing-mode:vertical-rl] md:[text-orientation:mixed]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                MEMBER REVIEWS
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-px w-24 md:h-32 md:w-px bg-neutral-800 mt-0 md:mt-8">
                <motion.div
                  className="absolute top-0 left-0 h-full md:w-full bg-primary origin-left md:origin-top"
                  animate={{
                    width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                    height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 pl-0 md:pl-16 py-4 sm:py-8">
              {/* Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <Link
                    href={gmapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-excon text-[#ffd001] border border-[#ffd001]/30 rounded-[1440px] px-3.5 py-1.5 hover:bg-[#ffd001]/10 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffd001] animate-ping" />
                    <span>{current.company}</span>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Quote with character/word reveal */}
              <div className="relative mb-12 min-h-[160px] sm:min-h-[180px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-2xl sm:text-4xl md:text-5xl font-headline font-light text-[#fffef7] leading-[1.2] tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.04,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.01 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <div className="flex flex-wrap items-end justify-between gap-6 pt-4 border-t border-neutral-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Animated line before name */}
                    <motion.div
                      className="w-8 h-px bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-lg font-headline font-bold text-[#fffef7]">{current.author}</p>
                      <p className="text-xs text-[#aaaaaa] font-excon mt-0.5">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation controls */}
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                    className="group relative w-12 h-12 rounded-full border border-neutral-700 bg-neutral-900/60 flex items-center justify-center overflow-hidden hover:border-primary transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-white transition-colors"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="group relative w-12 h-12 rounded-full border border-neutral-700 bg-neutral-900/60 flex items-center justify-center overflow-hidden hover:border-primary transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-white transition-colors"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker - subtle repeating background text */}
          <div className="mt-16 overflow-hidden opacity-[0.06] pointer-events-none select-none">
            <motion.div
              className="flex whitespace-nowrap text-5xl sm:text-6xl font-headline font-bold uppercase tracking-widest text-white"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <span key={i} className="mx-6">
                  SNATCH FITNESS • GOOGLE REVIEWS • SANGAREDDY •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
