# Engle
###### A programming language for people who don't want to learn how to code.
---
### Pronunciation
I still don't really know how it's going to be pronounced, even after renaming it! :(

### Language
Although you won't the find the name of [the language](./language), which is [Engle](./language), [there](./language), for [info](./language) about [the language](./language), check out the [language folder](./language). [It](./language) contains [documentation](./language) on [the Engle language](./language). Is [that](./language) enough [links](https://www.youtube.com/watch?v=dQw4w9WgXcQ) to [it](./language) for you?!

##### Modules
The Engle language is *module-based*, meaning that it uses modules for additional functionality. It's also designed to be compiled *or* interpreted (or both, that's cool, too). Certain modules are “built-in,” meaning they're basically simulated by the interpreter or compiler as modules, but aren't true modules. For a list of and documentation about them, see [Built-In Modules.md](./language/Built-In Modules.md). The syntax for importing modules is similar to C. The following is the code you would use to import `console`:

```
#include console
```

You can also import multiple modules with only one `#include` statement:

```
#include [
	console
	math
	myCustomModule
]
```

Currently there is no way to create custom modules (or run programs!) but both of those will come with time as the language develops. I do know, however, that in order to make sure compilers and interpreters run programs the same way, `#include` must only be valid at the top of the program, before any code, variable declarations, or constant definitions. Anywhere else, it will be ignored.

### Examples
Similarly to the Language section, you can find more [examples](./examples) using the afformentioned [link](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

##### Hello, World!
Unlike the [hello-world.Engle](./examples/hello-world.Engle) demo found in the [examples], this Hello World demo doesn't ask for your name or anything.

```
; So we can 'print' text.
#include console

; Hello, world!
print "Hello world!"
```