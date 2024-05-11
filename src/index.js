import parsers from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const comparedData = compare(parsers(filepath1), parsers(filepath2));
  return formatter(comparedData, format);
};

export default genDiff;
