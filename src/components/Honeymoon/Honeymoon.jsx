import React from "react";
import iglesia_img from "../../assets/honeymoonn.png";
import styles from "./Honeymoon.module.css";

export const Honeymoon = () => {
  const handleFundsClick = () => {
    window.location.href = "https://www.zola.com/registry/kevinandlilianet";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Luna de Miel</h2>
        <img src={iglesia_img} alt="honeymoon" className={styles.iglesia_img} />
      </div>
      <div className={styles.button_container}>
        <button onClick={handleFundsClick} className={styles.gps_button}>
          Contribuir
        </button>
      </div>
    </section>
  );
};
