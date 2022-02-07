// next
import type { AppProps } from "next/app";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
