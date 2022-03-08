// components
import Image from "next/image";
import picture from "../../assets/foto.png";
import CodeItem from "./CodeItem";

// styles
import styles from "./styles.module.scss";

export default function HomeHero() {
  return (
    <div id="homehero" className={styles.container}>
      <div className={styles.img_container} data-aos="fade-up">
        <Image src={picture} alt="Picture" />
      </div>
      <div className={styles.info_container}>
        <section data-aos="fade-left">
          <h1>Olá,</h1>
          <h3>
            Me chamo <span>Neder Hayden</span>, <br />
            sou um entusiasta na área de desenvolvimento web front-end e
            apaixonado por desafios que me estimule intelectualmente!
          </h3>
          <CodeItem />
        </section>
      </div>
    </div>
  );
}
