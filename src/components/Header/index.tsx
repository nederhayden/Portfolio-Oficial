// components
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeMode from "../ThemeMode";
import HeaderItem from "./HeaderItem";

// styles
import styles from "./styles.module.scss";

export default function Header() {
  const [test, setTest] = useState(false);

  function handleScroll() {
    const offset = window.scrollY;
    if (offset >= 73) {
      setTest(true);
    } else {
      setTest(false);
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
    <div className={test ? styles.container_active : styles.container}>
      <Link href="/">
        <a id="/">{"<nederhayden/>"}</a>
      </Link>
      <ul className={styles.header_links}>
        {urls.map((url, index) => (
          <HeaderItem key={index} title={url.title} link={url.link} />
        ))}
        <ThemeMode />
      </ul>
    </div>
  );
}
