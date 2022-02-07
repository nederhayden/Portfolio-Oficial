// components
import { SiLinkedin, SiGithub } from "react-icons/si";

// styles
import styles from "./styles.module.scss";

export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.container}>
      <button onClick={handleScrollTop}>Voltar ao topo</button>
      <section>
        <SiLinkedin
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/neder-hayden/")
          }
        />
        <SiGithub
          onClick={() => handleRedirect("https://github.com/nederhayden")}
        />
      </section>
    </div>
  );
}
