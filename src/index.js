import parsers from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, format) => {
  const comparedData = compare(parsers(filepath1), parsers(filepath2));
  return formatter(comparedData, format);
};
