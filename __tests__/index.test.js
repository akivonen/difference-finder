import {
  test, expect, beforeAll, describe,
} from '@jest/globals';
import genDiff from '../index.js';
import { getFilePath, readFile } from '../src/utils.js';

let stylishActual;

beforeAll(() => {
  stylishActual = readFile(getFilePath('stylish.txt'));
});

const testCases = [
  { extension: 'json', format: 'stylish' },
  { extension: 'json', format: 'plain' },
  { extension: 'json', format: 'json' },
  { extension: 'yml', format: 'stylish' },
  { extension: 'yml', format: 'plain' },
  { extension: 'yml', format: 'json' },
];

describe('allFormats', () => {
  test.each(testCases)('$extension $format', ({ extension, format }) => {
    const actual = readFile(getFilePath(`${format}.txt`));
    expect(genDiff(`file1.${extension}`, `file2.${extension}`, format))
      .toEqual(actual);
  });
});

test('default stylish', () => {
  expect(genDiff('file1.json', 'file2.json'))
    .toEqual(stylishActual);
});
test('incorrect format', () => {
  expect(() => {
    genDiff('file1.json', 'file2.json', 'wrongFormat');
  }).toThrow();
});
test('incorrect args', () => {
  expect(() => {
    genDiff('file1', 'file2.json');
  }).toThrow();
});
