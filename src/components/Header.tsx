import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <nav className="navbar flex items-center justify-between bg-background/80 backdrop-blur-md rounded-full px-6 py-3 border border-border shadow-sm">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">BR</span>
            </div>
            <span className="font-semibold text-foreground">Boopathi</span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#contact" className="btn-primary text-xs md:text-sm">
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
