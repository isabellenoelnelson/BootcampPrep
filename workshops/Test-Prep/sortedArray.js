function hasPair(A, sum){
    let filter = [];
    
    if (sum > 0) {
      filter = A.filter(number => number < sum);
    } else {
      filter = A;
    }
    
    for (let i = 0; i < filter.length; i++) {
      let currentNum = filter[i];
      let subtraction = sum - currentNum;
      
      if (filter.includes(subtraction)) {
        return true;
      }
    }
    
    return false;
  }

  console.log(hasPair([1,3,7],10));
  console.log(hasPair([-5,-2,1],-1));
  console.log(hasPair([1,5,6,9,10,14,16,20,27,30],3));
  console.log(hasPair([1,5,6,9,10,14,16,20,27,30],36));