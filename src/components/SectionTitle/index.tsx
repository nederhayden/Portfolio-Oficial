// react
import { ReactNode } from "react";

// styles
import styles from "./styles.module.scss";

// interfaces
interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className={styles.container} data-aos="fade-right">
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </div>
  );
}
