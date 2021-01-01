function getLongestName(familyTree) {
    let longestName = '';

    for (let name in familyTree) {
        let value = familyTree[name];

        if (typeof value === 'object') {
            let subs = getLongestName(value);

            if (subs.length > longestName.length) {
                longestName = subs;
            }
        }

        if (name.length > longestName.length) {
            longestName = name;
        }
        
    }

    return longestName;
}







/* function getLongestName(familyTree) {
    let longestName = '';

    for (let key in familyTree) {

        if (key.length > longestName.length) {
            longestName = key;
        }

        let value = familyTree[key];

        if (typeof value === 'object') {
            let subs = getLongestName(value);

            if (subs.length > longestName.length) {
                longestName = subs;
            }
        }
    }

    return longestName;
} */



























































// YOUR CODE BELOW
/* function getLongestName(familyTree){
    let longestName = '';
    
    familyNames = Object.keys(familyTree);

    familyNames.forEach((name) => {
        if (name.length >= longestName.length){
            longestName = name;
        }

        if (familyTree[name]) {
            const longestSubName = getLongestName(familyTree[name]);

            if (longestSubName.length > longestName.length) {
                longestName = longestSubName;
            }
        }
    })

    return longestName;
} */