import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.brandName}>Valve Corporation</h1>
        <div className={styles.items}>
          <div className={styles.item}>
            <Link href="#">Contact</Link>
            <Link href="#">People</Link>
            <Link href="#">Press Inquiries</Link>
          </div>
          <div className={styles.item}>
            <Link href="#">Stuff</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Jobs</Link>
            <Link href="#">Steam Partners</Link>
            <Link href="#">Publications</Link>
          </div>
          <div className={styles.item}>
            <Link href="#">More Stuff</Link>
            <Link href="#">Site Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Security</Link>
            <Link href="#">Legal</Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image alt="" src="https://cdn.akamai.steamstatic.com/valvesoftware/images/steam_logo_footer.png" width={90} height={32}/>
          <Image alt="" src="https://cdn.akamai.steamstatic.com/valvesoftware/images/steamworks_logo_footer.png" width={120} height={32}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
