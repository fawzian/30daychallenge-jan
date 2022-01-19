// option 1 

function tournamentWinner(competitions, results) {
    /*
      understand:
      2 arrays, teams (array of arrays), and winners
      1 means home team wins + 3
      0 means away + 3
      return name of the ones with the most points
      
      map:	
      loop through comiptetions
          who is winner? push to new array
      
      loop through newarray
          user counter to see which one is mention most
          return most mentioned team
      
      implement:
      */
              console.log(competitions)
  
      let winners = [];
      for (let i = 0; i < competitions.length; i++){
          let home = competitions[i][0];
          let away = competitions[i][1];
          console.log(results[i])
              if (results[i] === 1){
                  winners.push(home)
              } else {
                  winners.push(away)
              }
      }
      
      console.log(winners)
      
      let counter = {}
  // 	find most frequent element - push each el to object
      for (let i = 0; i < winners.length; i++) {
          counter[winners[i]] = 0 
      }
      console.log(counter)
      
      // another loop +3 for when it occurs
      for (let i = 0; i < winners.length; i++) {
          counter[winners[i]] += 3 
      }
      console.log(counter)
          
      // return highest num
      let result; 
      
  // 	find highest number
      let nums = Object.values(counter)
  
      let num = Math.max(...nums)
      
      
  // 	find key of highest number 
      for (const el in counter) {
          console.log(el, counter[el])
      if (counter[el] === num) result = el
      }
      
      console.log(nums, num, result)
    return result;
  }