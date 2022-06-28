// next
import { useRouter } from "next/router";

// components
import { en } from "../../languages/en/Strings";
import { pt } from "../../languages/pt/Strings";
import Acquirement from "../Acquirements";
import Contact from "../Contact";

// styles
import styles from "./styles.module.scss";

export default function CodeItem() {
  const router = useRouter();
  const translate = router.locale === "pt-BR" ? pt : en;

  const info = {
    // name: "Neder Hayden",
    age: 30,
    city: "Manaus-AM",
    email: "nedersimoes@gmail.com",
    role: `${translate.code__roleDescription}`,
    seniority: `${translate.code__seniorityDescription}`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_code_item}>
        {/* CODEITEM */}
        <div className={styles.code_item} data-aos="zoom-in-up">
          {/* COMMENT */}
          <span
            className={styles.comment}
          >{`// ${translate.code__comment}`}</span>

          {/* TITLE */}
          <span className={styles.title}>
            {translate.code__title1}{" "}
            <span className={styles.keys_sign}>{"{"}</span>
          </span>

          {/* DETAILS */}
          <div className={styles.details}>
            {/* AGE */}
            <span>
              {translate.code__age}
              <span className={styles.two_points}>:</span>{" "}
              <span className={styles.content_number}>{info.age}</span>,
            </span>

            {/* CITY */}
            <span>
              {translate.code__city}
              <span className={styles.two_points}>:</span>{" "}
              <span className={styles.content}>{`"${info.city}"`}</span>,
            </span>

            {/* E-MAIL */}
            <span>
              E-mail<span className={styles.two_points}>:</span>{" "}
              <span className={styles.content}>{`"${info.email}"`}</span>
            </span>
          </div>
          <span className={styles.keys_sign}>{"}"}</span>
        </div>

        {/* CODEITEM */}
        <div className={styles.code_item} data-aos="zoom-in-up">
          {/* TITLE */}
          <span className={styles.title}>
            {translate.code__title2}{" "}
            <span className={styles.keys_sign}>{"{"}</span>
          </span>

          {/* DETAILS */}
          <div className={styles.details}>
            {/* ROLE */}
            <span>
              {translate.code__role}
              <span className={styles.two_points}>:</span>{" "}
              <span className={styles.content}>{`"${info.role}"`}</span>,
            </span>

            {/* SENIORITY */}
            <span>
              {translate.code__seniority}
              <span className={styles.two_points}>:</span>{" "}
              <span className={styles.content}>{`"${info.seniority}"`}</span>
            </span>
          </div>
          <span className={styles.keys_sign}>{"}"}</span>
        </div>
      </div>
      <Acquirement />
    </div>
  );
}
