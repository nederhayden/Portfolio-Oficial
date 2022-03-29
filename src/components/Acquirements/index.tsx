// next
import { useRouter } from "next/router";

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
import { en } from "../../languages/en/Strings";
import { pt } from "../../languages/pt/Strings";
import SectionTitle from "../SectionTitle";
import AcquirementItem from "./AcquirementItem";

// styles
import styles from "./styles.module.scss";

export default function Acquirement() {
  const router = useRouter();
  const translate = router.locale === "pt-BR" ? pt : en;

  // function to open contact links
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <div id="acquirements" className={styles.container}>
      <SectionTitle title={translate.acquirement__title} />
      <section>
        <AcquirementItem
          title="HTML"
          icon={<IoLogoHtml5 style={{ color: "#E34F26" }} />}
          onClick={() =>
            handleRedirect("https://developer.mozilla.org/pt-BR/docs/Web/HTML")
          }
        />
        <AcquirementItem
          title="CSS"
          icon={<IoLogoCss3 style={{ color: "#0075C2" }} />}
          onClick={() =>
            handleRedirect("https://developer.mozilla.org/pt-BR/docs/Web/CSS")
          }
        />
        <AcquirementItem
          title="SASS"
          icon={<IoLogoSass style={{ color: "#C76395" }} />}
          onClick={() => handleRedirect("https://sass-lang.com/")}
        />
        <AcquirementItem
          title="Javascript"
          icon={<IoLogoJavascript style={{ color: "#FFDD21" }} />}
          onClick={() =>
            handleRedirect(
              "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            )
          }
        />
        <AcquirementItem
          title="ReactJS"
          icon={<FaReact style={{ color: "#00DCFD" }} />}
          onClick={() => handleRedirect("https://pt-br.reactjs.org/")}
        />
        <AcquirementItem
          title="Typescript"
          icon={<SiTypescript style={{ color: "#3178C6" }} />}
          onClick={() => handleRedirect("https://www.typescriptlang.org/")}
        />
        <AcquirementItem
          title="NextJS"
          icon={<SiNextdotjs style={{ color: "#000000" }} />}
          onClick={() => handleRedirect("https://nextjs.org/")}
        />
        <AcquirementItem
          title="Git"
          icon={<SiGit style={{ color: "#E84D31" }} />}
          onClick={() => handleRedirect("https://git-scm.com/")}
        />
      </section>
    </div>
  );
}
