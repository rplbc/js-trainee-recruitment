import joinClassNames from "@/helpers/joinClassNames";
import styles from "./styles.module.scss";

export default function Layout({ className, ...props }: LayoutProps) {
  return (
    <div
      className={joinClassNames(styles.inner, styles.grid, className)}
      {...props}
    />
  );
}

type LayoutProps = React.ComponentPropsWithoutRef<"div">;
