import parsers from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/formatter.js';

export default (filepath1, filepath2, format) => {
  console.log(format);
  const comparedData = compare(parsers(filepath1), parsers(filepath2));
  return formatter(comparedData, format);
};
