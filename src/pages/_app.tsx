// next
import type { AppProps } from "next/app";

// styles
import "../styles/globals.scss";
import styles from "../styles/home.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
