var randomNumber = Math.floor(Math.random() * 10);

function checkIt(){
    var text = document.getElementById("input").value;

        if(text == randomNumber){
            alert("Correct");
        } else {
            alert("Incorrect");
        }
}