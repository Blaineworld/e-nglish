# Engle: Directives
Engle borrows many things from C, including *directives*.
Directives are special instructions preceded by `#`, which is often called a “hashtag,” “pound symbol,” or “number sign.”

Directives are processed before anything else, and are removed from your code before it is compiled, effectively making them comments that affect the end result.
Directives not understood by the compiler will be ignored, but are stored in the header of the resulting binary to be used later by interpreters and recompilers for various purposes.

A directive must be a single line beginning with a `#`, with no text other than whitespace behind it. The text after the `#` symbol on that line is the directive. Comments aren't a thing for directives.

![Fig. 1 - Two directives and a sentence containing '#'.](./fig/directive-1.gif)

## Directives

### Engle Directives
These directives are used when your code is compiled.

#### `#echo <message>`
Displays a compiler message along with the line number of this directive.

##### Arguments
1. `message`: The text to display.

##### Examples
```

#echo Hello,


#echo world!
```
We should expect the compiler output to contain the following or similar text:
```
echo 0002: Hello,
echo 0005: world! 
```

#### `#include <modules>`
Loads a module or set of modules to use in your code.
Attempting to load modules that do not exist results in compiler warnings, but doesn't directly result in an error.

##### Arguments
1. `modules`: A comma-separated list of modules to load. Whitespace characters before and after module names are ignored. Plain text, i.e. `filesystem`, denotes a built-in module. Text in double quotes, i.e. `"../Common.engle"`, denotes a path to a module file. Text in angle brackets, i.e. `<Reddit API>`, denotes an installed module.

##### Examples
`#include <Something>, math`

This loads the built-in `math` module and an installed module called `Something`.
That's not a real module, so we can only assume that it does something.

`#include 	"this.engle"  , <Something>,"that.engle",   <Something Else>`

This loads installed modules called `Something` and `Something Else` and two files called `this.engle` and `that.engle`.
This example is only meant to show that white space doesn't matter; actually writing `#include`s like this will get you arrested by the readability police!

---

#### `#silent`
Kind-of-disables the “`log <data>`” sentence structure, so that any operations performed by `<data>` are still performed, but the resulting value isn't logged.