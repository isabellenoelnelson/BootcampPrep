let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(originalString) {
   let leetDict = [];

   for (let i = 0; i < letters.length; i++) {
       let letter = letters[i];
       let leetChar = leetChars[i];
       leetDict[letter] = leetChar;
   }

   let leetString = '';

   for (let i = 0; i < originalString.length; i++) {
       let letter = originalString[i].toLowerCase();
       let leetChar = leetDict[letter];
       leetString += leetChar;
   }

   return leetString;
}