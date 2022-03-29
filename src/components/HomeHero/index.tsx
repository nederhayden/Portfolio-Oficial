// next
import { useRouter } from "next/router";

// components
import Image from "next/image";
import picture from "../../assets/foto.png";
import CodeItem from "./CodeItem";
import { en } from "../../languages/en/Strings";
import { pt } from "../../languages/pt/Strings";

// styles
import styles from "./styles.module.scss";

export default function HomeHero() {
  const router = useRouter();
  const translate = router.locale === "pt-BR" ? pt : en;

  return (
    <div id="about" className={styles.container}>
      <div className={styles.img_container} data-aos="fade-up">
        <Image src={picture} alt="Picture" />
      </div>
      <div className={styles.info_container}>
        <section data-aos="fade-left">
          <h1>{translate.about__h1},</h1>
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
