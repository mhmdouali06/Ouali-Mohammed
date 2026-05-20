import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type Props = {
  blog?: any;
};

const Swiper: React.FC<Props> = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "65vh",
        minHeight: 420,
        overflow: "hidden",
        background: "var(--bg)",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Background image with overlay */}
      {blog?.img && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${blog.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "brightness(0.35) saturate(0.8)",
          }}
        />
      )}

      {/* gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,5,16,0.3) 0%, rgba(5,5,16,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 28px 48px",
          width: "100%",
        }}
      >
        <motion.button
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "var(--text-2)",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            padding: "8px 16px",
            marginBottom: 24,
            backdropFilter: "blur(10px)",
          }}
          whileHover={{ scale: 1.03 }}
        >
          <FiArrowLeft /> Back
        </motion.button>

        {blog?.tag && (
          <span
            style={{
              display: "inline-block",
              padding: "5px 14px",
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: 50,
              color: "var(--purple-l)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            {blog.tag}
          </span>
        )}

        <motion.h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: -2,
            marginBottom: 16,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {blog?.title || blog?.slug}
        </motion.h1>

        <motion.p
          style={{
            color: "var(--text-2)",
            fontSize: "1.05rem",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {blog?.desc}
        </motion.p>

        {blog?.url && blog?.url !== "#" && (
          <motion.a
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            className="btn-grad"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Visit Live Site <FiExternalLink />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Swiper;
