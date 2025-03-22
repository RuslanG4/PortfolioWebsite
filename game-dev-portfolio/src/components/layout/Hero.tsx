"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update window dimensions
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Set initial dimensions
    handleResize();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTransform = (depth: number) => {
    // Only calculate if window dimensions are available
    if (windowSize.width === 0) return "translate(0px, 0px)";

    const x = (mousePosition.x / windowSize.width - 0.5) * depth;
    const y = (mousePosition.y / windowSize.height - 0.5) * depth;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(var(--primary), 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Floating Elements - Only render on client side */}
      {windowSize.width > 0 && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/30 blur-sm z-0"
            animate={{
              transform: calculateTransform(20),
              rotate: [0, 360],
            }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-lg bg-secondary/20 blur-sm z-0"
            animate={{
              transform: calculateTransform(10),
              rotate: [360, 0],
            }}
            transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-6 h-6 rounded-full bg-accent/20 blur-sm z-0"
            animate={{
              transform: calculateTransform(30),
              rotate: [0, 360],
            }}
            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
          />
        </>
      )}

      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-primary glow">Game Development</span>{" "}
              <span className="text-foreground">Portfolio</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A brief overview of the projects I have made along my Game Dev Journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="#projects">
              <Button size="lg" className="gap-2 group">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="gap-2">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          {/* Skills Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-8 mt-16"
          >
            <div className="text-center">
              <div className="bg-muted p-4 rounded-full mb-3 inline-block">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Game Design</p>
            </div>
            <div className="text-center">
              <div className="bg-muted p-4 rounded-full mb-3 inline-block">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <p className="text-sm text-muted-foreground">Programming</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
