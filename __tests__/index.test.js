import { test, expect, beforeAll } from '@jest/globals';
import fs from 'node:fs';
import path from 'node:path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(process.cwd(), './__tests__', '__fixtures__', filename);
let plainActual;

beforeAll(() => {
  const filepath = getFixturePath('plain.txt');
  plainActual = fs.readFileSync(filepath, 'utf-8');
});

test('plain', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(plainActual);
});
