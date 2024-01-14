function printPattern(n) {
  let str = [];
  for (let i = 0; i < n; i++) {
    // prints the spaces before the actual characters
    let spaces = "";
    for (let j = 0; j < (n - i - 1) * 2; j++) {
      spaces += " ";
    }

    let numberIterator = 1; // initialize the number iterator
    let charIterator = "A"; // initialize the alphabet iterator

    for (let j = 0; j < i * 2 + 1; j++) {
      // inner loop to print actual data line by line
      if (j <= (i * 2 + 1) / 2) {
        // check if the current pointer is at the left section from mid or not
        spaces = spaces + numberIterator + " "; // on left section print number
        numberIterator += 2; // increment number by 2
      } else {
        spaces = spaces + charIterator + " "; // on right section print char
        charIterator = String.fromCharCode(charIterator.charCodeAt(0) + 1); // increment char counter by 1
      }
    }
    str.push(spaces); //push the line in the array
  }
  str = [...str, ...str.slice(0, n - 1).reverse()]; // reverse the bottom half array and just push it in the array to save bottom half computation

  console.log(str.join("\n")); // finally join the entire array of string.
}

printPattern(5);
