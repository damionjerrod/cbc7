var randomNumber = Math.floor(Math.random() * 3);

function checkIt(){
    var text = document.getElementById("input").value;

        if(text == randomNumber){
            alert("Correct");
        } else {
            alert("Incorrect");
        }
}