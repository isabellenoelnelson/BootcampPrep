function liftoffCountdown(num) {
    if (num === 0) {
        console.log('liftoff!');
    } else {
        console.log(num);
        liftoffCountdown(num-1);
    }

}

liftoffCountdown(5);