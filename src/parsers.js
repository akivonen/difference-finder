import { extname } from 'node:path';
import yaml from 'js-yaml';
import { getFilePath, readFile } from './utils.js';

const parserMapping = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parsers = (filename) => {
  const file = readFile(getFilePath(filename));
  const fileExtention = extname(filename).slice(1);
  const parsedData = parserMapping[fileExtention](file);
  return parsedData;
};
export default parsers;
