// react
import { ReactNode } from "react";

// styles
import styles from "./styles.module.scss";

// interfaces
interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}

export default function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <div className={styles.container_item} data-aos="zoom-in-up">
      <p>{title}</p>
      {icon}
    </div>
  );
}
