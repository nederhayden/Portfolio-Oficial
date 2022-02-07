// next
import Link from "next/link";

// styles
import styles from "./styles.module.scss";

// interfaces
interface IHeaderItemProps {
  title: string;
  link: string;
}

export default function HeaderItem({ title, link }: IHeaderItemProps) {
  return (
    <div className={styles.header_item}>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </div>
  );
}
