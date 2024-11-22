
<!--#echo json="package.json" key="name" underline="=" -->
parse-overtime-date-pmb
=======================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Parse date/time timestamps where the hour number can exceed 23.
<!--/#echo -->


Use cases
---------

* In your activity tracker, your day only ends when you go to bed.
* Your video stream starts in the evening and extends beyond midnight.



API
---

This module exports one function:

### parseOvertimeDate(d)

Where `d` is a string that `new Date()` could parse if the hour number
were in range 00..23.
There must be no colon (`:`) in front of the hour number, because the colon
behind the hour number is the marker by which it will be identified.





Usage
-----

see [test.usage.mjs](test.usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
