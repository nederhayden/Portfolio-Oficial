// components
import ThemeMode from "../ThemeMode";
import HeaderItem from "./HeaderItem";

// styles
import styles from "./styles.module.scss";

export default function Header() {
  const urls = [
    {
      title: "Início",
      link: "/",
    },

    {
      title: "Experiências",
      link: "/experiences",
    },
    {
      title: "Projetos",
      link: "/projects",
    },
    {
      title: "Contato",
      link: "/contact",
    },
  ];

  return (
    <div className={styles.container}>
      <a>{"<nederhayden/>"}</a>
      <ul className={styles.header_links}>
        {urls.map((url, index) => (
          <HeaderItem key={index} title={url.title} link={url.link} />
        ))}
        <ThemeMode />
      </ul>
    </div>
  );
}
