import { motion } from "framer-motion";
import { Award, Trophy, FileCheck, Star, Rocket, Code } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import "./Achievements.css";

const achievements = [
  {
    title: "Bharatiya Antariksh Hackathon 2025",
    subtitle: "Participation",
    icon: Star,
    type: "Event",
    image: "/isro certificate .jpeg",
  },
  {
    title: "Science Day 2025",
    subtitle: "Oral Presentation",
    icon: Award,
    type: "Event",
    image: "/Natioal science day.jpeg",
  },
];

const certifications = [
  {
    title: "Hands-on Training in C Programming",
    icon: Code,
    image: "/Screenshot 2026-02-03 155431.png",
  },
  {
    title: "Java (Basic) – HackerRank",
    icon: FileCheck,
    image: "/Screenshot 2026-02-03 161321.png",
  },
  {
    title: "Problem Solving (Basic) – HackerRank",
    icon: FileCheck,
    image: "/Screenshot 2026-02-03 161514.png",
  },
  {
    title: "UI&UX Design - Anapty CodeEmy Tech Pvt.Ltd",
    icon: FileCheck,
    image: "/Screenshot 2026-02-03 161708.png",
  },
];

const Achievements = () => {
  const [isHackathonDialogOpen, setIsHackathonDialogOpen] = useState(false);
  const [isScienceDayDialogOpen, setIsScienceDayDialogOpen] = useState(false);
  const [isCertDialogOpen, setIsCertDialogOpen] = useState(false);
  const [isCProgrammingDialogOpen, setIsCProgrammingDialogOpen] = useState(false);
  const [isJavaDialogOpen, setIsJavaDialogOpen] = useState(false);
  const [isProblemSolvingDialogOpen, setIsProblemSolvingDialogOpen] = useState(false);
  const [isUIUXDialogOpen, setIsUIUXDialogOpen] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Recognition</span>
          <h2 className="headline-lg text-foreground">
            Achievements & Certifications
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Achievements & Events
            </h3>
            <div className="space-y-4">
              {achievements.map((item, index) => {
                if (item.title === "Bharatiya Antariksh Hackathon 2025") {
                  return (
                    <Dialog key={item.title} open={isHackathonDialogOpen} onOpenChange={setIsHackathonDialogOpen}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="card-premium flex items-start gap-4 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            {item.subtitle && (
                              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                            )}
                            <span className="text-xs text-muted-foreground/70 mt-1 inline-block">
                              {item.type}
                            </span>
                          </div>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <motion.img
                          src={item.image}
                          alt={`${item.title} Certificate`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                } else if (item.title === "Science Day 2025") {
                  return (
                    <Dialog key={item.title} open={isScienceDayDialogOpen} onOpenChange={setIsScienceDayDialogOpen}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="card-premium flex items-start gap-4 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            {item.subtitle && (
                              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                            )}
                            <span className="text-xs text-muted-foreground/70 mt-1 inline-block">
                              {item.type}
                            </span>
                          </div>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <motion.img
                          src={item.image}
                          alt={`${item.title} Certificate`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                } else {
                  return (
                    <motion.div
                      key={item.title}
                      className="card-premium flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        {item.subtitle && (
                          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        )}
                        <span className="text-xs text-muted-foreground/70 mt-1 inline-block">
                          {item.type}
                        </span>
                      </div>
                    </motion.div>
                  );
                }
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                if (cert.title === "Hands-on Training in C Programming") {
                  return (
                    <Dialog key={cert.title} open={isCProgrammingDialogOpen} onOpenChange={setIsCProgrammingDialogOpen}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="card-premium flex items-center gap-4 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <cert.icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <h4 className="font-medium text-foreground">{cert.title}</h4>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <motion.img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                } else if (cert.title === "Java (Basic) – HackerRank") {
                  return (
                    <Dialog key={cert.title} open={isJavaDialogOpen} onOpenChange={setIsJavaDialogOpen}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="card-premium flex items-center gap-4 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <cert.icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <h4 className="font-medium text-foreground">{cert.title}</h4>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <motion.img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                } else if (cert.title === "Problem Solving (Basic) – HackerRank") {
                  return (
                    <Dialog key={cert.title} open={isProblemSolvingDialogOpen} onOpenChange={setIsProblemSolvingDialogOpen}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="card-premium flex items-center gap-4 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <cert.icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <h4 className="font-medium text-foreground">{cert.title}</h4>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <motion.img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                } else if (cert.title === "UI&UX Design - Anapty CodeEmy Tech Pvt.Ltd") {
                  return (
                    <Dialog key={cert.title} open={isUIUXDialogOpen} onOpenChange={setIsUIUXDialogOpen}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="card-premium flex items-center gap-4 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <cert.icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <h4 className="font-medium text-foreground">{cert.title}</h4>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <motion.img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                } else {
                  return (
                    <motion.div
                      key={cert.title}
                      className="card-premium flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <h4 className="font-medium text-foreground">{cert.title}</h4>
                    </motion.div>
                  );
                }
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
