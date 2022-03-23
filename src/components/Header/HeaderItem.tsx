// components
import { Anchor } from "antd";
const { Link } = Anchor;

// styles
import styles from "./styles.module.scss";

// interfaces
interface IHeaderItemProps {
  title: string;
  link: string;
}

// section redirect
export default function HeaderItem({ title, link }: IHeaderItemProps) {
  return (
    <div className={styles.header_item}>
      <Anchor affix={false} targetOffset={73}>
        <Link href={link} title={title} />
      </Anchor>
    </div>
  );
}
