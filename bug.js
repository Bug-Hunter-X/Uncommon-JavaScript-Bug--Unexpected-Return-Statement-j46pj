function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This return statement will always be executed
  }
  return a + b; 
}