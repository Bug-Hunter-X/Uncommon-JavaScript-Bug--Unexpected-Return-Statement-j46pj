# Uncommon JavaScript Bug: Unexpected Return Statement

This repository demonstrates a subtle bug in a JavaScript function where a return statement is unexpectedly always executed, regardless of the values of the input variables. The bug occurs due to an improper conditional statement that always evaluates to true in certain scenarios, leading to an early termination of the function. This might not be immediately obvious to beginners and intermediate JavaScript developers and can lead to unexpected behavior in applications.

## Bug Description:

The `foo` function is designed to add two numbers. However, the `if` condition always evaluates to true if either `a` or `b` is 0 and returns 0 which is not the desired behavior. The intention might have been to handle only cases where both `a` and `b` are 0.

## Solution:

The solution modifies the `if` condition to explicitly check if both `a` and `b` are equal to 0 before returning 0. This ensures that the function behaves as intended, returning the sum of `a` and `b` unless both are 0.