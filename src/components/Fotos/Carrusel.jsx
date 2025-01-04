import React, { useState, useEffect } from "react";
import styles from "./Carrusel.module.css";

// Importa tus imágenes aquí
import foto1 from "../../assets/foto.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";

export const Carrusel = () => {
  const images = [foto1, foto2, foto3, foto4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Inicia el efecto de fade
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false); // Reinicia el efecto
      }, 500); // Duración del fade
    }, 4000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section>
      <div className={styles.hero_section}>
        <img
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          className={`${styles.hero_img} ${fade ? styles.fade : ""}`}
        />
      </div>
    </section>
  );
};
