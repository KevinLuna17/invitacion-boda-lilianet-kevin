import React from "react";
import hero_img from "../../assets/hero_img.jpg";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <div className={styles.hero_section}>
        <img src={hero_img} alt="kyl" className={styles.hero_img} />
      </div>
    </section>
  );
};
