import joinClassNames from "@/helpers/joinClassNames";
import Link, { type LinkProps } from "next/link";
import { memo } from "react";
import styles from "./styles.module.scss";

export function ActiveSectionLink({
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

export default memo(ActiveSectionLink);

export type ActiveSectionLinkProps = {
  isActive?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps;
