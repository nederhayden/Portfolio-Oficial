// next
import Link from "next/link";
import { useRouter } from "next/router";

// styles
import styles from "./styles.module.scss";

// interfaces
interface IHeaderItemProps {
  title: string;
  link: string;
}

export default function HeaderItem({ title, link }: IHeaderItemProps) {
  const router = useRouter();

  return (
    <div className={styles.header_item}>
      <Link href={link} passHref>
        <a>{title}</a>
      </Link>
    </div>
  );
}
