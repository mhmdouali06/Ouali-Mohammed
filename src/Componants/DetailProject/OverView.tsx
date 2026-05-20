import React from "react";
import { motion } from "framer-motion";

type Props = { blog?: any };

const block: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--r)",
  padding: "32px",
};

const OverView: React.FC<Props> = ({ blog }) => {
  if (!blog?.overView) return null;
  return (
    <motion.div
      style={block}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <span
        style={{
          display: "block",
          padding: "5px 14px",
          background: "rgba(139,92,246,0.1)",
          border: "1px solid rgba(139,92,246,0.25)",
          borderRadius: 50,
          color: "var(--purple-l)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase" as const,
          marginBottom: 16,
          width: "fit-content",
        }}
      >
        Overview
      </span>
      <p style={{ color: "var(--text-2)", lineHeight: 1.85, fontSize: "1rem" }}>
        {blog.overView}
      </p>
    </motion.div>
  );
};

export default OverView;
