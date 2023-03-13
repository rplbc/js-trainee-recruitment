import joinClassNames from "@/helpers/joinClassNames";
import styles from "./styles.module.scss";

export default function Sidebar({ sticky, className, ...props }: SidebarProps) {
  return (
    <aside
      className={joinClassNames(
        styles.sidebar,
        sticky ? styles.sticky : false,
        className
      )}
      {...props}
    />
  );
}

export type SidebarProps = {
  sticky?: boolean;
} & React.ComponentPropsWithoutRef<"aside">;
