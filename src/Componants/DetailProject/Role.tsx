import React from "react";
import { motion } from "framer-motion";

type Props = { blog?: any };

const block: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--r)",
  padding: "32px",
};

const Role: React.FC<Props> = ({ blog }) => {
  if (!blog?.role) return null;
  return (
    <motion.div
      style={block}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.15 }}
    >
      <span
        style={{
          display: "block",
          padding: "5px 14px",
          background: "rgba(6,182,212,0.1)",
          border: "1px solid rgba(6,182,212,0.25)",
          borderRadius: 50,
          color: "#67e8f9",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase" as const,
          marginBottom: 16,
          width: "fit-content",
        }}
      >
        My Role
      </span>
      <p style={{ color: "var(--text-2)", lineHeight: 1.85, fontSize: "1rem" }}>
        {blog.role}
      </p>
    </motion.div>
  );
};

export default Role;
