// option 1

function sortedSquaredArray(array) {
    // Write your code here.
  /*
  understand: 
  recieve array of numbers smallest to biggest and return array with same lengt
  but the sq of all the original numbers
  
  map:
  map new array
      square each number
  sort the array
  implement:
  .map(x => Math.pow(x, 2))
  
  */ 	
  // store new numbers in same spot as old by using arr variable	
  array =	array.map(x => Math.pow(x, 2))
  
  // return sorted the array 
      return array.sort((a,b) => a - b)
  }

//   option 2
