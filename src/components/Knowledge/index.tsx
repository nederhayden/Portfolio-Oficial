// components
import {
  IoLogoJavascript,
  IoLogoSass,
  IoLogoCss3,
  IoLogoHtml5,
} from "react-icons/io";
import { SiGit } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import SectionTitle from "../SectionTitle";
import KnowledgeItem from "./KnowledgeItem";

// styles
import styles from "./styles.module.scss";

export default function Knowledge() {
  // function to open contact links
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <div id="knowledge" className={styles.container}>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem
          title="HTML"
          icon={<IoLogoHtml5 style={{ color: "#E34F26" }} />}
          onClick={() =>
            handleRedirect("https://developer.mozilla.org/pt-BR/docs/Web/HTML")
          }
        />
        <KnowledgeItem
          title="CSS"
          icon={<IoLogoCss3 style={{ color: "#0075C2" }} />}
          onClick={() =>
            handleRedirect("https://developer.mozilla.org/pt-BR/docs/Web/CSS")
          }
        />
        <KnowledgeItem
          title="SASS"
          icon={<IoLogoSass style={{ color: "#C76395" }} />}
          onClick={() => handleRedirect("https://sass-lang.com/")}
        />
        <KnowledgeItem
          title="Javascript"
          icon={<IoLogoJavascript style={{ color: "#FFDD21" }} />}
          onClick={() =>
            handleRedirect(
              "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            )
          }
        />
        <KnowledgeItem
          title="ReactJS"
          icon={<FaReact style={{ color: "#00DCFD" }} />}
          onClick={() => handleRedirect("https://pt-br.reactjs.org/")}
        />
        <KnowledgeItem
          title="Typescript"
          icon={<SiTypescript style={{ color: "#3178C6" }} />}
          onClick={() => handleRedirect("https://www.typescriptlang.org/")}
        />
        <KnowledgeItem
          title="NextJS"
          icon={<SiNextdotjs style={{ color: "#000000" }} />}
          onClick={() => handleRedirect("https://nextjs.org/")}
        />
        <KnowledgeItem
          title="Git"
          icon={<SiGit style={{ color: "#E84D31" }} />}
          onClick={() => handleRedirect("https://git-scm.com/")}
        />
      </section>
    </div>
  );
}
