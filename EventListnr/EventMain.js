/*
1. add an event listener to an element so that when you click it, another element's style changes.
2. create a list with at least 3 elements
3. apply event delegation to that list of elements
*/

//this is for clicking "Click Here Please."
document.getElementById("clickable").addEventListener("click", changeColor);
    function changeColor() {
    document.getElementById("welcome").style.color = "green";
    }

//event delegation for the list & the button following it.
document.getElementById("list").addEventListener("click",
    function() {
    alert("It Works!");
    });