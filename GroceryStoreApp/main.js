/*
Grocery Store app
    functions:
        add to inventory
        subtract from inventory
        Notify when out of stock
    data:
        inventory
        inventory count
*/



var inventory = [];

function fillArray(){
    inventory["Water"] = 100,
    inventory["Soda"] = 100,
    inventory["Detergent"] = 50,
    inventory["Apple"] = 100,
    inventory["Banana"] = 100,
    inventory["Tomato"] = 0,
    inventory["Bread"] = 50,
    inventory["Butter"] = 50,
    inventory["Milk"] = 50,
    inventory["Chicken"] = 0;
}

function countEmUp(){
    for(var itemName in inventory){
        var itemCount = inventory[itemName];
        console.log(itemName, itemCount);
    }
}

// I couldn't figure out how to get the loop right.
function countLoop(){
    for(var i = 0; i < inventory.length; i++){
        console.log(inventory[i])
    }
}

//function outOfStock(){
//    if(itemCount == 0){
//        alert(itemName + ":" + " " + "Out Of Stock!");
//    }
//}

fillArray();
countEmUp();
countLoop();
//outOfStock();
