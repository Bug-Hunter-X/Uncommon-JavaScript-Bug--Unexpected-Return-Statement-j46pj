function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct condition to return 0 only if both a and b are 0
  }
  return a + b; 
}