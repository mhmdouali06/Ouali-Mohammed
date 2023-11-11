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

const DetailProjet = () => {
  const { slug } = useParams();
  const [blog, setBolg] = React.useState<any>();
  React.useEffect(() => {
    setBolg(Blogs.find((item: any) => item.slug == slug));
  }, [slug]);
  return (
    <div>
      <Swiper blog={blog} />
      <OverView blog={blog} />
      <Objective blog={blog} />
      <Role blog={blog} />
      <TechnologiesUsed blog={blog} />
      <Conatct />
      <CopyRight />
    </div>
  );
};

export default DetailProjet;
