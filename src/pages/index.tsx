// next
import type { NextPage } from "next";

// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

// styles
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
