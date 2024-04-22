import _ from 'lodash';

const genDiff = (file1, file2) => {
  const obj1 = file1;
  const obj2 = file2;
  const diff = [];
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);
  const uniqueKeys = Array.from(new Set([...obj1keys, ...obj2keys]));
  uniqueKeys.forEach((key) => {
    if (obj1keys.includes(key) && obj2keys.includes(key)) {
      if (obj2[key] === obj1[key]) {
        diff.push([' ', key, obj1[key]]);
      } else {
        diff.push(['-', key, obj1[key]], ['+', key, obj2[key]]);
      }
    } else if (!obj2keys.includes(key)) {
      diff.push(['-', key, obj1[key]]);
    } else {
      diff.push(['+', key, obj2[key]]);
    }
  });
  const sortedDiff = _.sortBy(diff, [1]);
  const preparedDiff = sortedDiff
    .map(([sign, key, value]) => `  ${sign} ${key}: ${value}`)
    .join('\n');
  const result = ['{', preparedDiff, '}'].join('\n');
  return result;
};

export default genDiff;
