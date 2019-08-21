'use strict';

const deasync = require("deasync");

// You guys know regular expressions are objects, right?
const leadingWhitespace = /^[ |\t]+/g, trailingWhiteSpace = /[ \t]+$/g, anyLineBreaks = /\n/g, lineBreakClusters = /\n+/g, leadingLineBreaks = /^\n+/g, trailingLineBreaks = /\n+$/g;

const E = module.exports = {};

if (!module.parent) {
	// stuff goes here
}