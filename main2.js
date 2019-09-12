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


//Created loope from 0 to 100 but couldn't figure out the rest.
var count = 0;
function loopThree(){
    while(count <= 100){
        console.log(count);
        count++;
    }
}

loopThree();

