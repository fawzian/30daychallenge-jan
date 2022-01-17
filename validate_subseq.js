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




//   option 2

function isValidSubsequence(array, sequence) {
  // Write your code here.
	
	let aIndex = 0;
	let sIndex = 0;
	
// 	while the array index is LESS than the array length and
// 	the seq index is less than the seq length
	while (aIndex < array.length && sIndex < sequence.length){
// 		counter of the index for both array and seq will go up if there is a match
		// console.log(array[aIndex], "seq", sequence[sIndex])
		if (array[aIndex] === sequence[sIndex])
			sIndex++;
			aIndex++;
			// console.log(sIndex)
	}
	// 		after the entire loop is searched 
			return sIndex === sequence.length

}


// option 3

function isValidSubsequence(array, sequence) {
    // Write your code here.
      
  // 	set counter for seqIndex
      let seqInd = 0;
  // 	for of loop to traverse numbers in the arrat and compare to seq
      for (const num of array){
  // 		if the seqInd matched the sequence array length - than the for loop
  // 		can end bc it matches!
          if (seqInd === sequence.length) {
              break;
          }
  // 		otherwise if the lengths dont match than if the sequence # matches the 
  // 		number in the array than the index counter should increase
          else if (sequence[seqInd] === num){
              seqInd++
          }
  // 		if neither match the loop will continue but the counter just wont be increased
  // 		but the next NUM will be looped through
      }
      return seqInd === sequence.length
      
  }