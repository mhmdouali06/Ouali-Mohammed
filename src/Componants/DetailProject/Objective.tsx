import React from "react";
import { motion } from "framer-motion";

type Props = { blog?: any };

const block: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--r)",
  padding: "32px",
};

const Objective: React.FC<Props> = ({ blog }) => {
  if (!blog?.objective) return null;

  const items = blog.objective.split(",").map((s: string) => s.trim()).filter(Boolean);

  return (
    <motion.div
      style={block}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.1 }}
    >
      <span
        style={{
          display: "block",
          padding: "5px 14px",
          background: "rgba(59,130,246,0.1)",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 50,
          color: "#93c5fd",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase" as const,
          marginBottom: 20,
          width: "fit-content",
        }}
      >
        Objectives
      </span>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item: string, i: number) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              color: "var(--text-2)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                flexShrink: 0,
                marginTop: 8,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Objective;
