"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import AnimatedBackground from "@/components/effects/AnimatedBackground";
import GlowButton from "@/components/ui/GlowButton";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 1,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const scrollToAnimations = () => {
    document.getElementById("animations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="hero">
      <div className="relative flex min-h-[min(92dvh,880px)] flex-col justify-center overflow-hidden rounded-3xl border border-border bg-surface/50 px-8 py-16 md:px-14 md:py-24">
        <AnimatedBackground />

        <motion.div
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-text sm:text-6xl md:text-7xl md:leading-[1.06]"
            variants={itemVariants}
          >
            Vibe Coding Playground
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg text-muted md:text-xl"
            variants={itemVariants}
          >
            Modern UI animations and interactions — motion, depth, and delight in
            one place.
          </motion.p>

          <motion.div className="mt-10" variants={itemVariants}>
            <GlowButton onClick={scrollToAnimations}>Explore</GlowButton>
          </motion.div>

          <motion.div className="mt-16 md:mt-20" variants={itemVariants}>
            <motion.a
              href="#animations"
              className="inline-flex flex-col items-center gap-2 text-muted transition-colors duration-300 hover:text-text"
              aria-label="Scroll to Animations section"
              {...(reduceMotion
                ? {}
                : {
                    animate: { y: [0, 6, 0] },
                    transition: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  })}
            >
              <span className="text-xs font-medium uppercase tracking-widest">
                Scroll
              </span>
              <ChevronDown className="h-8 w-8" strokeWidth={1.75} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
