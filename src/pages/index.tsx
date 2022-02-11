// next
import type { NextPage } from "next";

// components
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomeHero />
    </div>
  );
};

export default Home;
