import isObjectAndNotNull from './utils.js';

const stylish = (comparedData, depth = 1) => {
  const handleValue = (value) => (isObjectAndNotNull(value)
    ? stylish(value, depth + 1)
    : value);

  const sign = {
    nested: ' ',
    unchanged: ' ',
    changed: '-+',
    added: '+',
    removed: '-',
  };
  const spacesCount = 4;
  const indent = depth * spacesCount;
  const beforeIndent = (currSign) => `${' '.repeat(indent - 2)}${currSign} `;
  const afterIndent = ' '.repeat(indent - spacesCount);
  const entries = Object.entries(comparedData);
  // console.log(entries);
  const results = entries.reduce((acc, [key, value]) => {
    switch (value.type) {
      case 'nested':
        return [...acc, `${beforeIndent(sign[value.type])}${key}: ${handleValue(value.children)}`];
      case 'changed':
        return [...acc, ...[`${beforeIndent(sign[value.type][0])}${key}: ${handleValue(value.prevValue)}`,
          `${beforeIndent(sign[value.type][1])}${key}: ${handleValue(value.currValue)}`]];
      case undefined:
        return [...acc, `${beforeIndent(' ')}${key}: ${handleValue(value)}`];
      default:
        return [...acc, `${beforeIndent(sign[value.type])}${key}: ${handleValue(value.value)}`];
    }
  }, []);
  // console.log(results);

  return [
    '{',
    ...results,
    `${afterIndent}}`,
  ].join('\n');
};

export default stylish;
