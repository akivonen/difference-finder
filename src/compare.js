import _ from 'lodash';
import { isObject } from './utils.js';

const compare = (obj1, obj2) => {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);
  const uniqueKeys = Array.from(new Set([...obj1keys, ...obj2keys]));
  return _.sortBy(uniqueKeys).reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (isObject(value1) && isObject(value2)) {
      return { ...acc, [key]: { type: 'nested', children: compare(value1, value2) } };
    }
    if (value1 === value2) {
      return { ...acc, [key]: { type: 'unchanged', value: value1 } };
    }
    if (!obj1keys.includes(key) || !obj2keys.includes(key)) {
      return {
        ...acc,
        [key]: {
          type: !obj1keys.includes(key) ? 'added' : 'removed',
          value: !obj1keys.includes(key) ? value2 : value1,
        },
      };
    }
    return { ...acc, [key]: { type: 'updated', prevValue: value1, value: value2 } };
  }, {});
};
export default compare;
