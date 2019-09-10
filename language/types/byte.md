# byte
*An unsigned 8-bit integer.*

## Code Example
```
;-
	Expected output:

	253
	254
	255
	Overflow!
-;

create a byte called myByte
set myByte to 252

do [
	; This will exit when myByte overflows,
	; as zero is a falsy value.
	log myByte
] while ++myByte

log "Overflow!"
```