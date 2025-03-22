"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative h-[400px] w-full md:h-[500px] overflow-hidden rounded-lg border border-border shadow-xl">
              {/* Main image */}
              <Image
                src=""
                alt="Game Developer"
                fill
                className="object-cover rounded-lg"
              />

              {/* Overlays for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              {/* Floating skill badges */}
              <motion.div
                className="absolute top-10 right-6 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Game Design
              </motion.div>

              <motion.div
                className="absolute bottom-32 left-6 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Game Developer
              </motion.div>

              <motion.div
                className="absolute bottom-12 right-12 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Software Development
              </motion.div>
            </div>

            {/* Avatar in corner */}
            <Avatar className="absolute -bottom-6 -left-6 h-24 w-24 border-4 border-background">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="text-lg">RG</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">About</span> Me
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! My name is Ruslan Gavrilov. I'm a passionate Game Development Graduate with a focus on creating immersive
                and engaging gameplay experiences. I have been making small games inside of SFML and Unity for 4 years now and
                have had a great time doing so!
              </p>

              <p>
                I specialize in C++ development along with Unity development. I have experience in game design principles,
                and implementing gameplay mechanics. I'm constantly exploring new technologies and techniques to make me a better
                programmer and to create the best products.
              </p>

              <p>
                When I'm not coding or designing, you can find me playing games, playing guitar, or trying to cook up anything edible in a kitchen.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">What I Do</h3>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Develop engaging gameplay mechanics and systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimize game performance across different platforms</span>
                </li>
              </ul>
            </div>

            <Button className="mt-8 gap-2 group">
              Download Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
