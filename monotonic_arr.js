function isMonotonic(array) {
    // Write your code here.
      /*
      understand:
      return true/false if the elements are either decreasing/staying the same
      increasing and staying the same ONLY
      
      map:
      increaseCounter
      decreaseCounter
      loop through array
          if increasing and/or staying the same 
          increaseCounter++
          if decreasing and/or staying the same 
          decreaseCounter++
      return increaseCounter === length || decrease counter
      
      */
      
      let increaseCounter = 0;
      let decreaseCounter = 0;
      let equalCounter = 0;
      
      for(let i = 0; i < array.length; i++){
          let prev = array[i - 1]
          let current = array[i]
  
          if (current === prev) {
              equalCounter++
          } else if (current > prev){
              increaseCounter++
          } else if (current < prev){
              decreaseCounter++
          }
      }
      console.log(increaseCounter, equalCounter, decreaseCounter, array.length, array)
      if (array.length === 0){ 
          return true
      } else if (increaseCounter + equalCounter === array.length - 1 || decreaseCounter + equalCounter === array.length - 1){
          return true
      } else {
          return false
      }
  }