import React from "react";
import { motion } from "framer-motion";

type Props = { blog?: any };

const block: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--r)",
  padding: "32px",
};

const TechnologiesUsed: React.FC<Props> = ({ blog }) => {
  if (!blog?.technologes) return null;

  const techs = blog.technologes
    .split(/,|\\n/)
    .map((t: string) => t.trim())
    .filter(Boolean);

  return (
    <motion.div
      style={block}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.2 }}
    >
      <span
        style={{
          display: "block",
          padding: "5px 14px",
          background: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.25)",
          borderRadius: 50,
          color: "#6ee7b7",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase" as const,
          marginBottom: 20,
          width: "fit-content",
        }}
      >
        Technologies Used
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {techs.map((t: string, i: number) => (
          <span
            key={i}
            style={{
              padding: "7px 16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 500,
              color: "var(--text-2)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnologiesUsed;
