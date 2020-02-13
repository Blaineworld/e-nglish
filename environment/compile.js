'use strict';

(async () => {
	if (process.argv.length < 3) {
		console.error(`Please specify a file to compile.

Command-Line Syntax:
    ... <Input Path> [<Output Path>]`);

		process.exit();
	}

	const fs = require("fs");

	let inputPath = process.argv[2], outputPath = inputPath + ".dat";

	if (process.argv.length > 3)
		outputPath = process.argv[3];

	console.log("WIP");
})();
