import isObject from '../utils.js';

const stylish = (comparedData, depth = 1) => {
  const handleValue = (value) => (isObject(value)
    ? stylish(value, depth + 1)
    : value);

  const sign = {
    nested: ' ',
    unchanged: ' ',
    updated: '-+',
    added: '+',
    removed: '-',
  };
  const spacesCount = 4;
  const indent = depth * spacesCount;
  const beforeIndent = (currSign) => `${' '.repeat(indent - 2)}${currSign} `;
  const afterIndent = ' '.repeat(indent - spacesCount);
  const entries = Object.entries(comparedData);
  const results = entries.reduce((acc, [prop, val]) => {
    const { value, type } = val;
    switch (type) {
      case 'nested':
        return [...acc, `${beforeIndent(sign[type])}${prop}: ${handleValue(val.children)}`];
      case 'updated':
        return [...acc, ...[`${beforeIndent(sign[type][0])}${prop}: ${handleValue(val.prevValue)}`,
          `${beforeIndent(sign[type][1])}${prop}: ${handleValue(value)}`]];
      case undefined:
        return [...acc, `${beforeIndent(' ')}${prop}: ${handleValue(val)}`];
      default:
        return [...acc, `${beforeIndent(sign[type])}${prop}: ${handleValue(value)}`];
    }
  }, []);

  return [
    '{',
    ...results,
    `${afterIndent}}`,
  ].join('\n');
};

export default stylish;
