//created a counter variable, added 1 and logged it 50x with a for loop.
var count = 5;
count += 1;

function loopOne(){
    for(var num = 1; num <= 50; num++){
        console.log(count);
    }
}

loopOne();    


//Here's my while loop logging every other number up until 50.
var count = 0;

function loopTwo(){
    while(count <= 50){
        console.log(count);
        count += 2;
    }
}

loopTwo();


//Had to redo this one. Finally got it right!!!
var fizz = "fizz"; //3
var buzz = "buzz"; //5
var fizzbuzz = "fizzbuzz"; //both
var count = 0;

function loopThree(){
    for(var i=0; i<100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(count + "fizzbuzz");
        } else if (i % 3 === 0) {
            console.log(count + "fizz");
        } else if (i % 5 === 0) {
            console.log(count + "buzz");
        }
        count++;
    }
}

loopThree();