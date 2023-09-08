"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.left}>
          <div className={styles.leftInnerContainer}>
            <Link href="/about">
              <h1 className={styles.title}>
                We make games, Steam, and hardware. Join us.
              </h1>
            </Link>
            <p className={styles.desc}>
              We aren't a typical company—which is why you're here, right? As a
              flat company without hierarchy and job titles, we don't usually
              hire for specific roles. (Though we sometimes do!) Opportunities
              at Valve run broad and deep. We're always hiring highly
              experienced collaborators who are the best at what they do, across
              the following areas:
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightInnerContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Search Jobs"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                <Image
                  alt="search"
                  src="https://w7.pngwing.com/pngs/597/398/png-transparent-forest-lake-computer-icons-inspection-white-wine-search-bar-thumbnail.png"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
