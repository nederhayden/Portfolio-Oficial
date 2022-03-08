// styles
import styles from "./styles.module.scss";

export default function CodeItem() {
  const info = {
    // name: "Neder Hayden",
    age: 30,
    city: "Manaus-AM",
    email: "nedersimoes@gmail.com",
    role: "Desenvolvedor Front-End",
    seniority: "Júnior",
  };

  return (
    <div className={styles.container_code_item}>
      {/* CODEITEM */}
      <div className={styles.code_item} data-aos="zoom-in-up">
        {/* COMMENT */}
        <span className={styles.comment}>{`// Minha Apresentação`}</span>

        {/* TITLE */}
        <span className={styles.title}>
          Informações <span className={styles.keys_sign}>{"{"}</span>
        </span>

        {/* DETAILS */}
        <div className={styles.details}>
          {/* AGE */}
          <span>
            Idade<span className={styles.two_points}>:</span>{" "}
            <span className={styles.content_number}>{info.age}</span>,
          </span>

          {/* CITY */}
          <span>
            Cidade<span className={styles.two_points}>:</span>{" "}
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
          Detalhes <span className={styles.keys_sign}>{"{"}</span>
        </span>

        {/* DETAILS */}
        <div className={styles.details}>
          {/* ROLE */}
          <span>
            Função<span className={styles.two_points}>:</span>{" "}
            <span className={styles.content}>{`"${info.role}"`}</span>,
          </span>

          {/* SENIORITY */}
          <span>
            Senioridade<span className={styles.two_points}>:</span>{" "}
            <span className={styles.content}>{`"${info.seniority}"`}</span>
          </span>
        </div>
        <span className={styles.keys_sign}>{"}"}</span>
      </div>
    </div>
  );
}
