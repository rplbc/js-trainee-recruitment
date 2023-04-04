export default function joinClassNames(
  ...args: (string | boolean | null | undefined)[]
) {
  return args.filter(Boolean).join(" ") || undefined;
}
