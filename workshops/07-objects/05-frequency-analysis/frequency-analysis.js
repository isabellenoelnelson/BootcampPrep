// YOUR CODE BELOW
function frequencyAnalysis(string) {
    const frequencyDictionary = {};

    for (let i = 0; i < string.length; i++) {
        const currentCharacter = string[i];

        if(frequencyDictionary[currentCharacter]) {
            frequencyDictionary[currentCharacter] += 1;
        }
        else {
            frequencyDictionary[currentCharacter] = 1;
        }
    }

    return frequencyDictionary;
}