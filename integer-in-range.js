/**
 * Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

Examples

// lower bound: 1
// upper bound 9:
// integer: 3
intWithinBounds(3, 1, 9) ➞ true

// lower bound: 1
// upper bound 6:
// integer: 6
intWithinBounds(6, 1, 6) ➞ false

// lower bound: 3
// upper bound 8
// integer: 4.5
intWithinBounds(4.5, 3, 8) ➞ false

The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
Bounds will be always given as integers.
-------------

Rules
    - Lower bound: number is equal to or greater than for lower bound
    - Upper bound number is LESS THAN --- we DON'T count equal to --- upper bound
    - IF number NOT an integer, return false
 **/

/***
 * 1. Check if number is integer or not
 *  - Return false if not integer
 * 2. Check if number is LESS than upper bound.
 *  - Return false if NOT less than upper bound
 *  - Otherwise return true
 * 3. Check if number is greater than OR equal to lower bound
 *  - return false if less than lower bound
 * 4. Clean up code
 *
*/

function intWithinBounds(number, lowerBound, upperBound) {
    if (!Number.isInteger(number)) {
        return false;
    }

    if (num >= lowerBound) {
        if(num < upperBound) {
            return true;
        }
    }

    return false;

}

let num = 6;
let lowerBound = 1;
let upperBound = 5;
console.log(intWithinBounds(num, lowerBound, upperBound));
