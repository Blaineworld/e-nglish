'use strict';

(async () => {
	const fs = require("fs");

	if (process.argv.length < 3) {
		console.error("err: Please specify a source file.\nSyntax: (...) <source> [<destination>]\n");
		process.exit();
	}

	const sourcePath = fs.existsSync(process.argv[2]) ? process.argv[2] : process.argv[2] + ".engle";
	const destinationPath = process.argv.length > 3 ? process.argv[3] : sourcePath + ".bin";

	try {
		var source = await fs.promises.readFile(sourcePath, "utf8");
	} catch(error) {
		console.log(`err: The source file could not be opened! (${error.code})`);
		process.exit();
	}

	try {
		var D = await fs.promises.open(destinationPath, "a");
	} catch(error) {
		console.log(`err: The destination file could not be opened! (${error.code})`);
		process.exit();
	}
})();