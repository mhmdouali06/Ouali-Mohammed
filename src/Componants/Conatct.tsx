import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import styles from "../assets/css/Contact.module.css";

const LINKS = [
  {
    icon: <AiOutlineMail />,
    label: "Email",
    value: "mhmdouali@gmail.com",
    url: "mailto:mhmdouali@gmail.com",
    color: "#8b5cf6",
  },
  {
    icon: <BsWhatsapp />,
    label: "WhatsApp",
    value: "+212 641-082508",
    url: "https://wa.me/212641082508?text=Hello!",
    color: "#25d366",
  },
  {
    icon: <AiFillGithub />,
    label: "GitHub",
    value: "mhmdouali06",
    url: "https://github.com/mhmdouali06",
    color: "#ffffff",
  },
  {
    icon: <AiFillLinkedin />,
    label: "LinkedIn",
    value: "Ouali Mohammed",
    url: "https://www.linkedin.com/in/mohammed-ouali-24240b1aa/",
    color: "#0a66c2",
  },
];

const Conatct: React.FC = () => {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="Contact" className={styles.contact}>
      <div className={styles.glow} />
      <div className={styles.wrap}>
        {/* header */}
        <div className={styles.header}>
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            CONTACT
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: "0 auto" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or just want to say hello?
            I'm always open to new opportunities and collaborations.
          </motion.p>
        </div>

        {/* contact cards */}
        <div className={styles.grid}>
          {LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <div
                className={styles.card_icon}
                style={{ color: l.color, background: `${l.color}18` }}
              >
                {l.icon}
              </div>
              <div>
                <p className={styles.card_label}>{l.label}</p>
                <p className={styles.card_value}>{l.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.cta_row}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="mailto:mhmdouali@gmail.com" className="btn-grad">
            Send a Message <FiSend />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-ouali-24240b1aa/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <AiFillLinkedin /> Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Conatct;
