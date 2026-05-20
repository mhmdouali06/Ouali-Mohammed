import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const NAV = [
  { label: "Home",     href: "#Home" },
  { label: "About",    href: "#About" },
  { label: "Projects", href: "#Blog" },
  { label: "Contact",  href: "#Contact" },
];

const SOCIAL = [
  { icon: <AiFillGithub />,   url: "https://github.com/mhmdouali06",                            label: "GitHub" },
  { icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/mohammed-ouali-24240b1aa/",     label: "LinkedIn" },
  { icon: <BsWhatsapp />,     url: "https://wa.me/212641082508?text=Hello!",                    label: "WhatsApp" },
];

const footer: React.CSSProperties = {
  background: "#030309",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  padding: "40px 28px",
};
const wrap: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 24,
};
const logoStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 900,
  letterSpacing: -1,
};
const navStyle: React.CSSProperties = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
};
const linkStyle: React.CSSProperties = {
  padding: "7px 14px",
  color: "var(--text-2)",
  fontSize: 13,
  fontWeight: 500,
  borderRadius: 6,
  transition: "color 0.2s",
  textDecoration: "none",
};
const socialRow: React.CSSProperties = {
  display: "flex",
  gap: 8,
};
const iconBtn: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 8,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.07)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 17,
  color: "var(--text-2)",
  transition: "all 0.2s",
  textDecoration: "none",
};
const copy: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  color: "var(--text-3)",
  fontSize: 12,
  marginTop: 32,
  paddingTop: 24,
  borderTop: "1px solid rgba(255,255,255,0.04)",
};

const CopyRight: React.FC = () => (
  <footer style={footer}>
    <div style={wrap}>
      <a href="#Home" style={logoStyle}>
        <span className="gradient-text">OM</span>
        <span style={{ color: "var(--text-2)", fontSize: "0.75rem", marginLeft: 6, fontWeight: 400, letterSpacing: 0 }}>
          Ouali Mohammed
        </span>
      </a>

      <nav style={navStyle}>
        {NAV.map((n) => (
          <a key={n.label} href={n.href} style={linkStyle}>
            {n.label}
          </a>
        ))}
      </nav>

      <div style={socialRow}>
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            style={iconBtn}
            title={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p style={copy}>
        © {new Date().getFullYear()} Ouali Mohammed — Crafted with&nbsp;
        <span style={{ color: "var(--purple-l)" }}>❤</span>&nbsp;in Morocco.
        All rights reserved.
      </p>
    </div>
  </footer>
);

export default CopyRight;
