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
  };

  return (
    <div className={styles.container_code_item}>
      <div className={styles.code_item} data-aos="zoom-in-up">
        <span className={styles.comment}>{`// Minha Apresentação`}</span>
        <span className={styles.title}>Info {"{"}</span>
        <div className={styles.details}>
          <span>Name: {`"${info.name}"`},</span>
          <span>Age: {info.age},</span>
          <span>City: {info.city},</span>
          <span>E-mail: {info.email}</span>
        </div>
        <span className={styles.title}>{"}"}</span>
      </div>
      <div className={styles.code_item} data-aos="zoom-in-up">
        <span className={styles.title}>Details {"{"}</span>
        <div className={styles.details}>
          <span>Role: {`"${info.role}"`},</span>
          <span>Seniority: {info.seniority},</span>
        </div>
        <span className={styles.title}>{"}"}</span>
      </div>
    </div>
  );
}
