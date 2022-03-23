// components
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeMode from "../ThemeMode";
import HeaderItem from "./HeaderItem";
import { FiDownload } from "react-icons/fi";

// styles
import styles from "./styles.module.scss";

export default function Header() {
  const [colorBgHeader, setColorBgHeader] = useState(false);

  function handleScroll() {
    const offset = window.scrollY;
    if (offset >= 73) {
      setColorBgHeader(true);
    } else {
      setColorBgHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  const urls = [
    {
      title: "Sobre",
      link: "#homehero",
    },
    {
      title: "Experiências",
      link: "#knowledge",
    },
    {
      title: "Contato",
      link: "#footer",
    },
  ];

  return (
    <div className={colorBgHeader ? styles.container_active : styles.container}>
      <Link href="/">
        <a className={styles.name} id="/">
          {"<nederhayden/>"}
        </a>
      </Link>
      <ul className={styles.header_links}>
        {urls.map((url, index) => (
          <HeaderItem key={index} title={url.title} link={url.link} />
        ))}
        <a
          className={styles.pdf}
          href="../../../curriculo.pdf"
          target="_blank"
          // download
        >
          Baixar Currículo
          <FiDownload />
        </a>
        <ThemeMode />
      </ul>
    </div>
  );
}
