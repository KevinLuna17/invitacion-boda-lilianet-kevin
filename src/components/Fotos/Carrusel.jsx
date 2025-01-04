import React from "react";
import hero_img from "../../assets/foto.jpg";
import styles from "./Carrusel.module.css";

export const Carrusel = () => {
  return (
    <section>
      <div className={styles.hero_section}>
        <img src={hero_img} alt="kyl" className={styles.hero_img} />
      </div>
    </section>
  );
};
