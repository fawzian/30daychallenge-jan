function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      /*Understand:
      return one number from each array that is in the same order - 
      where the absolute number is closest to 0
      Map:
      loop through arrayOne
          temp1 make absolute
          let compare;
          loop through array 2
              temp2 make absolute
              if (temp1)
              
  
      
      Implemenent:*/
      console.log(arrayOne, arrayTwo)
      
      let difference = arrayOne[0] - arrayTwo[0];
      console.log(difference)
      let result = [];
      
      for (let i = 0; i < arrayOne.length; i++){
          let temp1 = arrayOne[i];
          // console.log(temp1)
          for (let j = 0; j < arrayTwo.length; j++){
              let temp2 = arrayTwo[j]
              // console.log(temp2)
              // console.log(temp1 - temp2)
              let compare = temp1 - temp2
              console.log(`${compare} vs ${difference}`)
              if (Math.abs(compare)  < Math.abs(difference)){
                  difference = compare
                  // console.log(difference)
                  result = [temp1, temp2]
              }
          }
      }
      // console.log(difference)
      return result
  }