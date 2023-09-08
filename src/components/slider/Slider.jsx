"use client";
import React, { useEffect, useState } from "react";
import styles from "./slider.module.css";
import Image from "next/image";

const sliderImages = [
  "https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_deck.jpg",
  "https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_index.jpg",
  "https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_link.jpg",
];


const Slider = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        //Set previos value for no error to rewriting the data
      setSlide((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 3000);

    //Clearing interval
    return () => clearInterval(interval);
  }, [slide]);

  const handleSlide = (val) => {
    setSlide(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <Image alt="" src={sliderImages[slide]} fill className={styles.img} />
        </div>
        <div className={styles.pagination}>
          <div
            className={slide === 0 ? styles.bgGrayDot : styles.dot}
            onClick={() => handleSlide(0)}
          />
          <div
            className={slide === 1 ? styles.bgGrayDot : styles.dot}
            onClick={() => handleSlide(1)}
          />
          <div
            className={slide === 2 ? styles.bgGrayDot : styles.dot}
            onClick={() => handleSlide(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
