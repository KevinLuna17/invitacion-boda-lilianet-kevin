import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Lilianet & Kevin
        </a>
      </nav>
    </div>
  );
};
