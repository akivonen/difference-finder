import parsers from './parsers.js';
import compare from './compare.js';

export default (filepath1, filepath2) => compare(parsers(filepath1), parsers(filepath2));
