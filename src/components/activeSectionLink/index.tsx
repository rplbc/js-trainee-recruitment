import joinClassNames from "@/helpers/joinClassNames";
import Link, { type LinkProps } from "next/link";
import styles from "./styles.module.scss";

export default function ActiveSectionLink({
  isActive,
  className,
  ...props
}: ActiveSectionLinkProps) {
  return (
    <Link
      aria-current={isActive || undefined}
      className={joinClassNames(styles.default, className)}
      {...props}
    />
  );
}

export type ActiveSectionLinkProps = {
  isActive?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps;
