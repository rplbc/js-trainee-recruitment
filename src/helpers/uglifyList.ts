export default function uglifyList<T extends Record<string, any>>(
  a: T[],
  b: KeysMatching<T, string>
) {
  return a.map((item) => ({ ...item, uglyId: item[b] }));
}

export type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
