"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ResumeSchema } from "@/lib/resume-types";
import Image from "next/image";

export function HeroSection({ resume }: { resume: ResumeSchema }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById("resume-content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden print:hidden">
      {/* Background with pattern and gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 hero-pattern">
        <Image
          src="/images/hero-image.png"
          alt={`Professional headshot of ${resume.basics.name}, ${resume.basics.label}`}
          className="w-full h-full object-cover hidden md:block"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          src="/images/hero-image-mobile.png"
          alt={`Professional headshot of ${resume.basics.name}, ${resume.basics.label}`}
          className="w-full h-full object-cover md:hidden"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 bg-black/40 z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container relative z-30 px-4 py-16 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-6 inline-block p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-md">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  resume.basics.image || "/placeholder.svg?height=160&width=160"
                }
                alt={`Professional headshot of ${resume.basics.name}, ${resume.basics.label}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="gradient-text text-white drop-shadow-lg">
              {resume.basics.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 drop-shadow-md">
            {resume.basics.label}
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 drop-shadow">
            {resume.basics.summary?.split(" ").slice(0, 20).join(" ")}...
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {resume.skills?.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
              >
                <span className="font-medium text-gray-800">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={scrollToContent}
            className="flex items-center justify-center mx-auto w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
