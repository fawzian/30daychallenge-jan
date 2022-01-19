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

function sortedSquaredArray(array) {
    /*
      understand:
      return new output but the sq of all the original array numbers
      map:
      create new array
      create left pointer = 0
      create right pointer = length - 1
      loop through array
          if (absolute of left > right){
          unshift to new array
          left++
          } else if {right > left}{
          unshift to new array
          right--
          }
          return new array
          }
      
      implement:
      Must initialize arr before with the spots BECAUSE unshift is another o(n)
      must fill backwards 
      */
      
      let result = new Array(array.length).fill(0)
      // console.log(result)
      
      let left = 0;
      let right = array.length - 1;
      
      // Math.abs() === absolute number
  // 	loop decreases from array length
      for (let i = array.length - 1; i >= 0 ; i--){
          if (Math.abs(array[left]) > Math.abs(array[right])){
           result[i] = Math.pow(array[left], 2);
              left++;
          }	else {
              result[i] = Math.pow(array[right], 2);
              right--;
          }
      }
      console.log(result)
    return result;
  }
  