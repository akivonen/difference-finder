import parse from './parse.js';
import compare from './compare.js';

export default (filepath1, filepath2) => compare(parse(filepath1), parse(filepath2));
