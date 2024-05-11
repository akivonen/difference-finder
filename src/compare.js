import { isObject } from './utils.js';

const compare = (obj1, obj2) => {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);
  const uniqueKeys = Array.from(new Set([...obj1keys, ...obj2keys]));
  const sortedUniqueKeys = [...uniqueKeys].sort();
  const data = sortedUniqueKeys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (isObject(value1) && isObject(value2)) {
      return { ...acc, [key]: { type: 'nested', children: compare(obj1[key], obj2[key]) } };
    }
    if (value1 === value2) {
      return { ...acc, [key]: { type: 'unchanged', value: value1 } };
    }
    if (!obj1keys.includes(key)) {
      return { ...acc, [key]: { type: 'added', value: value2 } };
    }
    if (!obj2keys.includes(key)) {
      return { ...acc, [key]: { type: 'removed', value: value1 } };
    }
    return { ...acc, [key]: { type: 'updated', prevValue: value1, value: value2 } };
  }, {});
  return data;
};
export default compare;
