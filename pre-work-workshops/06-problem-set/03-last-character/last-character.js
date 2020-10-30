// YOUR CODE BELOW

function lastCharacter(string1, string2) {
  let string1Length = string1.length - 1;
  let string2Length = string2.length - 1;
    if (string1[string1Length] === string2[string2Length]) {
       return true;
   } else {
       return false;
   }
}
