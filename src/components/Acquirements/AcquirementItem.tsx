// react
import { ReactNode } from "react";

// styles
import styles from "./styles.module.scss";

// interfaces
interface AcquirementItemProps {
  title: string;
  icon: ReactNode;
  onClick: React.MouseEventHandler<HTMLParagraphElement>;
}

export default function AcquirementItem({
  title,
  icon,
  onClick,
}: AcquirementItemProps) {
  return (
    <div
      className={styles.container_item}
      data-aos="zoom-in-up"
      onClick={onClick}
    >
      <p>{title}</p>
      {icon}
    </div>
  );
}
