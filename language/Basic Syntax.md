# Engle's Most Basic Syntax
This document describes the most basic, low-level syntax of Engle. As stated in the documentation on types, I don't know how to write an introductory paragraph about a programming language I made up in my stupid brain.

## Separators

### Lines
Lines can be separated by any of the following line endings: Unix (LF), Windows (CRLF), and Macintosh (CR). Blank lines are ignored, meaning it is possible to only support CR and LF, since a CRLF would just register as a two line endings, which is treated as just one line ending. Leading and trailing whitespace is also ignored.

### Whitespace
The only whitespace characters in Engle are spaces and tabs. Any other whitespace is considered not to be whitespace. If you're about to complain about that, shut the heck up!

Whitespace is used to separate words, just as in normal writing. Groups of more than one whitespace character are to be treated as one space. Of course, this does not apply to strings.

## Syntactic Structures

### Sentences
A sentence is a collection of words occupying a single line. It can contain other syntactic structures, literals, or anything that fits in the sentence. The words and syntactic structures that are acceptable at any given point in the sentence is determined by like, a... a tree... thingy? I don't know, here's a visual representation.

![o poop the image didnt load][syntax-tree-visual.gif]

It's a pretty bad visual representation, right?