import { motion } from "framer-motion";
import { ArrowUpRight, Link2 } from "lucide-react";

const projects = [
  {
    title: "URL Shortener",
    category: "Web Development",
    description: "A functional URL shortening application built as an individual initiative, applying core web development concepts with full deployment.",
    featured: true,
  },
  {
    title: "Portfolio Website",
    category: "UI/UX Design",
    description: "A personal portfolio showcasing web development skills with modern design principles and smooth animations.",
    featured: false,
  },
  {
    title: "Coming Soon",
    category: "Full Stack",
    description: "More exciting projects in development. Stay tuned for updates on new builds and experiments.",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Case Study</span>
          <h2 className="headline-lg text-foreground">
            Meet with creative things
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card ${project.featured ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className={`image-placeholder ${project.featured ? 'h-64 md:h-80' : 'h-48'}`}>
                {project.title === "URL Shortener" ? (
                  <img src="/image.png" alt="URL Shortener Thumbnail" className="w-full h-full object-cover object-top rounded-lg" />
                ) : project.title === "Portfolio Website" ? (
                  <img src="/Screenshot 2026-02-03 144022.png" alt="Portfolio Website Thumbnail" className="w-full h-full object-cover object-top rounded-lg" />
                ) : (
                  <img src="/pngtree-colorful-loading-icon-png-image_5326551-removebg-preview.png" alt="Coming Soon Thumbnail" className="w-full h-full object-contain object-center rounded-lg" />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="headline-md mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className="btn-secondary">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
