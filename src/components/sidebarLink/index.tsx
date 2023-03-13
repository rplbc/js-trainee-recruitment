import joinClassNames from "@/helpers/joinClassNames";
import styles from "./styles.module.scss";

export default function SidebarLink({
  isActive,
  className,
  ...props
}: SidebarLinkProps) {
  return (
    <a
      className={joinClassNames(
        styles.default,
        isActive ? styles.active : false,
        className
      )}
      {...props}
    />
  );
}

export type SidebarLinkProps = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<"a">;
