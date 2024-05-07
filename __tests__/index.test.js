import { test, expect, beforeAll } from '@jest/globals';
import fs from 'node:fs';
import path from 'node:path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(process.cwd(), './__tests__', '__fixtures__', filename);
let nestedActual;

beforeAll(() => {
  const filepath = getFixturePath('nested.txt');
  nestedActual = fs.readFileSync(filepath, 'utf-8');
});

test('nested', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json')))
    .toEqual(nestedActual);
});
