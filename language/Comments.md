# comments in Engle
To add comments to a program in Engle, type a semicolon (;), and everything after it on the same line will be part of the comment:

```
#include console ; Printy print print.

print "Hello, world!" ; Hi!
```

It's impossible to place a comment inside of a string, obviously. If you could it would be annoying.

## Partial-Line Comments
You can end a comment with another semicolon (;):

```
#include ; This uses the console. ; console

print "This has a semicolon in it; it's valid syntax!"
```

## Multiline Comments
To create a multiline comment, use a semicolon (;) followed by a dash (-) to open the comment, and use a dash (-) followed by a semicolon (;) to close the comment. This has the advantage that 1. a single comment can span multiple lines, and 2. you can have semicolons (;) in your comment.

```
;-
	This is a multiline comment.

	As you can see, it spans multiple lines.
-;

;- Multiline comments can also be on only one line. -;
```


## Semicolons In Comments
If you want to have semicolons (;) in comments, use Greek Question Marks! (;) Or if you're a weirdo, you can escape them with a backslash (\) because comments also support escape sequences. Or you can just use a multiline comment, I won't judge.

### Weirdo

```
; The reasons for the backslashes are: I'm writing a list, which has commas in some of the items\; for this we can use semicolons\; and your mom.
```

### Big Brain

```
; What I'm doing: I'm writing a list, which has commas in some of the items; for this we can use semicolons; and that I want to introduce the true beauty that is the Greek Question Mark to the world. ;
```