# e-nglish
###### A programming language for people who don't want to learn how to code.
---
### Pronunciation
Ah, yes. The topic on anyone's mind when they hear about the latest new acronym or intentional misspelling: "How do I pronounce the darn thing?" Unfortunately, I haven't thought of a pronunciation yet, so far I just know *it's __not__ pronounced the same as “[English](https://www.howtopronounce.com/english/)”*. I've tried just “English” but with a stressed pause between “E” and “nglish” for a while as the actual pronunciation, but it takes too long to say because of the pause and just the recovery time of the word. (Sorry, sometimes I think of things like Super Smash Bros. when I really shouldn't.) Just try it a few times in a sentence and you'll know what I mean.

### Language
Although you won't the find the name of [the language](./language), which is [e-nglish](./language), [there](./language), for [info](./language) about [the language](./language), check out the [language folder](./language). [It](./language) contains [documentation](./language) on [the e-nglish language](./language). Is [that](./language) enough [links](https://www.youtube.com/watch?v=dQw4w9WgXcQ) to [it](./language) for you?!

##### Modules
The e-nglish language is *module-based*, meaning that it uses modules for additional functionality. It's also designed to be compiled *or* interpreted (or both, that's cool, too). Certain modules are “built-in,” meaning they're basically simulated by the interpreter or compiler as modules, but aren't true modules. For a list of and documentation about them, see [Built-In Modules.md](./language/Built-In Modules.md). The syntax for importing modules is similar to C. The following is the code you would use to import `console`:

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
Unlike the [hello-world.e-nglish](./examples/hello-world.e-nglish) demo found in the [examples], this Hello World demo doesn't ask for your name or anything.

```
; So we can 'print' text.
#include console

; Hello, world!
print "Hello world!"
```