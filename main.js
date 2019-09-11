var count = 2;
count += 5;
count *= 2;
count %= 3;
//this should return the value of 2 (which is its remainder)
console.log(count);

count %= 2;
//this should return nothing since it's divided evenly.
console.log(count);

    if(count === 0){
        console.log("It's Even!");
    } else {
        console.log("It's Not Even...")
    }

    var numberStatus = (count !== 0 && count < 3 || count * count > 10 || count < 20) ? "It's Even" : "It's Not Even";
    console.log(numberStatus);

    if(count === 0){
        console.log("good");
    }
    if(count < 1){
        console.log("good");
    }
    if(count > 0){
        console.log("not even");
    }
//using multiple "if" statements requires extra code, while 1 conditional one is less.