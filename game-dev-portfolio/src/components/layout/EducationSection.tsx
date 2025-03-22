"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

// Education data
const education = [
  {
    degree: "BSc in Game Development",
    institution: "South East Technological University",
    period: "2021 - 2025",
    description:
      "Studying game design principles and programming for game development. Focused on both theoretical concepts and practical project implementation.",
    courses: [
      "Game Programming",
      "Cloud Computing",
      "Artificial Intelligence for Games",
      "Blockchain Technology",
    ],
  }
];

// Experience data
const experience = [
  {
    position: "Software Development Intern",
    company: "Unum Ireland",
    period: "Jan - Aug 2024",
    description:
      "Worked for Unum as a full stack developer. Responsible for implementing front + backend features",
    achievements: [
      "Completed Intern Innovation Challenge",
      "Contributed key features and work to the team",
      "Learned to operate in a company structure",
    ],
  },
  {
    position: "Games Fleadh Participant",
    company: "TUS Thurles",
    period: "2023",
    description:
      "Participated in Games Fleadh as a solo participent. Goal was to create a game under the theme endless runner.",
    achievements: [
      "Won award for 'Innovative Gameplay'",
      "Successfully completed and submitted my Game Open Ocean",
      "Developed skills in programming with motion detection and LEAP controllers",
    ],
  },
];

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow">Education</span>{" "}
            <span className="text-foreground">& Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and practical experience in game development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-muted p-3 rounded-full mr-4">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative border-l-2 border-muted pl-8 space-y-12"
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>

                  <div className="bg-card rounded-lg p-6 border border-border/50 shadow-md hover:border-primary/30 transition-colors">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.period}
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                    <p className="text-secondary mb-4">{item.institution}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Key Courses:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                        {item.courses.map((course, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex">
                            <span className="text-primary mr-1">•</span> {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-muted p-3 rounded-full mr-4">
                <Briefcase className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative border-l-2 border-muted pl-8 space-y-12"
            >
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-background"></div>

                  <div className="bg-card rounded-lg p-6 border border-border/50 shadow-md hover:border-secondary/30 transition-colors">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.period}
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{item.position}</h4>
                    <p className="text-accent mb-4">{item.company}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex">
                            <span className="text-secondary mr-1">•</span> {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
