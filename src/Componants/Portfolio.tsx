import React, { useRef, useState, useEffect } from "react";
import styles from "../assets/css/Portfolio.module.css";
import asmgaz from "../assets/img/asmgaz.png";
import pneu from "../assets/img/pneu.png";
import valinco from "../assets/img/valinco.png";
import land from "../assets/img/learning_land.png";
import figuig from "../assets/img/figuig.png";
import desktop from "../assets/img/desktop.jpg";
import acua from "../assets/img/acua.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [Blogs, SetBlogs] = useState([
    {
      img: figuig,
      url: "https://conseilprovincialfiguig.ma/",
    },
    {
      img: asmgaz,
      url: "http://asmgaz.fcpo.agency/index.php",
    },
    {
      img: acua,
      url: "http://acquaclima.fcpo.agency/index.php",
    },
    {
      img: valinco,
      url: "http://valinco-froid.fcpo.agency/",
    },
    {
      img: pneu,
      url: "https://pneuscom9.fcpo.agency/",
    },
    {
      img: land,
      url: "#",
    },
  ]);

  return (
    <div id="Blog" className="bg-dark text-white p-3">
      <div className="d-flex flex-column align-items-center">
        <h6 className={styles.color}>PORTFOLIO</h6>
        <h2>My Masterpiece Collection</h2>
        <p className="w-50 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat
          fuga eos, quis hic non nostrum expedita voluptatum, officiis iusto
          eaque excepturi repellat et! Optio eaque aspernatur excepturi vero
          eum!
        </p>
      </div>
      <div className="d-flex  justify-content-center flex-wrap rounded">
        {Blogs.map((blog) => (
          <div key={blog.img} className="p-2 pb-0 w-25 rounded block_image">
            <div
              className={`shadow   pb-0 mb-5  w-100  rounded ${styles.my_div}`}
              style={{ overflowY: "scroll", height: "20em" }}
            >
              <Link to={blog.url}>
                <img src={blog.img} className="w-100 rounded" alt="" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
