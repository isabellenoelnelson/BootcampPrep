function allSystemsGo(object) {

    for (let key in object) {
        let value = object[key]
        
        if (typeof value === 'object') {
            let subs = allSystemsGo(value);

            if (!subs) {
                return false;
            }
        }
        
        if (!value) {
            return false;
        }
    }

    return true;
}




















































/* function allSystemsGo(object) {
    for (let key in object) {
        let value = object[key];

        if (typeof value === 'object') {
            let subs = allSystemsGo(value);

            if (!subs) {
                return false;
            }
        }

        if (!value) {
            return false;
        }
    }

    return true;
} */































































// YOUR CODE BELOW
/* function allSystemsGo(anObj) {
    // keys dont matter
    const currentSystemValues = Object.values(anObj);

    return currentSystemValues.every((boolOrSystem) => {
        if (typeof boolOrSystem === 'object') {
            return allSystemsGo(boolOrSystem);
         } else {
             return boolOrSystem;
         }
    })
} */