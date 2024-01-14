function fibonacciSeries(limit) {
  if (limit < 0) {
    return "Invalid input: Input must be a positive number";
  }

  let n1 = 0,
    n2 = 1,
    nextTerm;

  let result = "Fibonacci Series: ";

  while (n1 < limit) {
    result += n1 + " ";
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  console.log(result);
}

fibonacciSeries(120);
