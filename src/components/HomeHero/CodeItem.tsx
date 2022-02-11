// components
import picture from "../../assets/foto.png";

// styles
import styles from "./styles.module.scss";

export default function CodeItem() {
  const info = {
    name: "Neder Hayden",
    age: 30,
    city: "Manaus-AM",
    email: "nedersimoes@gmail.com",
    role: "Desenvolvedor Front-End",
    seniority: "Júnior",
    frameworks: ["ReactJs", "NextJs", "Typescript"],
    language: ["Javascript"],
  };

  return (
    <div className={styles.container_code_item}>
      <div className={styles.code_item}>
        <span className={styles.comment}>{`// Minha Apresentação`}</span>
        <span>Info {"{"}</span>
        <div className={styles.details}>
          <span>Name: {`"${info.name}"`},</span>
          <span>Age: {info.age},</span>
          <span>City: {info.city},</span>
          <span>E-mail: {info.email}</span>
        </div>
        <span>{"}"}</span>
      </div>
      <div className={styles.code_item}>
        <span className={styles.comment}>{`// Habilidades`}</span>
        <span>Details {"{"}</span>
        <div className={styles.details}>
          <span>Role: {`"${info.role}"`},</span>
          <span>Seniority: {info.seniority},</span>
          <span>
            Languages:{" "}
            {`[${info.language.map((l) => {
              return `"${l}"`;
            })}]`}
            ,
          </span>
          <span>
            Frameworks:{" "}
            {`[${info.frameworks.map((f) => {
              return `"${f}"`;
            })}]`}
          </span>
        </div>
        <span>{"}"}</span>
      </div>
    </div>
  );
}
