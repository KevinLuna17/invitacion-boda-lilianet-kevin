import React from "react";
import iglesia_img from "../../assets/amazonn.png";
import styles from "./Regalos.module.css";

export const Regalos = () => {
  const handleGpsClick = () => {
    window.location.href =
      "https://www.amazon.com/wedding/registry/3GGO8J4ON6M06";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Mesa de Regalos</h2>
        <img src={iglesia_img} alt="amazon" className={styles.iglesia_img} />
      </div>
      <div className={styles.button_container}>
        <button onClick={handleGpsClick} className={styles.gps_button}>
          Ver Mesa
        </button>
      </div>
    </section>
  );
};
