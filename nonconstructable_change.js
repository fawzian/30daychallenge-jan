function nonConstructibleChange(coins) {
    /*
      understand:
      return smallest number that cant be created by the numbers in the array
      
      map:
      find sum of every possible sum 
      find missing number
      
      implement:
      loop through array 
      add sums to new array
      find min
      
      */
      let nArr = [];
      console.log(coins)
      for (let i = 0; i < coins.length; i++) {
          for (let j = 1; j < coins.length; j++){
              console.log(coins[i], coins[j])
  // 			if the index of coins[i] is same as coins[j] dont add
              
          }
  // 		loop through nArr find smallest number
          
      }
  
  }