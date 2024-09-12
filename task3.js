function chain(num) {
  if (num.length === 0) return 0;

  let longChain = 1;
  let currChain = 1;

  for (let i = 1; i < num.length; i++) {
    if (num[i] === num[i - 1] + 1) {
      // Increment the chain if consecutive
      currChain++;
    } else {
      // Update the longest chain
      longChain = Math.max(longChain, currChain);
      // Reset current chain
      currChain = 1;
    }
  }

  finalLongestChain = Math.max(longChain, currChain);

  return finalLongestChain;
}

console.log(chain([100, 101, 102, 103, 3, 6, 200, 1, 2, 3, 2]));

//output = 4
