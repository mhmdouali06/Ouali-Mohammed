import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/ouali.png";
import profil from "../assets/img/profil.png";
import black from "../assets/img/noir_blacn_ouali.png";
import styles from "../assets/css/Home.module.css";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const textRef = useRef("");
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const newText = textRef.current.slice(0, currentIndex + 1);
      setText(newText);
      setCurrentIndex((currentIndex) => currentIndex + 1);
      if (newText === textRef.current) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const fullText = ` web programmer . i've
    also used Symfony framework to build efficient back-end systems. I'm
    proficient in using Axios to interact with APIs and create dynamic
    applications. Overall, I'm a versatile developer with a passion for
    creating visually appealing web applications.`;
    textRef.current = fullText;
  }, []);

  const formProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { duration: 700 },
  });
  return (
    <div id="Home" className={`row bg-dark  ${styles.main} ${styles.noise}`}>
      <div className="col-sm-12 col-md-3 col-lg-3">
        <img src={profil} alt="" className={styles.main_image} />
      </div>
      <div className="col-sm-12 col-md-9 col-lg-9  p-3">
        <animated.h1 style={formProps} className="text-white">
          Ouali
          <br />
          Mohammed
        </animated.h1>
        <animated.p
          className="text-white mt-3  pe-3"
          style={{ textAlign: "justify" }}
        >
          {text}
        </animated.p>
      </div>
    </div>
  );
};

export default Home;
