function countSmall(num) {
    // Initialize the result array with zeros
    const countNumber = new Array(num.length).fill(0);
  
    // Traverse each element in the array
    for (let i = 0; i < num.length; i++) {
      let initialCount = 0;
      // Compare with elements to the right parts
      for (let j = i + 1; j < num.length; j++) {
        if (num[j] < num[i]) {
          initialCount++;
        }
      }
      countNumber[i] = initialCount;
    }
  
    return countNumber;
  }
  
  const numbers = [5, 3, 8, 10, 12, 2, 6, 10, 8];
  console.log(countSmall(numbers));
  
  //output: [ 2, 1, 2, 3, 4, 0, 0, 1, 0]
  