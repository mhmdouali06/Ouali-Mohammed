import React, { useEffect, useState } from "react";
import styles from "../assets/css/Swiper.css";

type Props = {
  blog?: any;
};

const Swiper: React.FC<Props> = ({ blog }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Store the active slide index

  // Define your custom styles as constants
  const carouselItemStyle = {
    height: "70vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const backgroundImage1 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80')",
  };

  const backgroundImage2 = {
    backgroundImage:
      "url('https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png')",
  };

  const backgroundImage3 = {
    backgroundImage:
      "url('https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg')",
  };

  // Function to handle slide change
  const handleSlideChange = (event: any) => {
    setActiveIndex(event.to);
  };

  // Listen for the 'slid.bs.carousel' event to track the active slide
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleCaptions");
    if (carousel) {
      carousel.addEventListener("slid.bs.carousel", handleSlideChange);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("slid.bs.carousel", handleSlideChange);
      }
    };
  }, []);

  return (
    <div
      id="carouselExampleCaptions "
      className={`carousel slide mb-0 ${styles}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
          aria-current={activeIndex === 0 ? "true" : "false"}
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
          aria-current={activeIndex === 1 ? "true" : "false"}
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? "active" : ""}
          aria-current={activeIndex === 2 ? "true" : "false"}
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
          style={{ ...carouselItemStyle, ...backgroundImage1 }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h1>{blog?.slug}</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div
          className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
          style={{ ...carouselItemStyle, ...backgroundImage2 }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h1>{blog?.slug}</h1>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div
          className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
          style={{ ...carouselItemStyle, ...backgroundImage3 }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h1>{blog?.slug}</h1>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Swiper;
