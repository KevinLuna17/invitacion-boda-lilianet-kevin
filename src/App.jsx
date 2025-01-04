import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Asistencia } from "./components/Asistencia/Asistencia";
import { Religiosa } from "./components/Ceremonia/Religiosa";
import { Carrusel } from "./components/Fotos/Carrusel";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Recepcion } from "./components/Recepcion/Recepcion";
import { Regalos } from "./components/Regalos/Regalos";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Religiosa />
      <Recepcion />
      <Regalos />
      <Asistencia />
      <Carrusel />
    </div>
  );
}

export default App;
