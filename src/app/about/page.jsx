"use client";
import React, { useEffect, useRef } from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Slider from "@/components/slider/Slider";

const About = () => {
  const videoEl = useRef(null);
  const videoElSec = useRef(null);

  useEffect(() => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
      videoElSec &&
      videoElSec.current &&
      videoElSec.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>
          At Valve we make games, Steam, and hardware.
        </h1>
      </div>
      <div className={styles.items}>
        <div className={styles.leftItem}>
          <h2 className={styles.subTitle}>
            Our games attract millions and define genres.
          </h2>
          <p className={styles.desc}>
            Valve's debut title, Half-Life, was released in 1998. It won more
            than 50 game of the year awards, and PC Gamer even called it the
            Best PC Game Ever. Since then, we've released{" "}
            <b className={styles.redText}>dozens of titles</b> that changed the
            world. Today, millions of people play our games every day.
          </p>
          <div className={styles.gameGallery}>
            <div className={styles.game}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_alyx.jpg"
                width={300}
                height={300}
                className={styles.image}
              />
              <h1 className={styles.gameTitle}>Half-Life: Alyx</h1>
            </div>
            <div className={styles.game}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_underlords.jpg"
                width={300}
                height={300}
                className={styles.image}
              />
              <h1 className={styles.gameTitle}>Dota Underlords</h1>
            </div>
            <div className={styles.game}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_csgo.jpg"
                width={300}
                height={300}
                className={styles.image}
              />
              <h1 className={styles.gameTitle}>
                Counter-Strike: Global Offensive
              </h1>
            </div>
            <div className={styles.game}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_dota2.jpg"
                width={300}
                height={300}
                className={styles.image}
              />
              <h1 className={styles.gameTitle}>Dota 2</h1>
            </div>
            <div className={styles.game}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/upcoming_artifact.jpg"
                width={300}
                height={300}
                className={styles.image}
              />
              <h1 className={styles.gameTitle}>Artifact</h1>
            </div>
            <div className={styles.game}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_tf2.jpg"
                width={300}
                height={300}
                className={styles.image}
              />
              <h1 className={styles.gameTitle}>Team Fortress 2</h1>
            </div>
          </div>
          <p className={styles.desc}>
            Our earlier titles were built on an innovative engine with
            world-class gameplay as their paramount goal, and praised by critics
            as games that revitalized or even invented their genres.
          </p>
          <div className={styles.gameGalleryMini}>
            <div className={styles.gameMini}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_hl.jpg"
                width={150}
                height={150}
                className={styles.image}
              />
              <h1 className={styles.gameTitleMini}>Half-Life</h1>
            </div>
            <div className={styles.gameMini}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_l4d.jpg"
                width={150}
                height={150}
                className={styles.image}
              />
              <h1 className={styles.gameTitleMini}>Left 4 Dead</h1>
            </div>
            <div className={styles.gameMini}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_portal.jpg"
                width={150}
                height={150}
                className={styles.image}
              />
              <h1 className={styles.gameTitleMini}>Portal</h1>
            </div>
            <div className={styles.gameMini}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_hl2.jpg"
                width={150}
                height={150}
                className={styles.image}
              />
              <h1 className={styles.gameTitleMini}>Half Life 2</h1>
            </div>
            <div className={styles.gameMini}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_l4d2.jpg"
                width={150}
                height={150}
                className={styles.image}
              />
              <h1 className={styles.gameTitleMini}>left 4 Dead 2</h1>
            </div>
            <div className={styles.gameMini}>
              <Image
                alt=""
                src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_p2.jpg"
                width={150}
                height={150}
                className={styles.image}
              />
              <h1 className={styles.gameTitleMini}>Portal 2</h1>
            </div>
          </div>
          <p className={styles.desc}>
            We have some new games in the works, too. A couple have been
            announced, while others remain top secret.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <video
            className={styles.video}
            ref={videoEl}
            playsInline
            autoPlay
            muted
            loop
            poster="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/p-body.jpg"
          >
            <source
              src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/p-body_fullsize.webm"
              type="video/webm"
            />
            <source
              src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/p-body_fullsize.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className={styles.imgContainerBig}>
        <Image
          className={styles.image}
          alt=""
          src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/dota2-the-international-2018.jpg"
          fill
        />
      </div>
      <div className={styles.section}>
        <h1 className={styles.subTitle}>
          Our platform connects players with the world's greatest entertainment.
        </h1>
        <p className={styles.desc}>
          We created <b className={styles.redText}>Steam</b> in 2003 to serve as
          a digital content distribution channel, before app stores existed.
          It's since grown and evolved into a platform for thousands of creators
          and publishers to deliver content and establish direct relationships
          with their customers. The Steam Community enables millions of players
          to do likewise, sharing entertainment and ideas, and making friends.
        </p>
      </div>
      <div className={styles.userCounts}>
        <div className={styles.steamImg}>
          <Image
            alt=""
            src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/steam_logo.png"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.count}>
          <span>27.080.914</span>
          <p>Steam players are online now</p>
        </div>
        <div className={styles.count}>
          <span>8.169.344</span>
          <p>Steam players are in-game now</p>
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.subTitle}>
          Our hardware is a happiness delivery vehicle.
        </h1>
        <p className={styles.desc}>
          We make consumer electronic devices that expand and improve gaming on
          the PC. Things like the <b className={styles.redText}>Steam Deck</b>,{" "}
          <b className={styles.redText}>Valve Index</b>,{" "}
          <b className={styles.redText}>Steam Controller</b>, and{" "}
          <b className={styles.redText}>Steam Link</b>. We invented the{" "}
          <b className={styles.redText}>VR technologies</b> that power the Vive,
          an interactive VR system brought to market in partnership with HTC.
        </p>
      </div>
      <Slider />
      <div className={styles.section}>
        <h1 className={styles.subTitle}>Iterate, test, repeat.</h1>
        <p className={styles.desc}>
          Just as in software development, we conduct playtests and share
          prototypes with our partners and players. We follow the results of
          this work all the way through the manufacturing process to create
          products people are sure to enjoy.
        </p>
      </div>
      <div className={styles.innerContainer}>
        <Image
          alt=""
          src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/controller-protos.jpg"
          width={1210}
          height={820}
        />
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.firstItem}>
          <h1 className={styles.subTitle}>We're just getting started.</h1>
          <p className={styles.desc}>
            We make all of this stuff collaboratively in Bellevue, Washington,
            where we combine the resources and talent of a world-class company
            with the ethos of a small startup. With an engaged and vocal
            community of partners and players, our products and our company will
            continue to change and grow in ways we may never have predicted.
            <b className={styles.redText}>Join us</b>, and help inform what's
            next.
          </p>
        </div>
        <div className={styles.secondItem}>
          <video
            ref={videoElSec}
            playsInline
            autoPlay
            muted
            loop
            poster="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd.jpg"
          >
            <source
              src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_fullsize.webm"
              type="video/webm"
              media="screen and (min-width:800px)"
            />
            <source
              src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_fullsize.mp4"
              type="video/mp4"
              media="screen and (min-width:800px)"
            />
            <source
              src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_small.webm"
              type="video/webm"
              media="screen and (max-width:799px)"
            />
            <source
              src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_small.mp4"
              type="video/mp4"
              media="screen and (max-width:799px)"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
