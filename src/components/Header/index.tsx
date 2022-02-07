// components
import HeaderItem from "./HeaderItem";

// styles
import styles from "./styles.module.scss";

export default function Header() {
  // COMPONENTIZAR DEPOIS ESSA LISTA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const urls = [
    {
      title: "Início",
      link: "/",
    },
    {
      title: "Projetos",
      link: "/projects",
    },
  ];

  return (
    <div className={styles.container}>
      {urls.map((url, index) => (
        <HeaderItem key={index} title={url.title} link={url.link} />
      ))}
    </div>
  );
}
