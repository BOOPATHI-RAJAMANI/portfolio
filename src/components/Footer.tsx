import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">BR</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Boopathi Rajamani</p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
              whileHover={{ y: -2 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
              whileHover={{ y: -2 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:boopathi.aids@gmail.com"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
              whileHover={{ y: -2 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
