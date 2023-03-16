export default function Highlight({
  color = "orange",
  ...props
}: HighlightProps) {
  const colors = {
    orange: "var(--color-orange-500)",
  };

  return <span style={{ color: colors[color] }} {...props} />;
}

export type HighlightProps = {
  color?: "orange";
} & React.ComponentPropsWithoutRef<"span">;
