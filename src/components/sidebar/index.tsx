import joinClassNames from "@/helpers/joinClassNames";
import Heading from "../heading";
import styles from "./styles.module.scss";

export default function Sidebar({
  sticky,
  topTitle,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={joinClassNames(
        styles.sidebar,
        sticky ? styles.sticky : false,
        className
      )}
      {...props}
    >
      <Heading as="h2" className={styles.sidebar__heading}>
        {topTitle}
      </Heading>
      {children}
    </aside>
  );
}

export type SidebarProps = {
  topTitle: string;
  sticky?: boolean;
} & React.ComponentPropsWithoutRef<"aside">;
