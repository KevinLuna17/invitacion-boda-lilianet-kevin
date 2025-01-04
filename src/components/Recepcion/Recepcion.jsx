import React from "react";
import icono_iglesia from "../../assets/icono_recepcion.png";
import iglesia_img from "../../assets/recepcion.png";
import styles from "./Recepcion.module.css";

export const Recepcion = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={icono_iglesia} alt="icono_logo" />
        <h2 className={styles.title}>Recepcion</h2>
        <p className={styles.texto}>TYROL CLUB OF SOLVAY</p>
        <p className={styles.texto}>4:00 PM</p>
        <img src={iglesia_img} alt="iglesia" className={styles.iglesia_img} />
      </div>
      <div className={styles.direccion}>
        <p className={styles.cursivo}>213 Lamont Ave, Syracuse, NY 13209</p>
        <div className={styles.button_container}>
          <button className={styles.gps_button}>Como Llegar</button>
        </div>
      </div>
    </section>
  );
};
