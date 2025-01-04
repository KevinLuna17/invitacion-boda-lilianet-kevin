import React from "react";
import styles from "./Asistencia.module.css";

export const Asistencia = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Te esperamos!</h2>
        <p className={styles.texto}>POR FAVOR CONFIRMA</p>
        <p className={styles.texto}>TU ASISTENCIA!!</p>
      </div>

      <div className={styles.button_container}>
        <button className={styles.gps_button}>Confirmar</button>
      </div>
    </section>
  );
};
