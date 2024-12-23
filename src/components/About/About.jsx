import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.novios_items}>
          <p className={styles.name}>LILIANET</p>
          <p className={styles.lastname}>Paz Frometa</p>
          <p className={styles.letra_y}>&</p>
          <p className={styles.name}>KEVIN I.</p>
          <p className={styles.lastname}>Luna Gonzalez</p>
        </div>
        <div className={styles.fecha_items}>
          <p className={styles.fecha}>02</p>
          <p className={styles.fecha}>08</p>
          <p className={styles.fecha}>25</p>
        </div>
      </div>
      <div className={styles.container_frase}>
        <p className={styles.frase_invitacion}>
          TODOS LOS DIAS JUNTOS SON MARAVILLOSOS Y QUEREMOS QUE NOS ACOMPAÑEN EN
          EL MAS IMPORTANTE DE NOSOTROS
        </p>
      </div>
    </section>
  );
};
