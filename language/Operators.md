# operators in e-nglish
## Unary Operations
A unary operation is an operation with only one operand.

```
; Math ;

-X ; Sign Flip: Flip the sign of X.

+X ; No Sign Flip: Don't flip the sign of X.

; Logic ;

!X ; Logical Negation: Is X falsy?

?X ; Logical Identity: Is X truthy?
```

### Assignments

```
; Math ;

++X ; Increment Before: Add 1 to X, then use it.

X++ ; Increment After: Use X then add 1 to it. Generally slower than ++X.

--X ; Decrement Before: Subtract 1 from X, then use it.

X-- ; Decrement After: Use X then subtract 1 from it. Generally slower than --X.

**X ; Square Before: Square X then use it.

X** ; Square After: Use X then square it. Generally slower than **X.

//X ; Half Before: Half X then use it.

X// ; Half After: Use X then half it. Generally slower than //X.

%%X ; Mod 1 Before: Mod X by 1 then use it.

X%% ; Mod 1 After: Use X then mod it by 1. Generally slower than %%X.

^^X ; Raise to Self Before: Half X then use it.

X^^ ; Raise to Self After: Use X then half it. Generally slower than ^^X.
```

## Binary Operations
A binary operation, not to be confused with a bit operation, is an operation with two operands

```
; Math ;
X + Y ; Addition: Add Y to X.

X - Y ; Subtraction: Subtract Y from X.

X * Y ; Multiplication: Multiply X by Y.

X / Y ; Division: Divide X by Y.

X % Y ; Modulo: Mod X by Y.

X ^ Y ; Raise: Raise X to the power of Y.

; Logic ;

X == Y  ; Equal To

X != Y  ; Not Equal To

X < Y   ; Less Than

X !< Y  ; Not Less Than

X <= Y  ; Less Than or Equal To

X !<= Y ; Not Less Than or Equal To

X > Y   ; Greater Than

X !> Y  ; Not Greater Than

X >= Y  ; Greater Than or Equal To

X !>= Y ; Not Greater Than or Equal To
```

### Assignments

```
; Math ;
X = Y ; Set: Set X to Y.

X += Y ; Add Before: Add Y to X, then use it.

X =+ Y ; Add After: Use X, then add Y to it. Generally slower than X += Y.

X -= Y ; Subtract Before: Subtract Y from X, then use it.

X =- Y ; Subtract After: Use X, then subtract Y from it. Generally slower than X += Y.

X *= Y ; Multiply Before: Multiply X by Y, then use it.

X =* Y ; Multiply After: Use X, then multiply it by Y. Generally slower than X *= Y.

X /= Y ; Divide Before: Divide X by Y, then use it.

X =/ Y ; Divide After: Use X, then divide it by Y. Generally slower than X /= Y.

X %= Y ; Mod Before: Mod X by Y, then use it.

X =% Y ; Mod After: Use X, then mod it by Y. Generally slower than X %= Y.

X ^= Y ; Raise Before: Raise X to the power of Y, then use it.

X =^ Y ; Raise After: Use X, then raise it to the power of Y. Generally slower than X ^= Y.
```