import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const parserMapping = {
  json: JSON.parse,
  yml: yaml.load,
};

const parse = (filepath) => {
  const absoluteFilePath = path.resolve(process.cwd(), filepath);
  const file = fs.readFileSync(absoluteFilePath, 'utf-8');
  const fileExtention = path.extname(filepath).slice(1);
  const parsedData = parserMapping[fileExtention](file);
  return parsedData;
};
export default parse;
