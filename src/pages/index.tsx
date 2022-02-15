// react
import { useEffect } from "react";

// next
import type { NextPage } from "next";
import Footer from "../components/Footer";

// components
import AOS from "aos";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Knowledge from "../components/Knowledge";

// styles
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Header />
      <HomeHero />
      <Knowledge />
      <Footer />
    </div>
  );
};

export default Home;
