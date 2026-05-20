import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Blogs } from "./Blogs";
import styles from "../assets/css/Portfolio.module.css";

/* ─── 3-D tilt card ───────────────────────────────────── */
const ProjectCard: React.FC<{
  blog: (typeof Blogs)[0];
  delay: number;
  inView: boolean;
}> = ({ blog, delay, inView }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 14;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 14;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(6px)`;
  };

  const onLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transition: "transform 0.12s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
      >
        <img
          src={blog.img}
          alt={blog.title}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/img/desktop.jpg";
          }}
        />
        {blog.tag && <span className={styles.card_tag}>{blog.tag}</span>}

        <div className={styles.overlay}>
          <p className={styles.overlay_title}>{blog.title}</p>
          <p className={styles.overlay_desc}>{blog.desc}</p>
          <div style={{ display: "flex", gap: 10 }}>
            {blog.slug && (
              <Link to={`/${blog.slug}`} className={styles.overlay_link}>
                Details <FiArrowRight />
              </Link>
            )}
            {blog.url && blog.url !== "#" && (
              <a
                href={blog.url}
                target="_blank"
                rel="noreferrer"
                className={styles.overlay_link}
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              >
                Live <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Portfolio ───────────────────────────────────────── */
const FILTERS = ["All", "React", "PHP", "PHP / Symfony"];

const Portfolio: React.FC = () => {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? Blogs
      : Blogs.filter((b) => b.tag?.includes(active));

  return (
    <section ref={ref} id="Blog" className={styles.portfolio}>
      <div className={styles.wrap}>
        {/* header */}
        <div className={styles.header}>
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            PORTFOLIO
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: "0 auto" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of real-world applications I've designed and built —
            hover any card to explore.
          </motion.p>
        </div>

        {/* filters */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filter_btn} ${active === f ? styles.active : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* grid */}
        <div className={styles.grid}>
          {filtered.map((b, i) => (
            <ProjectCard key={b.slug || b.img} blog={b} delay={0.05 * i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
