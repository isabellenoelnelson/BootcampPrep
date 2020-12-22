// YOUR CODE BELOW
function crazyCaps(str){
    let finalString = "";

    for(var i = 0; i <= str.length-1; i++){
      if(i % 2 !== 0){
      finalString += str[i].toUpperCase();
      } 
      else {
         finalString += str[i];
      }
    }
    return finalString;
  }