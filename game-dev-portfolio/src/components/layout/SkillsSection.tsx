"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Layers,
  Palette,
  Gamepad2,
  Headphones,
  VolumeX,
  BadgeCheck,
  Box,
  Zap,
} from "lucide-react";

// Skill categories with items
const skills = [
  {
    category: "Programming",
    icon: <Code size={24} />,
    color: "text-primary",
    items: [
      { name: "C++", level: 90 },
      { name: "C#", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Other Tech Areas",
    icon: <Layers size={24} />,
    color: "text-primary",
    items: [
      { name: "Web Development", level: 80 },
      { name: "BlockChain Development", level: 75 },
      { name: "Cloud Computing", level: 75 },
      { name: "Infrastructure & Automation", level: 65 },
    ],
  }
];

// For technology icons
const technologies = [
  { name: "Unity", icon: <Box size={32} />, color: "text-primary" },
  { name: "SFML", icon: <Zap size={32} />, color: "text-secondary" },
  { name: "Visual Studio", icon: <Cpu size={32} />, color: "text-accent" },
  { name: "Git", icon: <BadgeCheck size={32} />, color: "text-gaming-green" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow">Skills</span>{" "}
            <span className="text-foreground">& Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg border border-border/50"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} mr-3`}>{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          category.color.replace("text", "bg")
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold mb-2">Tools & Technologies</h3>
          <p className="text-muted-foreground">
            Software and platforms I'm proficient with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card p-4 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className={`${tech.color} flex justify-center mb-3`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
