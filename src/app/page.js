"use client";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Job from "@/components/job/Job";
import React, { useEffect, useRef, useState } from "react";

const videos = [
  {
    id: 1,
    poster:"https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_01_fullsize.jpg",
    webm: "https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_01_small.webm",
    mp4: "https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_01_small.mp4",
  },
  {
    id: 2,
    poster:"https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_02_fullsize.jpg",
    webm: "https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_02_small.webm",
    mp4: "https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_02_small.mp4",
  },
  {
    id: 3,
    poster:"https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_03_fullsize.jpg",
    webm: "https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_03_small.webm",
    mp4: "https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hero_03_small.mp4",
  },
];

export default function Home() {
  const [video, setvideo] = useState(0);

  const videoEl = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setvideo((prev) => (prev >= 2 ? 0 : prev+1));
      console.log(video)
      videoEl &&
      videoEl.current && videoEl.current.load()
      videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      })
    }, 15000);
   
    //Clearing the interval
    return ()=>clearInterval(interval)
  }, [video]);

  return (
    <div className={styles.container}>
    <div className={styles.backgroundOpacity}/>
      <video
        ref={videoEl}
        autoPlay
        loop
        muted
        className={styles.video}
        poster={videos[video].poster}
      >
        <source
          src={videos[video].webm}
          type="video/webm"
        />
        <source
          src={videos[video].mp4}
          type="video/mp4"
        />
      </video>
      <Hero />
      <Job />
    </div>
  );
}
