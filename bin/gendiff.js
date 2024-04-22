#!/usr/bin/env node

import { Command } from 'commander';
import { parse, genDiff } from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = parse(filepath1);
    const file2 = parse(filepath2);
    console.log(genDiff(file1, file2));
  });

program.parse(process.argv);
