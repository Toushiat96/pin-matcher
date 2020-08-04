// Taking input number

function inputNumber(id1,id2){
    const input =document.getElementById(id1);
    input.addEventListener("click",function(){
    let getNumber = document.getElementById(id1).innerText;
    // console.log("get number");
    let screen = document.getElementById(id2).value;
    // console.log("screen clicked");
    let add =  screen + getNumber;
    document.getElementById(id2).value = add;
})

}

inputNumber("nine","screen");
inputNumber("eight","screen");
inputNumber("seven","screen");
inputNumber("six","screen");
inputNumber("five","screen");
inputNumber("four","screen");
inputNumber("three","screen");
inputNumber("two","screen");
inputNumber("one","screen");


// clear screen
const clear = document.getElementById("clear")
clear.addEventListener("click",function(){
    document.getElementById("screen").value="";
    document.getElementById("fail").style.display="none";
    document.getElementById("success").style.display = "none";

})

// Generate Pin number

const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click",function(){
    function randomNumber(min,max){
        return Math.floor(Math.random()*(max - min) + min);
    }

  document.getElementById("generateScreen").value= randomNumber(1000,9999);
  document.getElementById("screen").value="";
  document.getElementById("fail").style.display="none";
  document.getElementById("success").style.display = "none";

})

// Backspace

let backSpace = document.getElementById("backspace");
backSpace.addEventListener("click",function(){
    // console.log("Click backspace");
    let getValue = document.getElementById("screen").value;
    document.getElementById("screen").value = getValue.substring(0,getValue.length-1);

})


// Submit Button /result section
const submit = document.getElementById("submit");
submit.addEventListener("click",function(){
    
    const generateScreen = document.getElementById("generateScreen").value;
    let screen = document.getElementById("screen").value;
    let result = screen.length;

    if(screen == "")
    {
        alert("Input value");
    }
    else if(result <= 3 || result >= 5)
    {
        alert("Input Four Digit Number ");
    }
    else if( generateScreen == screen)
    {
        document.getElementById("success").style.display = "block";
    }
   //    Try left part 
   else{
    let left = parseFloat(document.getElementById("left").innerText);
    let leftvalue = left-1;
    document.getElementById("left").innerText=leftvalue;
    if (document.getElementById("left").innerText==0) {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.backgroundColor ="red";
    }
    document.getElementById("fail").style.display = "block";
}
})