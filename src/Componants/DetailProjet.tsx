import React from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "./Blogs";
import Swiper from "./Swiper";
import OverView from "./DetailProject/OverView";
import Objective from "./DetailProject/Objective";
import Role from "./DetailProject/Role";
import TechnologiesUsed from "./DetailProject/TechnologiesUsed";
import CopyRight from "./CopyRight";
import Conatct from "./Conatct";

const DetailProjet: React.FC = () => {
  const { slug } = useParams();
  const blog = Blogs.find((b) => b.slug === slug);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <Swiper blog={blog} />

      {/* Detail sections */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <OverView blog={blog} />
        <Objective blog={blog} />
        <Role blog={blog} />
        <TechnologiesUsed blog={blog} />
      </div>

      <Conatct />
      <CopyRight />
    </div>
  );
};

export default DetailProjet;
