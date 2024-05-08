import { test, expect, beforeAll } from '@jest/globals';
import fs from 'node:fs';
import path from 'node:path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(process.cwd(), './__tests__', '__fixtures__', filename);
let stylishActual;
let plainActual;
let jsonActual;

beforeAll(() => {
  const stylish = getFixturePath('stylish.txt');
  const plain = getFixturePath('plain.txt');
  const json = getFixturePath('json.txt');
  stylishActual = fs.readFileSync(stylish, 'utf-8');
  plainActual = fs.readFileSync(plain, 'utf-8');
  jsonActual = fs.readFileSync(json, 'utf-8');
});

test('stylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json')))
    .toEqual(stylishActual);
});

test('plain', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain'))
    .toEqual(plainActual);
});

test('json', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json'))
    .toEqual(jsonActual);
});
