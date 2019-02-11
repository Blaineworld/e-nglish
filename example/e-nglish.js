const E = {
	"T": {
		"blockStart": "(",
		"blockEnd": ")",
		"comma": ",",
		"decimal": ".",
		"listStart": "{",
		"listEnd": "}",
		"quote": "\"",
		"space": " ",
		"whitespace": / |	/g
	},
	"words": function(sentence) {
		// Splits a string into separate words.
		while (E.T.whitespace.test(sentence[0]) || sentence[0] === E.T.space)
			sentence = sentence.substring(1);
		var n, q = sentence[0] == E.T.quote, a = sentence.split(E.T.quote), w = [], i;
		for (i = Number(q); i < a.length; i += 2)
			a[i] = a[i].replace(E.T.whitespace, E.T.space).split(E.T.space);
		for (i = Number(!q); i < a.length; i += 2)
			a[i] = [ E.T.quote + a[i] + E.T.quote ];
		for (i = 0; i < a.length; i++)
			for (n = 0; n < a[i].length; n++)
				if (a[i][n])
					w[w.length] = a[i][n];
		return w;
	},
	"run": function(script) {
		// Run an arbitrary script.
	},
	"execute": function(code) {
		// Run an arbitrary line of code.
		var words = E.words(code);
	}
};