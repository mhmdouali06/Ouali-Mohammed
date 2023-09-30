import React, { useState } from "react";
import styles from "../assets/css/Contact.module.css";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdPhoneEnabled } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const Conatct = () => {
  const [Conatct, SetConatct] = useState([
    {
      icon: <AiOutlineMail className="text-white" />,
      title: "mhmdouali@gmail.com",
      url: "mailto:mhmdouali@gmail.com",
    },
    {
      icon: <BsWhatsapp className="text-white" />,
      title: "+212 641-082508",
      url: "https://wa.me/212641082508?text=Hello%20there!",
    },
    {
      icon: <AiFillGithub className="text-white" />,
      title: "mhmdouali06",
      url: "https://github.com/mhmdouali06",
    },
    {
      icon: <AiFillLinkedin className="text-white" />,
      title: "Ouali Mohammed",
      url: "https://www.linkedin.com/in/mohammed-ouali-24240b1aa/",
    },
  ]);
  return (
    <div
      id="Contact"
      style={{ backgroundColor: "#404040" }}
      className={`p-3 text-center text-white ${styles.conatct}`}
    >
      <div id="About" className="d-flex flex-column align-items-center">
        <h5 className={`${styles.h5} w-50)`}>CONTACT US</h5>
        <h3 className="w-50">Ways To Contact Me</h3>
        <p className="w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, doloribus, eveniet, repellat odio libero consequuntur
          hic laudantium voluptatem quam cumque a nobis! Facere rem eum quos,
          distinctio dicta eligendi nisi?
        </p>
      </div>
      <div className="d-flex mt-3 justify-content-center mb-3">
        {Conatct.map((s, index) => (
          <div className="me-4">
            <a
              href={s.url}
              key={index}
              target="_blank"
              className="bg-dark p-3  rounded shadow  "
            >
              <label> {s.icon}</label>
              {/* <label className={` ${styles.color}`}>{s.title}</label> */}
            </a>
          </div>
        ))}
      </div>
      <div className="w-0" style={{ float: "right" }}>
        <BiArrowToTop className="text-white" />
      </div>
    </div>
  );
};

export default Conatct;
