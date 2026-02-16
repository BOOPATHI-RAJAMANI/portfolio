import { motion } from "framer-motion";
import {
  Atom,
  Server,
  FileCode2,
  Palette,
  Layout,
  Braces,
  Film
} from "lucide-react";

const skills = [
  { name: "React", icon: Atom },          // React = atomic structure
  { name: "Node.js", icon: Server },      // Backend / server
  { name: "Python", icon: FileCode2 },    // Programming language
  { name: "UI/UX Design", icon: Palette },// Design
  { name: "HTML & CSS", icon: Layout },   // Layout & structure
  { name: "JavaScript", icon: Braces },   // JS syntax
  { name: "Video Editing", icon: Film },  // Media / video
];


const LogoMarquee = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-12 overflow-hidden border-y border-border bg-card/50">
      <div className="marquee-track">
        {duplicatedSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <span className="text-sm md:text-base font-medium text-foreground text-center">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LogoMarquee;
