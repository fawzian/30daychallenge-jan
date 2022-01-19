function moveElementToEnd(array, toMove) {
    // Write your code here.
      
      /*understand: toMove number to end of arr
      Map:
      filter 2 into new array
      concat
  
      */
      
      let nArr = array.filter(x => x !== toMove)
      let sArr = array.filter(x => x === toMove)
      console.log(nArr, sArr)
      return [...nArr, ...sArr]
  }
  