function firstDuplicateValue(array) {
    // Write your code here.
      /*
      understand: recieve an array return first number that appears more than once
      map:
      create object
      loop through array
          if array[i] doesnt exist add to object + 1 as value
          if array[i] exists
              does it equal 2 ?
                  return
  
      implement:
      */
      
      let counter = {};
      
      for (let i = 0; i < array.length; i++){
          if (array.length === 0 || array.length === 1){
              return -1
          } else if (counter.hasOwnProperty(array[i]) !== true ){
              counter[array[i]] = 1;
          } else {
              return array[i]
          }
      }
      return -1
  }