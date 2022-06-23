let outputScreen = document.querySelector(".calculator input")
console.log(outputScreen);

function display(num) {
    (outputScreen).value += num;
}

function clr(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = (outputScreen.value).slice(0,-1);
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Enter valid input");
        clr();
    }
}