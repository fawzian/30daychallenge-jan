// function that takes nn-empty arr and integer representing target sum. return two nums from arr that equal target sum

// option one
function twoNumberSum(array, targetSum) {
    // Write your code here.
      
      /*
      understand: 
      funtion gets array and target sum. return two numbers in the array that
      equal the target sum
      map: 
      loop through each number in array compared to the remaining numbers
      if they = target sum, return the two numbers
      if no numbers = target sum, return []
      implement;
          loop through the array
          define number
          loop through the remaining array (whatever ind + 1)
          if number + nextNum = target sum
              return [number, nextNum]
      return []
      
      */
      for (let i = 0; i < array.length; i++) {
          let current = array[i];
  // 		loop through rest of array
              for (let j = i + 1; j < array.length; j++){
  // 				if current and new = target sum
                  if (current + array[j] === targetSum){
                      return [current, array[j]]
                  }
              }
      }
      
  return []
      
  }

//   option 2

function twoNumberSum(array, targetSum) {
    // Write your code here.
      
      /*
      understand: 
      funtion gets array and target sum. return two numbers in the array that
      equal the target sum
      map: 
      targetSum = x + y
      y = targetSum - x
      loop through array each number being x and is Y in the array
      
      implement;
      
      for (let i = 0; i < array.length; i++){
          let current = array[i]
          if ( array.includes(targetSum - current) ) {
          return [current, targetSum - current]
          }
      }
      
      */
      
      
      for (let i = 0; i < array.length; i++){
          let current = array[i]
  // 		new array must not include array[i]...
          let arr
          if (array.includes(targetSum - current)) {
              let yNum = targetSum - current
  // 		if array.indexOf(yNum) !== current => continue on
              if (array.indexOf(yNum) !== array.indexOf(current)){
                              return [current, yNum]
              }
          }
      }
      return []
      
      
  }

//   option 3

function twoNumberSum(array, targetSum) {
    // Write your code here.
      
            /*
        understand: 
        funtion gets array and target sum. return two numbers in the array that
        equal the target sum
        map: 
              sort the array (small to big)
              create two points - one left and the other right
              loop through the array
              if the right point + left[i] === target
                  return
              if too big?
                  move right pointer backwards
              if too small?
                  move left pointer up
        
        implement;
              array.sort((a, b) => a - b)
              let right = array.length - 1
              let left = 0 
              
              while (left < right) {
              const potAnswer = array[left] + array[right]
              if potAnswer == target
                  return [array[left], array[right]]
              else if (too big)
              
              else if (too small)
              }
              
        */
      
      array.sort((a, b) => (a - b))
  // 	bc array starts index at 0
  // 	going to be using these as index in while loop
      let right = array.length - 1
      let left = 0
  // 	left is counting up - so it needs to be smaller. worst case they meet in the middle
      while (left < right) {
          const potAnswer = array[left] + array[right]
          if (potAnswer === targetSum){
              return [array[left], array[right]]
          } else if (potAnswer > targetSum){
  // 			move right pointer back via subtraction
              right--
          } else if (potAnswer < targetSum) {
  // 			move left pointer up via addition
              left++
          }
      }
      return[]
  }