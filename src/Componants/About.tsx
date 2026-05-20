import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiAltiumdesigner } from "react-icons/si";
import { BiCode, BiDesktop, BiSearchAlt2 } from "react-icons/bi";
import styles from "../assets/css/About.module.css";

/* ─── Data ────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <SiAltiumdesigner />,
    title: "UI/UX Design",
    desc: "Crafting pixel-perfect, user-centered interfaces that blend beauty with intuitive usability.",
    color: "#8b5cf6",
  },
  {
    icon: <BiCode />,
    title: "Web Development",
    desc: "Full-stack applications built with React & PHP/Symfony — clean code, fast delivery.",
    color: "#3b82f6",
  },
  {
    icon: <BiDesktop />,
    title: "Desktop Apps",
    desc: "Cross-platform desktop applications with modern frameworks and polished UIs.",
    color: "#06b6d4",
  },
  {
    icon: <BiSearchAlt2 />,
    title: "Web Research",
    desc: "Technical research & competitive analysis to power informed, strategic decisions.",
    color: "#10b981",
  },
];

const SKILLS = [
  { label: "React / Next.js",          pct: 90, color: "#61dafb" },
  { label: "Vue 3 / Nuxt",             pct: 80, color: "#42b883" },
  { label: "PHP / Symfony / Laravel",  pct: 88, color: "#9b87bf" },
  { label: "JavaScript / TypeScript",  pct: 90, color: "#3178c6" },
  { label: "MySQL / Databases",        pct: 82, color: "#00a0cc" },
  { label: "Docker & DevOps",          pct: 75, color: "#2496ed" },
  { label: "UI/UX & Tailwind CSS",     pct: 85, color: "#8b5cf6" },
  { label: "Git & CI/CD",              pct: 85, color: "#f05033" },
];

const STATS = [
  { val: "10+",  lbl: "Projects"     },
  { val: "3+",   lbl: "Years Exp."   },
  { val: "100%", lbl: "Commitment"   },
  { val: "∞",    lbl: "Curiosity"    },
];

/* ─── 3-D tilt card ───────────────────────────────────── */
const TiltCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  delay: number;
  inView: boolean;
}> = ({ icon, title, desc, color, delay, inView }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r   = el.getBoundingClientRect();
    const x   = ((e.clientX - r.left) / r.width  - 0.5) * 18;
    const y   = ((e.clientY - r.top)  / r.height - 0.5) * 18;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(8px)`;
  };

  const onLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transition: "transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
      >
        <div className={styles.icon_wrap} style={{ background: `${color}18`, color }}>
          {icon}
        </div>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.card_desc}>{desc}</p>
      </div>
    </motion.div>
  );
};

/* ─── About ───────────────────────────────────────────── */
const About: React.FC = () => {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="About" className={styles.about}>
      <div className={styles.wrap}>
        {/* header */}
        <div className={styles.header}>
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            SERVICES
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            What I <span className="gradient-text">Excel At</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: "0 auto" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bringing ideas to life through clean code, stunning design,
            and meaningful digital experiences.
          </motion.p>
        </div>

        {/* service cards */}
        <div className={styles.services}>
          {SERVICES.map((s, i) => (
            <TiltCard key={s.title} {...s} delay={0.3 + i * 0.1} inView={inView} />
          ))}
        </div>

        {/* skills + stats */}
        <div className={styles.bottom}>
          {/* skills */}
          <motion.div
            className={styles.skills_wrap}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Technical Skills</h3>
            {SKILLS.map((s, i) => (
              <div key={s.label} className={styles.skill}>
                <div className={styles.skill_head}>
                  <span>{s.label}</span>
                  <span className={styles.skill_pct}>{s.pct}%</span>
                </div>
                <div className={styles.skill_track}>
                  <motion.div
                    className={styles.skill_fill}
                    style={{ background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.1, delay: 0.55 + i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* stats */}
          <div>
            <motion.h3
              style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 28, letterSpacing: "-0.5px" }}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              By the Numbers
            </motion.h3>
            <div className={styles.stats_grid}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.lbl}
                  className={styles.stat}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.09 }}
                >
                  <span className={`${styles.stat_val} gradient-text`}>{s.val}</span>
                  <span className={styles.stat_lbl}>{s.lbl}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
