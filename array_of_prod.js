function arrayOfProducts(array) {
    // Write your code here.
      /* understand:
      recieves array and returns array that is equal to every other number in
      array not including current
      
      map: 
      loop through array
          loop through subarray not including current
              add together
              push to result
      */
      let result = new Array();
      for (let i = 0; i < array.length; i++){
          let current = array[i];
          // console.log(current)
          
          let temp = array.filter((x, index) => index != i)
          console.log(temp)
          let num = 1;
          for (let j = 0; j < temp.length; j++){
          num *= temp[j];
          }
          console.log(num)
          result.push(num)
      }
      console.log(result)
      return result
  }