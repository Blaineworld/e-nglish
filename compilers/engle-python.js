'use strict';

function crash(message = "UNSPECIFIED FATAL ERROR") {
	// Exit with an error message.
	console.error(message);
	const timer = Date.now() + 5000;
	while (Date.now() < timer);
	process.exit(0);
}

/*
	Engle by Blaineworld

	Compiler to Python
*/

console.log("This compiler uses semicolons to end statements;\nif you have a problem with that, deal with it.\n\nPython is significantly faster with semicolons\nwhether you like it or not.\n");

const fs = require("fs");

if (process.argv.length < 3 || process.argv.length > 4)
	crash("Usage: ... <source> [<destination>]");

let sourceFile = process.argv[2];

console.log("Looking for the source file . . .");
if (!fs.existsSync(sourceFile))
	if (!fs.existsSync(sourceFile += ".engle"))
		crash("No such file: " + sourceFile.replace(/\.engle$/g, ""));

console.log("Reading the source file . . .");
let code = fs.readFileSync(sourceFile, "utf8").split(/[\n\r]+/g);
console.log("    Removing excess whitespace . . .");
const excessWhitespace = /^[ |\t]+|[ |\t]+$/g;
for (let i = 0; i < code.length; ++i)
	code[i] = code[i].replace(excessWhitespace, "");

let destinationFile = process.argv[2] + ".py";

if (process.argv.length > 3)
	destinationFile = process.argv[3];

console.log("Compiling . . .");

let result = "print(\"Sorry, the compiler isn't in a usable state yet.\");";

console.log("Writing the Python output file . . .");
fs.writeFileSync(destinationFile, result);