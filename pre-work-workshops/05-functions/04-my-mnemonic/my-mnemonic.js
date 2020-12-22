// YOUR CODE BELOW


function myMnemonic(firstWord, secondWord, thirdWord, fourthWord) {
   
let mnemonic = '';

if (firstWord != undefined) mnemonic += firstWord[0];
if (secondWord != undefined) mnemonic += secondWord[0];
if (thirdWord != undefined) mnemonic += thirdWord[0];
if (fourthWord != undefined) mnemonic += fourthWord[0];
return mnemonic;
   
}

