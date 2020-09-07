#!/usr/bin/env node

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const { getCode, getName } = require('country-list');
console.log(getName('IS'));

console.log("Hello, Node.JS!");
