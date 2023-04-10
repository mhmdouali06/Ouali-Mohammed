import React, { useState, useEffect } from "react";
import styles from "../assets/css/About.module.css";
import { BiCode, BiDesktop, BiSearchAlt2 } from "react-icons/bi";
import { SiAltiumdesigner } from "react-icons/si";
const About = () => {
  const [icons, Seticon] = useState([
    {
      title: "UI/UX Design",
      icon: (
        <SiAltiumdesigner
          style={{ height: "auto", width: "50%" }}
          className={styles.nav_icon}
        />
      ),
    },
    {
      title: "Web Development",
      icon: (
        <BiCode
          style={{ height: "auto", width: "50%" }}
          className={styles.nav_icon}
        />
      ),
    },
    {
      title: "App Desktop",
      icon: (
        <BiDesktop
          style={{ height: "auto", width: "50%" }}
          className={styles.nav_icon}
        />
      ),
    },
    {
      title: "Web Research",
      icon: (
        <BiSearchAlt2
          style={{ height: "auto", width: "50%" }}
          className={styles.nav_icon}
        />
      ),
    },
  ]);
  return (
    <div
      className="row p-2  text-center text-white"
      style={{ backgroundColor: "#404040" }}
      id="About"
    >
      <div className="d-flex flex-column align-items-center">
        <h5 className={`${styles.h5} w-50)`}>SERVICES</h5>
        <h3 className="w-50">What I Am Creat At</h3>
        <p className="w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, doloribus, eveniet, repellat odio libero consequuntur
          hic laudantium voluptatem quam cumque a nobis! Facere rem eum quos,
          distinctio dicta eligendi nisi?
        </p>
      </div>
      <div className="row">
        {icons.map((icon) => (
          <div
            key={icon.title}
            className="d-flex flex-column  col-lg-3 col-sm-12 col-md-6 p-3"
          >
            <div className="shadow p-3 mb-5  rounded">
              <i className="mb-3">{icon.icon}</i>
              <h6 className="mt-3">{icon.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
