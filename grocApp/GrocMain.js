//See if you can turn any functions into methods of objects.
//Four items should show in an alert as "Out Of Stock".

var inventory = {
    Water : 100,
    Soda : 100,
    Detergent : 50,
    Apple : 100,
    Banana : 100,
    Tomato : 100,
    Bread : 50,
    Butter : 50,
    Milk : 50,
    Chicken : 100
}

function reduceInventory(){
    for (var key in inventory){
        var remaining = ((inventory[key]) - 50);
        if(remaining === 0){
        alert (key + ":" + " " + "Out Of Stock");
        }
    }
}

reduceInventory();