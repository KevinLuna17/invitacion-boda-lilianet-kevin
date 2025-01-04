import React from "react";
import icono_iglesia from "../../assets/icono_iglesia.png";
import iglesia_img from "../../assets/iglesia.png";
import styles from "./Religiosa.module.css";

export const Religiosa = () => {
  const handleGpsClick = () => {
    window.location.href = "https://maps.app.goo.gl/c6SmjCRNucjxViH28";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={icono_iglesia} alt="icono_logo" />
        <h2 className={styles.title}>Ceremonia Religiosa</h2>
        <p className={styles.texto}>IGLESIA CASA DE DIOS UMC</p>
        <p className={styles.texto}>2:15 PM</p>
        <img src={iglesia_img} alt="iglesia" className={styles.iglesia_img} />
      </div>
      <div className={styles.direccion}>
        <p className={styles.cursivo}>206 Center St, Syracuse, NY 13209</p>
        <div className={styles.button_container}>
          <button onClick={handleGpsClick} className={styles.gps_button}>
            Como Llegar
          </button>
        </div>
      </div>
    </section>
  );
};
