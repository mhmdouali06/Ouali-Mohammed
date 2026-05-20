import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profil from "../assets/img/profil.png";
import styles from "../assets/css/Home.module.css";
import pdf from "../assets/pdf/Cv Ouali Mohammed.pdf";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import {
  SiReact, SiPhp, SiTypescript, SiMysql,
  SiSymfony, SiVuedotjs, SiLaravel, SiDocker,
} from "react-icons/si";

/* ─── Particle canvas ─────────────────────────────────── */
const ParticleCanvas: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const N = 75;
    const pts = Array.from({ length: N }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:  Math.random() * 1.5 + 0.5,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139,92,246,0.65)";
        ctx.fill();

        for (let j = i + 1; j < N; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(139,92,246,${0.28 * (1 - d / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

/* ─── Tech pills ──────────────────────────────────────── */
const TECH = [
  { icon: <SiReact      />, label: "React",      color: "#61dafb" },
  { icon: <SiVuedotjs   />, label: "Vue 3",       color: "#42b883" },
  { icon: <SiPhp        />, label: "PHP",         color: "#9b87bf" },
  { icon: <SiLaravel    />, label: "Laravel",     color: "#ff2d20" },
  { icon: <SiSymfony    />, label: "Symfony",     color: "#cccccc" },
  { icon: <SiTypescript />, label: "TypeScript",  color: "#3178c6" },
  { icon: <SiMysql      />, label: "MySQL",       color: "#00758f" },
  { icon: <SiDocker     />, label: "Docker",      color: "#2496ed" },
];

/* ─── Hero ────────────────────────────────────────────── */
const Home: React.FC = () => (
  <section id="Home" className={styles.hero}>
    <div className={styles.gradient_bg} />
    <div className={styles.grid_bg} />
    <ParticleCanvas />

    <div className={styles.container}>
      {/* LEFT */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className="section-tag">👋 Hello World</span>

        <h1 className={styles.name}>
          Ouali
          <br />
          <span className="gradient-text">Mohammed</span>
        </h1>

        <p className={styles.role}>
          <span className={styles.role_line} />
          Full Stack Developer
          <span className={styles.role_line} />
        </p>

        <p className={styles.desc}>
          I craft modern web experiences with&nbsp;
          <strong style={{ color: "#a78bfa" }}>React&nbsp;&amp;&nbsp;PHP</strong>,
          turning complex problems into elegant, high-performance applications
          that users love.
        </p>

        <div className={styles.buttons}>
          <a href="#Blog" className="btn-grad">
            View My Work <FiArrowRight />
          </a>
          <a href={pdf} target="_blank" rel="noreferrer" className="btn-outline">
            Download CV <FiDownload />
          </a>
        </div>

        <div className={styles.tech_row}>
          {TECH.map((t) => (
            <motion.span
              key={t.label}
              className={styles.tech_pill}
              whileHover={{ y: -4, scale: 1.08 }}
              style={{ color: t.color } as React.CSSProperties}
              title={t.label}
            >
              {t.icon} {t.label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — profile */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.img_wrap}>
          <div className={styles.ring} />
          <div className={styles.ring_mask} />
          <div className={styles.img_circle}>
            <img src={profil} alt="Ouali Mohammed" />
          </div>

          {/* floating badges */}
          <motion.span
            className={styles.badge}
            style={{ top: "8%", right: "-12%" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <SiReact style={{ color: "#61dafb", fontSize: 18 }} /> React
          </motion.span>

          <motion.span
            className={styles.badge}
            style={{ bottom: "12%", left: "-14%" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
          >
            <SiPhp style={{ color: "#9b87bf", fontSize: 18 }} /> PHP
          </motion.span>
        </div>
      </motion.div>
    </div>

    {/* scroll hint */}
    <motion.div
      className={styles.scroll_hint}
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
    >
      <div className={styles.scroll_mouse} />
      <span className={styles.scroll_label}>scroll</span>
    </motion.div>
  </section>
);

export default Home;
