import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Religiosa } from "./components/Ceremonia/Religiosa";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Religiosa />
    </div>
  );
}

export default App;
