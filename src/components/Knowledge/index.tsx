// components
import {
  IoLogoJavascript,
  IoLogoSass,
  IoLogoCss3,
  IoLogoHtml5,
} from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import SectionTitle from "../SectionTitle";
import KnowledgeItem from "./KnowledgeItem";

// styles
import styles from "./styles.module.scss";

export default function Knowledge() {
  return (
    <div id="knowledge" className={styles.container}>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem
          title="HTML"
          icon={<IoLogoHtml5 style={{ color: "#E34F26" }} />}
        />
        <KnowledgeItem
          title="CSS"
          icon={<IoLogoCss3 style={{ color: "#0075C2" }} />}
        />
        <KnowledgeItem
          title="SASS"
          icon={<IoLogoSass style={{ color: "#C76395" }} />}
        />
        <KnowledgeItem
          title="Javascript"
          icon={<IoLogoJavascript style={{ color: "#FFDD21" }} />}
        />
        <KnowledgeItem
          title="ReactJS"
          icon={<FaReact style={{ color: "#00DCFD" }} />}
        />
        <KnowledgeItem
          title="Typescript"
          icon={<SiTypescript style={{ color: "#3178C6" }} />}
        />
        <KnowledgeItem
          title="NextJS"
          icon={<SiNextdotjs style={{ color: "#000000" }} />}
        />
      </section>
    </div>
  );
}
