// components
import Image from "next/image";
import picture from "../../assets/foto.png";
import CodeItem from "./CodeItem";

// styles
import styles from "./styles.module.scss";

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image src={picture} alt="Picture" />
      </div>
      <div className={styles.info_container}>
        <section>
          <h1>Olá</h1>
          <h3>Bem-vindo ao meu portfólio!</h3>
          <CodeItem />
        </section>
      </div>
    </div>
  );
}
