import isObject from '../utils.js';

const plain = (comparedData, path = '') => {
  const getPath = (prop) => `${path}${path === '' ? '' : '.'}${prop}`;
  const handleVal = (value) => {
    if (isObject(value)) {
      return '[complex value]';
    }
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return value;
  };
  const entries = Object.entries(comparedData);
  const results = entries.reduce((acc, [prop, val]) => {
    const { value, type } = val;
    switch (type) {
      case 'nested':
        return [...acc, plain(val.children, getPath(prop))];
      case 'updated':
        return [...acc, `Property '${getPath(prop)}' was updated. From ${handleVal(val.prevValue)} to ${handleVal(value)}`];
      case 'added':
        return [...acc, `Property '${getPath(prop)}' was added with value: ${handleVal(value)}`];
      case 'removed':
        return [...acc, `Property '${getPath(prop)}' was removed`];
      default:
        return acc;
    }
  }, []);
  return results.flat().join('\n');
};

export default plain;
