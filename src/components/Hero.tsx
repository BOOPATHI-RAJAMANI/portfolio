import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import EnergyOrb from "./EnergyOrb";

type Phase = "normal" | "charging" | "expanding" | "breaking" | "universe" | "collapsing" | "reset";

const Hero = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const timers = useRef<NodeJS.Timeout[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [phase, setPhase] = useState<Phase>("normal");

  const timings = {
    charging: 400,
    expanding: 500,
    breaking: 400,
    collapsing: 500,
    reset: 500,
  };

  useEffect(() => {
    if (!orbRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (!orbRef.current) return;

      const rect = orbRef.current.getBoundingClientRect();
      const orbX = rect.left + rect.width / 2;
      const orbY = rect.top + rect.height / 2;

      let dx = (mouseX - orbX) * 0.08;
      let dy = (mouseY - orbY) * 0.08;

      const max = 25;
      dx = Math.max(-max, Math.min(max, dx));
      dy = Math.max(-max, Math.min(max, dy));

      const scale = darkMode ? 2 : 1;
      orbRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const startEnterUniverse = () => {
    clearTimers();
    setPhase("charging");
    timers.current.push(
      setTimeout(() => setPhase("expanding"), 400),
      setTimeout(() => setPhase("breaking"), 900),
      setTimeout(() => {
        setPhase("universe");
        setDarkMode(true);
      }, 1300)
    );
  };

  const startExitUniverse = () => {
    clearTimers();
    setPhase("collapsing");
    timers.current.push(
      setTimeout(() => setPhase("reset"), timings.collapsing),
      setTimeout(() => {
        setPhase("normal");
        setDarkMode(false);
      }, timings.collapsing + timings.reset)
    );
  };

  const handleOrbClick = () => {
    if (phase === "normal") {
      startEnterUniverse();
    } else if (phase === "universe") {
      startExitUniverse();
    }
  };

  return (
    <section id="hero" className="hero-arc min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <div className="dimension-overlay" />
      <div className={`dimension-flash ${phase === "breaking" ? "active" : ""}`} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge-intro">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Hello! I am Boopathi Rajamani
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="headline-xl mt-8 mb-6 text-foreground"
        >
          Web Developer
          <br />
          <span className="text-muted-foreground">& UI Designer</span>
        </motion.h1>

        {/* Profile Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-64 h-80 md:w-80 md:h-96 mb-8"
        >
          <img
            src="/boopathi profile.edit.jpeg"
            alt="Boopathi Rajamani Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a href="/Boopathi's Resume updated.pdf" download="Boopathi's Resume updated.pdf" className="btn-primary">
            <span>Download CV</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary !px-3 !py-3"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary !px-3 !py-3"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:boopathi.aids@gmail.com"
              className="btn-secondary !px-3 !py-3"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed"
        >
          Crafting visually refined, user-centric web experiences with a focus on clean code and thoughtful design.
        </motion.p>
      </div>
      <div
        ref={orbRef}
        className={`energy-orb-container ${phase}`}
        onClick={handleOrbClick}
      >
        <div className="energy-orb-inner">
          <EnergyOrb phase={phase} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
