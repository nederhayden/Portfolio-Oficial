// next
import { useRouter } from "next/router";

// components
import Image from "next/image";
import picture from "../../assets/foto.png";
import { en } from "../../languages/en/Strings";
import { pt } from "../../languages/pt/Strings";
import CodeItem from "./CodeItem";

// styles
import styles from "./styles.module.scss";
import Contact from "../Contact";

export default function HomeHero() {
  const router = useRouter();
  const translate = router.locale === "pt-BR" ? pt : en;

  return (
    <div id="about" className={styles.container}>
      <div className={styles.img_container} data-aos="fade-up">
        <Image src={picture} alt="Picture" />
      </div>

      <div className={styles.info_container}>
        <Contact />
        <section data-aos="fade-left">
          <h1>
            {`<`}
            <span className={styles.title__}>{translate.about__span},</span>
            {`/>`}
          </h1>
          <h3>
            {translate.about__h3a} <span>Neder Hayden</span>, <br />
            {translate.about__h3b}
          </h3>
          <CodeItem />
        </section>
      </div>
    </div>
  );
}
