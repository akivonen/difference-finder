import fs from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFilePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const isObject = (data) => typeof data === 'object'
  && !Array.isArray(data)
  && data !== null;

export { getFilePath, readFile, isObject };
export default isObject;
