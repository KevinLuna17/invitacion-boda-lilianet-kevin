import React from "react";
import icono_iglesia from "../../assets/icono_iglesia.png";
import iglesia_img from "../../assets/iglesia.png";
import styles from "./Religiosa.module.css";

export const Religiosa = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={icono_iglesia} alt="icono_logo" />
        <h2 className={styles.title}>Ceremonia Religiosa</h2>
        <p className={styles.texto}>IGLESIA CASA DE DIOS UMC</p>
        <p className={styles.texto}>3:00 PM</p>
        <img src={iglesia_img} alt="iglesia" className={styles.iglesia_img} />
      </div>
    </section>
  );
};
