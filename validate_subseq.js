// option 1

function isValidSubsequence(array, sequence) {
    // Write your code here.
      
  /*
  understand: 
  return true if the sequenceArr can be found in the array in the same order
  map:
  loop through array
      if arr[i] is in seq push to new array
  if newArr === seq ? true : false
  implemenent:
  let nArr
  for (let i = 0; i < array.length; i++){
      if seq.includes(arr[i]) {
      nArr.push(arr[i])
      }
      if (seq === nArr) {return true}
  
  }
  */ 	
      let nArr = [];
      for (let i = 0; i < array.length; i++) {
          if (sequence.includes(array[i])) {
              nArr.push(array[i])
          }
      }
  
      // console.log(nArr.toString(),"seq:",sequence.toString())
  // 	what if entire arr is 1 number? shorten nArr and wrap final if/else
      if (nArr.length > sequence.length) {
  // 		minus 1 bc it slices at index
          nArr = nArr.slice(sequence.length - 1)
      }
          console.log(nArr.toString(),"seq:",sequence.toString())
  
      
          if (nArr.toString("") === sequence.toString("")) {
              return true
              console.log("true")
      } else {
          return false
          console.log("false")
  
      }
  }