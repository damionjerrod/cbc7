/*
make an array of 10 grocery store items loop through that array and log each item.
loop through a string at least 10 characters long and log each character
make that string upper case
*/

var groceryItems = ["bread", "milk", "cheese", "gatorade", "paper towels", "coffee", "wine", "yogurt", "cookies", "eggs"];
var name = "Damion J Dawson";

function listGroceries(grocArray){
    for (var i = 0; i < grocArray.length; i++){
        console.log(grocArray[i]);
    }
}

listGroceries(groceryItems);
listGroceries(name);

name = name.toUpperCase();
listGroceries(name);