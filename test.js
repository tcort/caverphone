#!/usr/bin/env node

'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const caverphone = require('.');

const testcases = JSON.parse(fs.readFileSync(path.join(__dirname, 'testdata.json')).toString());

console.time('testcases');
testcases.forEach((testcase) => {
    assert.equal(caverphone(testcase.input), testcase.expected, `input=${testcase.input} expected=${testcase.expected} actual=${caverphone(testcase.input)}`);
});
console.timeEnd('testcases');
console.log(`Executed ${testcases.length} Test Cases`);
