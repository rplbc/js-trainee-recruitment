import joinClassNames from "@/helpers/joinClassNames";
import styles from "./styles.module.scss";

export default function Heading({
  as = "h3",
  className,
  variant = "default",
  ...props
}: HeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={joinClassNames(styles[as], styles[variant], className)}
      {...props}
    />
  );
}

export type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "default" | "sub" | "primary";
} & React.ComponentPropsWithoutRef<"h1"> &
  React.ComponentPropsWithoutRef<"h2"> &
  React.ComponentPropsWithoutRef<"h3"> &
  React.ComponentPropsWithoutRef<"h4"> &
  React.ComponentPropsWithoutRef<"h5"> &
  React.ComponentPropsWithoutRef<"h6">;
