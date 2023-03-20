import { colors } from "@/styles/colors";

export default function Highlight({
  color = "orange",
  ...props
}: HighlightProps) {
  return <span style={{ color: colors[color] }} {...props} />;
}

export type HighlightProps = {
  color?: keyof typeof colors;
} & React.ComponentPropsWithoutRef<"span">;
