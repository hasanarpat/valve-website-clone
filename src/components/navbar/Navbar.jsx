import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          className={styles.logo}
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/800px-Valve_logo.svg.png"
          width={112}
          height={32}
        />
      </Link>
    </div>
  );
};

export default Navbar;
