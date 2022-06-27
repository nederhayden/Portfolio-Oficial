// next
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// components
import { useEffect, useState } from "react";
import ThemeMode from "../ThemeMode";
import HeaderItem from "./HeaderItem";
import { FiDownload } from "react-icons/fi";
import { en } from "../../languages/en/Strings";
import { pt } from "../../languages/pt/Strings";
import flagBrazil from "../../assets/brazil.png";
import flagUSA from "../../assets/usa.png";

// styles
import styles from "./styles.module.scss";

export default function Header() {
  const [colorBgHeader, setColorBgHeader] = useState(false);

  const router = useRouter();
  const translate = router.locale === "pt-BR" ? pt : en;

  const sizeImg = 32;

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
      title: `${translate.header__about}`,
      link: "#about",
    },
    {
      title: `${translate.header__acquirements}`,
      link: "#acquirements",
    },
    {
      title: `${translate.header__contact}`,
      link: "#contact",
    },
  ];

  return (
    <div className={colorBgHeader ? styles.container_active : styles.container}>
      <Link href="/">
        <a className={styles.name} id="/">
          <span>{"<"}</span>
          nederhayden
          <span>{"/>"}</span>
        </a>
      </Link>
      <ul className={styles.header_links}>
        {urls.map((url, index) => (
          <HeaderItem key={index} title={url.title} link={url.link} />
        ))}

        <div className={styles.btns}>
          <a
            className={styles.pdf}
            href="../../../curriculo.pdf"
            target="_blank"
          >
            {translate.header__pdfResume}
            <FiDownload />
          </a>
          <Link href="/" locale="pt-BR" passHref>
            <Image
              src={flagBrazil}
              alt="flagBrazil"
              width={sizeImg}
              height={sizeImg}
            />
          </Link>
          <Link href="/" locale="en-US" passHref>
            <Image
              src={flagUSA}
              alt="flagUSA"
              width={sizeImg}
              height={sizeImg}
            />
          </Link>
          <ThemeMode />
        </div>
      </ul>
    </div>
  );
}
