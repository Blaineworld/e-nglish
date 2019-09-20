# Hash Statements in Engle
In Engle, a "hash statement" is a statement preceded by a hash symbol (#). Their purpose is to help out with things that are simpler to do without writing complete sentences, and can be easily understood without having to learn the syntax. Hash statements are processed before everything else and all of them in your code take effect immediately. They aren't considered or treated as sentences.

## `#globals`
This is used to define global variables in a more concise way.
```
#globals [
	int myInt
	int myNiceInitializedInt 69
	constant int myCoolConstantInt 420
]
```

## `#include`
You might recognize this one from a certain other language. You can `#include` a built-in package by using no extra marks.

`#include terminal`

You can `#include` an installed package by using angle brackets.

`#include <SomeCommunityPackage>`

...and you can `#include` a package from a file by using quotation marks.

`#include "some-directory/some-file"`