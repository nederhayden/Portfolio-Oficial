// react
import { useEffect } from "react";

// next
import type { NextPage } from "next";

// styles
import "aos/dist/aos.css";
import styles from "../styles/home.module.scss";

// components
import AOS from "aos";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Acquirement from "../components/Acquirements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeHero />
        <Acquirement />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
