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
import { Blogs } from "./Blogs";

const Portfolio = () => {
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
        {Blogs.map((blog: any) => (
          <div key={blog.img} className="p-2 pb-0 w-25 rounded block_image">
            <div
              className={`shadow   pb-0 mb-5  w-100  rounded ${styles.my_div}`}
              style={{ overflowY: "scroll", height: "20em" }}
            >
              <Link to={`/${blog?.slug}`}>
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
