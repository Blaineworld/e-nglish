'use strict';

const deasync = require("deasync");

// You guys know regular expressions are objects, right?
const leadingWhitespace = /^[ |\t]+/g, trailingWhiteSpace = /[ \t]+$/g, anyLineBreaks = /\n/g, lineBreakClusters = /\n+/g, leadingLineBreaks = /^\n+/g, trailingLineBreaks = /\n+$/g;

{
	// I really wanted custom function names.
	const x = {
		"engle": function(code, namespace) {
			// Interpret some code or import a module synchronously.
			let error;
			module.exports.interpret(code)
				.then(lines => error = lines);
				.catch(err => throw err);
			deasync.loopWhile(() => error === undefined);

			return error; // Error is also used for the line count.
		},
		"asynchronous interpreter": async function(code) {
			// Interpret some code asynchronously.
			let err = null, lines, count = 0;

			if (typeof code !== "string")
				throw await TypeError("The provided value is not of type String!");

			// Preprocess the code a bit...
			{
				let data = code;
				// Convert to Unix line endings.
				// TODO

				// Remove blank lines.
				data = data.replace(/\n+/, "\n");

				var lines = await await data.substring(1, data.length - 1).split("\n");
			}

			let L;

			for await (L of lines) {
				;
			}

			return count;
		}
	};

	// I can't have you breaking anything!
	Object.defineProperties(module.exports = x["engle"], {
		"interpret": {
			"value": x["asynchronous interpreter"]
		}
	});
}

if (!module.parent) {
	process.title = "engle interpreter"; // 3XTR4 5W4G

	if (process.argv.length >= 3) {
		const fs = require("fs"), filename = process.argv[process.argv.length - 3];
		let code;

		if (!fs.existsSync(filename)) {
			console.error("STARTUP Error: The specified file does not exist.");
			process.exit();
		}

		try {
			console.log("STARTUP Reading file..."); // Literally just read the file.
			code = fs.readFileSync(filename, "utf8");
		} catch(error) {
			console.error("STARTUP Error: The specified file could not be read.");
			process.exit();
		}

		console.log("STARTUP Initializing...");
		module.exports.interpret(code);
	} else {
		console.error("STARTUP Error: Unfortunately the CLI is a work in progress. It's not in a usable state yet.");

		const readline = require("readline");
	}
}

function executeCode(code) {
	// Execute some code.
	;
}