import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillFilePdfFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "../assets/css/AppBar.module.css";
import pdf from "../assets/pdf/Cv Ouali Mohammed.pdf";

const NAV = [
  { label: "Home",     href: "#Home" },
  { label: "About",    href: "#About" },
  { label: "Projects", href: "#Blog" },
  { label: "Contact",  href: "#Contact" },
];

export default function DrawerAppBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.wrap}>
          {/* Logo */}
          <a href="#Home" className={styles.logo}>
            <span className="gradient-text">OM</span>
            <span className={styles.logo_dot} />
          </a>

          {/* Desktop links */}
          <nav className={styles.links}>
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className={styles.link}>
                {n.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className={styles.actions}>
            <a
              href="https://github.com/mhmdouali06"
              target="_blank"
              rel="noreferrer"
              className={styles.icon_btn}
              title="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ouali-24240b1aa/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon_btn}
              title="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a href={pdf} target="_blank" rel="noreferrer" className={styles.cv_btn}>
              <BsFillFilePdfFill /> CV
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.drawer}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={styles.drawer_link}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className={styles.drawer_actions}>
              <a
                href="https://github.com/mhmdouali06"
                target="_blank"
                rel="noreferrer"
                className={styles.icon_btn}
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-ouali-24240b1aa/"
                target="_blank"
                rel="noreferrer"
                className={styles.icon_btn}
              >
                <AiFillLinkedin />
              </a>
              <a href={pdf} target="_blank" rel="noreferrer" className={styles.cv_btn}>
                <BsFillFilePdfFill /> CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
