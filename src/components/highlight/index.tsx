import joinClassNames from "@/helpers/joinClassNames";
import styles from "./styles.module.scss";

export default function Highlight({
  color = "orange",
  className,
  ...props
}: HighlightProps) {
  return (
    <span className={joinClassNames(styles[color], className)} {...props} />
  );
}

export type HighlightProps = {
  color?: "orange";
} & React.ComponentPropsWithoutRef<"span">;
