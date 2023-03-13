export function uglify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function addUglyId<T extends Record<string, any>>(
  list: T[],
  key: KeysMatching<T, string>,
  prefix: string = ""
) {
  return list.map((item) => ({
    ...item,
    uglyId: `${prefix}${uglify(item[key])}`,
  }));
}

export type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
