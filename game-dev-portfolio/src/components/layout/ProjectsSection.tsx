"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Project data - in a real application this would likely come from a CMS or API
const projects = [
  {
    id: 1,
    title: "Mole Patrol",
    description: "A 3d tower defence mobile game set on a 3d planet",
    coverImage: "",
    tags: ["Unity", "C#", "3D", "Low Poly"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Pirates Gambit",
    description: "A pixel art turn based strategy game developed as my final year project",
    coverImage: "",
    tags: ["SFML", "C++", "2D"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Open Ocean",
    description: "A 3d endless runner set underwater that used a leap motion controller. Used as a submisison to Games Fleadh 2023",
    coverImage: "",
    tags: ["SFML", "C++", "2D", "Motion Control"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Space Penguin",
    description: "A 3d exploration and wave based game used as a third year project",
    coverImage: "",
    tags: ["Unity", "C#", "3D"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Cathedral",
    description: "A 2d implementation of the board game Cathedral that uses the MiniMax algorithm",
    coverImage: "",
    tags: ["SFML", "C++", "2D"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

// Filter types for projects
type FilterType = "All" | "Unity" | "SFML" | "2D" | "3D";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project =>
        project.tags.some(tag => tag.includes(activeFilter))
      );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow">Featured</span>{" "}
            <span className="text-foreground">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of game development projects showcasing various technologies
            and gameplay mechanics that I've created.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Unity", "SFML", "2D", "3D"].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter as FilterType)}
              className="rounded-full px-4"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden h-full game-card-hover ${
                project.featured ? "border-primary/30" : ""
              }`}>
                <div className="relative h-64 overflow-hidden">
                  {project.coverImage.endsWith(".mp4") ? (
                    <video
                      className="w-full h-full object-cover object-center"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.coverImage} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform hover:scale-105"
                    />
                  )}
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    {project.title}
                    <ArrowUpRight className="ml-2 h-4 w-4 text-muted-foreground" />
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-muted text-foreground px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      View the project's source code on GitHub
                    </HoverCardContent>
                  </HoverCard>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            See More Projects
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
