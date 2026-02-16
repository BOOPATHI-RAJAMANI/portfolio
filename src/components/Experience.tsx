import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experienceData = [
  {
    company: "INFOZIANT (Enbott Technologies)",
    role: "Web Developer Intern",
    period: "2024-2025",
    description: "Worked on both front-end and back-end tasks, building functional web applications.",
  },
];

const skills = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "React", url: "https://react.dev/" },
  { name: "Node.js", url: "https://nodejs.org/en/docs/" },
  { name: "java script", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "UI/UX Design", url: "https://en.wikipedia.org/wiki/User_experience_design" }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label">Core Experience</span>
          <h2 className="headline-lg text-foreground mb-4">
            I blend creativity with
            <br />
            technical expertise
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A B.Tech (AI & Data Science) student with a strong foundation in web development and design thinking. Focused on building visually refined, user-centric web experiences.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Experience
            </h3>
            <div className="space-y-0">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-item group cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => window.open('https://enbott.com/', '_blank')}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-foreground">{exp.company}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">{exp.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className="skill-pill cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(skill.url, '_blank')}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div
                className="stats-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl font-bold text-foreground">6+</span>
                <p className="text-sm text-muted-foreground mt-1">Month's Learning</p>
              </motion.div>
              <motion.div
                className="stats-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl font-bold text-foreground">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
