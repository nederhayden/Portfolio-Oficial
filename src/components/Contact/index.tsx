// next
import { useRouter } from "next/router";

// components
import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import SectionTitle from "../SectionTitle";
import { en } from "../../languages/en/Strings";
import { pt } from "../../languages/pt/Strings";

// styles
import styles from "./styles.module.scss";
import ContactItem from "./ContactItem";

export default function Contact() {
  const router = useRouter();
  const translate = router.locale === "pt-BR" ? pt : en;

  // function to open contact links
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <div id="contact" className={styles.container}>
      <SectionTitle title={translate.contact__title} />
      <section>
        <ContactItem
          title="Linkedin"
          icon={<SiLinkedin style={{ color: "#0A66C2" }} />}
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/neder-hayden/")
          }
        />
        <ContactItem
          title="Whatsapp"
          icon={<BsWhatsapp style={{ color: "#45C655" }} />}
          onClick={() =>
            handleRedirect("https://api.whatsapp.com/send?phone=+5592984451006")
          }
        />
        <ContactItem
          title="Github"
          icon={<SiGithub style={{ color: "#000000" }} />}
          onClick={() => handleRedirect("https://github.com/nederhayden")}
        />
      </section>
    </div>
  );
}
