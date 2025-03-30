export const mapObject = <T extends Record<string, T[keyof T]>>(obj: T, mapper: (value: T[keyof T]) => unknown) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, mapper(value)]));

export const flatten = (obj: object) => {
  let output: { [key: string]: any } = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value !== 'object' || Array.isArray(value)) {
      output[key] = value;
    } else {
      const dep = value ? flatten(value) : { [key]: value };
      output = { ...output, ...dep };
    }
  }
  return output;
};

export const isObject = (value: unknown): value is object => typeof value === 'object' && value !== null;

export const replaceSpaceToNull = <T extends Record<string, unknown>>(obj: T) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value === '' ? null : value])) as T;

export const addActiveColumn = <T>(list: T[]) => list.map((item) => ({ ...item, active: false }));
